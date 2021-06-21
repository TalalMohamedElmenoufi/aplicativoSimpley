import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
   
import { 
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch 
    } from 'react-native-paper';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';    

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
   
interface MenuProps {
    navigation: any;
}

export const MenuList = (props: MenuProps) => {    

    const IrHome = () => props.navigation.navigate("Home");
    const IrPerfil = () => props.navigation.navigate("Perfil");
    const IrProdutos = () => props.navigation.navigate("Produtos");
    const IrChamados = () => props.navigation.navigate("Chamados");
    const IrMapa = () => props.navigation.navigate("Mapa");
    const IrSuporte = () => props.navigation.navigate("Suporte");

    
    const Sair = async () => {
       await AsyncStorage.clear();
       props.navigation.navigate("Login"); 
    } 
 
    const MenuVez = async () => {

        const user = await AsyncStorage.getItem('@user');
        if (user) {
            dispatch(updateUser(JSON.parse(user)));
            props.navigation.navigate("Home");
        }

    }
    MenuVez();

    return (

            <View style={{ flex: 1 }}>
                <DrawerContentScrollView >
                    <View styles={styles.drawerContent}>

                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={{
                                        uri: 'https://scontent.fpll8-1.fna.fbcdn.net/v/t1.6435-9/126417559_2748907955357555_8174591100939907614_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE9MD8Z7N9DCEICq3tkn4MBuwCwuu2rG667ALC67asbrndsPpleNgLtbVXMAm-zPfzFu9KmKTtNE5n8xWWPMEvd&_nc_ohc=WU4oJMw_zzwAX_M1rkQ&_nc_ht=scontent.fpll8-1.fna&oh=14f39ead939c3333358c8353e4e39e9b&oe=60E5191B'
                                    }}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>Talal Mohamed</Title>
                                    <Caption style={styles.caption}>@talalmohamed</Caption>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                    <Caption style={styles.caption}>Following</Caption>
                                </View>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                    <Caption style={styles.caption}>Followers</Caption>
                                </View>
                            </View>


                        </View>

                    </View>


                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={IrHome}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Perfil"
                            onPress={IrPerfil}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="purse-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Meus Produtos"
                            onPress={IrProdutos}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="phone"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Meus Chamados"
                            onPress={IrChamados}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="map-marker-right-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Mapa"
                            onPress={IrMapa}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Suporte"
                            onPress={IrSuporte}
                        />


                    </Drawer.Section>






                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Sair"
                        onPress={Sair}
                    />
                </Drawer.Section>

            </View>


        

    ); 
   
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});