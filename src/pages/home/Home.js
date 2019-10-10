/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';
import './home.css'
// import axios from 'axios'
import {bannerList,storeList} from "../../api/api"
export default class Home extends Component{
    constructor(props) {
        super(props);   
        this.state = { 
            address:'北京市望京sohoT11701', 
            inputMsg:'456', 
            posts: [],
            homestoreList:[]   
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(1111)
    }
    getImgPath(path) {
        let suffix;
        if (!path) {
            return '//elm.cangdu.org/img/default.jpg'
        }
        if (path.indexOf('jpeg') !== -1) {
            suffix = '.jpeg'
        } else {
            suffix = '.png'
        }
        let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
        return 'https://fuss10.elemecdn.com' + url
    }
    componentDidMount() {
        bannerList().then(res=>{
            console.log(res)
            res.splice(res.length-1,1)
            const posts = res
            this.setState({ posts });
        })
        storeList().then(res=>{
            console.log(res)
            let homestoreList = res
            this.setState({ homestoreList });
        })
        // window.addEventListener('scroll',()=>{
        //     var header = this.refs.header;
        //     var scrollTop = document.
        // })
    }
    render(){
        let inputmsg = this.state.inputMsg
        let bannerList = this.state.posts
        let storeListb = this.state.homestoreList
        return (
            <div>
                <div className='home_header'>
                    <p>{this.state.address}</p>
                </div>
                <div className="home_serch">
                    <input placeholder='搜索饿了么商家、商品名称' value={inputmsg}/>
                </div>
                <div className='home_banner'>
                    {
                        bannerList.map((item,index)=>
                            <li key={index}>
                                <img alt='' src={this.getImgPath(item.image_hash)}/>
                                <p>{item.name}</p>
                            </li>
                        )
                    }
                </div>
                <div className='home_storeList'>
                    {
                        storeListb.map((item,index)=>
                            <li key={index}>
                                <img alt='' src={this.getImgPath(item.restaurant.image_path)}/>
                                <span>{item.restaurant.name}</span>
                                <span>{item.restaurant.address}</span>
                            </li>
                        )
                    }
                </div>
            </div>
        )
    }
    
    
}