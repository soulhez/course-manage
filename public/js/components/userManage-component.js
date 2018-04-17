import React, {Component} from "react";
import Nav from "../containers/nav-container"

class UserManage extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    componentDidUpdate(){
        console.log(this.props.allUsers);
    }

    remove(){
        this.props.onRemove();
    }

    render() {
        return <div>
            <Nav/>
            <div>
                <div className="col-md-8 col-md-offset-2">
                    <table className="table table-bordered">
                        <thead>
                        <tr className="active">
                            <th className="col-md-1">ID</th>
                            <th className="col-md-1">姓名</th>
                            <th className="col-md-1">密码</th>
                            <th className="col-md-1">身份</th>
                            <th className="col-md-1">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.allUsers.map((element,index)=>{
                            return <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>
                                    <input type="text" disabled="disabled" value={element.password} className="remove_border"/>
                                    <span className="glyphicon glyphicon-pencil pencil_color"></span>
                                    </td>
                                <td>{element.identity}</td>
                                <td>
                                    <span className="glyphicon glyphicon-remove remove_color" onClick={this.remove.bind(this)}></span>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default UserManage;