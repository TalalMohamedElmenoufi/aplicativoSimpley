import React from 'react';
import { View, Text} from 'react-native';
import { Card, Colors, FAB, List, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderComponent } from '../../components/header/header';
import { ProdutosStyles } from '../estilos/produtos';

import Icon from 'react-native-vector-icons/Ionicons';

interface ProdutosList {
    navigation?: any;
}
     

export const Produtos = (props: ProdutosList) => {

    //const url = props.navigation.getParam('url');
    
    const produtosDb = [
        { tipo: 'Ar-condicionado', nome: 'Split 1500 BTUS', data:'14/03/21' },
        { tipo: 'Ar-condicionado', nome: 'Split 1200 BTUS', data:'10/04/21' },
        { tipo: 'Ar-condicionado', nome: 'Split 1000 BTUS', data:'12/05/21' },
    ]

    const Irqr = () => props.navigation.navigate("ScanQr");

    return (
        <SafeAreaView style={ProdutosStyles.flex} >

            <HeaderComponent
                title="Meus Produtos"
            />


            {produtosDb !== null && produtosDb.length > 0 ? produtosDb.map((item, i) => {

                return (
                    <Card key={i}
                    >
                        <View style={{ flexDirection: 'row', padding:20 }}>
                            <View style={ProdutosStyles.CadInit}>
                                <Icon name="snow" size={30} color='#fff' style={{ alignSelf: 'center' }} />
                            </View>
                            <View>
                                <Text style={ProdutosStyles.Titulo}>{item.nome}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="information-circle" style={ProdutosStyles.Icon2} />
                                    <Text style={ProdutosStyles.SubTitulo} >{item.tipo}</Text>

                                </View>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="calendar" style={ProdutosStyles.IconData} />
                            <Text style={ProdutosStyles.dataTitulo} >{item.data}</Text>
                        </View>

                        
                        <View style={ProdutosStyles.linha} ></View>

                    </Card>
                    

                )

            }) : 
                <Text>Não há produtos cadastrados. Clique no QR Code abaixo para cadastrar um novo.</Text>
            }


            <FAB style={ProdutosStyles.fab} icon="qrcode-scan" onPress={Irqr} />


        </SafeAreaView>

        

    );

}