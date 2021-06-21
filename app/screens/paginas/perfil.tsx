import React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderComponent } from '../../components/header/header';
import { MapaStyle } from '../estilos/mapa';

interface PerfileList {
    navigation?: any;
}

export const Perfil = ({ props: PerfilList }) => {

    return (
        <SafeAreaView style={MapaStyle.flex} >

            <HeaderComponent
                title="Perfil"
            /> 

            <Card>
                <Card.Content>
                    <Title>Aguarde...</Title>
                    <Paragraph>Perfil em desenvolvimento</Paragraph>
                </Card.Content>
            </Card>


        </SafeAreaView>
    );

}