import React, {Component} from "react";
import {Link} from "react-router-dom";
import imgTeam from '../../Team1.jpg';

class TeamScreen extends Component{
    render(){
        return(
            <div className="container">
                <img style={{marginTop: "20px"}} src={imgTeam} alt="Thành Viên Nhóm"/>
            </div>
        );
    }
}
export default TeamScreen;