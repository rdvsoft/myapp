import React, { useState } from 'react';
import firebase from '../Config/firebase';
import {Form,Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";

const Login = (props) => {
    let [usuario, setUsuario] = useState({email: '',password: ''});
    const history = useHistory(); //Defino la variable history para redireccionar la página.
    let handleLogin = (event, valor) => {
    
        firebase.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        /*En este caso si es exitoso el "logueo" con usuario y contraseña, el promise (.then) setea los cambios 
        email y password con vacío, o sea como si borrara el contenido, sino lo hacemos esto, cuando el usuario
        ingrese sus credenciales y de clic en ingresar, seguirá estando sus datos de logueo en el formulario */
        .then((data)=>{
          console.log("data",data);
          setUsuario={email:'',password:''}; //"Borra los campos email y password"
        })
        .catch(error=>{
          console.log("error",error) //En caso de haber un error despliega el mensaje en la consola. 
        })
        //event.stopPropagation();  /*Anteriormente como el evento se seguía propagando se agrego el stop */
        alert('Bienvenido');
        history.push("/GetProduct"); /*En caso de que el ingreso fuera exitoso, redirecciona a la página de catálogo de 
        productos */
      }
      /* El siguiente handleForm es para capturar cada tecla presionada por el usuario y mostrarla en el campo 
      correspondiente*/
      let handleForm = (event) => {
        setUsuario({...usuario, [event.target.name]: event.target.value});
        /* event.target.name va a representar email y la contraseña según el caso */
        /* event.target.value representa el valor ingresado por el usuario tanto en email como en contraseña*/
        /* Ambos datos son pasados como propiedad en Form.Control con name y value. name puede ser o email o password*/
        event.preventDefault();
      }
    /*El evento onChange al detectar cambios ejecutará la función flecha, que a su vez llama a handleForm y le pasa
    las propiedades name y value como parámetros*/
    /*onSubmit llamará a la función handleLogin para hacer la autenticación del usuario en la base de datos de firebase */
      return (
      
        <div className="lab">
            <Form className="lab" onSubmit={handleLogin}>
                <Form.Group>
                  <Form.Control type="text" placeholder="user@example.com" name="email" value={usuario.email} 
                  onChange={(event)=>handleForm(event)} />
                
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Contraseña" name="password" value={usuario.password} 
                  onChange={(event)=>handleForm(event)} />
                </Form.Group>
                
                <Button variant="primary" type="submit">Login</Button>

                
            </Form>
        </div>
        );
    }
export default Login;