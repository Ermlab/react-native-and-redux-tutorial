import { compose, applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept(() => {
      // eslint-disable-next-line
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

// const store = configureStore();
// export default store;
