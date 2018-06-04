import React, { Component } from "react";
import {
  Container,
  View,
  Thumbnail,
  Form,
  Item,
  Input,
  Card,
  CardItem,
  Body,
  Text,
  CardSwiper
} from "native-base";
import { StyleSheet } from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.containerLogo}>
            <Thumbnail
              large
              source={{
                uri: "http://d1j8r0kxyu9tj8.cloudfront.net/webs/logo1.jpg"
              }}
            />
          </View>
          <View style={styles.containerForm}>
            <Card style={styles.cardFrom}>
              <Form style={{ paddingHorizontal: 20 }}>
                <Item>
                  <Input placeholder="Username" />
                </Item>
                <Item last>
                  <Input placeholder="Password" />
                </Item>
              </Form>
            </Card>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerLogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C50000"
  },
  containerForm: {
    flex: 1,
    padding: 20,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  cardFrom: {
    flex: 1,
    width: 300,
    borderRadius: 20,
    height: 200,
    position: "absolute",
    top: -20,
    right: -20
  }
});
