import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Image } from 'react-native';
import { Button, Container, Thumbnail } from 'native-base';



class Tab1 extends Component{

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


  render() {
    const { navigation } = this.props;
    const { listaProductos } = this.props;
    

  return (
    <ScrollView >
         

 


    <Container style={styles.container}>


          {listaProductos.map((element, key) => (
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

export default Tab1