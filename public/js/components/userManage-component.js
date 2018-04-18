import React, {Component} from "react";
import Nav from "../containers/nav-container"

class UserManage extends Component {
    componentWillMount() {
        this.props.getAllUsers();
    }

    removeUser(user_id){
        this.props.onRemove({id:user_id});
    }

    modifyUser(id,password){
       /* $(this).attr("type","text");*/

        let style=`glyphicon glyphicon-pencil modify_color`;
        console.log($(`input[id=${id}]`).val());
        $(`input[id=${id}]`).removeAttr("disabled");
        $(`input[id=${id}]`).addClass("border_style");
        $('tr span:nth-child(2)').attr("class","hidden_flag");
        $('tr span:nth-child(3)').attr("class","glyphicon glyphicon-remove remove_color");
        $('tr span:nth-child(4)').attr("class","glyphicon glyphicon-ok right_color");
        $('tr span:nth-child(3)').on("click",()=>{
            //取消修改
            console.log('cancel');
            $(`input[id=${id}]`).attr("class","remove_border");
            $(`input[id=${id}]`).attr("disabled","disabled");
            $(`input[id=${id}]`).attr("value",`${password}`);
        });
        $('tr span:nth-child(4)').on("click",()=>{
             //提交修改
            let new_password= $(`input[id=${id}]`).val();
            console.log(new_password);
           // this.props.onModifyUser({password});
        });

       // $(this).hasClass(`${style}`).siblings(`.${style}`).removeClass(`${style}`);
        // $(this).siblings(`.${style}`).removeClass(`${style}`);

    }

    componentDidUpdate(){
        this.props.getAllUsers();
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
                            <th className="col-md-1 text_type">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.allUsers.map((element,index)=>{
                            return <tr key={index} className="text_type">
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>
                                    <input value={element.password} className="remove_border" id={element.id} disabled="disabled"/>
                                    <span className="glyphicon glyphicon-pencil modify_color" onClick={this.modifyUser.bind(this,element.id)} id={element.id}></span>
                                    <span></span>
                                    <span></span>
                                    </td>
                                <td>{element.identity}</td>
                                <td>
                                    <span className="glyphicon glyphicon-remove remove_color" onClick={this.removeUser.bind(this,element.id,element.password)}></span>
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