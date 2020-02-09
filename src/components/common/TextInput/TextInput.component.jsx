import React from "react";
import PropTypes from "prop-types";

const TextInputComponent = ({ id, name, label, onChange, value, error }) => {
    let wrapperClass = "form-group";

    if (error.length > 0) {
        wrapperClass += " has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={id}>{label}</label>
            <div className="field">
                <input
                    id={id}
                    type="text"
                    onChange={onChange}
                    name={name}
                    className="form-control"
                    value={value}
                />
            </div>
            {error && (<div className="alert alert-danger">{error}</div>)``}
        </div>
    );
};

TextInputComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
};

TextInputComponent.defaultProps = {
    error: "",
};

export default TextInputComponent;
