import React, { Component } from 'react';
import { StyleSheet, View, Image, AsyncStorage, Alert } from 'react-native'
import { Container, Header, Card, CardItem, Text, Footer, FooterTab, Input, Button, Icon, Badge, Left, Body, Right, Title, Content } from 'native-base';



class ZoluMarket extends Component{


  constructor(props){
    super(props);
    this.state = { 
      carritoCompras: [],
      total:''
    }

  
  }




  async componentDidMount(){

    let datosCarrito = await AsyncStorage.getItem('carrito')

    if(datosCarrito === null){
      Alert.alert('No hay productos en tu carro de compras')
    }else{
      try{
        let productos = await AsyncStorage.getItem('carrito')
        var carrito = JSON.parse(productos);
        this.setState({carritoCompras:carrito})
  
       // Alert.alert('el carrito se cargo al state')

      }
      catch(error){
        
      }
    }
  
  }//FIN DEL COMPONENTE DIDMOUNT


  /*
  displayData = async () =>{
    try{
      let productos = await AsyncStorage.getItem('carrito')
      var carrito = JSON.parse(productos);
      this.setState({carritoCompras:carrito})

      Alert.alert('el carrito se cargo al state')
      //alert(this.state.carritoCompras);
    }
    catch(error){
      
    }
  }
*/


  deleteData = async () =>{
    try {
      await AsyncStorage.clear()
      Alert.alert('Storage successfully cleared!')
      this.setState({carritoCompras:[]})
    } catch (e) {
      Alert.alert('Failed to clear the async storage.')
    }
  }





//comenta como fue que obtuvste el key o dejalo comentado
//ahora necesitas eliminar la posicion del arreglo
// luego validar el usuario
// agregar todos los productos y las categorias



deleteProduct = async (llave)=>{

    let keyArray = llave[7]

    let posiciones = this.state.carritoCompras
    
    posiciones.splice(keyArray, 1 );

    this.setState({carritoCompras:posiciones})

    AsyncStorage.setItem('carrito', JSON.stringify(posiciones));

    //alert(posiciones.length)

    alert('El producto a sido eliminado de la lista de compra')
    
    
  }






  render() {

    const { navigation } = this.props;

    let precioTotal = 0;

    return (


      <Container style={styles.container}>




        <Header style={styles.color}>
          <Left>
              <View>
                <Image source = {require('./assets/logo.png')} style={ styles.logoHeight}/>
              </View>
          </Left>
          <Body>
            <Title></Title>
          </Body>
          <Right>
            <Input placeholder='Buscar' style={ styles.search} placeholderTextColor='#9509D6'/>
            <Image source = {require('./assets/search.png')} style={ styles.iconSearch}/>
          </Right>
        </Header>
        
        

        
        <Content style={styles.cardItemCarl}>
        <Card >
            <CardItem header bordered>
              <Text style={styles.left}>Carro de Compra</Text>
            </CardItem>

           

            {this.state.carritoCompras.map((element, key) => (
              
                <CardItem >
                  {this.testfunction=()=>{precioTotal= precioTotal+ parseInt(element.precio)}}
                  {this.testfunction()}
                    <Image source = {{ uri: element.foto }} style={ styles.logoHeight}/>
                    <Text> {element.producto}</Text>
                    <Right>
                      <Text>x({element.cantidad})   {element.precio}$   
                      <Button  
                        style={ styles.xbutton} 
                        onPress={() => this.deleteProduct(JSON.stringify({key}))}
                      >
                      <Image source = {require('./assets/x-button.png')} style={ styles.xbutton} />
                      </Button>
                      </Text>
                    </Right>
                </CardItem>
                
                    
              ))}





           </Card>
           <Right>
             <Text style={styles.left2}>Total: {precioTotal}$</Text>
            </Right>
        </Content>






















        <Content>        
            <Button full danger onPress={() => navigation.navigate('Confirmar')}>
                <Text>Procesar Pago</Text>
            </Button>

            <Button dark onPress={this.deleteData}>
                  <Text> Limpar Local Storage </Text>
                </Button>



                <Text>{this.state.carritoCompras.length}</Text>
                
        </Content>









        <Footer >
          <FooterTab style={styles.footer}>
            <Button   vertical onPress={() => navigation.navigate('Zolumarket')}>
              
              <Icon  name="apps" />
              <Text>Store</Text>
            </Button>
            <Button  vertical onPress={() => navigation.navigate('Zolufood')}>
              <Icon  name="pizza" />
              <Text>ZoluFood</Text>
            </Button>
            <Button  active badge vertical style={styles.footerBtn}>
              <Badge ><Text>51</Text></Badge>
              <Icon  active name="cart" />
              <Text>Cart</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>User</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 0
  },
  color:{
    backgroundColor: '#EDEDED',
    height: 120
  },
  logoHeight:{
    width: 100,
    height: 100,
    resizeMode:'contain' 
  }, 
  search:{
    height:20,
    borderBottomColor:'#9509D6',
    borderBottomWidth: 1,
  },
  iconSearch:{
    width: 30,
    height: 30,
    resizeMode:'contain' 
  }, 
  xbutton:{
    width: 18,
    height: 18,
    resizeMode:'contain',
    marginLeft: 10,
    backgroundColor: '#ffff'
  },
  left:{
    marginLeft: 90
  },
  left2:{
    marginLeft: 135
  },
  footer:{
    backgroundColor: '#0C6393'
  },
  footerBtn:{
    backgroundColor: '#1E85EB'
  },
  cardItemCarl:{
    height: 700
  }
})

export default ZoluMarket