import React from 'react';
import DataTable from 'react-data-table-component';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Pdf from 'react-to-pdf';

const ref = React.createRef();


const tablaDatos = [
  {nombre:"Nico", apellido:"Urrutia", edad:"21"},
  {nombre:"Mayra", apellido:"Montes", edad:"19"},
  {nombre:"Citlali", apellido:"Contreras", edad:"23"},
  {nombre:"Claudia", apellido:"Mora", edad:"33"},
  {nombre:"Felipe", apellido:"Neri", edad:"35"},
  {nombre:"Fernando", apellido:"Sanchez", edad:"24"},
  {nombre:"Guadalupe", apellido:"Flores", edad:"20"},
  {nombre:"Pedro", apellido:"Montes", edad:"56"},
  {nombre:"Olivia", apellido:"Gonzalez", edad:"65"},
  {nombre:"Rocio", apellido:"Martinez", edad:"23"}
];


const columnas = [

  {name: 'NOMBRE',
  selector: 'nombre',
  sortable: true
  },

  {name: 'APELLIDO',
  selector: 'apellido',
  sortable: true
  },

  {name: 'EDAD',
  selector: 'edad',
  sortable: true
  }
];



function App() {
  return (
    <div className="Container">


      <table class="tabla" id="table-to-xls" ref={ref}>
      <DataTable columns={columnas} data={tablaDatos} title="Registros" pagination/>
      </table>
 
      <table>
        
        <td></td>
        <td></td>
        <td></td>
        <td></td>


        <ReactHTMLTableToExcel className="btn btn-success" id="table-to-xls" table="table-to-xls" filename="Tabla" sheet="datos" buttonText="Descargar XLS"/>

       <td> </td>
       <td> </td>
       <td> </td>
       <td> </td>
       <td> </td>
      
     
      <Pdf targetRef={ref} filename="Tabla.pdf">
        {({ toPdf }) => <button  type="button" class="btn btn-danger" onClick={toPdf}>Descargar PDF</button>}
      </Pdf>

      </table>
    
    </div>
  );
}

export default App;
