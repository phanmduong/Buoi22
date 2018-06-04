import React, { Component } from 'react';
import {
  Platform,TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={()=>{
                this.props.navigation.navigate("LoginScreen")
            }}
        >
            <Text style={{fontSize: 30, fontWeight: "bold", margin: 10}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>{
                this.props.navigation.navigate("RegisterScreen")
            }}
        >
            <Text style={{fontSize: 30, fontWeight: "bold", margin: 10}}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
