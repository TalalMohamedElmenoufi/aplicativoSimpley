import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderComponent } from '../../components/header/header';
import { MapaStyle } from '../estilos/mapa';

interface HomeList {
    navigation?: any;
}

export const Home = ({navigation}) => {
 
    /*useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            Alert.alert('Refreshed');
        });
        return unsubscribe;
    }, [navigation]);*/
  
    return (
        <SafeAreaView style={MapaStyle.flex} >

            <HeaderComponent
                title="Home"
            />

            <Card>
                <Card.Content>
                    <Title>Aguarde...</Title>
                    <Paragraph>Home em desenvolvimento</Paragraph>
                </Card.Content>
            </Card>

        </SafeAreaView>
    );

}