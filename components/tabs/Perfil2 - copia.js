import React from 'react';
import { StyleSheet, Text, View , Dimensions, ScrollView, Image } from 'react-native';
import MapView, {Marker,  ProviderPropType} from 'react-native-maps';


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
        longitedlatitude:[]
    }
  }


  onChangeValue = region =>{
    //alert(JSON.stringify(region))
    this.setState({longitedlatitude:region})
    console.log(this.state.longitedlatitude.latitude)
  }

    render(){
      return(
       <View styles={styles.container}>
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
            <Image style={{height: 48, width: 48}} source={require('./../assets/marker.png')}/>
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
         