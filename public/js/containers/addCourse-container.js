import {connect} from "react-redux";
import AddCourse from "../components/addCourse-component";

const mapStateToProps = (state)=>{
  return{
      filePath:state.fileUpload.filePath
  }
};

const mapDispatchToProps = (dispatch) =>{
    return {
      fileUpload:(file)=>{
          dispatch({type:'fileUpload',filePath:file});
      }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(AddCourse);