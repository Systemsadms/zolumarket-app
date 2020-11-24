import React, { Component } from 'react';
import { StyleSheet, View, Image, AsyncStorage, Alert, Icon } from 'react-native'
import { Container, Header, Text, Button, Content, Form, Item, Input, Label, Spinner } from 'native-base';





class ZoluMarket extends Component{


  constructor(props){
    super(props);
    this.state = { 
      nombre:'',
      apellido:'',
      email:'',
      password:'',
      telefono:''
    }
  }


  registroUsuario =()=>{
      //fetch('http://192.168.0.108/pruebas/registro.php',{
      fetch('http://www.zolumarket.com/pruebas/registro.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        email : this.state.email,
        password: this.state.password,
        telefono: this.state.telefono
      })
      })
      .then((respuesta)=> respuesta.json())
      .then((respuestaJson) =>{
        
        //Alert.alert (respuestaJson)

        

        if(respuestaJson === 'error'){
          <Spinner color='blue' />
          Alert.alert ('Este correo electronico ya se encuentra registrado, puede recuperar su contrasena si no la recuerda')
        }
        else if(respuestaJson === 'completar'){

          Alert.alert ('Por favor complete todos los campos')
          
        }
        else if(respuestaJson === 'registrado'){
          this.loginUsuario()
          //this.props.navigation.navigate('Profile')
        }

        
      //guardo de forma local el toke
      //Aqui va el toke de local store  min:15:31
      }).catch((error)=>{
        alert(error(error))
      })
  }







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
        usuario: this.state.email,
        contrasena: this.state.password
      })
      })
      .then((respuesta)=> respuesta.json())
      .then((respuestaJson) =>{
        

          AsyncStorage.setItem('login', JSON.stringify(respuestaJson));
          
          Alert.alert('Se ha registrado de forma exitosa, ingrese con su usuario');
          this.props.navigation.navigate('Profile')

          //console.log(this.state.datosLogin);
        
      //guardo de forma local el toke
      //Aqui va el toke de local store  min:15:31
      }).catch((error)=>{
        alert(error(error))
      })


    //this.setState({login:1})
  }







  render() {

    const { navigation } = this.props;
    

    return (
      <Container >
          <Text style={styles.ingrese}>Por favor Ingrese sus Datos 2</Text>
        <Content style={styles.formulario}>
          <Form>
            <Item floatingLabel>
              <Label>Nombre</Label>
              <Input onChangeText={(nombre)=> this.setState({nombre})} />
            </Item>
            <Item floatingLabel last>
              <Label>Apellido</Label>
              <Input onChangeText={(apellido)=> this.setState({apellido})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Correo Electronico</Label>
              <Input onChangeText={(email)=> this.setState({email})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input  onChangeText={(password)=> this.setState({password})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Telefono</Label>
              <Input onChangeText={(telefono)=> this.setState({telefono})}/>
            </Item>


            <Button full style={styles.btnAceptar} onPress={this.registroUsuario}>
            <Text>Aceptar</Text>
          </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}





















const styles = StyleSheet.create({
    ingrese:{
        paddingTop: 50,
        textAlign: "center"
      },
  formulario:{
    paddingTop: 30
  },
  titulo:{
    textAlign: 'center'
  },
  btnAceptar:{
      marginTop: 70
  },
  montacancelar:{
    textAlign: 'center',
    marginBottom: 20,
    flexDirection:"row",
    backgroundColor:"red",
    paddingTop:20
  },
  montacancelarTexto:{
    textAlign: 'center',
    marginBottom: 30,
    flex:1
  },
  efectivo:{
    margin:30,
    width: 300,
    backgroundColor: "red"
  },
  efectivoButton:{
    marginLeft: 100
  },
  transferencia:{
    backgroundColor: "green",
    width: 300
  },
  transferenciaButton:{
    marginTop: 30, 
    marginLeft: 50
  },
  olvide:{
    textAlign: 'center',
    color: 'blue',
    marginTop: 60
  },
  registrate:{
    textAlign: 'center',
    color: 'blue',
    marginTop: 10
  },
  buttonLogin:{
    marginTop: 80
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