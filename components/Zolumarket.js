import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert,AsyncStorage } from 'react-native'
import { Container, Header, Tab, Input, Tabs, ScrollableTab, Text, Footer, FooterTab, Button, Icon, Badge, Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
import Tab4 from './tabs/Tab4';
import Tab5 from './tabs/Tab5';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


class ZoluMarket extends Component{

  constructor(props){
    super();
    this.state={
      isReady: false,
      vegetales:[],
      carritoCompras: [],
      pill: 0
    }
  }


  
  async componentDidMount() { 
    let datosCarrito = await AsyncStorage.getItem('carrito')
    
    if(datosCarrito === null){
      
      this.setState({ pill: 0 });
    }else{
      var carrito = JSON.parse(datosCarrito);
      this.setState({carritoCompras:carrito})
      let carritoPill = this.state.carritoCompras.length
      this.setState({ pill: carritoPill });
      //length.carrito
    }

    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }



  ejemplo = () =>{
    return  <Text>Texto ejemplo  </Text>
  }




  artemis = () => {

    const {dato1} = this.state;
    const {dato2} = this.state;

     //fetch('http://192.168.0.108/pruebas/envio.php',{
      fetch('http://www.zolumarket.com/pruebas/envio.php',{
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
           this.setState({vegetales:respuestaJson})
           
         //guardo de forma local el toke
         //Aqui va el toke de local store  min:15:31
         }).catch((error)=>{
           alert(error(error))
         })
};


/*
artemis2 = () => {

  const {dato1} = this.state;
  const {dato2} = this.state;

   fetch('http://192.168.0.108/pruebas/categoria2.php',{
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


*/









  render() {

    const { navigation } = this.props;
    this.artemis()
    //this.artemis2()



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
        









        
        <Tabs  renderTabBar={()=> <ScrollableTab />} >
          <Tab heading="Recomendados" tabStyle={{ backgroundColor: "#1E85EB" }} activeTabStyle={{ backgroundColor: "#9509D6" }}>
            <Tab1 navigation={navigation}  listaProductos = {this.state.vegetales}    />
          </Tab>
          <Tab heading="Frutas y Verduras" tabStyle={{ backgroundColor: "#1E85EB" }} activeTabStyle={{ backgroundColor: "#9509D6" }}>
            <Tab2 navigation={navigation} />
          </Tab>
          <Tab heading="Empaquetados" tabStyle={{ backgroundColor: "#1E85EB" }} activeTabStyle={{ backgroundColor: "#9509D6" }}>
            <Tab3 navigation={navigation}/>
          </Tab>
          <Tab heading="Carnes" tabStyle={{ backgroundColor: "#1E85EB" }} activeTabStyle={{ backgroundColor: "#9509D6" }}>
            <Tab4 navigation={navigation}/>
          </Tab>
         {/* <Tab heading="Bebidas" tabStyle={{ backgroundColor: "orange" }} activeTabStyle={{ backgroundColor: "blue" }}>
            <Tab5 navigation={navigation}/>
          </Tab> */}
        </Tabs>




        <Footer >
          <FooterTab style={styles.footer} >
            <Button active  vertical style={styles.footerBtn}>
              <Icon active name="apps" />
              <Text>Store</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate('Zolufood')} >
              <Icon name="pizza" />
              <Text>ZoluFood</Text>
            </Button>
            <Button  badge vertical onPress={() => navigation.navigate('Cart')}>
        <Badge ><Text>{this.state.pill}</Text></Badge>
              <Icon  name="cart" />
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
  color:{
    backgroundColor: '#EDEDED',
    height: 120
  },
  footer:{
    backgroundColor: '#0C6393'
  },
  footerBtn:{
    backgroundColor: '#1E85EB'
  }
})

export default ZoluMarket