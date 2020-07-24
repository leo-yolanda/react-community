import React, {Component} from 'react';
// import data from './data.js';
import {Avatar, Row, Col, List} from 'antd';
import './../index.css';
import {Link} from "react-router-dom";
//异步处理数据 数据派送
import {connect} from "react-redux";
import axios from 'axios';


class User extends Component {
    constructor(arg) {
        super(arg);
        console.log(arg);
        this.getData();
    }

    getData() {
        this.props.dispatch((dispatch) => {
            axios.get(`https://cnodejs.org/api/v1/user/alsotang`)
                .then(res => {
                    console.log(res);
                    dispatch({
                        type: 'USER_UPDATA_SUCC',
                        data: res.data
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        })
    }

    render() {
        console.log(this.props.data);
        let {
            avatar_url,
            loginname,
            score,
            create_at,
            recent_replies,
            recent_topics
        } = this.props.data;
        return (
            <div className={'wrap'}>
                {/* <h1>这是用户组件</h1> */}
                <Avatar src={avatar_url} size={100}
                        style={{marginLeft: "45%", marginTop: "40px", marginBottom: '20px'}}/>
                <Row className={'userInfo'} style={{textAlign: 'center'}}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Col md={8} xs={24}>{<span>用户名:<a href={"/user/"}>{loginname}</a></span>}</Col>
                    <Col md={8} xs={24}>{<span>积分:<a href={"/user/"}>{score}</a></span>}</Col>
                    <Col md={8} xs={24}>{<span>注册时间:<a href={"/user/"}>{create_at}</a></span>}</Col>
                </Row>
                <List
                    className={'list-header'}
                    header={'最近创建的话题'}
                    loading={false}
                    bordered
                    dataSource={recent_topics}
                    renderItem={
                        item => (
                            <List.Item
                                actions={['最后回复:' + item.last_reply_at.split("T")[0]]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.author.avatar_url}/>}
                                    title={<Link to={'/user/' + item.id}>{item.title}</Link>}
                                    description={<Link to={'/user/' + item.id}>{item.author.loginname}</Link>}
                                />
                            </List.Item>
                        )
                    }
                >

                </List>
                <List
                    className={'list-header'}
                    header={'最近回复的话题'}
                    loading={false}
                    bordered
                    dataSource={recent_replies}
                    renderItem={
                        item => (
                            <List.Item
                                actions={['最后回复:' + item.last_reply_at.split("T")[0]]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.author.avatar_url}/>}
                                    title={<Link to={'/user/' + item.id}>{item.title}</Link>}
                                    description={<Link to={'/user/' + item.id}>{item.author.loginname}</Link>}
                                />
                            </List.Item>
                        )
                    }
                >

                </List>
            </div>
        )
    }
}

export default connect(state => state.user)(User);
