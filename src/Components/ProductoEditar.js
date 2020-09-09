import React, {useState, useEffect} from 'react';
import firebase from '../Config/firebase'
import {Form,Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';
function ProductoEditar(props){
    const history = useHistory();
    const [datos,setDatos] = useState({nombre: '', precio:'', descripcion:'', sku:''});
    useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("Productos/"+id)
            .get()
            .then(doc=>{
                setDatos( doc.data() )
                console.log(doc.data())
            })
    }, []); 
    const handleChange = (e)=>{
        //Identifica el campo donde el usuario está escribiendo y lo guarda en la variable target
        const target = e.target; 
        //Captura cada caracter ingresado, en el campo identificado anteriormente, y lo guarda en value
        const value = target.value; 
        //Captura el "name" del campo identificado y lo guarda en name
        const name = target.name;
        
        setDatos({
            ...datos,
            [name]:value
        })
    }
    const handleSubmit =  (e)=>{
        console.log(datos)
        const id = props.match.params.id;
        firebase.db.doc("Productos/"+id)
        .set({
            nombre:datos.nombre,
            precio:datos.precio,
            descripcion:datos.descripcion,
            sku:datos.sku
        },{merge:true})
        .then(doc=>{
            history.push("/GetProduct");
        })
        e.preventDefault();
    }
    const handleDelete = (e)=>{
        const id = props.match.params.id;
        console.log(id)
        firebase.db.doc("Productos/"+id)
        .delete()
        .then(doc=>{
            history.push("/ProductoEliminar");
        })
    }
    return(
        <div className='App'>
                <h4>Nuevos Datos</h4>
            <Form className="lab" onSubmit={handleSubmit}>
                
                    <Form.Group>
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control type="text" name="nombre" placeholder={datos.nombre} onChange={handleChange}></Form.Control>
                    
                    <Form.Label>Precio: </Form.Label>
                    <Form.Control type="number" name="precio" placeHolder={datos.precio} onChange={handleChange}></Form.Control>
                    
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control type="text" name="descripcion" placeHolder={datos.descripcion} onChange={handleChange}></Form.Control>

                    <Form.Label>SKU: </Form.Label>
                    <Form.Control type="number" name="sku" placeHolder={datos.sku} onChange={handleChange}></Form.Control>

                </Form.Group>
                <Form.Group>
                    <Button className='boton' type="submit">Actualizar</Button>
                    <Button className='boton' onClick={handleDelete}>Eliminar</Button>
                    <Button className='boton' as={Link} to={'/GetProduct/'}>Volver</Button>
                </Form.Group>
                
                
            </Form>
        </div>
    )
}

export default ProductoEditar;