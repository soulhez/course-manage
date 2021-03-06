import request from "superagent";

export default store => next => action => {
    if (action.type === "ADD_COURSE") {
        request.post("/insertCourse")
            .send({
                title: action.data.course_title,
                description: action.data.course_description,
                teacher: action.data.course_teacher,
                duration: action.data.course_duration,
                publish_user: action.data.publish_user,
                image: action.data.image_path,
                audio: action.data.audio_path,
                course_type:action.data.course_type
            })
            .end((err, res)=> {
                next({type: "ADD_COURSE_CHECK", addCourse: res.body});
            })
    } else {
        next(action);
    }
}