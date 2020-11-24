import React, { Component } from 'react';
import { StyleSheet, View, Image,  } from 'react-native'
import { Container, Header, Tab, Input, Tabs, ScrollableTab, Text, Footer, FooterTab, Button, Icon, Badge, Left, Body, Right, Title, List, ListItem, Thumbnail, Content } from 'native-base';



class ZoluMarket extends Component{

  render() {

    const { navigation } = this.props;

    return (


      <Container style={styles.container}>

        <Header style={styles.color}>
          <Left>
              <View>
                <Image source = {require('./assets/logo.png')} style={ styles.logoHeight}/>
              </View>
          </Left>
          <Body>
            <Title></Title>
          </Body>
          <Right>
            <Input placeholder='Buscar' style={ styles.search} placeholderTextColor='#9509D6'/>
            <Image source = {require('./assets/search.png')} style={ styles.iconSearch}/>
          </Right>
        </Header>


        
        
        <View>
          <Image source = {require('./assets/banner2.jpg')} style={ styles.banner}/>
        </View>

        
        <Content>


<List >
  <ListItem thumbnail onPress={() => navigation.navigate('Hana')}>
    <Left>
      <Thumbnail square source={{ uri: 'https://www.lavanguardia.com/files/image_948_465/uploads/2018/09/18/5e9982629f0a8.jpeg' }} />
    </Left>
    <Body>
      <Text>Sankhadeep</Text>
      <Text note numberOfLines={1}>Its time to build a difference . .</Text>
    </Body>
    <Right>
      <Button transparent>
        <Text onPress={() => navigation.navigate('Hana')}>View</Text>
      </Button>
    </Right>
  </ListItem>
</List>

<List>
  <ListItem thumbnail onPress={() => navigation.navigate('Hana')}>
    <Left>
      <Thumbnail square source={{ uri: 'https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59144d795cafe812663c986a/razonescomermanzana-int.jpg' }} />
    </Left>
    <Body>
      <Text>Sankhadeep</Text>
      <Text note numberOfLines={1}>Its time to build a difference . .</Text>
    </Body>
    <Right>
      <Button transparent>
        <Text onPress={() => navigation.navigate('Hana')}>View</Text>
      </Button>
    </Right>
  </ListItem>
</List>

<List >
  <ListItem thumbnail onPress={() => navigation.navigate('Hana')}>
    <Left>
      <Thumbnail square source={{ uri: 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-2000w/public/aguacate-partido_0.jpg?ramen_itok=iqwQftIcTf' }} />
    </Left>
    <Body>
      <Text>Sankhadeep</Text>
      <Text note numberOfLines={1}>Its time to build a difference . .</Text>
    </Body>
    <Right>
      <Button transparent>
        <Text onPress={() => navigation.navigate('Hana')}>View</Text>
      </Button>
    </Right>
  </ListItem>
</List>

<List  >
  <ListItem thumbnail onPress={() => navigation.navigate('Hana')}>
    <Left>
      <Thumbnail square source={{ uri: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/propiedades-de-la-pera-salud-belleza.jpg' }} />
    </Left>
    <Body>
      <Text>Sankhadeep</Text>
      <Text note numberOfLines={1}>Its time to build a difference . .</Text>
    </Body>
    <Right>
      <Button transparent>
        <Text onPress={() => navigation.navigate('Hana')}>View</Text>
      </Button>
    </Right>
  </ListItem>
</List>

<List >
  <ListItem thumbnail onPress={() => navigation.navigate('Hana')}>
    <Left>
      <Thumbnail square source={{ uri: 'https://cdn.potatopro.com/sites/default/files/styles/1200_wide/public/field/image/argenpapa1.jpg?itok=NWWFFJ65' }} />
    </Left>
    <Body>
      <Text>Sankhadeep</Text>
      <Text note numberOfLines={1}>Its time to build a difference . .</Text>
    </Body>
    <Right>
      <Button transparent>
        <Text onPress={() => navigation.navigate('Hana')}>View</Text>
      </Button>
    </Right>
  </ListItem>
</List>

<List >
  <ListItem thumbnail onPress={() => navigation.navigate('Hana')}>
    <Left>
      <Thumbnail square source={{ uri: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/10/apio-y-sus-propiedades.jpg' }} />
    </Left>
    <Body>
      <Text>Sankhadeep</Text>
      <Text note numberOfLines={1}>Its time to build a difference . .</Text>
    </Body>
    <Right>
      <Button transparent>
        <Text onPress={() => navigation.navigate('Hana')}>View</Text>
      </Button>
    </Right>
  </ListItem>
</List>


</Content>




        <Footer >
          <FooterTab style={styles.footer}>
            <Button   vertical onPress={() => navigation.navigate('Zolumarket')}>
              
              <Icon  name="apps" />
              <Text>Store</Text>
            </Button>
            <Button active vertical style={styles.footerBtn}>
              <Icon active name="pizza" />
              <Text>ZoluFood</Text>
            </Button>
            <Button  badge vertical onPress={() => navigation.navigate('Cart')}>
              <Badge ><Text>51</Text></Badge>
              <Icon  name="cart" />
              <Text>Cart</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>User</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 0
  },
  color:{
    backgroundColor: '#EDEDED',
    height: 120
  },
  logoHeight:{
    width: 100,
    height: 100,
    resizeMode:'contain' 
  }, 
  search:{
    height:20,
    borderBottomColor:'#9509D6',
    borderBottomWidth: 1,
  },
  iconSearch:{
    width: 30,
    height: 30,
    resizeMode:'contain' 
  },
  footer:{
    backgroundColor: '#0C6393'
  },
  footerBtn:{
    backgroundColor: '#1E85EB'
  }
})

export default ZoluMarket