import React, { useState } from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, List } from 'react-native-paper';
import { TecnicoStilo } from './estilo';

interface TecnicoInt {
    navigation?: any;
    cod?: number;
}


export const TecnicoConfirmar = (props: TecnicoInt) => {

    const CancelarTC = () => {
        props.navigation.navigate("Mapa", { itemId: 1 })
        
    }  
 
    return (
        <Card>
            <Card.Content>
                <List.Item
                    title="Talal Mohamed" 
                    description={props.cod+" Tecnico"}
                    left={() =>
                        <Avatar.Image
                            source={{
                                uri: 'https://scontent.fpll8-1.fna.fbcdn.net/v/t1.6435-9/126417559_2748907955357555_8174591100939907614_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE9MD8Z7N9DCEICq3tkn4MBuwCwuu2rG667ALC67asbrndsPpleNgLtbVXMAm-zPfzFu9KmKTtNE5n8xWWPMEvd&_nc_ohc=WU4oJMw_zzwAX_M1rkQ&_nc_ht=scontent.fpll8-1.fna&oh=14f39ead939c3333358c8353e4e39e9b&oe=60E5191B'
                            }}
                            size={50}
                            style={TecnicoStilo.icon}
                        />
                    }
                    right={() =>
                        <View>
                            <Button style={TecnicoStilo.cancelar} onPress={CancelarTC} >Cancelar</Button>
                            <Button mode="contained" style={TecnicoStilo.confirmar}>Confirmar</Button>
                        </View>
                    }

                />
            </Card.Content>
        </Card>
    )

}