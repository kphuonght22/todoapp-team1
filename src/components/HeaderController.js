import { size } from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HeaderController extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'lightgray',display:"flex", textAlign: "center", justifyContent: "space-around" }}>
                    <Link style={{fontWeight:"bold",fontSize: 20,padding:"10px",color:'black'}} to="/">Công Nghệ Phần Mềm</Link>
                    <div style={{display:"flex",textAlign:"center",justifyContent: "space-around"}}>
                        <Link style={{fontWeight:"bold",fontSize: 16,padding:"10px",color:'black'}} to="/">Todo-App</Link>
                        <Link style={{fontWeight:"bold",fontSize: 16,padding:"10px",color:'black'}} to="/team">Team</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderController;