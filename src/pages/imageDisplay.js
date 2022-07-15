import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { saveAs } from 'file-saver';

const ImageDisplay = (props) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [cedulaImg, setCedulaImg] = useState('');

    useEffect(() => {
        const url = window.location.search;
        const queryParams = new URLSearchParams(url);
        setEmail(queryParams.get("email"));
        getData();
    });

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator
                    .share(cedulaImg)
                    .then(() =>
                        console.log("")
                    );
            } catch (error) {
                console.log(`Oops! I couldn't share to the world because: ${error}`);
            }
        } else {
            // fallback code
            console.log(
                "Web share is currently not supported on this browser. Please provide a callback"
            );
        }
    };

    const getData = () => {
        var data = new FormData();
        data.append('email', email);

        setLoading(true);

        fetch('https://lossaprissa.com/backend/getRecord.php', {
            method: 'POST',
            body: data
        })
            .then(response => response.text())
            .then(result => {
                try {
                    const data = JSON.parse(result);
                    setCedulaImg(data.result.registro.ImagenCedula);
                }
                catch (err) {
                    // TODO: Agregar menejo de error.
                    console.log('error', err)
                }
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    const download = () => {
        saveAs(cedulaImg, "image.jpg");
    };

    return (
        <Container className="centered">
            <Row>
                <Col md="6" class="sapri-detail-image">
                    <img className="cedula" onClick={download} src={cedulaImg} alt="" />
                </Col>
                <Col md="6" class="sapri-detail-image">
                    <img className="cedula" src="/images/cedulaatras.jpg" alt="" />
                </Col>
            </Row>
            <Row>
                <Col className="text-center sapri-container-p">
                    <p>Dale click a tu cédula para descargarla</p>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <a href="https://lossaprissa.com" className="btn sapri-button">Regresar al inicio</a>
                </Col>
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

export default ImageDisplay;