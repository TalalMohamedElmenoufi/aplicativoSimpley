import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Login } from './screens/login/login';
import { Home } from './screens/home/home';
import { Produtos } from './screens/paginas/produtos';
import { Chamados } from './screens/paginas/chamados';
import { MenuList } from '../app/screens/menu/menuList';
import { Register } from './screens/login/register';
import { Perfil } from './screens/paginas/perfil';
import { Mapa } from './screens/paginas/mapa';
import { Suporte } from './screens/paginas/suporte';
import { ScanQr } from './components/camera/scanQr';
 
import { navigationRef } from './routes/rootNavegation';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  
   <NavigationContainer ref={navigationRef}>
 
        <Drawer.Navigator
            drawerStyle={{ backgroundColor: '#ccc' }}
            drawerContent={MenuList} 
            initialRouteName="Login" >

            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Produtos" component={Produtos} />
            <Drawer.Screen name="Chamados" component={Chamados} />
            <Drawer.Screen name="Mapa" component={Mapa} />
            <Drawer.Screen name="Suporte" component={Suporte} />
            <Drawer.Screen name="ScanQr" component={ScanQr} />
        </Drawer.Navigator>


    </NavigationContainer>
)

export default AppNavigator;