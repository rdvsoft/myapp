import React, {useState, useEffect} from 'react';
import ProductosMostrar from './ProductosMostrar';
import firebase from '../Config/firebase';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
const ProductoDetalle = (props)=> {
      const [producto,setProducto] = useState({})
      useEffect(
        () => {
            firebase.db.doc("Productos/"+props.match.params.id)
            /*Para consultar un único documento hay que usar .doc */
            .get()
            .then(doc=>{
              setProducto(doc.data())
            })
            
      }, []); 
   
    return (
        <>
        
        {
            producto && 
            <div>

                <ProductosMostrar data={producto} detalleButtons={false} detProd={true}/>
                <Button className='boton' as={Link} to={'/GetProduct/'}>Volver</Button>
                
            </div>
        }
         </>
        
    )
    
    
}


export default ProductoDetalle;