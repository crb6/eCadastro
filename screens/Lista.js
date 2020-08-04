import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableHighlight, StyleSheet } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem,Header, Button} from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler';

export default function Lista({route,navigation}){

    const [getData, setData] = useState([]);

    useEffect(()=>{
        async function resgatarDados(){
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
              );
              setData(result.data);
        }
        resgatarDados();
    })
    return(
  <View>
    <Header
            centerComponent={{ text: 'Lista', style: { color: '#fff', fontSize:20 } }}
            rightComponent={
                <Button  
                title="+"
                onPress={()=>navigation.navigate('Crud')}
                ></Button>}
   />
   <ScrollView style={styles.scroll}>
   {
    getData.map((linha, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title={linha.nome}
        subtitle={linha.cpf}
        bottomDivider
        onPress={()=>navigation.navigate('Crud',{
           nome:linha.nome,
           telefone:linha.telefone,
           cpf:linha.cpf,
           id:linha.id,
           alterar:true 
        })}
        chevron
      />
    ))
  }
   </ScrollView>
  </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB'
  },
  scroll:{
    padding:10,
  }
})