import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { TextInput, Button, RadioButton, HelperText } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header';
import { loginStyles } from './style';
 
import { useDispatch } from 'react-redux';
import { updateUser, createUser } from '../../store/modules/app/actions';

interface RegistroProps{
    navigation: any;
}

export const Register = (props: RegistroProps) => {

    //const registrar = () => props.navigation.navigate("Home")

    const [usuario, setUsuario] = useState({
        nome: null,
        email: null,
        tipo: 'Cliente',
        senha: null,
        logado: 1,
    });

    const [nomeError, setNomeErro] = useState(null);
    const [emailError, setEmailErro] = useState(null);
    const [senhaError, setSenhaErro] = useState(null);

    const dispatch = useDispatch();


    const Validar = () => {

        let error = false;
        setNomeErro(null);
        setEmailErro(null);
        setSenhaErro(null);

        if (usuario.nome == null || usuario.nome == '') {
            setNomeErro('Informe seu nome!');
            error = true;
        }
        if (usuario.email == null || usuario.email == '' || !usuario.email.includes('@')) {
            setEmailErro('Informe e-mail valido!');
            error = true;
        }
        if (usuario.senha == null || usuario.senha == '') {
            setSenhaErro('Informe sua senha!');
            error = true;
        }

        return !error;

    }


    const cadastrar = async () => {
        try {

            if (Validar()) {

                dispatch(
                    updateUser(usuario)
                )
     
                dispatch(createUser())

            }

        }
        catch (err) {
            alert(err.massage);
        }
    };



    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent 
                    title="Registro" bntVoltar={true}
                    navigation={props.navigation}
                />
                <View style={loginStyles.contentRegister}>

                    <RadioButton.Group onValueChange={tipo => setUsuario({ ...usuario, tipo })} value={usuario.tipo}>
                        <RadioButton.Item label="Cliente" value="Cliente" />
                        <RadioButton.Item label="Técnico" value="Tecnico" />
                    </RadioButton.Group>

                    <TextInput label="Nome" 
                        onChangeText={nome => setUsuario({...usuario, nome}) }
                        value={usuario.nome}
                    />
                    <HelperText type="error" >
                        {nomeError}
                    </HelperText>
                    
                    <TextInput label="Email" keyboardType="email-address" 
                        onChangeText={email => setUsuario({ ...usuario, email }) }
                        value={usuario.email}
                        />
                    <HelperText type="error" >
                        {emailError}
                    </HelperText>

                    <TextInput label="Password" secureTextEntry={true} 
                    right={<TextInput.Icon name="eye-off-outline" 
                    color={loginStyles.icon.color} />} 
                        onChangeText={senha => setUsuario({ ...usuario, senha }) }
                        value={usuario.senha}
                        />
                    <HelperText type="error" >
                        {senhaError}
                    </HelperText>

                    <TextInput label="Confirm password" secureTextEntry={true} 
                    right={<TextInput.Icon name="eye-off-outline" 
                    color={loginStyles.icon.color} />} />
                    
                    <TextInput label="Telefone" keyboardType="phone-pad" />
                    
                    <Button mode="contained" 
                    onPress={() => cadastrar()}
                    style={loginStyles.buttonRegister}>
                    Register
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}