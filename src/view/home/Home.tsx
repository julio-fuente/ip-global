import React, { useState, Component } from "react"
import {Button} from 'react-bootstrap'
import {getPelis} from '../../service/api'
interface Props{
    name?:String;
}
class Home extends Component <Props>{
    public static defaultProps = {
        name: "World"
      };
     componentDidMount = () => {
       // getPelis()
     } 

    render() {
        return  <div></div>;
      }
}
export default Home;
