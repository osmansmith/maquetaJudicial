import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'

const Causas = () => {
  return (
    <>
      <Container fluid className="mt-4">
        <h1>Seguimiento de Causas</h1>
        <Table hover bordered className="text-center">
          <thead>
            <tr>
              <th>N° ROL</th>
              <th>Tribunal</th>
              <th>Litigante</th>
              <th>Causa</th>
              <th>fecha</th>
              <th>Estado</th>
              <th>Juez</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1345569</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="info">Procesada</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="warning">En Proceso</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="success">Terminada</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="primary">Ingresada</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="danger">Rechazada</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="primary">Ingresada</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="info">Procesada</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="warning">En Proceso</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="success">Terminada</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="primary">Ingresada</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="danger">Rechazada</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
            <tr>
              <td>1345567</td>
              <td>13 tribunal en lo penal</td>
              <td>Jorge Ruiz</td>
              <td>Herencia forzosa</td>
              <td>23/02/2023</td>
              <td>
                <Badge bg="primary">Ingresada</Badge>
              </td>
              <td>Emilio Puerta</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Causas
