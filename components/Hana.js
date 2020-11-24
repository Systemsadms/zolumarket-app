import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native'
import { Container, Header, Card, CardItem, Text, Thumbnail, Button, Icon, Badge, Left, Body, Right, Title, Content } from 'native-base';



class ZoluMarket extends Component{

  render() {

    const { navigation } = this.props;

    return (


      <Container style={styles.container}>

       
        
        

        
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source = {require('./assets/noah.jpg')} style={styles.logoHeight}/>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source = {require('./assets/ensalada.jpg')} style={{height: 200, width: 325, flex: 1}}/>
                <Text style={styles.justify}>
                  Queremos hacer algo especial para cumplir contigo, ZoluFood esta pensado para ser escalable 
                  y crear empatia con nuestros usuarios, te presentamos Hana Natural Food.

                </Text>
                <Right>
                    <Button bordered success>
                      <Text>73$</Text>
                    </Button>          
                </Right>
              </Body>
            </CardItem>
            <CardItem>
              <Right style={styles.margin}>
                <Button full danger >
                <Text>Add to Cart</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>

        


        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    
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