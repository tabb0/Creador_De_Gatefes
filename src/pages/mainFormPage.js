// Main React Imports
import React, { useState, useRef } from "react";

// Bootstrap Imports
import { Container, Button, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { LineLoader, CircleSpinner } from 'react-spinner-overlay';

// Constants
import { MESSAGES } from "../constants/messageConstants";

// UI Components
import EmailInput from '../components/emailInput/emailInput';
import AlphaInput from '../components/alphaInput/alphaInput';
import TextInput from '../components/textInput/textInput';
import ImageUploader from '../components/imageUploaderInput/imageUploaderInput';

const MainForm = (props) => {
    const [showForm, setShowForm] = useState(true);
    const [mainImage, setMainImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [postingData, setPostingData] = useState(false);
    const [email, setEmail] = useState('');
    const ref = useRef();

    // Default Form Validator state
    let formFieldValidators = {
        name: { state: false, message: MESSAGES.NAME_ISREQUIRED, value: '' },
        lastName: { state: false, message: MESSAGES.LASTNAME_ISREQUIRED, value: '' },
        cedula: { state: false, message: MESSAGES.PHONE_ISREQUIRED, value: '' },
        email: { state: false, message: MESSAGES.EMAIL_ISREQUIRED, value: '' },
        profilePic: { state: false, message: MESSAGES.PICTURE_ISREQUIRED, value: '' },
    };

    const onLoad = () => {
        setLoading(false);
    };

    // Method that checks all form field validators
    const checkFieldValidators = () => {
        let errorFlag = false;
        for (const [key, value] of Object.entries(formFieldValidators)) {
            if (!value.result) {
                errorFlag = errorFlag ? errorFlag : true;
            }
        };
        return errorFlag;
    };

    // Method that handles the main submit
    const handleSubmit = event => {

        event.preventDefault();

        const formHasErrors = checkFieldValidators();
        if (!formHasErrors) {
            postData();
        }
        else {
            Swal.fire({
                title: '¡Espere!',
                text: 'Falta que completes tu información',
                icon: 'warning',
                confirmButtonText: 'Ok'
            });
        }
    }

    const postData = () => {
        var data = new FormData();

        data.append('profilePic', formFieldValidators.profilePic.value);
        data.append('name', formFieldValidators.name.value);
        data.append('lastName', formFieldValidators.lastName.value);
        data.append('email', formFieldValidators.email.value);
        data.append('cedula', formFieldValidators.cedula.value);

        setEmail(formFieldValidators.email.value);

        setPostingData(true);

        fetch('https://lossaprissa.com/backend/formProcess.php', {
            method: 'POST',
            body: data
        })
            .then(response => response.text())
            .then(result => {
                try {
                    let data = JSON.parse(result);
                    const resultCode = data.result.resultCode;
                    if (resultCode !== "0") {
                        setPostingData(false);
                        switch (resultCode) {
                            case "11":
                                Swal.fire({
                                    title: '¡Espere!',
                                    text: 'Parece que ya estás registrado.',
                                    icon: 'info',
                                    confirmButtonText: 'Ok'
                                });
                                setLoading(true);
                                setShowForm(false);
                                setMainImage(data.result.registro.ImagenCedula);
                                break;
                            case "10":
                                Swal.fire({
                                    title: '¡Espere!',
                                    text: 'Ocurrió un problema al generar tu cédula',
                                    icon: 'error',
                                    confirmButtonText: 'Ok'
                                });
                                break;
                        }
                    }
                    else {
                        setLoading(true);
                        setShowForm(false);
                        setMainImage(data.result.registro.ImagenCedula);
                    }
                }
                catch (err) {
                    // TODO: Agregar menejo de error.
                }
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    const handleOnChangeValidation = (params) => {
        const {
            field, result, message, value
        } = params;
        let validatedField = formFieldValidators[field];
        if (validatedField) {
            validatedField.result = result;
            validatedField.message = message;
            validatedField.value = value;
        }
    }

    const handleCreateOther = (params) => {
        setMainImage('');
        setShowForm(true);
    }

    return (
        <Container fluid className="sapri-container centered">
            <Row>
                <Col md="5" className="text-center">
                    <img className="mainLogoImage" src="/images/img87.png" alt="" />
                </Col>
                {
                    showForm &&
                    <Col md="7">
                        <form id='form' method="post" onSubmit={handleSubmit}>
                            <Row>
                                <Col md="6">
                                    <TextInput
                                        label='Nombre:'
                                        controlName='name'
                                        placeholderText=''
                                        maxLength={100}
                                        handleOnChangeValidation={handleOnChangeValidation}
                                    ></TextInput>
                                </Col>
                                <Col md="6">
                                    <TextInput
                                        label='Apellido:'
                                        controlName='lastName'
                                        placeholderText=''
                                        maxLength={100}
                                        handleOnChangeValidation={handleOnChangeValidation}
                                    ></TextInput>
                                </Col>
                            </Row>
                            <Row className="sub-title">
                                <p>Tu Apellido Cambiara por "Saprissa"</p>
                            </Row>
                            <Row>
                                <Col md="8">
                                    <EmailInput
                                        label='Correo Electrónico:'
                                        controlName='email'
                                        placeholderText=''
                                        maxLength={500}
                                        handleOnChangeValidation={handleOnChangeValidation}
                                    ></EmailInput>
                                </Col>
                                <Col md="4">
                                    <AlphaInput
                                        label='Cedula:'
                                        controlName='cedula'
                                        placeholderText=''
                                        maxLength={20}
                                        handleOnChangeValidation={handleOnChangeValidation}
                                    ></AlphaInput>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                    <ImageUploader
                                        controlName='profilePic'
                                        handleOnChangeValidation={handleOnChangeValidation}
                                    ></ImageUploader>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                    {
                                        !postingData ?
                                            <label>
                                                <Button className="sapri-button" type="submit">CREAR IDENTIFICACION</Button>
                                            </label>
                                            :
                                            <></>
                                    }
                                    {
                                        <CircleSpinner loading={postingData} color="#FF7626" />
                                    }
                                </Col>
                            </Row>
                        </form>
                    </Col>
                }
                {
                    !showForm &&
                    <Col md="7">
                        <div className="sapri-cedula-container-col">
                            <Row>
                                <p>Oficialmente Sos Parte de La Familia...</p>
                                <p><small>¡Compartila En Tus Redes Y Etiquetanos Para Verla!</small></p>
                            </Row>
                            {loading ?
                                <Row className="sapri-cedula-image-loading">
                                    <LineLoader className="line-loader" loading={loading} color="#FF7626" width="300" />
                                </Row>
                                : <></>
                            }
                            <Row className="sapri-cedula-image">
                                <a href={'/cedula?email=' + email}>
                                    <img
                                        ref={ref}
                                        src={mainImage}
                                        onLoad={onLoad}
                                        alt="" />
                                </a>
                            </Row>
                            <Row>
                                <a className="button sapri-button" href={'/cedula?email=' + email}>Descargar</a>
                            </Row>
                            <Row>
                                <button className="sapri-button" onClick={handleCreateOther}>Crear Otra</button>
                            </Row>
                        </div>
                    </Col>
                }
            </Row>
            <Row className="logoPatro-Row">
                <Col>
                    <a href="https://lossaprissa.com" >
                        <img className="logoPatro" src="/images/logopatro.jpg" alt="" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default MainForm;