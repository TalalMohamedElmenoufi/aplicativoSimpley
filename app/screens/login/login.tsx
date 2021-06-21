import React, { useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput, HelperText } from 'react-native-paper';
import { loginStyles } from './style';
import { useDispatch } from 'react-redux';
import { checkUser, logarUser, updateUser } from '../../store/modules/app/actions';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginProps { 
    navigation: any; 
} 
 
export const Login = (props: LoginProps) => {

    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    const [emailError, setEmailErro] = useState(null);
    const [senhaError, setSenhaErro] = useState(null);

    const dispatch = useDispatch();

    //const Irlogar = props.navigation.navigate("Home");
    const registrar = () => props.navigation.navigate("Register");

    const Validar = () => {
        let error = false;
        setEmailErro(null);
        setSenhaErro(null);
        if (email == null || email == '' || !email.includes('@') ){
            setEmailErro('Informe e-mail valido!');
            error = true;
        }
        if (senha == null || senha == '' ) {
            setSenhaErro('Informe sua senha!');
            error = true;
        }

        return !error;
        
    } 

    const login = async () => {
        try{

            const logar = {
                email: email,
                senha: senha
            }

            if (Validar()){

                dispatch(
                    logarUser({
                        email: logar.email,
                        senha: logar.senha
                    })
                )

                dispatch(checkUser());
                    
            } 

        }
        catch(err){
            alert(err.massage);
        }
    };

   
const checkLogin = async () => {

    const user = await AsyncStorage.getItem('@user');
    if(user){
        dispatch(updateUser(JSON.parse(user)));
        props.navigation.navigate("Home");
    }

}

useEffect(() => {
    checkLogin();
}, []);


    return(
        <SafeAreaView style={loginStyles.content}>
            <View style={loginStyles.view}>
            <Card>
                    <Card.Title titleStyle={loginStyles.cardTitle} title="Simpley" ></Card.Title>
                <Card.Content>
                    <TextInput label="Email" keyboardType="email-address" 
                    onChangeText={value => setEmail(value)}></TextInput>
                    <HelperText type="error" >
                        {emailError}
                    </HelperText>

                    <TextInput label="Password" secureTextEntry={true} onChangeText={value => setSenha(value)}></TextInput>
                    <HelperText type="error" >
                        {senhaError}
                    </HelperText>

                    <Button uppercase={false} style={loginStyles.cardButton}>Forgot email/password</Button>

                    <Button 
                    onPress={() => login()}
                    mode="contained" 
                    style={loginStyles.cardButton}
                    >Login
                    </Button>

                    <Button 
                    onPress={registrar}
                    style={loginStyles.cardButton}>
                    Registrar
                    </Button>

                </Card.Content> 
            </Card>
            </View>
        </SafeAreaView>
    );

}