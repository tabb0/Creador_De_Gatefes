import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { MESSAGES } from "../../constants/messageConstants";

const emailState = {
    email: '',
    error: ''
}

class emailInput extends Component {

    constructor() {
        super();
        this.state = emailState;
        this.onChange = this.onChange.bind(this);
    }

    // Detect changes in the email input field
    onChange(e) {
        const { handleOnChangeValidation } = this.props;
        this.setState({
            email: e.target.value
        });
        handleOnChangeValidation && handleOnChangeValidation('email', this.emailValidation(), this.state.error);
    }

    emailValidation() {
        // Resets the validation
        this.setState({
            error: ""
        });

        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!this.state.email || regex.test(this.state.email) === false) {
            this.setState({
                error: MESSAGES.INVALID_EMAIL
            });
            return false;
        }
        return true;
    }

    render() {
        const {
            label, controlName, placeholderText
        } = this.props;

        return (
            <label>
                <p>{label}</p>
                <input
                    type='Email'
                    name={controlName}
                    placeholder={placeholderText}
                    onChange={this.onChange}
                />
                <Row>
                    <span className="text-danger">{this.state.error}</span>
                </Row>
            </label >
        );
    }
}

export default emailInput;