import { StyleSheet } from 'react-native';
import { theme } from '../../../app.style';

export const loginStyles = StyleSheet.create({
    content:{
        display: "flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"rgb(220,220,220)"
    },
    view:{
        width: "88%"
    },
    cardTitle:{
        color: "rgb(3,50,255)"
    },
    cardButton:{
        margin: 3,
        marginLeft:0,
        marginRight:0
    },

    contentRegister:{
        padding: 15,
        paddingTop:0,
    },
    icon:{
        color: theme.colors.primary
    },
    buttonRegister:{
        margin:15,
        marginLeft: 0,
        marginRight: 0,
    }


}); 