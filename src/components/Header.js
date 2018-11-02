//importa las librerias que necesitas
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//crea el componente
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return(
    <View style={styles.viewStyle}>
    <Text style={styles.header}>HEADER</Text>
    </View>
  );
};

// exporta el componente para usarlo en otro lugar
export default Header;

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor: 'rgb(0,0,200)'
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    color: 'rgb(255,255,0)',
    marginBottom: 5,
  },
});
