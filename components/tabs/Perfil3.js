import React, { Component } from "react";
import { StyleSheet, Alert, AsyncStorage } from 'react-native';
import { Text, Container, Content,View, Form, Label, Input, Item, Button, Icon, Header, ListItem, Left, Body, Right, Switch  } from "native-base";

 class PickerWithIcon extends Component {
 
  constructor(props){
    super(props);
    this.state = { 
      login: 0,
      datosLogin:[],
      datosPagos:[]
    }
  }

  async componentDidMount(){

    let loginUser = await AsyncStorage.getItem('login')

    // console.log(loginUser)
      
    if(loginUser === null){
      Alert.alert('Por favor ingrese con su usuario registrado')
    }else{
      
        this.setState({login:1})

        var saveDataLogin = JSON.parse(loginUser);
        this.setState({datosLogin: saveDataLogin})
        //console.log(this.state.loginUser.email)
        console.log(this.state.datosLogin)  
    }   

  }// Fin de DidMount





mostrarPagos=()=>{
  //fetch('http://192.168.0.108/pruebas/pagos_realizados.php',{
    fetch('http://www.zolumarket.com/pruebas/pagos_realizados.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        usuario: this.state.datosLogin.email
      })
      })
      .then((respuesta)=> respuesta.json())
      .then((respuestaJson) =>{
        
        this.setState({datosPagos:respuestaJson});
        //console.log(respuestaJson);

      //guardo de forma local el toke
      //Aqui va el toke de local store  min:15:31
      }).catch((error)=>{
        alert(error(error))
      })



      let arregloId = this.state.datosPagos


     
     

      return(
        <View>
            {this.state.datosPagos.map((element, key)=>(
              <View>
                <ListItem icon>
                  <Left>
                    <Button style={{ backgroundColor: "#FF9501" }}>
                      <Icon active name="bookmarks" />
                    </Button>
                    <Text>#{element.id} </Text>
                  </Left>
                  <Body>
                    <Text>Monto:{element.monto}$</Text>
                  </Body>
                  <Right>
                    <View>
                      <Text>Estatus:{element.estatus}</Text>
                    </View>
                  </Right>
                  </ListItem>
                <Text note style={{ textAlign: "center" }}>{element.fecha}</Text>
              </View>
              ))}
        </View>
        )
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

         

          <Text style={styles.registrate} onPress={() => navigation.navigate('Registra tu Usuario')}>Registratee</Text>
          <Text style={styles.olvide}>Olvide mi contraseña</Text>


        </Content>
      )//Fin de Return
            
    }else {
      return(
        <Container>
          {this.mostrarPagos()}
        </Container>
      )//Fin de Return
    }
  }



  





  render() {
    return (
    <View>
      
      <Content>{this.ventana()}</Content>
    </View>
    );
  }
}






const styles = StyleSheet.create({
  titulo: {
    flex: 1,
    backgroundColor: '#ccc',
    marginTop: 25,
    textAlign: 'center'
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
})

export default PickerWithIcon