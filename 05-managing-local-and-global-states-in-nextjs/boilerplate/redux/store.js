import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

const initialState = {};

// 리듀서
const reducer = (state = initialState, action) => {
  const itemID = action.id;

  switch (action.type) {
    case "INCREMENT":
      const newItemAmount = itemID in state ? state[itemID] + 1 : 1;
      return {
        ...state,
        [itemID]: newItemAmount,
      };
    case "DECREMENT":
      if (state?.[itemID] > 0) {
        return {
          ...state,
          [itemID]: state[itemID] - 1,
        };
      }
      return state;
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

// 실제 스토어를 초기화할 때 호출할 함수
export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }
  // Redux를 서버 측에서 초기화하는 경우 _store를 반환합니다.
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

// 메모이제이션 시스템을 활용하기 위한 훅
export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
