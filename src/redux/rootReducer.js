import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./Auth/authReducer"


const persistConfig = {
    key: "root",
    storage,
    whitelist:["storage"]
}


const rootReducer = combineReducers({
    auth: authReducer,
})

export default persistReducer(persistConfig, rootReducer)