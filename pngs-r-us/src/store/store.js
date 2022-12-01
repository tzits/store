import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux'
import { loggerMiddleware } from './middleware/logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const middleWares = [process.env.NODE_ENV !== 'production' && loggerMiddleware].filter(Boolean);

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose 

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer,undefined,composedEnhancers)

export const persistor = persistStore(store)