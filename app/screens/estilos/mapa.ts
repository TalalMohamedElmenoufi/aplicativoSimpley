import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-paper';
import { theme } from '../../../app.style';

export const MapaStyle = StyleSheet.create({
    flex:{
        flex:1
    },  
    fab:{
        position:"absolute",
        right:0,
        bottom:0,
        margin:16,
        backgroundColor:"rgba(12,51,219, 0.7)",
    },
    tecnico:{ 
        width:35,
        height:35
    },
    icon:{
        marginTop: 20,
    },
    cancelar: {
        marginBottom: 10,
    },
    confirmar: {
        backgroundColor: "rgba(12,51,219, 0.7)",
    },
    flexcenterColum: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "column"
    },
    titulo:{
        margin: 20,
        marginTop: 40,
        textAlign:"center",
        color: theme.colors.primary
    },
    cancelarTecnico:{
        position:"absolute",
        margin:"2%",
        bottom:0,
        width:"96%",
    }

});