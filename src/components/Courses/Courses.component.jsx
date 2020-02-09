import React, { useState, useEffect } from "react";
import { getCourses } from "../../utils/api/courseApi";
import { CourseList } from "../";

const CoursesComponent = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        (async () => {
            setCourses(await getCourses());
        })();
    }, []);

    return (
        <div className="jumbotron">
            <h2>Course</h2>
            <CourseList courses={courses} />
        </div>
    );
};

export default CoursesComponent;
