import React from 'react';
import { StyleSheet, Text, View , Dimensions, ScrollView, Image, Alert, AsyncStorage } from 'react-native';
import MapView, {Marker,  ProviderPropType} from 'react-native-maps';
import { Container, Header, Button, Content, Form, Item, Input, Label, Picker } from 'native-base';


const {width, height} = Dimensions.get('window');


const ASPECT_RATIO = width / height;
const LATITUDE = 40.7813281;
const LONGITUDE = -73.9761769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class Mapa extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      region:{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        },
        longitedlatitude:''
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
          direccion: this.state.longitedlatitude,
          codigoUnique: this.props.route.params.id
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





  onChangeValue = region =>{
    var direccion = JSON.stringify(region)
    this.setState({longitedlatitude:direccion})
    //Alert.alert(this.state.longitedlatitude)
  }

    render(){

      const { navigation } = this.props;
      const { route } = this.props;

      return(
      
        <View>
          <View>
          <Text style={{color:'#1E85EB', textAlign:'center', marginBottom:20, marginTop: 20}}>Muestranos en en el mapa la direccion donde te encuentras y haz click en el boton Enviar Pedido </Text>
          </View>
       <View styles={styles.container}>
         

         <Button full success 
          style={{bottom:180, position:'absolute', width: '100%', backgroundColor:'#9509D6', zIndex:10}} onPress={()=>this.enviarPedido()} >
            <Text style={{color:'white'}}>Enivar el pedido</Text>
          </Button>


         <MapView
         provider = {this.props.provider}
         style={styles.map}
         scrollEnabled={true}
         zoomEnabled={true}
         pitchEnabled={true}
         rotateEnabled={true}
         initialRegion={this.state.region}
         showsUserLocation={true}
         followsUserLocation={true}
         onRegionChangeComplete = {this.onChangeValue}
         >
         </MapView>
         <View style={{top:'50%', left:'50%', marginLeft:-24, marginTop:-48, position:'absolute'}}>
            <Image style={{height: 48, width: 48}} source={require('./assets/marker.png')}/>
          </View>
       </View>


       </View>

       
      
       
       
      )
    }
}

Mapa.propTypes ={
  provider: ProviderPropType
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map:{
    height: '100%',
    width: '100%'
  }
})



export default Mapa
         