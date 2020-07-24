import React, {Component} from 'react'
import {List, Avatar} from 'antd'
// import data from './data.js';
import {Link} from 'react-router-dom';
import TxtTag from '../txtTag';
//异步处理数据 数据派送
import {connect} from "react-redux";
import axios from 'axios';
import './../index.css'

class IndexList extends Component {
    //构造器
    constructor(arg) {
        super(arg);
        // console.log(arg);//此时dispatch以挂载到对象上了
        //初始状态
        this.state = {
            page: 1//保存当前页数
        };
        //第一次调用
        this.getData(this.props.tab,this.state.page);

    }

    //生命周期 第二阶段 组件即将接收数据
    //点击左边的列表显示对应的内容 每点击一次就执行一次 点击其他标签的时候分页符都是显示第一页
    componentWillReceiveProps(nextProps, nextContext) {
        // console.log(nextProps);
        //tab值相等时不执行
        if (this.props.tab !== nextProps.tab) {
            //初始状态为1
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.page = 1;
            //第二次调用
            this.getData(nextProps.tab,1)
        }
    }
    //是否改变状态 nextProps下一个值 nextState下一个状态
    //点击标签页显示对应的内容
    shouldComponentUpdate = (nextProps, nextState, nextContext) => {
        if(this.state.page !== nextState.page){
            this.getData(nextProps.tab,nextState.page)
        }
        // console.log(nextProps);
        if(this.props.tab !== nextProps.tab){
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.page = 1;
            this.getData(nextProps.tab,1)
        }
        return true;//必须有返回的状态
    };

    //改变状态
    getData(tab,page) {
        //异步传值
        this.props.dispatch((dispatch) => {
            //请求数据 limit=10每次请求10条数据
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
                .then((res) => {
                    // console.log(res);
                    //开始派送值
                    dispatch({
                        type: "LIST_UPDATA_SUCC",
                        data: res.data
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        })
    }

    render() {
        //根据数据里的数据结构找到对应的数据
        // console.log(data);
        // console.log(this.props);//dispatch 数据派送 接收父组件传过来的tab值
        //接收并解构从reducers->list.jsx传过来的值
        let {loading, data} = this.props;
        //分页
        let pagination = {
            current:this.state.page,//当前页数
            pageSize:10,//每页条数
            total:400,//数据总数
            onChange:((current)=>{//页码改变的回调，参数是改变后的页码及每页条数
                // console.log(current);//打印当前的页数
                this.setState({//点击的时候重新设置状态
                    page:current//改变构造器中的初始状态
                })
            })
        };

        return (
            <div>
                {/* 这是右边的内容 */}
                <List
                    pagination={pagination}//分页
                    loading={loading}//加载显示
                    dataSource={data}//数据源
                    //   //这里是写死的
                    // loading={false}//加载显示
                    // //dataSource必须配合renderItem使用 否则会报错
                    // //renderItem不需配合renderItem使用
                    // dataSource={data.data}//数据源
                    renderItem={//渲染数据
                        item => (
                            // 右边的回复访问
                            <List.Item
                                actions={[
                                    "回复" + item.reply_count,
                                    "访问" + item.visit_count
                                ]}
                            >
                                <List.Item.Meta
                                    className={"pic"}
                                    // 列表元素的图标
                                    avatar={<Avatar src={item.author.avatar_url}/>}
                                    //列表元素的标题
                                    title={
                                        <div>
                                            {/* console.log(item) */}
                                            {/* 自定义组件 用于处理[全部 精华 问答 分享 招聘 测试]的组件  */}
                                            <TxtTag
                                                // data这是自定义属性 data.js里面的数据 然后向子组件txtTag.jsx传值
                                                data={/*console.log(item)*/item}
                                            />
                                            {/* 根据id点击跳转到对应的列表组件 */}
                                            <Link to={"/details/" + item.id}>{item.title}</Link>
                                        </div>
                                    }
                                    //列表元素的描述内容
                                    description={
                                        <p>
                                            {/* 根据loginname点击跳转到对应的用户组件 */}
                                            <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                                            发表于:{item.create_at.split("T")[0]}
                                        </p>
                                    }
                                />
                            </List.Item>
                        )
                    }/>
            </div>
        )
    }
}

//关联reducers中的index details user list 里面的state
//state 形参  => state.list 返回值（return）
//state => state.list 相当于(state) => {state.list}
export default connect(state => state.list)(IndexList);