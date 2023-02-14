import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from './AuthRedux/auth.reducer';
import { productReducer } from './ProductReducx/product.reducer';

const rootReducer=combineReducers({
    authReducer,
    productReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))