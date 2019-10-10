/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';
import Header from '../comments/header'
import Noding from './noding'
import './dingdan.css'
export default class About extends Component{
    constructor(props){
        super(props);   
        this.state = {   
            dingdanList: [],
            isLogin:false   
        };
    }
    sortgroupcity(obj){
        let sortobj = {};
        for (let i = 65; i <= 90; i++) {
            if (obj[String.fromCharCode(i)]) {
                sortobj[String.fromCharCode(i)] = obj[String.fromCharCode(i)];
            }
        }
        return sortobj
    }
    buttonfun(){
        if(this.state.isLogin){
            return <button>暂无订单</button>
        }else{
            return <div>
                    <p>登陆后查看外卖订单</p>
                    <button>立即登录</button>
                </div>
        }
        
    }
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <Header headerName='订单' back="true"></Header>
                <Noding></Noding>
                <div className='noding_button'>
                    {this.buttonfun()}
                </div>
            </div>
        )
    }
}