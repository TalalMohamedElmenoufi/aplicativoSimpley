import React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderComponent } from '../../components/header/header';
import { MapaStyle } from '../estilos/mapa';

interface SuporteList {  
    navigation?: any;
}
  
export const Suporte = ({ props: SuportelList }) => {

    return (
        <SafeAreaView style={MapaStyle.flex} >

            <HeaderComponent
                title="Suporte"
            />

            <Card>
                <Card.Content>
                    <Title>Aguarde...</Title>
                    <Paragraph>Suporte em desenvolvimento</Paragraph>
                </Card.Content>
            </Card>

        </SafeAreaView>
    );

}