import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, Button, Container, InputGroup, Card} from '@themesberg/react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const iniciarSesion = async e => {
        e.preventDefault()
        localStorage()
        navigate('/');
        window.location.reload(false);
    }

    return (
        <main>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <Col xs={12} className="d-flex align-items-center justify-content-center">
                        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h3 className="mb-0">Bienvenido a Assist Control App</h3>
                            </div>
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h7 className="mb-0">Por favor, ingrese los datos que se solicitan para entrar al sistema</h7>
                            </div>
                            <Form className="mt-4" onSubmit={iniciarSesion}>
                                <Form.Group id="email" className="mb-4">
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </InputGroup.Text>
                                        <Form.Control autoFocus required type="email" placeholder="ejemplo@ejemplo.com" value={email} onChange={e => setEmail(e.target.value)}/>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Group id="password" className="mb-4">
                                        <Form.Label>Contraseña</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faUnlockAlt} />
                                            </InputGroup.Text>
                                            <Form.Control required type="password" placeholder="contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100" >
                                    Ingresar
                                </Button>
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    <span className="fw-normal">
                                        ¿Aún no tienes una cuenta?
                                        <Card.Link as={Link} to={"/register"} className="fw-bold">
                                            {`  Crea una aquí  `}
                                        </Card.Link>
                                    </span>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Container>
            </section>
        </main>
    );
};
