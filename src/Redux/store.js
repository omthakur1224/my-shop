import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from './AuthRedux/auth.reducer';

const rootReducer=combineReducers({
    AuthReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))