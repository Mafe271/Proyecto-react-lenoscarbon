import React, {useEffect, useState } from "react";
import axios from 'axios';
import { db } from "../../firebase";
import "../OrdenMenu/ordenMenu.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Desayunos from "../../Components/OrdenMenu/Desayunos";
import Entradas1 from "../../Components/OrdenMenu/Entradas";
import Res1 from "../OrdenMenu/Entradas";
import Pescado1 from "../../Components/OrdenMenu/Pescado";
import Pollo1 from "../../Components/OrdenMenu/Pollo";
import Ensaladas1 from "../OrdenMenu/Ensaladas";
import Sandwiches1 from "../../Components/OrdenMenu/Sandwiches";
import Cocteles1 from "../../Components/OrdenMenu/Cocteles";
import Postres1 from "../../Components/OrdenMenu/Postres";
import Bebidas1 from "../OrdenMenu/Bebidas";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from "@material-ui/core";

const baseUrl='http://localhost:3000//consolas/'

const data = [];

// estilos de la tabla
const useStyle = makeStyles({
  containerTable: {
    minWidth: 700,
  },
  cellTitle: {
    fontSize: "23px",
    color: "bisque",
    fontFamily: "roboto slab",
  },
  celda: {
    fontSize: "20px",
    color: "beige",
    paddingLeft: "50px",
    fontFamily: "roboto slab",
  },
});


