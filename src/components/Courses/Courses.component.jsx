import React, { useState, useEffect } from 'react';
import courseStore from '../../stores/courseStore';
import { CourseList } from '../';
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from '../../actions/courseActions';

const CoursesComponent = () => {
    const [courses, setCourses] = useState(courseStore.getCourses());
    const onChange = () => {
        setCourses(courseStore.getCourses());
    };

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) loadCourses();
        return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
    }, []);

    return (
        <div className="jumbotron">
            <h2>Course</h2>
            <Link className="btn btn-primary" to="/course">
                Add Course
            </Link>
            <CourseList courses={courses} deleteCourse={deleteCourse} />
        </div>
    );
};

export default CoursesComponent;
