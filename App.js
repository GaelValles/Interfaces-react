import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Switch, Button } from 'react-native';
const images = {uri: 'https://www.webdoxclm.com/hubfs/00-MARKETING-OFFICIAL/Blog/April%202022/webdox-img-en-que-consiste-la-seguridad-digital.jpg#keepProtocol'};


const styles = StyleSheet.create({
  container: {
    width: 300,
    margin: 0,
    textAlign: 'center',
  },
  container1: {
    color:'#3B445C'
  },
  iconos:{
    height:40,
    width:40,
    marginLeft:60,
    marginTop:20
  },
  iconosEdicion:{
    height:40,
    width:40,
    marginTop:25,
    marginLeft:20
  },
  iconosEdicion1:{
    height:40,
    width:40,
    marginTop:-40,
    marginLeft:80
  },
  iconosEdicion2:{
    height:40,
    width:40,
    marginTop:-40,
    marginLeft:140
  },
  iconosEdicion3:{
    height:40,
    width:40,
    marginTop:-40,
    marginLeft:200
  },
  iconosEdicion4:{
    height:40,
    width:40,
    marginTop:-40,
    marginLeft:260
  },
  iconosEdicion5:{
    height:30,
    width:30,
    marginLeft:9,
  },
  iconosEdicion6:{
    height:40,
    width:40,
    marginTop:-40,
    marginLeft:320
  },
  div:{
    marginTop:100,
    height:600,
    width: 330,
    marginLeft:17,
    borderRadius:30,
    backgroundColor: '#ffff'
  },
  bimage:{
    width:1000,
    height: 1000
  },
  input: {
    width: '90%',
    padding: 5,
    marginLeft:16,
    marginBottom: 10,
    borderTopColor:'white',
    borderLeftColor: 'white',
    borderRightColor:'white',
    borderBottomColor: 'black', // Color del borde
    borderWidth: 2,   
  },

  socialButton: {
    textDecoration: 'none'
  },
  image:{
    width: 150,
    height: 150,
    marginLeft:87
  },
  image1:{
    width: 360,
    height: 360,
  },
  div1: {
    marginTop:-100,
    height:600,
    width: 360,
    borderRadius:50,
    backgroundColor: '#2E2E2E'
  },
  div2: {
    marginTop:110,
    height:100,
    width: 360,
    backgroundColor: '#2E2E2E'
  },
  div3: {
    marginTop:-125,
    marginLeft:145,
    height:50,
    width: 50,
    borderRadius:100,
    backgroundColor: '#2E2E2E'
  },
  imagesSelection:{
    marginTop:20,
    marginLeft: 30,
    width: 75,
    height: 75,
  },
  imagesSelection1:{
    marginTop:-265,
    marginLeft: 135,
    width: 75,
    height: 75,
  },
  imagesSelection2:{
    marginTop:-75,
    marginLeft: 245,
    width: 75,
    height: 75,
  },
  imagesSelection4:{
    marginTop:20,
    marginLeft: 135,
    width: 75,
    height: 75,
  },
  imagesSelection5:{
    marginTop:-75,
    marginLeft: 245,
    width: 75,
    height: 75,
  },
  imagesSelection6:{
    marginTop:20,
    marginLeft: 135,
    width: 75,
    height: 75,
  },
  imagesSelection7:{
    marginTop:-75,
    marginLeft: 245,
    width: 75,
    height: 75,
  },
  FotoEdicion:{
    marginTop:40,
    marginLeft:30,
    width:290,
    height:500,
  },
  histograma:{
    marginTop:-650,
    marginLeft:235,
    height:50,
    width:100,
  },
  button: {
    width:200,
    height:35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
    marginLeft:60,
    color: '#fff',
    borderColor:'#0000',
    },
    button1: {
      width:200,
      height:45,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#666E8C',
      padding: 5,
      borderRadius: 10,
      marginTop: 20,
      marginLeft:80,
      color: '#fff',
      borderColor:'#0000',
      },
});

const Stack = createNativeStackNavigator();
function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Pagina2" component={Principal}></Stack.Screen>
        <Stack.Screen name="Edicion" component={Edicion}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <ImageBackground source={images} resizeMode="cover" style={styles.bimage}>
    <View style={styles.div}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/69/f5/95/69f595f6831431a8b06a19491b9ac821.jpg' }} style={styles.image}/>
          <Text style={{ marginLeft:60, fontSize:30, marginBottom:15 }}>Iniciar Sesión</Text>   
          <TextInput style={styles.input} placeholder='Nombre de usuario' />
        <TextInput style={styles.input} placeholder='Contraseña' />
  
        <Button 
          style={styles.button}
          title="Entrar"
          onPress={() => navigation.navigate('Pagina2')}
        />
        <Text style={{ marginTop:10,marginLeft:70, color: '#37BCE8'}}>No tienes una cuenta aún?</Text>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{uri:'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'}}  style={styles.iconos}/>
          <Text style={{marginLeft: 110, marginTop:-30}}>Entrar con Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png'}} style={styles.iconos}/>
          <Text style={{marginLeft: 110, marginTop:-30  }}>Entrar con Facebook</Text>
        </TouchableOpacity>    
    </View>
    </ImageBackground>
    </View>
  );
};

function Principal({ navigation }) {
  return(
    <View>
      <Image source={{ uri: 'https://i.pinimg.com/564x/1d/76/b4/1d76b4e6971487c3357aa21865442138.jpg' }} style={styles.image1}/>
      <View style={styles.div1}>
      <Text style={{ marginLeft:60, fontSize:30, marginBottom:15,marginTop: 20, color:'#fff' }}>Elige una imagen</Text>
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png' }} style={styles.imagesSelection}/>
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png' }} style={styles.imagesSelection}/>
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png' }} style={styles.imagesSelection}/>

      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png' }} style={styles.imagesSelection1}/>
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png' }} style={styles.imagesSelection2}/>

      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png' }} style={styles.imagesSelection4}/>
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png' }} style={styles.imagesSelection5}/>

      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png' }} style={styles.imagesSelection6}/>
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png' }} style={styles.imagesSelection7}/>

      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Edicion')}>
        <Text style={{ color: '#fff' }}>Entrar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

import brillo from './assets/brillo.png';
import contraste from './assets/contraste.png';
import clonar from './assets/clonar.png';
import recortar from './assets/recortar.png';
import lazo from './assets/lazo.png';
import flecha from './assets/flechaUP.png';
import perspectiva from './assets/perspectiva.jpg';

function Edicion({ navigation }) {
  return(
  <View>
    <Image source={{ uri: 'https://i.pinimg.com/564x/79/86/74/798674b4c492afa1b29b5c24cf9f4660.jpg' }} style={styles.FotoEdicion}/>
    
    <View style={styles.div2}>
      <Image source={brillo } style={styles.iconosEdicion}/>
      <Image source={contraste} style={styles.iconosEdicion1}/>
      <Image source={clonar} style={styles.iconosEdicion2}/>
      <Image source={recortar} style={styles.iconosEdicion3}/>
      <Image source={lazo} style={styles.iconosEdicion4}/>
      <Image source={perspectiva} style={styles.iconosEdicion6}/>
    </View>

    <View style={styles.div3}>
    <Image source={flecha} style={styles.iconosEdicion5}/>
    </View>

    <Image source={{ uri: 'https://www.blogdelfotografo.com/wp-content/uploads/2020/01/histograma-correcto.webp' }} style={styles.histograma}/>

  </View>
  );
}
export default App;