function OrdenMenu() {

  const classes = useStyle();
  const [data, setData]=useState([]);

  const [pedidos, setPedidos]=useState({
    cantidad: '',
    producto:'',
    precio:'',
    subtotal:'',
    total:''
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setPedidos(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(pedidos);
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl, pedidos)
    .then(response=>{
      setData(data.concat(response.data))
    })
  }
  const peticionPut=async()=>{
    await axios.put(baseUrl+pedidos.id, pedidos)
    .then(response=>{
      var dataNueva=data;
      dataNueva.map(celda=>{
        if(pedidos.id===celda.id){
          celda.nombre=pedidos.nombre;
          celda.lanzamiento=pedidos.lanzamiento;
          celda.empresa=pedidos.empresa;
          celda.unidades_vendidas=pedidos.unidades_vendidas;
        }
      })
      setData(dataNueva);
    })
  }

  useEffect(async()=>{
    await peticionGet();
  },[])
  const total = data.forEach((subtotal) => {
    let suma = subtotal;
  });

  const [toggle, setToggle] = useState(false);

  function Desayuno() {
    setToggle(!toggle);
    console.log(toggle);
  }
  const [toggleEntradas, setToggleEntradas] = useState(false);

  function Entradas() {
    setToggleEntradas(!toggleEntradas);
    console.log(toggleEntradas);
  }

  const [toggleRes, setToggleRes] = useState(false);

  function Res() {
    setToggleRes(!toggleRes);
    console.log(toggleRes);
  }

  const [togglePescado, setTogglePescado] = useState(false);
  function Pescado() {
    setTogglePescado(!togglePescado);
    console.log(togglePescado);
  }

  const [togglePollo, setTogglePollo] = useState(false);
  function Pollo() {
    setTogglePollo(!togglePollo);
    console.log(togglePollo);
  }

  const [toggleEnsaladas, setToggleEnsaladas] = useState(false);
  function Ensaladas() {
    setToggleEnsaladas(!toggleEnsaladas);
    console.log(toggleEnsaladas);
  }

  const [toggleSandwiches, setToggleSandwiches] = useState(false);
  function Sandwiches() {
    setToggleSandwiches(!toggleSandwiches);
    console.log(toggleSandwiches);
  }

  const [toggleCocteles, setToggleCocteles] = useState(false);
  function Cocteles() {
    setToggleCocteles(!toggleCocteles);
    console.log(toggleCocteles);
  }

  const [togglePostres, setTogglePostres] = useState(false);
  function Postres() {
    setTogglePostres(!togglePostres);
    console.log(togglePostres);
  }

  const [toggleBebidas, setToggleBebidas] = useState(false);
  function Bebidas() {
    setToggleBebidas(!toggleBebidas);
    console.log(toggleBebidas);
  }

 
  const tablaProductos = {
    contenido: {
      producto: "",
      precio: "",
      eliminar: "",
      certify: false,
    },
    checked: {
      yes: false,
      no: false,
    },
  };

 

  const handlesubmit = async (e) => {
    e.preventDefault();
    const objetoData = {};
    data.forEach((elemento) => {
      Object.assign(objetoData, {
        [elemento.producto]: {
          precio: elemento.precio,
          elinimar: elemento.eliminar,
        },
      });
    });
  };


  return (
    <div className="tabla">
      <h1> Pepito Perez </h1>
      <div className={classes.containerTable}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.cellTitle}> Cantidad por mesa</TableCell>
                <TableCell className={classes.cellTitle}> Producto </TableCell>
                <TableCell className={classes.cellTitle}> Precio por unidad</TableCell>
                <TableCell className={classes.cellTitle}> Subtotal </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.cellTitle}> Total </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((celda) => (
                <>
                  <TableRow key={celda.id}>
                    <TableCell className={classes.celda}>{celda.cantidad}</TableCell>
                    <TableCell className={classes.celda}>{celda.producto}</TableCell>
                    <TableCell className={classes.celda}>{celda.precio}</TableCell>
                    <TableCell className={classes.celda}>{celda.subtotal}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.celda}>{celda.total}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      
      <div className="bttn">
        <button className="menus" onClick="menus">
           Menú
        </button>
        <button className="finalizar " onClick="menus">
          Finalizar
        </button>
      </div>
      <Link className="volver" to="/Ordenes">
        <button>Volver</button>
      </Link>

       <div className='btnFirst'>
        <button className="desayunos" onClick={Desayuno}>
          Desayunos
        </button>
        <div className={toggle ? "active" : "disable"}>
          {<Desayunos />}
        </div>

        <button className="entradas" onClick={Entradas}>
          Entradas
        </button>
        <div className={toggleEntradas ? "active" : "disable"}>
          {<Entradas1 />}
        </div>

        <button className="res" onClick={Res}>
          Res
        </button>
        <div className={toggleRes ? "active" : "disable"}>
          {<Res1 />}
        </div>

        <button className="pescado" onClick={Pescado}>
          Pescado
        </button>
        <div className={togglePescado ? "active" : "disable"}>
          {<Pescado1 />}
        </div>
       </div>

       <div className='btnSecond'>
        <button className="pollo" onClick={Pollo}>
          Pollo
        </button>
        <div className={togglePollo ? "active" : "disable"}>
          {<Pollo1 />}
        </div>

        <button className="ensaladas" onClick={Ensaladas}>
          Ensaladas
        </button>
        <div className={toggleEnsaladas ? "active" : "disable"}>
          {<Ensaladas1 />}
        </div>

        <button className="sandwiches" onClick={Sandwiches}>
          Sandwiches
        </button>
        <div className={toggleSandwiches ? "active" : "disable"}>
          {<Sandwiches1 />}
        </div>
        </div>
        
        <div className='btnThird'>
        <button className="coctel" onClick={Cocteles}>
          Cócteles
        </button>
        <div className={toggleCocteles ? "active" : "disable"}>
          {<Cocteles1 />}
        </div>

        <button className="postres" onClick={Postres}>
          Postres
        </button>
        <div className={togglePostres ? "active" : "disable"}>
          {<Postres1 />}
        </div>
        </div>

        <div className='btnLast'>
        <button className="bebidas" onClick={Bebidas}>
          Bebidas
        </button>
        <div className={toggleBebidas ? "active" : "disable"}>
          {<Bebidas1 />}
        </div>
        </div>
     
    </div>
  );
}

export default OrdenMenu;