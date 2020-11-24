import React, { Component } from 'react';
import { StyleSheet, View, Image, AsyncStorage, Alert, Icon } from 'react-native'
import { Container, Header, Text, Button, Content, Form, Item, Input, Label, Picker } from 'native-base';





class ZoluMarket extends Component{


  constructor(props){
    super(props);
    this.state = { 
      login: 0
    }
  }



enviarPedido= async()=>{
  try {
    await AsyncStorage.removeItem('carrito');
    


    //fetch('http://192.168.0.108/pruebas/delivery.php',{
    fetch('http://www.zolumarket.com/pruebas/delivery.php',{

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latitud: 'latitud',
        longitud: 'longitud'
        
      })
      })
      .then((respuesta)=> respuesta.json())
      .then((respuestaJson) =>{
        
          console.log(respuestaJson)
          this.props.navigation.navigate('Profile')  
        
      //guardo de forma local el token
      //Aqui va el token de local store  min:15:31
      }).catch((error)=>{
        alert(error(error))
      })
    
}
catch(exception) {
    return false;
}
  
}



  render() {

    const { navigation } = this.props;
    

    return (
      <Container style={styles.container}>
        <Text>El pago fue reportado con exito</Text>
        <Text>Indiquenos la direccion de entrega</Text>
        <Text>Mapa</Text>
        <Text>Mapa</Text>
        <Text>Mapa</Text>
        <Button full success onPress={this.enviarPedido}>
            <Text>Enivar el pedido</Text>
          </Button>
      </Container>
    );
  }
}





















const styles = StyleSheet.create({
  container:{
    paddingTop: 100
  },
  titulo:{
    textAlign: 'center'
  },
  montacancelar:{
    textAlign: 'center',
    marginBottom: 20,
    flexDirection:"row",
    backgroundColor:"red",
    paddingTop:20
  },
  montacancelarTexto:{
    textAlign: 'center',
    marginBottom: 30,
    flex:1
  },
  efectivo:{
    margin:30,
    width: 300,
    backgroundColor: "red"
  },
  efectivoButton:{
    marginLeft: 100
  },
  transferencia:{
    backgroundColor: "green",
    width: 300
  },
  transferenciaButton:{
    marginTop: 30, 
    marginLeft: 50
  },
  olvide:{
    textAlign: 'center',
    color: 'blue',
    marginTop: 60
  },
  registrate:{
    textAlign: 'center',
    color: 'blue',
    marginTop: 10
  },
  buttonLogin:{
    marginTop: 80
  },
  logoHeight:{
    width: 45,
    height: 45,
    resizeMode:'contain' 
  }, 
  color:{
    backgroundColor: 'orange'
  },
  left:{
    marginLeft: 90
  },
  justify:{
    textAlign : 'justify',
    marginBottom: 20
  },
  margin:{
    marginLeft:60
  }
})

export default ZoluMarket