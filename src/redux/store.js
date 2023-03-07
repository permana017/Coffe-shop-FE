import {createStore, compose, applyMiddleware} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import logger from "redux-logger"
import thunk from "redux-thunk"
import {persistStore} from "redux-persist"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_ || compose
const midderware = [thunk]

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...midderware))

)


if (process.env.NODE_ENV === "development"){
    midderware.push(logger)
}
export const persistor = persistStore(store)

export default {store, persistStore}

