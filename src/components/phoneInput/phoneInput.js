import React, { Component } from "react";

class phoneInput extends Component {
    render() {
        const {
            label, controlName, placeholderText
        } = this.props;

        return (
            <label>
                <p>{label}</p>
                <input type='Number' name={controlName} placeholder={placeholderText} />
            </label>
        );
    }
}

export default phoneInput;