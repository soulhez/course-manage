import React, {Component} from "react";
import Nav from "../containers/nav-container"

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userID: 0,
            password: ""
        };
    }

    componentWillMount() {
        this.props.getAllUsers();
    }

    removeUser(user_id) {
        this.props.onRemove({id: user_id});
    }

    componentDidUpdate() {
        this.props.getAllUsers();
    }

    modifyUser(id, password) {
        this.state.userID = id;
        this.state.password = password;
        $("#origin_password").val(password)
    }

    modify() {
        let new_password = this.refs.modify_re_password.value;
        this.props.onModifyUser({user_id: this.state.userID, password: new_password});
    }


    render() {
        return <div>
            <Nav/>
            <div>
                <div className="col-md-8 col-md-offset-2">
                    <table className="table table-bordered">
                        <thead>
                        <tr className="active">
                            <th className="col-md-1 text_type">ID</th>
                            <th className="col-md-1 text_type">姓名</th>
                            <th className="col-md-1 text_type">密码</th>
                            <th className="col-md-1 text_type">身份</th>
                            <th className="col-md-1 text_type" colSpan="2">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.allUsers.map((element, index)=> {
                            return <tr key={index} className="text_type">
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>
                                    {element.password}
                                </td>
                                <td>{element.identity}</td>
                                <td>
                                    <span className="glyphicon glyphicon-remove remove_color"
                                          onClick={this.removeUser.bind(this, element.id, element.password)}></span>
                                </td>
                                <td>
                                    <span className="glyphicon glyphicon-pencil modify_color" data-toggle="modal"
                                          data-target="#modifyModal"
                                          onClick={this.modifyUser.bind(this, element.id, element.password)}></span>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="modal fade" tabindex="-1" id="modifyModal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">修改用户密码</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal col-md-offset-1">
                                    <div className="form-group">
                                        <label className="col-md-3 control-label">原始密码</label>
                                        <div className="col-md-7">
                                            <input type="text" className="form-control" id="origin_password"
                                                   ref="modify_password"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 control-label">修改密码</label>
                                        <div className="col-md-7">
                                            <input type="text" className="form-control" id="modify_password"
                                                   ref="modify_re_password"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal"
                                        onClick={this.modify.bind(this)}>修改
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default UserManage;