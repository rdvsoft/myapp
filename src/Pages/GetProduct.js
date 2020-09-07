import React,{Component} from 'react';
import firebase from '../Config/firebase'
import ProductosMostrar from '../Components/ProductosMostrar'
class GetProduct extends Component{
    constructor(props){
        super(props)
        this.state={
            productos:[]
        }
    }
    componentDidMount(){
       firebase.db.collection('Productos')
      .get()
      .then(querySnapshot=>{
        console.log("query",querySnapshot.docs)
        this.setState({
            productos:querySnapshot.docs
        })
       })
    }
    //{this.state.productos.map (ident=> ident.data().nombre)} esto sería para ver los datos desde éste js
    render(){

        return (
            <>
            
                <div className='App'>
                    
                    {this.state.productos.map(producto=>
                    
                    <ProductosMostrar key={producto.id} id={producto.id} data={producto.data()} detalleButtons={true} detProd={false}/>)}
                </div>
                
          </>
        )
    }
}

export default GetProduct;