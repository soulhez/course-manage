import {connect} from "react-redux";
import AddCourse from "../components/addCourse-component";

const mapStateToProps = (state)=> {
    return {
        imagePath: state.fileUpload.imagePath,
        audioPath:state.fileUpload.audioPath,
        isAdd:state.fileUpload.isAdd,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        imageUpload: (image_path)=> {
            dispatch({type: 'IMAGE_UPLOAD', imagePath: image_path});
        },
        audioUpload: (audio_path) => {
            dispatch({type: 'AUDIO_UPLOAD', audioPath: audio_path});
        },
        addCourse:(data) =>{
            console.log();
            dispatch({type:"ADD_COURSE",data});
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);