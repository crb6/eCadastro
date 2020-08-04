import { View, Text, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

export default function Sobre({route,navigation}){

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Header leftComponent={
            <Button title="<" onPress={()=>navigation.navigate('Home')}></Button>}
            centerComponent={{ text: 'eCadastro', style: { color: '#fff' }}}>
            </Header>

            <Text style={styles.texto}></Text>
            <Text>Sistema de cadastro digital. - 2020</Text>
            <Text>Cléber Bezerra</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    texto:{
        paddingTop:30,
        width:300
    },
    botao:{
      paddingTop:20,
      width:300
    },
    botaoExcluir:{
        paddingTop:20,
        width:300,   
      },
    titulo:{
      paddingTop:20,
      fontSize:18
    },
    Screen:{
      paddingTop:20,
      fontSize:28
    } 
  })