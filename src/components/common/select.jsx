import React from "react";

const Select = ({ error, name, label, ...rest }) => {
    // return (
    //     <div className="form-group">
    //         <label htmlFor={name}>{label}</label>
    //         <input
    //             {...rest}
    //             id={name}
    //             className={`form-control${error ? " is-invalid" : ""}`}
    //             name={name}
    //         />
    //         {error && <div className="invalid-feedback">{error}</div>}
    //     </div>
    // );
    return (
        <div className="form-group">
            <label className="my-1 mr-2" htmlFor={name}>
                {label}
            </label>
            <select
                className={`custom-select my-1 mr-sm-2 form-control${
                    error ? " is-invalid" : ""
                }`}
                id={name}
                name={name}
                {...rest}
            >
                <option>Choose...</option>
                {getGenres().map(genre => (
                    <option value={genre._id} key={genre._id}>
                        {genre.name}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default Select;
