import { compose, legacy_createStore as createStore, applyMiddleware, Middleware } from 'redux'
import { loggerMiddleware } from './middleware/logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

export type RootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)


const middleWares = [process.env.NODE_ENV !== 'production' && loggerMiddleware, sagaMiddleware].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose 

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer,undefined,composedEnhancers)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)