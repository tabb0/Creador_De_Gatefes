// Main React Imports
import React, { Component } from "react";

// Bootstrap Imports
import { Container, Button, Row, Col } from 'react-bootstrap';

// Constants
import { MESSAGES } from "../constants/messageConstants";

// UI Components
import EmailInput from '../components/emailInput/emailInput';
import PhoneInput from '../components/phoneInput/phoneInput';
import TextInput from '../components/textInput/textInput';
import ImageUploader from '../components/imageUploaderInput/imageUploaderInput';

class mainForm extends Component {

    // Default Form Validator state
    formFieldValidators = {
        name: { state: false, message: MESSAGES.NAME_ISREQUIRED },
        lastName: { state: false, message: MESSAGES.LASTNAME_ISREQUIRED },
        phone: { state: false, message: MESSAGES.PHONE_ISREQUIRED },
        email: { state: false, message: MESSAGES.EMAIL_ISREQUIRED },
    };

    // Method that checks all form field validators
    checkFieldValidators = () => {
        let errorFlag = false;
        for (const [key, value] of Object.entries(this.formFieldValidators)) {
            if (!value.state) {
                console.log(`${key}: ${value.message}`);
                errorFlag = errorFlag ? errorFlag : true;
            }
        };
        return errorFlag;
    };

    // Method that handles the main submit
    handleSubmit = event => {
        event.preventDefault();

        const formHasErrors = this.checkFieldValidators();
        if (!formHasErrors) {
            alert('You have submitted the form.')
        }
    }

    handleOnChangeValidation = (field, result, message) => {
        let validatedField = this.formFieldValidators[field];
        if (validatedField) {
            validatedField.result = result;
            validatedField.message = message;
        }
    }

    render() {
        return (
            <Container fluid>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <TextInput
                                label='Nombre:'
                                controlName='name'
                                placeholderText=''
                                handleOnChangeValidation={this.handleOnChangeValidation}
                            ></TextInput>
                        </Col>
                        <Col>
                            <TextInput
                                label='Apellido:'
                                controlName='lastName'
                                placeholderText=''
                                handleOnChangeValidation={this.handleOnChangeValidation}
                            ></TextInput>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <EmailInput
                                label='Correo Electrónico:'
                                controlName='email'
                                placeholderText=''
                                handleOnChangeValidation={this.handleOnChangeValidation}
                            ></EmailInput>
                        </Col>
                        <Col>
                            <PhoneInput
                                label='Celular:'
                                controlName='phone'
                                placeholderText=''
                                handleOnChangeValidation={this.handleOnChangeValidation}
                            ></PhoneInput>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ImageUploader
                                handleOnChangeValidation={this.handleOnChangeValidation}
                            ></ImageUploader></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit" variant="primary">Crear Identificación</Button>
                        </Col>
                    </Row>
                </form>
            </Container>
        );
    }
}

export default mainForm;