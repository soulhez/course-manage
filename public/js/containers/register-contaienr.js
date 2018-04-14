import Register from "../components/register-component";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
  return {
     isInsert:state.register.isInsert
  }
};

const mapDispatchToProps=(dispatch)=>{
  return {
      onRegister:(data)=>{
          dispatch({type:"REGISTER",data});
      }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);