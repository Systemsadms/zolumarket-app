import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeZoluMarket from './components/Home'
import ZoluMarketStore from './components/Zolumarket'
import ZoluFoodStore from './components/Zolufood'
import ZoluMarketCart from './components/Cart'
import ZoluMarketProfile from './components/Profile'

import ProductoZoluMarket from './components/Producto'
import HanaNaturalFood from './components/Hana'


import HomeTest from './components/ComponenteHome'
import StoreTest from './components/ComponenteStore'

import Validation from './components/Validation'
import PagoProcesado from './components/Pagoprocesado'
import RegistroUsuario from './components/Registro'
import RegistroPerfil from './components/Registrate'

function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('ZoluMarket')}
      />
    </View>
  );
}



function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeZoluMarket} />
        <Stack.Screen name="Zolumarket"  options={{ headerShown: false }} component={ZoluMarketStore} />
        <Stack.Screen name="Zolufood"  options={{ headerShown: false }} component={ZoluFoodStore} />
        <Stack.Screen name="Cart"  options={{ headerShown: false }} component={ZoluMarketCart} />
        <Stack.Screen name="Profile"  options={{ headerShown: false }} component={ZoluMarketProfile} />

        <Stack.Screen name="Hana"  component={HanaNaturalFood} />
        <Stack.Screen name="Producto"  component={ProductoZoluMarket} />
        <Stack.Screen name="Confirmar"   component={Validation} />
        <Stack.Screen name="Registro de Usuario"   component={RegistroUsuario} />
        <Stack.Screen name="Registra tu Usuario"   component={RegistroPerfil} />
        <Stack.Screen name="Pago"   options={{ headerShown: false }} component={PagoProcesado} />

        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ZoluMarketTest" component={HomeTest} />
        <Stack.Screen name="ZoluFoodTest"   component={StoreTest} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;