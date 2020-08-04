import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableHighlight,StyleSheet, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem,Header, Button, Image} from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

export default function Crud({route,navigation}){

    [getNome,setNome] = useState();
    [getCpf,setCpf] = useState();
    [getTelefone,setTelefone] = useState();
    [getId,setId] = useState();
    [getAlterar,setAlterar] = useState();

    useEffect(()=>{
      if(route.params){
            const { nome } =  route.params 
            const { telefone } =  route.params 
            const { cpf } =  route.params 
            const { id } =  route.params
            const { alterar } =  route.params

            setNome(nome)
            setTelefone(telefone)
            setCpf(cpf)
            setId(id)
            setAlterar(alterar)
      }
    },[])
    async function inserirDados(){
        await axios.post('http://professornilson.com/testeservico/clientes',{
         nome:getNome,
         cpf:getCpf,
         telefone:getTelefone,  
        }
        )
        .then(function (response) {
            setNome('')
            setTelefone('')
            setCpf('')
            showMessage({
                message: "Registro cadastrado com sucesso!",
                type: "success",
              });
          console.log(response);
        })
        .catch(function (error) {
            showMessage({
                message: "Algum erro aconteceu!",
                type: "info",
              });
          console.log(error);
        });
    }
     function excluirDados(){
         axios.delete('http://professornilson.com/testeservico/clientes/'+getId
        )
        .then(function (response) {
            setNome('')
            setTelefone('')
            setCpf('')
            showMessage({
                message: "Registro excluído com sucesso!",
                type: "success",
              });
          console.log(response);
        })
        .catch(function (error) {
            showMessage({
                message: "Algum erro aconteceu!",
                type: "info",
              });
            console.log(error);
        });
    }
    async function alterarDados(){
        await axios.put('http://professornilson.com/testeservico/clientes/'+getId,{
         nome:getNome,
         cpf:getCpf,
         telefone:getTelefone,  
        }
        )
        .then(function (response) {
            showMessage({
                message: "Registro alterado com sucesso!",
                type: "success",
              });
          console.log(response);
        })
        .catch(function (error) {
            showMessage({
                message: "Algum erro aconteceu!",
                type: "info",
              });
            console.log(error);
        });
    }

    return(
        <KeyboardAvoidingView style={styles.background}>
            <Header
            leftComponent={
                <Button  
                title="<"
                onPress={()=>navigation.navigate('Lista')}
                ></Button>}
            centerComponent={{ text:'Cadastro', style:{ color:'#FFF', fontSize:20 } }}
            />
            <View style={styles.containerImage}>
                <Image
                style={styles.logo}
                source={require('../assets/robot.png')}
                />
            </View>
            <FlashMessage position="top"/> 
            <View 
            style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder="Digite seu Nome"
                onChangeText={text => setNome(text)}
                value={getNome}
                autoCorrect={true}
                onChange={()=>{}}
                />
                <TextInput
                style={styles.input}
                placeholder="Digite seu Cpf"
                onChangeText={text => setCpf(text)}
                value={getCpf}
                autoCorrect={false}
                onChange={()=>{}}
                />
                <TextInput
                style={styles.input}
                placeholder="Digite seu Telefone"
                onChangeText={text => setTelefone(text)}
                value={getTelefone}
                />
            { !getAlterar ? (
            <Button
            title="Salvar"
            style={styles.button}
            onPress={() => inserirDados()}
            />   
            ):null}
            { getAlterar ? (
            <Button
            title="Alterar"
            style={styles.button}
            onPress={() => alterarDados()}
            />       
            ):null}
            <View style={{marginTop:15}}></View>
            { getAlterar ? (
            <Button
            title="Excluir"
            style={styles.button}
            onPress={() => excluirDados()}
            />
            ):null}
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#87CEEB'
    },
    containerImage:{
        flex:1,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:30
    },
    logo:{
        width:100,
        height:100,
        borderRadius:100
    },
    container:{
        flex:1,
        marginTop:0,
        justifyContent:'center',
        paddingBottom:50
    },
    input:{
        backgroundColor:'#FFF',
        width:320,
        marginBottom:15,
        color:'#222',
        fontSize:17,
        borderRadius:7,
        padding:10
    },
    button:{
        borderRadius:7
    },
    containerButton:{
        flex:1,
        marginTop:90,
        flexDirection:'row',
        justifyContent:'space-around',
        textDecorationLine:'underline'
    },
})