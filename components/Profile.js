import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert, AsyncStorage } from 'react-native'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Footer, FooterTab, Button, Badge, Left, Body, Right, Title, Content, Form, Item, Input, Label} from 'native-base';
import Perfil1 from './tabs/Perfil1';
import Perfil2 from './tabs/Perfil2';
import Perfil3 from './tabs/Perfil3';


class ZoluMarket extends Component{


  constructor(props) {
    super(props)
    this.state = { 
      currentTab: 0 
    }
  }

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
        
        

        
        <Content>
       
          <Tabs initialPage={this.state.currentPage} onChangeTab={({ i }) => this.setState({ currentTab: i })}>

            <Tab heading={ <TabHeading style={this.state.currentTab === 1 ? styles.activeTabStyle : styles.tabStyle}><Icon name="person" /><Text>User</Text></TabHeading>} >
              <Perfil1 navigation={navigation}/>
            </Tab>

            <Tab heading={ <TabHeading style={this.state.currentTab === 0 ? styles.activeTabStyle : styles.tabStyle}><Icon name="paper-plane" /><Text>Delivery</Text></TabHeading>}>
              <Perfil2 />
            </Tab>

            <Tab heading={ <TabHeading style={this.state.currentTab === 1 ? styles.activeTabStyle : styles.tabStyle}><Icon name="settings" /><Text>Pagos</Text></TabHeading>}>
              <Perfil3 navigation={navigation}/>
            </Tab>
          </Tabs>

        </Content>


        <Footer >
          <FooterTab style={styles.footer}>
            <Button   vertical onPress={() => navigation.navigate('Zolumarket')}>
              
              <Icon  name="apps" />
              <Text>Store</Text>
            </Button>
            <Button  vertical onPress={() => navigation.navigate('Zolufood')}>
              <Icon  name="pizza" />
              <Text>ZoluFood</Text>
            </Button>
            <Button   badge vertical onPress={() => navigation.navigate('Cart')}>
              <Badge ><Text>51</Text></Badge>
              <Icon   name="cart" />
              <Text>Cart</Text>
            </Button>
            <Button active vertical vertical style={styles.footerBtn}>
              <Icon active name="person" />
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
  left:{
    marginLeft: 90
  },
  titulo:{
    textAlign: 'center',
    marginTop: 100
  },
  buttonLogin:{
    marginTop: 80
  },
  olvide:{
    textAlign: 'center',
    color: 'blue',
    marginTop: 40
  },
  registrate:{
    textAlign: 'center',
    color: 'blue',
    marginTop: 10
  },
  footer:{
    backgroundColor: '#0C6393'
  },
  footerBtn:{
    backgroundColor: '#1E85EB'
  },
  activeTabStyle: {
    backgroundColor: '#1E85EB'
  },
  tabStyle: {
    backgroundColor: '#9509D6'
  }
 
})

export default ZoluMarket