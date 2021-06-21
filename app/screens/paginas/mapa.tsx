import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Image } from 'react-native';
import socket from '../../services/socket';
import MapView, { Marker } from 'react-native-maps';
import MinhaCood from '@react-native-community/geolocation';
import { FAB, Text } from 'react-native-paper';
import { MapaStyle } from '../estilos/mapa';

import tecnicoMarker from '../../../assets/tecnico.png';
import clienteMarker from '../../../assets/cliente.png';

import { TecnicoConfirmar } from '../../components/mapa/confirmar-tecnico';
import { TecnicoProcurar } from '../../components/mapa/procurar-tecnico';
import { HeaderComponent } from '../../components/header/header';
import api from '../../services/api';
import { useSelector } from 'react-redux';
   
interface MapaList {
    navigation?: any;
    itemId?: number;
}
     
export const Mapa = (props: MapaList) => {

    const { params } = props.navigation;
    const TcId = params ? params.itemId : null;


    const tecRef = useRef([]);
    const ws = useRef(null); //declarar globalmente

    const {user} = useSelector((state) => state.app); // Cliente, Tecnico

    //Minha Localização atual
    const [lat, SetLatitude] = useState(0);
    const [lng, SetLongitude] = useState(0);

    const LoopCords = () => {

        MinhaCood.getCurrentPosition(
            (pos) => {
                SetLatitude(pos.coords.latitude);
                SetLongitude(pos.coords.longitude);
            },
            (err) => {
                alert('Erro: ' + err);
            },
            {
                enableHighAccuracy: true, timeout: 120000, maximumAge: 1000
            }
        )

    }
//-----------------------------------------


    const updateSocketCoords = async (MinhaLat, Minhalng) => {
        try {
            await api.put(`/usuarios/socketCoods/${user.id}`, { MinhaLat, Minhalng });
            console.log('socket updated coords');
        } catch (err) {
            console.log('update socketId error => ' + err.message);
        }
    }
 
 
    LoopCords();
    useEffect(() => {
        const interval = setInterval(() => {
            LoopCords();
            updateSocketCoords(lat, lng);
        }, 40000);
        return () => clearInterval(interval);
    }, [LoopCords]);
 
    const CoodsUser = {
        latitude: lat,
        longitude: lng
    }



    //iniciando socket 
    const initSocket = () => {
        ws.current = socket();

        ws.current.on('connect', () => {
            const id = ws.current.id;
           //console.log(id); 
           // updateSocketId(id);
        });
 
        ws.current.on('ListaUsuarios', data => {
            const res = data.filter(el => el.tipo == "Cliente");
            console.log(res);
            tecRef.current = res;  
        });
  
        ws.current.on('ListaCamados', data => { 
            //chamadoRef.current = data;
            //alert('ListaCamados:'+data);
        });//teste

    }
    //------------------

    useEffect(() => {
        initSocket();
    }, []);


    const [CodTecnico, SetCodTecnico] = useState(0);

    const Status: number = ((CodTecnico)?2:1);


    return (
        <SafeAreaView style={MapaStyle.flex} >
            
            <HeaderComponent 
                title={TcId+ " Simpley"}
            />

            <MapView style={MapaStyle.flex}
                initialRegion={{
                    latitude: -3.0523549,
                    longitude: -60.00760969999999,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
            
                {
                    Status == 1  ?
                    <>

                    <Marker coordinate={CoodsUser}>
                        <Image style={MapaStyle.tecnico}
                            source={clienteMarker}
                        />
                    </Marker>

                    {tecRef.current.map((el, index) => {
                        var latitude = parseFloat(el.latitude)
                        var longitude = parseFloat(el.longitude)
 
                        if (!isNaN(longitude) && !isNaN(latitude)) {
                            return <Marker onPress={() => 
                                SetCodTecnico(el.id)
                            }
                                description={el.celular}
                                coordinate={{
                                    latitude: latitude,
                                    longitude: longitude,
                                }}
                                >

                                <Image style={MapaStyle.tecnico}
                                    source={tecnicoMarker}
                                /> 
                            </Marker>
                        } else {
                            return null
                        }
                    })}

                    </>
                    : null
                }

                {
                    Status == 2 ?
                        <>
                            <Marker
                                description="Origem"
                                coordinate={{
                                    latitude: -3.0523549,
                                    longitude: -60.00760969999999,
                                }}>
                            </Marker>

                            <Marker
                                description="Destino"
                                coordinate={{
                                    latitude: -3.0477003,
                                    longitude: -60.0138838,
                                }}>
                            </Marker>
                        </>
                        : null
                }


            </MapView>

            {
                Status == 2 ?
                    <TecnicoConfirmar 
                    navigation={props.navigation}
                    cod={CodTecnico}

                    />
                    : null
            }

            {
                Status == 1 ?
                    <FAB style={MapaStyle.fab} icon="plus" />
                : null
            }


            {
                Status == 3 ? 
                    <TecnicoProcurar />
                : null
            }

           
        </SafeAreaView>
    );

}