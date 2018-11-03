import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component{
componentWillMount() {
    console.log("YEAP its mounting");
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => console.log("returning promise"))
    // debugger;
  }

  render(){
    return (
      <View>
      <Text>AlbumList</Text>
      </View>
    );
  }
}

export default AlbumList;
