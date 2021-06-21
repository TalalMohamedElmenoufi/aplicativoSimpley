import React, { useCallback } from 'react';
import { ImageBackground } from 'react-native';
import { Appbar } from 'react-native-paper';

import { DrawerActions, useNavigation } from '@react-navigation/native';
import { headerEstilo } from './estilo';

interface HeaderParames {
    title: String;
    navigation?:any;
    bntVoltar? : boolean;
}

export const HeaderComponent = (props:HeaderParames) => {

    const voltarLogin = () => props.navigation?.goBack();

    const navigation = useNavigation();
    const abreMenu = useCallback(() => {
        navigation.dispatch(DrawerActions.openDrawer());
    }, []);
      
    return (
            <Appbar
                style={headerEstilo.Topo}
            >
                {
                    props.bntVoltar ? 
                    <Appbar.BackAction onPress={voltarLogin} />
                    : 
                    <Appbar.Action icon="menu" onPress={abreMenu} />
                }

                <Appbar.Content title={props.title} />
            </Appbar> 
    )

}

