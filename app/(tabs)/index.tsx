import { View, TextInput, Text, Button, Alert, StyleSheet } from "react-native";
import { useState } from "react"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from 'react-native';

interface Errors {
  username? :string;
  password? :string;
}


export default function App(){
  const [username,setUsername] =  useState("");
  const [password, setPassword] = useState("");
  const [errors,setErrors] =  useState<Errors>({});

  const validateForm = () => {
    let errors:Errors = {};

    if (!username) errors.username ="Username is Required";
    if (!password) errors.password ="Password is Required";

    setErrors(errors);
    return Object .keys (errors).length ===0;
  
  };
  
  const handleSubmit = () => {
    if(validateForm()){
      console.log("Submitted",username,password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    
    <View style ={styles.container}>
    <View style = {styles.form}>

      <Text  style ={styles.label}>USERNAME</Text>
      <TextInput 
       style ={styles.input}
       placeholder="Enter your username"
       value ={username}
       onChangeText={setUsername}/>

       {
        errors.username ? <Text style = { styles.errorText} > {errors.username}</Text> :null
       }

      <Text style ={styles.label}>PASSWORD</Text>
      <TextInput  
      style ={styles.input}
      placeholder="Enter your Password"
      value ={password}
      onChangeText={setPassword}secureTextEntry/>

       {
        errors.password ? <Text style = { styles.errorText} > {errors.password}</Text> :null
       }
      

      <TouchableOpacity
            onPress={handleSubmit}
            style={{
            backgroundColor: 'skyblue',
            borderRadius: 5,
            alignItems: 'center',
            padding:10,
            width:90
      }}>
      <Text style={{ fontSize: 16, color: 'black' }}>LOGIN</Text>
      </TouchableOpacity>

    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent:"center",
    paddingHorizontal:40,
    backgroundColor:"#f5f5f5",
    alignItems:"center",
    
    
  },

  label:{
    fontSize:16,
    marginBottom:5,
    fontWeight:"bold"
  },

  input:{
    height:40,
    borderColor:"skyblue",
    borderWidth:1,
    marginBottom:15,
    padding:22,
    borderRadius:5,
    width:290,
    },

  
    Button:{
    height:40,
    borderColor:"white",
    borderWidth:1,
    marginBottom:15,
    padding:10,
    borderRadius:7,
    width:90,
    backgroundColor:"skyblue",
    fontWeight:"bold"
    },

  form: {
    backgroundColor:"white",
    padding:90,
    borderRadius:10,
    shadowColor:"blue",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.75,
    shadowRadius:7,
    elevation:8
  },

  errorText:{
    color:"red",
    marginBottom:10,
  },



  
});