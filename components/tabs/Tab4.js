import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Image } from 'react-native';
import { Button, Container, Thumbnail } from 'native-base';



class Tab2 extends Component{

  constructor(props){
    super();
    this.state={
      cereales:[]
    }
  }

  /*
  list =()=>{

    const { lista } = this.props;
    
    return lista.map(producto => {
      return (
        <View style={{ margin: 10 }}>
          <Text>{producto.nombre}</Text>
          <Text>{producto.descripcion}</Text>
        </View>
      );
    })
  }
*/


artemis2 = () => {

  const {dato1} = this.state;
  const {dato2} = this.state;

   //fetch('http://192.168.0.108/pruebas/carnes.php',{
    fetch('http://www.zolumarket.com/pruebas/carnes.php',{
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         cucharilla1: 'Categoria',
         cucharilla2: 'Algun dato'
       })
       })
       .then((respuesta)=> respuesta.json())
       .then((respuestaJson) =>{
         //var arregloServer = JSON.stringify(respuestaJson)
         this.setState({cereales:respuestaJson})
         
       //guardo de forma local el toke
       //Aqui va el toke de local store  min:15:31
       }).catch((error)=>{
         alert(error(error))
       })
};



  render() {
    const { navigation } = this.props;
   // const { listaProductos } = this.props;
    
   this.artemis2()

  return (
    <ScrollView >
         

 


    <Container style={styles.container}>


          {this.state.cereales.map((element, key) => (
            <Button style={styles.containerProduct} onPress={() => navigation.navigate('Producto', {id:key, nombre: element.producto, descripcion: element.descripcion, precio: element.precio, foto: element.foto  })}>
            <Thumbnail style={styles.containerImage} square source={{ uri: element.foto }}/>
            <Text style={styles.textoTitulo}>{element.producto}</Text>
            <Text>{element.precio}$</Text>
            {/*<Text key={key}>{key}</Text>*/}
            </Button>
          ))}



     
    </Container>
    </ScrollView>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap', 
  },
  containerProduct:{
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 5,
    marginLeft: 2,
    width:116,
    height: 170
  },
  containerImage:{
    width:100,
    height: 100
  }, 
  textoTitulo:{
    textAlign: 'center'
  }

});

export default Tab2