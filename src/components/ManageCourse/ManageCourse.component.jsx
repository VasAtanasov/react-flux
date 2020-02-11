import React, { useState, useEffect } from 'react';
import { CourseForm } from '../';
import { toast } from 'react-toastify';
import courseStore from '../../stores/courseStore';
import * as courseActions from '../../actions/courseActions';

const ManageCourseComponent = props => {
    const [errors, setErrors] = useState({});
    const [courses, setCourses] = useState(courseStore.getCourses());
    const [course, setCourse] = useState({
        id: null,
        slug: '',
        title: '',
        authorId: null,
        category: ''
    });

    const onChange = () => {
        setCourses(courseStore.getCourses());
    };

    const handleChange = ({ target }) => {
        setCourse({
            ...course,
            [target.name]: target.value
        });
    };

    const formIsValid = () => {
        const _errors = {};

        if (!course.title) _errors.title = 'Title is required';
        if (!course.authorId) _errors.authorId = 'Author ID is required';
        if (!course.category) _errors.category = 'Category is required';

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!formIsValid()) return;
        courseActions.saveCourse(course).then(() => {
            props.history.push('/courses');
            toast.success('Course saved.');
        });
    };

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        const slug = props.match.params.slug; // from the path `/courses/:slug`
        if (courses.length === 0) {
            courseActions.loadCourses();
        } else if (slug) {
            setCourse(courseStore.getCourseBySlug(slug));
        }
        return () => courseStore.removeChangeListener(onChange);
    }, [courses.length, props.match.params.slug]);
    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm
                errors={errors}
                course={course}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
};

export default ManageCourseComponent;
