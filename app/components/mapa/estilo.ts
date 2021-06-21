import { StyleSheet } from 'react-native';
import { theme } from '../../../app.style';

export const TecnicoStilo = StyleSheet.create({

    icon: {
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
    titulo: {
        margin: 20,
        marginTop: 40,
        textAlign: "center",
        color: theme.colors.primary
    },
    cancelarTecnico: {
        position: "absolute",
        margin: "2%",
        bottom: 0,
        width: "96%",
    }


});