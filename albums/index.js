
//Import library that'll help create a component

import React from 'react';
import { AppRegistry, View  } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


//Create Component
const App = () => (
     <View>
         <Header text={'Albums!'}/>
         <AlbumList/>
     </View>

);


//Render Component
AppRegistry.registerComponent('albums', () => App);