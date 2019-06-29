

import { combineReducers} from "redux";
import {headerReducer} from "../common/header/headerStore/index";
import {homeReducer} from "../pages/home/store";
import {detailReducer} from "../pages/detail/store";
import {logInReducer} from "../pages/login/store";

const reducer = combineReducers({
     header: headerReducer,
     home: homeReducer,
     detail: detailReducer,
     logIn: logInReducer
})

export default reducer;