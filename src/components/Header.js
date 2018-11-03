//importa las librerias que necesitas
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//crea el componente
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return(
    <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

// exporta el componente para usarlo en otro lugar
export default Header;

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor: 'rgb(247, 1, 93)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset:{ width: 0 , height: 8},
    shadowOpacity: .9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    color: 'rgb(1, 92, 249)',
    marginBottom: 5,
  },
});
