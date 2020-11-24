import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Button, Text, View, Icon, Picker, Form } from 'native-base';



export default class ButtonBlockExample extends Component {

 
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    const { navigation } = this.props;
    return (

      <Container style={ styles.Container}>
        
        <Content >

            <View style={ styles.listaPaises}>
              <Form>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your SIM"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="¿Donde Estas?" value="key0" color="#9509D6"/>
                  <Picker.Item label="Republica Dominicana" value="key1" />
                  <Picker.Item label="Cumulo Local" value="key2" />
                </Picker>
              </Form>
            </View>





            <View style={ styles.logo}>
                <Image source = {require('./assets/logo.png')} style={ styles.logoHeight}/> 
            </View>
            <View >
              <Button block light style={ styles.btnEntrar}>
                  <Text style={ styles.colorTexto} onPress={() => navigation.navigate('Zolumarket')}>Comenzar</Text>
              </Button>
            </View>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({


  Container:{
    alignItems:'center',
    justifyContent: 'center'
  },
  listaPaises:{
    marginTop: 80,
    width: 180,
    marginLeft: 60
  },
  logoHeight:{
    height: 250,
    flex: 1,
    width: null,
    marginTop: 90
  },
   btnEntrar:{
    width:250,
    height: 50,
    alignItems:'center',
    borderRadius:5,
    marginTop: 120,
    backgroundColor: '#9509D6'
  },
  colorTexto:{
    color:'white'
  }

})
