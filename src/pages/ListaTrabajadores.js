import {Col, Container, Table, Form, FormLabel, InputGroup} from '@themesberg/react-bootstrap';
import {useRef, useState, useEffect} from "react";

export default () => {

    const [search, setSearch] = useState('');
    const [trabajadores, setTrabajadores] = useState([]);
    const [tipoFiltro, setTipoFiltro] = useState('');

    return (
        <main>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <Col xs={12} className="d-flex align-items-center justify-content-center">
                        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-700">
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h3 className="mb-0">Lista Trabajadores</h3>
                            </div>
                            <div>
                                <Form>
                                    <Form.Select className="text-center text-md-center mb-4 mt-md-0" onChange={e=>(setTipoFiltro(e.target.value))}>
                                        <option defaultValue> Elija filtro </option>
                                        <option>E-mail</option>
                                        <option>Nombre</option>
                                        <option>Cargo</option>
                                        <option>Tipo de Contrato</option>
                                    </Form.Select>
                                </Form>
                            </div>
                            <div>
                                <h3></h3>
                            </div>
                                {tipoFiltro===''?<>
                                    <div></div>
                                </>
                                :
                                <div>
                                    <Form>
                                        <InputGroup>
                                            <Form.Control type="text" placeholder="Ingrese busqueda" value={search} onChange={e => setSearch(e.target.value)}/>
                                        </InputGroup>
                                    </Form>
                                </div>}
                            <div>
                                <h1></h1>
                            </div>
                            <div>
                                <Table responsive className="table-centered table-nowrap rounded mb-0">
                                    <thead className="thead-light">
                                    <tr>
                                        <th className="border-0">Nombre</th>
                                        <th className="border-0">E-mail</th>
                                        <th className="border-0">Cargo</th>
                                        <th className="border-0">Tipo Contrato</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {trabajadores.filter((tra, i) => {
                                        switch (tipoFiltro){
                                            case 'Nombre':
                                                return search.toLowerCase() === ''
                                                    ? tra
                                                    : tra.nombre.toLowerCase().includes(search);
                                            case 'E-mail':
                                                return search.toLowerCase() === ''
                                                    ? tra
                                                    : tra.email.toLowerCase().includes(search);
                                            case 'Cargo':
                                                return search.toLowerCase() === ''
                                                    ? tra
                                                    : tra.cargo.toLowerCase().includes(search);
                                            case 'Tipo de Contrato':
                                                return search.toLowerCase() === ''
                                                    ? tra
                                                    : tra.tipocontrato.toLowerCase().includes(search);
                                            default:
                                                return tra;
                                        }
                                    }).map((trabajador, i) =>{
                                        return(
                                            <tr key={i} class="trabajador">
                                                <th>{trabajador.nombre}</th>
                                                <th>{trabajador.email}</th>
                                                <th>{trabajador.cargo}</th>
                                                <th>{trabajador.tipocontrato}</th>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Container>
            </section>
        </main>
    );
};