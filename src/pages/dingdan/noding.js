/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';
import back from '../../assets/dingback.png'
import './noding.css'
export default class Noding extends Component{
    constructor(props){
        super(props);   
    }
    componentDidMount() {
        
    }
    render(){
        return (
            <div className='ding_back'>
                <img alt='' src={back}/>
            </div>
        )
    }
}