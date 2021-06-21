import React from 'react';
import { View, Text } from 'react-native';
import { Card, Colors, FAB, List, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderComponent } from '../../components/header/header';
import { ChamadosStyles } from '../estilos/chamados';

import Icon from 'react-native-vector-icons/Ionicons';

interface ChamadosList {
    navigation?: any;
}

export const Chamados = (props: ChamadosList) => {

    const chamadosDb = [
        { nome: 'Carlos', data: '03/21', hI: '10', hF: '11', tipo: 'Ar-condicionado', localizacao:'Av Perimetral'  },
        { nome: 'Luzia', data: '04/21', hI: '13', hF: '15', tipo: 'Ar-condicionado', localizacao: 'Av Torquato Tapajos'  },
        { nome: 'Andre', data: '05/21', hI: '08', hF: '10', tipo: 'Ar-condicionado', localizacao: 'Av Yolanda Durso'  },
    ]


    const VerMapa = () => props.navigation.navigate("Mapa");

    return (
        <SafeAreaView style={ChamadosStyles.flex} >

            <HeaderComponent
                title="Meus Chamados"
            />


            {chamadosDb !== null && chamadosDb.length > 0 ? chamadosDb.map((item, i) => {

                return (
                    <Card key={i}
                    >
                        <View style={{ flexDirection: 'row', padding: 20 }}>
                            <View style={ChamadosStyles.CadInit}>
                                <Icon name="person" size={30} color='#fff' style={{ alignSelf: 'center' }} />
                            </View>
                            <View>
                                <Text style={ChamadosStyles.Titulo}>{item.nome}</Text>
                                <View style={{ flexDirection: 'row' }}>

                                    <Icon name="calendar" style={ChamadosStyles.Icon2} />
                                    <Text style={ChamadosStyles.SubTitulo} >{item.data} {item.hI} as {item.hF}h</Text>

                                </View>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="location" style={ChamadosStyles.IconLocal} />
                            <Text style={ChamadosStyles.localTitulo} >{item.localizacao}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="build" style={ChamadosStyles.IconSevico} />
                            <Text style={ChamadosStyles.SevicoTitulo} >{item.tipo}</Text>
                        </View>

                        <View style={ChamadosStyles.linha} ></View>

                    </Card>


                )

            }) :
                <Title>Não há produtos cadastrados. Clique no QR Code abaixo para cadastrar um novo.</Title>
            }


            <FAB style={ChamadosStyles.fab} icon="map-marker-multiple" onPress={VerMapa} />


        </SafeAreaView>
    );

}