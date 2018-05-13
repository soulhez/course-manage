import {connect} from "react-redux";
import InsertCourse from "../components/insertCourse-component";

const mapStateToProps = (state)=> {
    return {
        imagePath: state.fileUpload.imagePath,
        isAdd: state.fileUpload.isAdd,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        imageUpload: (image_path)=> {
            dispatch({type: 'IMAGE_UPLOAD', imagePath: image_path});
        },
        addCourse: (data) => {
            console.log(data);
            dispatch({type: "ADD_COURSE", data});
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(InsertCourse);