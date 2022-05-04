//Não é um component, vai servir para exportar estilo para os componentes

import { StyleSheet } from 'react-native' //fazer import da biblioteca

export default StyleSheet.create({ //vai criar um styleSheet
    txtG: {
        fontSize: 30,
        textAlign: "center"
    },
    txtM: {
        fontSize: 28,
        textAlign: "center"
    },
    txtP:{
        fontSize: 25,
        textAlign: "center"
    }
})