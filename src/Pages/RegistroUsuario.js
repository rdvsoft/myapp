import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import firebase from '../Config/firebase'
import {Form,Button} from 'react-bootstrap';

const RegistroUsuario = (props) => {
  const history = useHistory();
  const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''});
      
  const handleSubmit = (e)=>{
      let email=form.email;
      let password=form.password;    
      firebase.auth.createUserWithEmailAndPassword(email, password)
      .then((data)=>{
          console.log("Usuario creado",data.user.uid)
          firebase.db.collection("usuarios").add({
              nombre: form.nombre,
              apellido: form.apellido,
              email: form.email,
              userId: data.user.uid
            })
            .then((data)=>{
                console.log(data)
                history.push("/Login");
            })
            .catch((err)=>{
              console.log(err)
              })
              history.push("/Login");
      })
      .catch((error)=>{
          console.log("Error",error)
      })
      e.preventDefault();
  }
  const handleChange = (e)=>{

    const target = e.target;
    const value = target.value
    const name = target.name;
    
    setForm({
        ...form,
        [name] : value});
  }
  return (
                <>    
                    <Form  className='lab' onSubmit={handleSubmit}>
                        <h3>Formulario de Registro</h3>  
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre Usuario" name="nombre" value={form.usuario} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" name="apellido" value={form.usuario} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="user@example.com" name="email" value={form.usuario} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="secretpassword" name="password" value={form.password} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Registrarse</Button>
                    </Form>
                </>       
  );
}
export default RegistroUsuario;