/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';
import './header.css'
// import axios from 'axios'
export default class Header extends Component{
    constructor(props) {
        super(props); 
    }
    handleClick(){
        window.history.back()
    }
    renderbackIcon(){
        if(this.props.back === 'true'){
          return <span className='backIcon' onClick={this.handleClick}></span>
        }else{
           return <span></span>
        }
    }
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <div className='myHeader'>
                    {this.renderbackIcon()}
                    <span>{this.props.headerName}</span>
                </div>
                <div className='headerBai'></div>
            </div>
        )
    }
    
    
}