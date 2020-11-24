import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Container, Thumbnail } from 'native-base';

class Tab1 extends Component{
  render() {
    const { navigation } = this.props;
  return (
    <ScrollView >
    <Container style={styles.container}>
      
      <Button style={styles.containerProduct} onPress={() => navigation.navigate('Producto')}>
        <Thumbnail style={styles.containerImage} square source={{ uri: 'https://www.lavanguardia.com/files/image_948_465/uploads/2018/09/18/5e9982629f0a8.jpeg' }} />
        <Text style={styles.textoTitulo}>Nombre del Producto</Text>
        <Text>$73</Text>
      </Button>

      <Button style={styles.containerProduct} onPress={() => navigation.navigate('Producto')}>
        <Thumbnail style={styles.containerImage} square source={{ uri: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/10/apio-y-sus-propiedades.jpg' }} />
        <Text style={styles.textoTitulo}>Nombre del Producto</Text>
        <Text>$73</Text>
      </Button>

      <Button style={styles.containerProduct} onPress={() => navigation.navigate('Producto')}>
        <Thumbnail style={styles.containerImage} square source={{ uri: 'https://cdn.potatopro.com/sites/default/files/styles/1200_wide/public/field/image/argenpapa1.jpg?itok=NWWFFJ65' }} />
        <Text style={styles.textoTitulo}>Nombre del Producto</Text>
        <Text>$73</Text>
      </Button>



    
      
     
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