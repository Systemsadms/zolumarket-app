import React, { Component } from 'react';
import { StyleSheet, View, Image, AsyncStorage, Alert, Icon } from 'react-native'
import { Container, Header, Text, Button, Content, Form, Item, Input, Label, Picker } from 'native-base';





class ZoluMarket extends Component{


  constructor(props){
    super(props);
    this.state = { 
      login: 0,
      user:'',
      password:'',
      datosLogin:[],
      carritoCompras: [],
      selected2: undefined,
      banco:'',
      transfer: '',
      fecha:''
    }
  }



  async componentDidMount(){

    let userLogin = await AsyncStorage.getItem('login')
    let productos = await AsyncStorage.getItem('carrito')

    if (productos === null){
      Alert.alert('No Posee articulos en su carro de compras')
    }else{
      var carrito = JSON.parse(productos);
      this.setState({carritoCompras:carrito})
    }
    

    if(userLogin === null){
      Alert.alert('Por favor inicia session con tu cuenta')
      //console.log(this.state.login)
    }else{
      this.setState({login:1})
      var saveDataLogin = JSON.parse(userLogin);
      this.setState({datosLogin: saveDataLogin})
      //Alert.alert('Hay una session iniciada')

      //Ojo// las siguientes tres lineas de codigo se colocaron al principio del didMount para que diera tiempo de cargarlas al hacer login
      //let productos = await AsyncStorage.getItem('carrito')
      //var carrito = JSON.parse(productos);
      //this.setState({carritoCompras:carrito})


      console.log(this.state.carritoCompras)
      
    


    }

  }//FIN DEL COMPONENTE DIDMOUNT


















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
          Alert.alert ('Usuario o contrasena valido')
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
          console.log(this.state.login);
        }
      //guardo de forma local el toke
      //Aqui va el toke de local store  min:15:31
      }).catch((error)=>{
        alert(error(error))
      })


    //this.setState({login:1})
  }


















  sumarPrecios=()=>{
    
    let precioTotal = 0;

    this.state.carritoCompras.map((element, key) => (
      precioTotal= precioTotal+ parseInt(element.precio)
      
   ))
   return precioTotal
  }






















procesarPagos =(e)=>{
  let tipoPago = e
  let banco = this.state.banco
  let transferRef = this.state.transfer
  let fecha = this.state.fecha
  
  //Alert.alert(e)

  const factura = this.state.carritoCompras
  const usuario = this.state.datosLogin['email']

  

 // console.log (usuario)

  //Conexion con e Servidor

  //fetch('http://192.168.0.108/pruebas/pagos.php',{
   fetch('http://www.zolumarket.com/pruebas/pagos.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        datosfactura: factura,
        datosusuario: usuario,
        tipoPago : e,
        banco: banco,
        referencia: transferRef,
        fecha: fecha
      })
      })
      .then((respuesta)=> respuesta.json())
      .then((respuestaJson) =>{
        

        if(respuestaJson === 'rejected'){
          Alert.alert ('Usuario no valido')
        }else{
          //this.setState({datosLogin:respuestaJson})
           
          console.log(respuestaJson)
          this.props.navigation.navigate('Pago')
         
        }
      //guardo de forma local el toke
      //Aqui va el toke de local store  min:15:31
      }).catch((error)=>{
        alert(error(error))
      })

  //this.props.navigation.navigate('Pago')
}



















  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }





