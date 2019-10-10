/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';
import Header from '../comments/header'
// import Center form '../center/center';
import headImg from '../../assets/denglu.png'
import money from '../../assets/money.png'
import jinbi from '../../assets/jinbi.png'
import hongbao from '../../assets/hongbao.png'
import foward from '../../assets/foward.png'
import address from '../../assets/address.png'
import gift from '../../assets/gift.png'
import store from '../../assets/store.png'
import service from '../../assets/service.png'
import ele from '../../assets/home.png'
import './main.css'
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {   
            moneyList: [
                {name:'钱包',icon:money},
                {name:'红包',icon:hongbao},
                {name:'金币',icon:jinbi}
            ],
            blist:[
                {name:'金币商城',icon:store},
                {name:'分享拿10元红包',icon:gift}
            ],
            clist:[
                {name:'我的客服',icon:service},
                {name:'下载饿了么APP',icon:ele}
            ]    
        };
    }
    render(){
        let moneyList = this.state.moneyList
        let blist = this.state.blist
        let clist = this.state.clist
        return (
            <div>
                <Header headerName='我的' back='true'></Header>
                <img alt='' className="main_headImg" style={{width:'100%'}}src={headImg}/>
                <div className='myMoney'>
                    {
                        moneyList.map((item,index)=>
                            <li key={index}>
                                <img alt='' src={item.icon}/>
                                <p>{item.name}</p>
                            </li>
                        )
                    }
                </div>
                <div className='address'>
                    <span>
                        <img alt='' src={address}/>
                    </span>
                    <div>我的地址</div>
                    <span>
                        <img alt='' src={foward}/>
                    </span>
                </div>
                {
                    blist.map((item,index)=>
                        <div className='address' key={index}>
                            <span>
                                <img alt='' src={item.icon}/>
                            </span>
                            <div>{item.name}</div>
                            <span>
                                <img alt='' src={foward}/>
                            </span>
                        </div>
                    )
                }
                {
                    clist.map((item,index)=>
                        <div className='address' key={index}>
                            <span>
                                <img src={item.icon} alt=''/>
                            </span>
                            <div>{item.name}</div>
                            <span>
                                <img alt='' src={foward}/>
                            </span>
                        </div>
                    )
                }
            </div>
        )
    }
}