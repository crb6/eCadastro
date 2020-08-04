import React, { useState, useEffect, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Keyboard} from 'react-native';
import axios from 'axios';

export default function LoginApp({route,navigation}){

    const [getdata,setData] = useState([]);

    useEffect(()=> {
        async function resgatarDados(){
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
              );
              setData(result.data);
        }
        resgatarDados();
    }, []);

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image
                style={styles.logo}
                source={require('../assets/splash.png')}
                />
            </View>
            <View 
            style={[
                styles.container,
                {}
            ]}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChange={()=>{}}
                />
                <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                secureTextEntry={true}
                onChange={()=>{}}
                />
                <TouchableOpacity 
                style={styles.btnSubmit}
                onPress={()=>navigation.navigate('Lista')}
                >
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.btnRegister}
                onPress={()=>navigation.navigate('Crud')}
                >
                    <Text style={styles.registerText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#87CEEB'
    },
    containerLogo:{
        flex:1,
        justifyContent:'center',
        paddingBottom:0
    },
    logo:{
        width:130,
        height:130,
        borderRadius:100
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingBottom:50
    },
    input:{
        backgroundColor:'#FFF',
        width:'90%',
        marginBottom:15,
        color:'#222',
        fontSize:17,
        borderRadius:7,
        padding:10
    },
    btnSubmit:{
        backgroundColor:'#35AAFF',
        width:'90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },
    submitText:{
        color:'#FFF',
        fontSize:18
    },
    btnRegister:{
        marginTop:10,
    },
    registerText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',
        textDecorationLine:'underline'
    }
})