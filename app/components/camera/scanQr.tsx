import React from 'react';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderComponent } from '../header/header';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { List } from 'react-native-paper';


interface QrScanList {
    navigation?: any;
}

export const ScanQr = (props: QrScanList) => {  

    const onRead = e => {
        //alert('Lido: ' + e.data);
        props.navigation.navigate("Produtos", { url: e.data  } );
    }

    return (
        <SafeAreaView style={{flex:1}} >

            <HeaderComponent
                title="Ler QR"
            />

            <QRCodeScanner
                cameraStyle={{ flex: 1, height: Dimensions.get('window').height }}
                topViewStyle={{ height: 0, display: 'none' }}
                showMarker
                reactivate={true} 
                reactivateTimeout={3000}
                onRead={onRead}
                //flashMode={RNCamera.Constants.FlashMode.torch}
            />
            <List.Item
                title="QR Code"
                description="Escaneie o QR Code do seu produto"
                left={props => <List.Icon {...props} icon="qrcode-plus" color="#FFF" />}
                descriptionStyle={{ color: '#FFF' }}
                titleStyle={{ color: '#FFF' }}
            />
         </SafeAreaView>
    );

}