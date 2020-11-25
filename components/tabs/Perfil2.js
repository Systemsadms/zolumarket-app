import React from 'react';
import { StyleSheet, Text, View , Dimensions, ScrollView, Image } from 'react-native';
import MapView, {Marker,  ProviderPropType} from 'react-native-maps';


const latitudeDelta = 0.025
const longitudeDelta = 0.025

class Mapa extends React.Component{

 
  state = {
    region:{
        latitudeDelta,
        longitudeDelta,
        latitude: 33.7444613,
        longitude: -118.3878173,
      }
  }

  onChangeValue=()=>{
    alert(JSON.stringify(region))
    this.setState({
      region
    })
  }

    render(){
      return(
       <View styles={{flex:1}}>
         <MapView
         style={styles={flex:1}}
         initialRegion={this.state.region}
         onRegionChangeComplete = {this.onChangeValue}
         />
          <View style={{top:'50%', left:'50%', marginLeft:-24, marginTop:-48, position:'absolute'}}>
            <Image style={{height: 48, width: 48}} source={require('./../assets/eeboy.png')}/>
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
         