import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { MESSAGES } from "../../constants/messageConstants";

const EmailInput = (props) => {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const validationResult = emailValidation(text);
        props.handleOnChangeValidation && props.handleOnChangeValidation({
            field: props.controlName,
            result: validationResult,
            message: error,
            value: text
        });
    }, [text]);

    const emailValidation = () => {
        // Resets the validation
        setError('');

        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!text || regex.test(text) === false) {
            setError(MESSAGES.INVALID_EMAIL);
            return false;
        }
        return true;
    }

    return (
        <label>
            <p>{props.label}</p>
            <input
                className="sapri-input"
                type='email'
                name={props.controlName}
                placeholder={props.placeholderText}
                onChange={(e) => { setText(e.target.value) }}
            />
            <Row>
                <span className="text-danger">{error}</span>
            </Row>
        </label >
    );
}

export default EmailInput;