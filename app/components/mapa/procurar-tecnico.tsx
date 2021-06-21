import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Button, Title } from 'react-native-paper';
import { TecnicoStilo } from './estilo';

export const TecnicoProcurar = () => {

    return (
        <View style={TecnicoStilo.flexcenterColum} >
            <ActivityIndicator
                animating={true}
            />
            <Title style={TecnicoStilo.titulo} >Procurando um tecnico</Title>
            <Button style={TecnicoStilo.cancelarTecnico} mode="contained">Cancelar</Button>
        </View>
    )

}