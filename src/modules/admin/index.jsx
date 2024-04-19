import LeftMenu from './left-menu'
import Main from './Main'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Admin = () => {
  return (
    <Container fluid>
      <Row>
        <LeftMenu />
        <Main />
      </Row>
    </Container>
  )
}

export default Admin
