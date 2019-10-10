/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';
import {cityList} from "../../api/api"
import './about.css'
import Header from '../comments/header'
export default class About extends Component{
    constructor(props){
        super(props);   
        this.state = {   
            cityList: []   
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
    componentDidMount() {
        cityList().then(res=>{
            console.log(res)
             this.sortgroupcity(res)
            this.setState({ 
                cityList:this.sortgroupcity(res)
             });
            
            console.log(this.state.cityList)
        })  
    }
    handleClick(item,e){
        console.log(item.name)
        console.log(e.target)
    }
    render(){
        let obj = this.state.cityList
        return (
            <div>
                <Header headerName='发现' back="true"></Header>
                {   
                    Object.keys(obj).map((item,index)=>
                        <li key={index}>
                            <p className='cityMenu'>{item}</p>
                            {
                                obj[item].map((items,indexs)=>
                                    <span className='cityItem' key={indexs} onClick={this.handleClick.bind(this,items)}>{items.name}</span>
                                )
                            }
                        </li>
                    )
                }
                
            </div>
        )
    }
}