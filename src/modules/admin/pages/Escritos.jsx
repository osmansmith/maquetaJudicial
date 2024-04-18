import React from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import PdfIcon from '../assets/img/pdf.png';
import MenuRight from '../assets/img/menuRight.png'

const Escritos = () => {
    return(
        <>
        <h1>Almacenamiento de Escritos</h1>

        <Container className="mt-4">
    <Table hover className="text-center" size="md">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Nombre</th>
          <th>Tamaño</th>
          <th>Fecha ingreso</th>
          <th>Acciones</th>
         
        </tr>
      </thead>
      <tbody>       
        <tr className="align-middle">
          <td><img src={PdfIcon} width={50}alt="" /></td>
          <td>Caso_3345_penal.pdf</td>
          <td>145MB</td>
          <td>14/05/2022</td>
          <td><img src={MenuRight} height={25} /></td>         
        </tr>
        <tr className="align-middle">
          <td><img src={PdfIcon} width={50}alt="" /></td>
          <td>Caso_3345_penal.pdf</td>
          <td>145MB</td>
          <td>14/05/2022</td>
          <td><img src={MenuRight} height={25} /></td>         
        </tr>
        <tr className="align-middle">
          <td><img src={PdfIcon} width={50}alt="" /></td>
          <td>Caso_3345_penal.pdf</td>
          <td>145MB</td>
          <td>14/05/2022</td>
          <td><img src={MenuRight} height={25} /></td>         
        </tr>
        <tr className="align-middle">
          <td><img src={PdfIcon} width={50}alt="" /></td>
          <td>Caso_3345_penal.pdf</td>
          <td>145MB</td>
          <td>14/05/2022</td>
          <td><img src={MenuRight} height={25} /></td>         
        </tr>
        <tr className="align-middle">
          <td><img src={PdfIcon} width={50}alt="" /></td>
          <td>Caso_3345_penal.pdf</td>
          <td>145MB</td>
          <td>14/05/2022</td>
          <td><img src={MenuRight} height={25} /></td>         
        </tr>
        <tr className="align-middle">
          <td><img src={PdfIcon} width={50}alt="" /></td>
          <td>Caso_3345_penal.pdf</td>
          <td>145MB</td>
          <td>14/05/2022</td>
          <td><img src={MenuRight} height={25} /></td>         
        </tr>
        <tr className="align-middle">
          <td><img src={PdfIcon} width={50}alt="" /></td>
          <td>Caso_3345_penal.pdf</td>
          <td>145MB</td>
          <td>14/05/2022</td>
          <td><img src={MenuRight} height={25} /></td>         
        </tr>
        <tr className="align-middle">
          <td><img src={PdfIcon} width={50}alt="" /></td>
          <td>Caso_3345_penal.pdf</td>
          <td>145MB</td>
          <td>14/05/2022</td>
          <td><img src={MenuRight} height={25} /></td>         
        </tr>
        <tr className="align-middle">
          <td><img src={PdfIcon} width={50}alt="" /></td>
          <td>Caso_3345_penal.pdf</td>
          <td>145MB</td>
          <td>14/05/2022</td>
          <td><img src={MenuRight} height={25} /></td>         
        </tr>
        <tr className="align-middle">
          <td><img src={PdfIcon} width={50}alt="" /></td>
          <td>Caso_3345_penal.pdf</td>
          <td>145MB</td>
          <td>14/05/2022</td>
          <td><img src={MenuRight} height={25} /></td>         
        </tr>        
      </tbody>
    </Table>
    </Container>
        </>
    )
}

export default Escritos