import React, {Component} from "react";
import Nav from "../containers/nav-container"

class UserManage extends Component{
    componentDidMount() {
        this.props.getAllUsers();
    }

    render(){
        return <div>
                <Nav/>
            <div className="display_type table_position">

            </div>
        </div>
    }
}

export default UserManage;