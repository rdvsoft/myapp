import React, {useState,} from 'react';
import firebase from '../Config/firebase'
import {Form,Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
function ProductoAlta(){
    const history = useHistory();
    const [datos,setDatos] = useState({nombre: '', precio:'', descripcion:'', sku:''});
    const [mensaje,setMensaje] = useState({
        sms: 'Ingrese los datos para dar de alta a un producto', 
        opcionBoton:'Guardar'})
    const handleChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setDatos({
            ...datos, 
            [name]:value
        })
    }
    const handleSubmit = (e)=>{
        console.log("aha",datos);
        firebase.db.collection('Productos').add(datos)
        .then(doc=>{console.log(doc)})
        e.preventDefault();
        history.push("/GetProduct");   

        
    }
    return(
        
            <Form className="lab" onSubmit={handleSubmit}>
                <h3>{mensaje.sms}</h3>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre específico del producto: ej. Mouse" name="nombre" value={datos.nombre} onChange={handleChange} />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="Valor en pesos: ej. 500" name="precio" value={datos.precio} onChange={handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción general del producto" name="descripcion" value={datos.descripcion} onChange={handleChange} />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>SKU</Form.Label>
                    <Form.Control type="number" placeholder="Número sku: ej. 2" name="sku" value={datos.sku} onChange={handleChange} />
                </Form.Group>

                <Button type="submit" value="Guardar"> {mensaje.opcionBoton} </Button>
                
            </Form>
    )





}
export default ProductoAlta;