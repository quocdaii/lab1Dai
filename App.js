import { useState } from "react";
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
const App = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPress = ()=>
  {
    Alert.alert(`Dang nhap thanh cong voi user name = ${email}va password = ${password}` );
  }
  return(
    <ImageBackground
    source ={require("./image/lgo1.jpg")}
    style ={{width: '100%', height: '100%'}}
    resizeS
    >

    <View style={mystyle.container}>
      
          
          <Image
              
              style ={{width: 100, height: 100, alignSelf:"center"}}
              source={require("./image/pp.jpg")}
              resize
          ></Image>
          <TextInput
            style={mystyle.textInput}
            onChangeText={setEmail}
            placeholderTextColor="#FF0000"
            placeholder="Nhap user name"
            value={email}
            />
          <TextInput
            style={mystyle.textInput}
            onChangeText={setPassword}
            placeholderTextColor="#FF0000"
            placeholder="Nhap password"
            secureTextEntry
            value={password}
            />
          <TouchableHighlight
            style={mystyle.button}
            onPress={onPress}
          >
            <Text style={mystyle.buttonText}>
                Login
            </Text>
          </TouchableHighlight>
    </View>
    </ImageBackground>
  )
}

export default App;
const mystyle = StyleSheet.create(
  {
    container: {
      flex:1,
      padding: 10,
      justifyContent:"center"
      
    },
    textInput: {

      padding:10,
      borderWidth:1,
      borderColor: "#FFCCFF",
      margin:15
    },
    button: {
      backgroundColor: "aqua",
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      margin: 5
    },
    buttonText: {
      color: "blue",
      fontSize: 20,
      fontweight: "bold"
    }
  }
)