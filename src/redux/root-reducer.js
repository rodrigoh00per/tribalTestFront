import { combineReducers } from "redux";
import BusinessReducer from "./Business/Business.reducer";


export default combineReducers({
    business: BusinessReducer
});
