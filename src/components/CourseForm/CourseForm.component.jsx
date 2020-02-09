import React from "react";
import { TextInput } from "../";
import PropTypes from "prop-types";

const CourseFormComponent = ({ course, onSubmit, onChange, errors }) => (
    <form onSubmit={onSubmit}>
        <TextInput
            id="title"
            label="Title"
            onChange={onChange}
            name="title"
            value={course.title}
            error={errors.title}
        />

        <div className="form-group">
            <label htmlFor="author">Author</label>
            <div className="field">
                <select
                    id="author"
                    name="authorId"
                    onChange={onChange}
                    value={course.authorId || ""}
                    className="form-control"
                >
                    <option value="" />
                    <option value="1">Cory House</option>
                    <option value="2">Scott Allen</option>
                </select>
            </div>
            {errors.authorId && (
                <div className="alert alert-danger">{errors.authorId}</div>
            )}
        </div>

        <TextInput
            id="category"
            label="Category"
            name="category"
            onChange={onChange}
            value={course.category}
            error={errors.category}
        />

        <input type="submit" value="Save" className="btn btn-primary" />
    </form>
);

CourseFormComponent.propTypes = {
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

export default CourseFormComponent;
