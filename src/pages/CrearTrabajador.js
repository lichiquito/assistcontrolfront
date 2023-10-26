import React, {useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import {Col, Form, Card, Button, Container, InputGroup, FormGroup, FormLabel} from '@themesberg/react-bootstrap';
import { Link, useHistory, useNavigate } from 'react-router-dom';



export default () => {
    const [nombre,setNombre] = useState('')
    const [email,setEmail] = useState('')
    const [cargo,setCargo] = useState('')
    const [contrato,setContrato] = useState('')
    const navigate = useNavigate();

    const createTrabajador = (e) => {
        e.preventDefault();
        setEmail('');
        setNombre('');
        navigate('/');
    }

    return (
        <main>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <Col xs={12} className="d-flex align-items-center justify-content-center">
                        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h3 className="mb-0">Crear Trabajador</h3>
                            </div>
                            <Form className="mt-4" onSubmit={createTrabajador}>
                                <FormGroup id="nombre" className="mb-4">
                                    <FormLabel>Nombre</FormLabel>
                                    <InputGroup>
                                        <Form.Control autoFocus required type="text" placeholder="Ingrese nombre de trabajador" value={nombre} onChange={e => setNombre(e.target.value)}>
                                        </Form.Control>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup id="email" className="mb-4">
                                    <FormLabel>Email</FormLabel>
                                    <InputGroup>
                                        <Form.Control autoFocus required type="email" placeholder="Ingrese email de trabajador" value={email} onChange={e => setEmail(e.target.value)}>
                                        </Form.Control>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup id="cargo" className="mb-4">
                                    <FormLabel>Cargo</FormLabel>
                                    <InputGroup>
                                        <Form.Control autoFocus required type="text" placeholder="Ingrese nombre del cargo del trabajador" value={cargo} onChange={e => setCargo(e.target.value)}>
                                        </Form.Control>
                                    </InputGroup>
                                </FormGroup>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tipo de Contrato</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Elija tipo de contrato</option>
                                        <option>Jornada Completa</option>
                                        <option>Jornada Parcial</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100" >
                                    Crear
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Container>
            </section>
        </main>
    );
};