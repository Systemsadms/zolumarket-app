import React, {Component} from 'react'
import {FlatList, View, Text, StyleSheet, ScrollView} from 'react-native'
import List from './components/List'


class ZoluMarket extends Component{


  constructor(props){

    const peliculas = [
      {name: 'Cosmos', key: '0'},
      {name: 'BigBangTheory', Key: '1'},
      {name: 'ET', Key: '2'}]

      const so = [
        {name: 'ioskjhsdfnlsdlifskndflksdf.sdf;sn;dkfdsf', key: '0'},
        {name: 'andriod;osjdf;skdf;lks;dfl;sdf;sldmfl;sdl;f', Key: '1'},
        {name: 'widowssjdfjsdjfsjdfs;ljdfjsl;djg;sjg;dj;jgsjdg', Key: '2'}]

    super(props);
    this.state={
      misPeliculas:so
    }
  }

  

  separador=()=>{
    return(
      <View style={{
        height: 5,
        width: "100%",
        backgroundColor: "black",
        marginVertical:10
      }}>

      </View>
    )
  }

render(){
      return(

        <View style={styles.container}>
          <Text>Lista De Categorias</Text>
        <ScrollView>

          <FlatList
              data = {this.state.misPeliculas}
              renderItem = { ({item}) => <List data={item} /> }
              horizontal = {true}
              
          ></FlatList>
        </ScrollView>
      </View>
        
      )
    }
  }



  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'red',
      flexDirection: 'column',
      marginTop: 26
    }
  })


export default ZoluMarket