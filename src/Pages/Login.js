import React, { useState } from 'react';
import firebase from '../Config/firebase';
import {Form,Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";

const Login = (props) => {
    let [usuario, setUsuario] = useState({email: '',password: ''});
    const history = useHistory();
    let handleLogin = (event, valor) => {
    
        firebase.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then((data)=>{
          console.log("data",data);
          setUsuario={email:'',password:''};
        })
        .catch(error=>{
          console.log("error",error)
        })
        event.stopPropagation();
        alert('Bienvenido');
        history.push("/GetProduct");
      }
      let handleForm = (event) => {
        setUsuario({...usuario, [event.target.name]: event.target.value});
        event.preventDefault();
      }
    
      return (
      
        <div className="lab">
            <Form className="lab" onSubmit={handleLogin}>
                <Form.Group>
                  <Form.Control type="text" placeholder="user@example.com" name="email" value={usuario.email} onChange={(event)=>handleForm(event)} />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Contraseña" name="password" value={usuario.password} onChange={(event)=>handleForm(event)} />
                </Form.Group>
                
                <Button variant="primary" type="submit">Login</Button>

                
            </Form>
        </div>
        );
    }
export default Login;