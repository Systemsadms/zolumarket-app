import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert, AsyncStorage } from 'react-native'
import { Container, Header, Card, CardItem, Text, Thumbnail, Button, Icon, Badge, Left, Body, Right, Title, Content } from 'native-base';





class ZoluMarket extends Component{

  

  constructor(props){
    super(props);
    this.state = { 
      cantiadad: 1, 
      precio : this.props.route.params.precio,
      /*dataPush:[
        {
        producto:'name',
        cantidad: 'number'
      },
      {
        producto:'name2',
        cantidad: 'number'
      }
    ],
    test: 'testing'*/
    }
  }



  aumentar =() =>{

    let estado = parseInt(this.state.precio);
    let costo = parseInt(this.props.route.params.precio);
    
    this.setState({
      cantiadad : this.state.cantiadad +1,
      precio : estado + costo
    })
  }



  disminuir =() =>{

    let estado = parseInt(this.state.precio);
    let costo = this.props.route.params.precio;

    if(this.state.cantiadad >+ 1){
      this.setState({
        cantiadad : this.state.cantiadad -1,
        precio : estado - costo
      })
    }
  }


 
  
  saveData= async()=>{

    let storageCarrito =  await AsyncStorage.getItem('carrito')

        if ( storageCarrito === null) {
            

            
                    let arregloProductos = [
                      {
                      id: this.props.route.params.id,
                      foto: this.props.route.params.foto,
                      producto: this.props.route.params.nombre,
                      cantidad: this.state.cantiadad,
                      precio: this.state.precio
                    }
                  ];

                  AsyncStorage.setItem('carrito', JSON.stringify(arregloProductos));

                   
                  Alert.alert('Se agrego al carrito de compra')

        }else{
           

                var carrito = JSON.parse(storageCarrito);

                carrito.push({
                  id: this.props.route.params.id,
                  foto: this.props.route.params.foto,
                  producto: this.props.route.params.nombre,
                  cantidad: this.state.cantiadad,
                  precio: this.state.precio
                  });
            
                 

                 AsyncStorage.setItem('carrito', JSON.stringify(carrito));
                


                 Alert.alert('Se agrego al carrito de compra')
        }
  }// FIN DE LA FUNCION SAVE STATE DATA

















  render() {

    const { navigation } = this.props;
    const { route } = this.props;
    
   






    
    return (
      <Container style={styles.container}>

       
        
        
<Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source = {require('./assets/logo.png')} style={styles.logoHeight}/>
                <Body>
                    <Text >{route.params.nombre}</Text>
                    <Text note>Producto ID: {route.params.id}</Text>                  
                  
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image  style={{height: 200, width: 325, flex: 1}}  source={{ uri: route.params.foto }}/>
                <Text style={styles.justify}>
                  {route.params.descripcion}
                </Text>
                <Right>
                    <Button bordered success>
                      <Text>{this.state.precio}$</Text>
                    </Button>
                </Right>


                <Text style={{marginLeft: 120, marginTop: 20}}>Cantiadad</Text>


                <View style={styles.botones}>
                  <View><Button dark onPress={this.disminuir}><Text> - </Text></Button></View>
                  <View>
                    <Button disabled bordered>
                      <Text>{this.state.cantiadad}</Text>
                    </Button>
                  </View>
                  <View><Button dark onPress={this.aumentar} ><Text> + </Text></Button></View>
                </View>




              </Body>
            </CardItem>
            <CardItem>

              <Right style={styles.margin}>
                <Button full danger onPress={this.saveData} style={{backgroundColor:'#9509D6'}}>
                  <Text>Add to Cart</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>


         
 



          
        </Content>


        
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    
  },
  botones:{
    flex : 1,
    flexDirection : 'row',
    marginLeft: 90
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