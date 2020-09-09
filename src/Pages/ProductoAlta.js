import React, {useState,} from 'react';
import firebase from '../Config/firebase'
import {Form,Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
function ProductoAlta(){
    /* Con useHistory habilito la navegación interna entre páginas */
    const history = useHistory();
    /* Creo una variable de estado "datos" */
    const [datos,setDatos] = useState({nombre: '', precio:'', descripcion:'', sku:''});
    const [mensaje,setMensaje] = useState({
        /*Mensaje por medio de sms y opcionBoton tiene los mensajes que se desplegarán en el formulario de alta
        y en el boton de guardado */
        sms: 'Ingrese los datos para dar de alta a un producto', 
        opcionBoton:'Guardar'})

    /*Utilizo la función handleChange para detectar y capturar los datos ingresados por el usuario al completar 
    los datos del nuevo producto */
    const handleChange = (e) =>{
        //Identifica el campo donde el usuario está escribiendo y lo guarda en la variable target
        const target = e.target;
        console.log("valor de target",target);
        /*Captura cada caracter ingresado, en el campo identificado anteriormente, y lo guarda en value, como
        nombre, precio, descripción, sku */
        const value = target.value;
        console.log("valor de value",value);
        /*Con target.name capturo el nombre del campo donde se está escribiendo, sería el name del Form.Control */
        const name = target.name;
        console.log("el valor de name es",name);
        setDatos({
            ...datos, 
            [name]:value
        })
    }
    /*Cuando se ejecuta el onSubmit del formulario se llama a la función handleSubmit, que lo que hace es agregar a la
    colección "Productos" un nuevo producto */
    const handleSubmit = (e)=>{
        console.log("Datos del producto enviados por usuario:",datos);
        firebase.db.collection('Productos').add(datos)
        /*Una vez que agrega los datos uso una promesa para verificar si salió todo bien*/
        .then(doc=>{console.log("datos agregados",doc)})
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