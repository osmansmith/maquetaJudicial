import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Clientes = () => {
  const [perfiles, setPerfiles] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
      .then((response) => response.json())
      .then((data) => setPerfiles(data.results))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1 className="mb-4">Cartera de clientes</h1>
            <Table hover bordered className="text-center">
              <thead>
                <tr>
                  <th>Foto</th>
                  <th>Nombre completo</th>
                  <th>Email</th>
                  <th>Telefono</th>
                  <th>Dirección</th>
                </tr>
              </thead>
              <tbody>
                {perfiles.map((profile) => (
                  <tr key={profile.email} className="align-middle">
                    <td>
                      <Image src={profile.picture.thumbnail} roundedCircle />
                    </td>
                    <td>{profile.name.first + ' ' + profile.name.last}</td>
                    <td>{profile.email}</td>
                    <td>{profile.cell}</td>
                    <td>
                      {profile.location.country +
                        ', ' +
                        profile.location.street.name +
                        ' #' +
                        profile.location.street.number}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Clientes
