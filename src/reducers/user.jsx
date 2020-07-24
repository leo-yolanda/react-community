//事件处理 定义处理事件的方法

//state 初始状态 action
function user(state = {
    data: [],
    loading: true
}, action) {
    //判断action的类型
    if (action.type === "USER_UPDATA_SUCC") {
        return {
            //更新值
            data: action.data.data
        }
    } else {
        return state;
    }
}
export default user;