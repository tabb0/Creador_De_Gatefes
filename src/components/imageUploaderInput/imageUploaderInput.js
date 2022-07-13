import React from 'react';
import { useState, useRef } from "react";
import { Row } from 'react-bootstrap';

export default function ImageUploaderInput(props) {
    const [file, setFile] = useState(null);
    const fileInput = useRef(null);

    const handleFileInputClick = (event) => {
        event.preventDefault();
        fileInput.current.click();
    }

    const handleChange = (event) => {
        setFile(event.target.files[0]);

        props.handleOnChangeValidation && props.handleOnChangeValidation({
            field: props.controlName,
            result: true,
            message: '',
            value: event.target.files[0]
        });
    };
    return (
        <label className="ImageUploaderInput">
            <div className="sapri-button" onClick={handleFileInputClick}>Cargar Imagen</div>
            <input type="file" ref={fileInput} className="sapri-file-input" id="file" name="file" onChange={handleChange} />
        </label>
    );
}