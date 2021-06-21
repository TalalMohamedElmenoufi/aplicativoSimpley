import { StyleSheet } from 'react-native';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

export const ChamadosStyles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: "rgba(252,252,252, 0.7)",
    },
    CadInit: {
        backgroundColor: "rgba(12,51,219, 0.6)",
        borderRadius: 100,
        overflow: 'hidden',
        height: 50,
        width: 50,
        alignContent: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },

    icon: {
        marginTop: 10,
        fontSize: 40,
        color: "rgba(12,51,219, 0.6)",
    },
    Titulo: {
        fontSize: 18,
        opacity: 0.7,
        fontWeight: 'bold',
        color: "#000",
        marginTop: -5,
        marginRight: 0,

    },
    SubTitulo: {
        fontSize: 12,
        color: "#000",
        marginTop: 0,
        marginRight: 0,
        marginLeft: 5,
    },
    icon2: {
        marginTop: 5,
    },
    IconLocal: {
        marginTop: 0,
        marginLeft: 28,
    },
    localTitulo: {
        fontSize: 12,
        marginLeft: 6,
        marginTop: 0,
    },
    IconSevico: {
        marginTop: 0,
        marginLeft: 28,
    },
    SevicoTitulo: {
        fontSize: 12,
        marginLeft: 6,
        marginTop: 0,
    },

    linha: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        margin: "2%",
        bottom: 0,
        width: "96%",
    },

    fab: {
        position: "absolute",
        right: 0,
        bottom: 0,
        margin: 16,
        backgroundColor: "rgba(12,51,219, 0.7)",
    },



});