import React, {Component} from 'react'
import {List, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import './../index.css';

export default class ReplyList extends Component {
    render() {
        //接收父级传过来的值
        // console.log(this.props)
        //接收并解构父级传过来的值
        let {replies, replyCount} = this.props;
        // console.log(replies, replyCount);

        return (
            <>
                <List
                    dataSource={replies}//数据源
                    renderItem={//遍历数据并渲染
                        item => (<List.Item
                            // extra={console.log(item)} 根据用三目判断后台数据的ups的数组的长度返回多少人点赞数
                            extra={item.ups.length > 0 ? <span>有{item.ups.length}个人觉得很赞</span> : ''}
                        >
                            <List.Item.Meta
                                className={'listItem'}
                                avatar={<Avatar src={item.author.avatar_url}/>}//用户头像
                                description={<>
                                    <Link to={'/user/' + item.author.loginname}>{item.author.loginname}</Link>{/*用户名*/}
                                    发表于:{item.create_at.split("T")[0]}{/*发表日期*/}
                                    <div dangerouslySetInnerHTML={{'__html': item.content}}/>
                                </>}
                            >
                            </List.Item.Meta>
                        </List.Item>)
                    }
                >

                </List>
            </>
        )
    }
}
