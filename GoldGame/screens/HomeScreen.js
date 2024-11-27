import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {authorize,refresh, revoke } from 'react-native-app-auth'
import { TextInput } from 'react-native-web';

export default function HomeScreen() {

  const config ={
    username: 'Nikita',
    password: '1234'
  }

  const [access, setAccess] = useState(null);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    try{
      const result = await authorize(credentials);
      setAccess(result.access);
    }catch (error){
      console.log('Loging Error: ', error)
    }
  }

  return (
    <View>
      {access ? (
        <View>
          <Text>Logged In!</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={{fontSize:50, fontWeight:'bold', margin: 20}}>Welcome</Text>
          <TextInput placeholder='Username' id="username" style={styles.credentials}></TextInput>
          <TextInput placeholder='Password' id="password" style={styles.credentials} secureTextEntry={true}></TextInput>
          <TouchableOpacity onPress={login} style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                    
    justifyContent: 'center',   
    alignItems: 'center',
    display: 'flex',
    paddingTop: '20%'
  },
  credentials:{
    alignItems: 'center',
    width: '40%',
    textAlign: 'center',
    margin: 10,
    borderWidth: 3,
    borderRadius: 10,
    fontSize: 20
  },    
  button: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
});