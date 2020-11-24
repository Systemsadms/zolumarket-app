
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, Alert} from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Label, Button, Form  } from 'native-base';

class ZoluMarket extends Component{

  constructor(props){
    super(props);
    this.state = { 
      login: 0,
      datosLogin:[],
      user:'',
      password:''
    }
  }

  async componentDidMount(){

    let loginUser = await AsyncStorage.getItem('login')

    if(loginUser === null){
      Alert.alert('Por favor ingrese con su usuario registrado')
    }else{
      
        this.setState({login:1})
        var saveDataLogin = JSON.parse(loginUser);
        this.setState({datosLogin: saveDataLogin})

        //var test = this.state.datosLogin[0]

        Alert.alert('Hola '+ this.state.datosLogin['nombre'])
        console.log(this.state.datosLogin)
    }    
  }// Fin de DidMount



















  loginUsuario =()=>{
    //this.props.navigation.navigate('Confirmar')

    const {user} = this.state;
    const {password} = this.state;

    //fetch('http://192.168.0.108/pruebas/login.php',{
    fetch('http://www.zolumarket.com/pruebas/login.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        usuario: user,
        contrasena: password
      })
      })
      .then((respuesta)=> respuesta.json())
      .then((respuestaJson) =>{
        

        if(respuestaJson === 'rejected')
        {
          Alert.alert ('Usuario o contrasena invalido')
        }
        else if (respuestaJson === 'complete')
        {
          Alert.alert ('Complete los datos')
        }
        else
        {
          this.setState({datosLogin:respuestaJson})
          this.setState({login:1})

          AsyncStorage.setItem('login', JSON.stringify(respuestaJson));
          Alert.alert('Datos de Login Guardados');
          console.log(this.state.datosLogin);
        }
      //guardo de forma local el toke
      //Aqui va el toke de local store  min:15:31
      }).catch((error)=>{
        alert(error(error))
      })


    //this.setState({login:1})
  }










  cerrarSession= async ()=>{
    try {
      await AsyncStorage.clear()
      Alert.alert('Storage successfully cleared!')
      this.setState({login:0})
    } catch (e) {
      Alert.alert('Failed to clear the async storage.')
    }
  }












  ventana =()=>{
    let login = this.state.login
    const { navigation } = this.props

    if (login === 0){
      return(
        <Content>

          <Text style={styles.titulo}>Ingresa con tu Usuario</Text>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(user)=> this.setState({user})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(password)=> this.setState({password})} />
            </Item>
          </Form>
          <Button full style={styles.buttonLogin} onPress={this.loginUsuario}>
            <Text>Ingresar</Text>
          </Button>

          <Text style={styles.registrate} onPress={() => navigation.navigate('Registra tu Usuario')}>Registrate</Text>
          <Text style={styles.olvide}>Olvide mi contraseña</Text>
        </Content>
      )//Fin de Return
            
    }else {
      return(
        <Content>
      <View style={styles.foto}>
                <Image source = {require('./../assets/eeboy.png')} style={ styles.logoHeight}/>
      </View>

      <Item success>
        <Label>Nombre: </Label>
          <Input placeholder={this.state.datosLogin['nombre']}/>
        <Icon name='checkmark-circle' />
      </Item>
      <Item success>
        <Label>Telefono: </Label>
          <Input placeholder={this.state.datosLogin['telefono']}/>
        <Icon name='checkmark-circle' />
      </Item>
      <Item success>
        <Label>Pais: </Label>
          <Input placeholder={this.state.datosLogin['pais']}/>
        <Icon name='checkmark-circle' />
      </Item>
      <Item success>
        <Label>Direccion: </Label>
          <Input placeholder={this.state.datosLogin['direccion']}/>
        <Icon name='uncheckmark-circle' />
      </Item>
      <Item success>
        <Label>Email: </Label>
          <Input placeholder={this.state.datosLogin['email']}/>
        <Icon name='checkmark-circle' />
      </Item>

      <Button block danger style={styles.margin} onPress={this.cerrarSession}>
            <Text>Cerrar Session</Text>
          </Button>
      
    </Content>
      )//Fin de Return
    }
  }





  render() {
    const { navigation } = this.props
    return (
      <Content>{this.ventana()}</Content>
    )
  }
}


const styles = StyleSheet.create({
  foto: {
    flex: 1,
    backgroundColor: '#CCC',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  logoHeight:{
    width: 150,
    height: 150,
    resizeMode:'contain'
  },
  margin:{
    marginTop: 30
  },
  titulo:{
    textAlign: 'center',
    marginTop: 100
  },buttonLogin:{
    marginTop: 80
  },
  olvide:{
    textAlign: 'center',
    color: 'blue',
    marginTop: 10
  },
  registrate:{
    textAlign: 'center',
    color: 'blue',
    marginTop: 60
  }
});

export default ZoluMarket