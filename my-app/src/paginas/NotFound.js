import React from 'react'

export default class NotFound extends React.Component{
    constructor(props){
    super(props);
    this.state={}
    };
   render(){
     return( 
        <div className='notFound'>
            <h1 className='letter'> 404: Not Found </h1>
            <p>Pagina no encontrada, verifique la direccion</p>
    </div>
        )
   }
}