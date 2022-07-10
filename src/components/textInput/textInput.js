import React, { Component } from "react";

class textInput extends Component {
    render() {
        const {
            label, controlName, placeholderText
        } = this.props;

        return (
            <label>
                <p>{label}</p>
                <input type='Text' name={controlName} placeholder={placeholderText} />
            </label>
        );
    }
}

export default textInput;