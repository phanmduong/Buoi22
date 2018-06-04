import React, { Component } from 'react';
import {
  Platform,Button,
  StyleSheet,TextInput,
  Text,Alert,
  View
} from 'react-native';
import axios from "axios";

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
            name: "",
            phone:"",
            isUser: false
        }
    }
    user = () => {
        this.setState({ isUser: true });
    
        const url = "http://api.keetool.xyz/user";
        axios
          .post(url, {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            phone: this.state.phone,
          })
          .then(response => {
            this.setState({ isUser: false });
            this.props.navigation.navigate("LoginScreen");
          })
          .catch(() => {
            this.setState({ isUser: false });
            Alert.alert("Thông báo", "Tài khoản này có rồi nhé");
          });
      };
    
  render() {
    return (
      <View style={styles.container}>
        <View style={{ borderWidth: 2, borderRadius: 5, borderColor: "red", marginBottom: 10, padding: 5}}>
          <TextInput
            style={{width: 200, height: 60}}
            placeholder="Email"
            onChangeText={(value)=>{
                this.setState({email: value})
            }}
            />
        </View>
        <View style={{ borderWidth: 2, borderRadius: 5, borderColor: "red", marginBottom: 10, padding: 5}}>
        <TextInput
            style={{width: 200, height: 60}}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(value)=>{
                this.setState({password: value})
            }}
        />
        </View>
        <View style={{ borderWidth: 2, borderRadius: 5, borderColor: "red", marginBottom: 10, padding: 5}}>
        <TextInput
            style={{width: 200, height: 60}}
            placeholder="Name"
            onChangeText={(value)=>{
                this.setState({name: value})
            }}
        />
        </View>
        <View style={{ borderWidth: 2, borderRadius: 5, borderColor: "red", marginBottom: 10, padding: 5}}>
        <TextInput
            style={{width: 200, height: 60}}
            placeholder="Phone"
            onChangeText={(value)=>{
                this.setState({phone: value})
            }}
        />
        </View>
        <View style={{borderRadius: 5, margin: 10, padding: 20}}>
            <Button
                style={{width: 200, height: 60}}
                onPress={this.user}
                disabled={this.state.isUser}
                title={this.state.isUser ? "Đang đăng ký" : "Đăng ký"}
                />
        </View>
        
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