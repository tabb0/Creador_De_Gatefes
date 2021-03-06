import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { MESSAGES } from "../../constants/messageConstants";

const AlphaInput = (props) => {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const validationResult = validateText(text);
        props.handleOnChangeValidation && props.handleOnChangeValidation({
            field: props.controlName,
            result: validationResult,
            message: error,
            value: text
        });
    }, [text]);

    const validateText = (textToValidate) => {
        setError('');

        // eslint-disable-next-line
        const regex = /^[A-Za-z0-9]*$/;
        const regexResult = regex.test(textToValidate);
        if (!regexResult) {
            setError(MESSAGES.ONLYLETTERSANDNUM_TEXT);
        }
        return regexResult;
    };

    return (
        <label>
            <p>{props.label}</p>
            <input
                maxLength={props.maxLength}
                className="sapri-input"
                type='text'
                name={props.controlName}
                placeholder={props.placeholderText}
                value={text}
                onChange={(e) => { setText(e.target.value) }}
            />
            <Row>
                <span className="text-danger">{error}</span>
            </Row>
        </label>
    )
}

export default AlphaInput;