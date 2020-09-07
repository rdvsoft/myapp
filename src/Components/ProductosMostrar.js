import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {Form,Button} from 'react-bootstrap';

function ProductosMostrar(props) {
  //console.log(props)
  const [compra, setCompra] = useState('');
  
  return (
    <Form>
      
      <div className='presentacion'>{compra}</div>
        <Form.Group className='presentacion'>
            <h2>{props.data.nombre}</h2>
            <p id='precio'>Precio: ${props.data.precio}</p>
            {props.detProd ===true && 
              <p id='descripcion'>Descripcion: {props.data.descripcion}</p>
            }
            {props.detProd ===true && 
              <p id='descripcion'>SKU: {props.data.sku}</p>
            }
        </Form.Group>
        <Form.Group>
            <Button className='boton' onClick={() => setCompra(<p>Gracias por comprar: {props.data.nombre}</p>)}>Comprar</Button>
            {props.detalleButtons && 
              <Button className='boton' as={Link} to={'/Productodetalle/'+props.id}> Ver detalle</Button>
            }
            {props.detalleButtons && 
            <Button className='boton' as={Link} to={'/ProductoEditar/'+props.id}>Editar</Button>
            }
            
        </Form.Group>
    </Form>

  );
}

export default ProductosMostrar;