datosDePago=()=>{
  let modoDePago = this.state.selected2

  if(modoDePago ==='Key0'){
    return(
      <Text>Formulario Datos 0</Text>
    )
  }else if(modoDePago ==='key1'){
    return(
      <View>
        <Text style={styles.efectivo}>Realizare el pago en efectivo al momento de recibir el pedido</Text>
        <Button rounded success style={styles.efectivoButton} onPress={()=>this.procesarPagos('efectivo')}>
            <Text>Procesar Pago</Text>
          </Button>
      </View>
    )
  }else if(modoDePago ==='key2'){
    return(
      <View style={styles.transferencia}>
        <Content>
        <Form>
            <Item stackedLabel>
              <Label>Banco</Label>
              <Input onChangeText={(banco)=> this.setState({banco})}/>
            </Item>
            <Item stackedLabel last>
              <Label>Num Ref: Transferencia/Depsoito</Label>
              <Input onChangeText={(transfer)=> this.setState({transfer})}/>
            </Item>
            <Item stackedLabel last>
              <Label>Fecha (dia-mes-año)</Label>
              <Input onChangeText={(fecha)=> this.setState({fecha})}/>
            </Item>
          </Form>
        </Content>
        <Button rounded success style={styles.transferenciaButton} onPress={()=>this.procesarPagos('transferencia')}>
            <Text>Procesar Pago</Text>
          </Button>
      </View>
    )
  }else if(modoDePago ==='key3'){
    return(
      <View>
      <Text style={styles.efectivo}>Disponibe Pronto</Text>
    </View>
    )
  }else if(modoDePago ==='key4'){
    return(
      <View>
      <Text style={styles.efectivo}>Disponibe Pronto</Text>
    </View>
    )
  }else if(modoDePago ==='key5'){
    return(
      <View style={styles.transferencia}>
        <Content>
        <Form>
            <Item stackedLabel>
              <Label>Cuenta PayPal</Label>
              <Input onChangeText={(banco)=> this.setState({banco})}/>
            </Item>
            <Item stackedLabel last>
              <Label>Num de Referencia</Label>
              <Input onChangeText={(transfer)=> this.setState({transfer})}/>
            </Item>
            <Item stackedLabel last>
              <Label>Fecha (dia-mes-año)</Label>
              <Input onChangeText={(fecha)=> this.setState({fecha})}/>
            </Item>
          </Form>
        </Content>
        <Button rounded success style={styles.transferenciaButton} onPress={()=>this.procesarPagos('payPal')}>
            <Text>Procesar Pago</Text>
          </Button>
      </View>
    )
  }
  
  
}


















  ventana = () =>{

    let loginValidate = this.state.login;
    const { navigation } = this.props;

    if(loginValidate === 0){
       return(
        <Container>
        

        <Text style={styles.titulo}>Ingresa con tu Usuario</Text>

        <Content>
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


          <Text style={styles.registrate} onPress={() => navigation.navigate('Registro de Usuario')}>Registrate</Text>

          <Text style={styles.olvide}>Olvide mi contraseña</Text>

          
        </Content>

       

       
      </Container>
       )
    }else{
      return(
        
          
          
          
          <Content>
            {console.log(this.state.datosLogin['email'])}
            <View style={styles.montacancelar}>
              <Text style={styles.montacancelarTexto}>Monto a cancelar: {this.sumarPrecios()}$</Text>
            </View>

            <Text style={styles.titulo}>Selecciona el metodo de pago</Text>
            <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Seleccioar" value="key0" />
                <Picker.Item label="Efectivo" value="key1" />
                <Picker.Item label="Transferencia/Depostio" value="key2" />
                <Picker.Item label="Tarjeta de Debito" value="key3" />
                <Picker.Item label="Tarjeta de Credito" value="key4" />
                <Picker.Item label="PayPal" value="key5" />
              </Picker>
            </Item>
          </Form>

          <Text>{this.datosDePago()}</Text> 


          
        </Content>

          
       
      ) 
    }
  
  }















  render() {

    const { navigation } = this.props;
    

    return (
      <Container style={styles.container}>
        {this.ventana()}
      </Container>
    );
  }
}





















const styles = StyleSheet.create({
  container:{
    paddingTop: 100
  },
  titulo:{
    textAlign: 'center'
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
    marginTop: 10
  },
  registrate:{
    textAlign: 'center',
    color: 'blue',
    marginTop: 60
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