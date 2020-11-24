import React from 'react'
import { View, Text } from 'react-native'



function List(props){

    

      return(

        <View style={{marginTop: 30}}>
          <Text>{props.data.name}</Text>
        </View>
      )
  }




export default List