//事件处理 定义处理事件的方法

//state 初始状态 action 传向view->index->indexlist.jsx文件中的connect
function list(state = {
    //初始数据为空 向view->index->indexlist.jsx传值
    data: [],
    loading: true
}, action) {
    //接收派送过来的值并进行判断
    // console.log(action);
    //判断action的类型
    if (action.type === "LIST_UPDATA_SUCC") {
        return {
            //更新值
            data: action.data.data
        }
    } else {
        return state;
    }
}
export default list;