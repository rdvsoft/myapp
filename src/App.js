import React from 'react';
import {Route} from 'react-router';
import Login from './Pages/Login';
import ProductoDetalle from './Components/ProductoDetalle';
import Home from './Pages/Home';
import RegistroUsuario from './Pages/RegistroUsuario';
import Menu from './Layout/Menu';
import ProductosMostrar from './Components/ProductosMostrar';
import ProductoEditar from './Components/ProductoEditar';
import ProductoAlta from './Pages/ProductoAlta';
import GetProduct from './Pages/GetProduct';
import ProductoEliminar from './Components/ProductoEliminar';
function App() {

  return (
    <>
    <Menu/>
      <Route path='/' exact component={Home}></Route>
      <Route path='/Home' exact component={Home}></Route>
      <Route path='/Login' exact component={Login}></Route>
      <Route path='/Components/ProductosMostrar' exact component={ProductosMostrar}></Route>
      <Route path='/ProductoDetalle/:id' exact component={ProductoDetalle}></Route>
      <Route path='/RegistroUsuario' exact component={RegistroUsuario}></Route>
      <Route path='/ProductoAlta' exact component={ProductoAlta}></Route>
      <Route path='/ProductoEditar/:id' component={ProductoEditar}></Route>
      <Route path='/GetProduct' exact component={()=><GetProduct/>}></Route>
      <Route path='/ProductoEliminar/' component={ProductoEliminar}></Route>
    </>
  );
}
export default App;
