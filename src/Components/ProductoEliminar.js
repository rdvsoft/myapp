import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ProductoEliminar(props){
    const [sms,setMensaje] = useState({mensaje: 'Producto Eliminado Correctamente', boton:'Volver'});
           
    return(
        <div className='App'>
           <p>{sms.mensaje}</p>   
           <Button className='boton' as={Link} to={'/GetProduct/'}>Volver</Button>       
        </div>
    )
}
export default ProductoEliminar;