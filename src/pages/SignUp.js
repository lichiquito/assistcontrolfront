import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, Button, Container, InputGroup, Card } from '@themesberg/react-bootstrap';
import { useNavigate, Link } from "react-router-dom";


export default () => {
    const [email, setEmail] = useState('')
    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();

    const registrarUsuario = (e) => {
        e.preventDefault()
        if(password !== '' && confirmPassword!== ''){
            if(password === confirmPassword){
                navigate('/');
                setEmail('')
                setNombre('')
                setPassword('')
                setConfirmPassword('')
            }
        }
    }

    return (
        <main>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <div className="text-center text-md-center mb-4 mt-md-0">
                                    <h3 className="mb-0">Crear una cuenta</h3>
                                </div>
                                <Form className="mt-4" onSubmit={registrarUsuario}>
                                    <Form.Group id="email" className="mb-4">
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </InputGroup.Text>
                                            <Form.Control autoFocus required type="email" placeholder="ejemplo@ejemplo.com" value={email} onChange={e => setEmail(e.target.value)}/>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group id="nombre" className="mb-4">
                                        <Form.Label>Nombre</Form.Label>
                                        <InputGroup>
                                            <Form.Control autoFocus required type="text" placeholder="Ingrese su nombre completo" value={nombre} onChange={e => setNombre(e.target.value)} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group id="password" className="mb-4">
                                        <Form.Label>Contraseña</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faUnlockAlt} />
                                            </InputGroup.Text>
                                            <Form.Control required type="password" placeholder="contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group id="confirmPassword" className="mb-4">
                                        <Form.Label>Vuelva a escribir contraseña</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faUnlockAlt} />
                                            </InputGroup.Text>
                                            <Form.Control required type="password" placeholder="Confirmar contraseña" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                                        </InputGroup>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="w-100">
                                        Registrar cuenta
                                    </Button>
                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                    <span className="fw-normal">
                                        ¿Ya tienes una cuenta?
                                        <Card.Link as={Link} to={"/login"} className="fw-bold">
                                            {`  Ingresa aquí  `}
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
