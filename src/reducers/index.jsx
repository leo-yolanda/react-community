//用于保存details组件中的左边的list组件 右边的文章列表details 用户界面user 中的state action

//将所有需要处理的值结合起来
import { combineReducers } from "redux";
import list from "./list";
import details from "./details";
import user from "./user";

let Reducers = combineReducers({
    list,
    details,
    user
});

export default Reducers;