import { createStore, compose, applyMiddleware } from "redux";
import { loadState, saveState } from "../utils/localStorage/localStorage";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";
const composeEnhancers =
  window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedData = loadState();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  persistedData,
  composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(() => {
  const { business } = store.getState();

  saveState({ business })
  
});

sagaMiddleware.run(rootSaga);

export default { store };
