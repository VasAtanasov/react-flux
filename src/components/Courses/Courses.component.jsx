import React, { useState, useEffect } from "react";
import { getCourses } from "../../utils/api/courseApi";

const CoursesComponent = () => {
    const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         setCourses(await getCourses());
    //     })();
    // }, []);

    useEffect(() => {
        getCourses().then(data => setCourses(data));
    }, []);

    return (
        <div className="jumbotron">
            <h2>Course</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author ID</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CoursesComponent;
