import { View, TextInput, Text, Button, Alert, StyleSheet } from "react-native";
import { useState } from "react"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';


interface Errors {
  name? :string;
  mobileno? :string;
  location? :string;
  selectedValue? :string;
}


export default function App(){
  const [name,setName] =  useState("");
  const [mobileno, setMobileno] = useState("");
  const [location, setLocation] = useState("");
  const [selectedValue, setSelectedValue] = useState("Select --"); 
  
  
  const [errors,setErrors] =  useState<Errors>({});

  const validateForm = () => {
    let errors:Errors = {};

    if (!name) errors.name ="Name is Required";
    if (!mobileno) errors.mobileno ="Mobile No is Required";
    if (!location) errors.location ="Location is Required";
    if (!selectedValue || selectedValue === "Select --") errors.selectedValue = "Select a Service";


    setErrors(errors);
    return Object .keys (errors).length ===0;
  
  };
  
  const handleSubmit = () => {
    if(validateForm()){
      console.log("Submitted",name,mobileno,location,selectedValue);
      setName("");
      setMobileno("");
      setLocation("");
      setSelectedValue("");
      setErrors({});
    }
  };

  return (
    
    <View style ={styles.container}>
    <View style = {styles.form}>
      <Text style ={styles.start}>Book Electrician Online</Text> <br></br><br></br> 
      <Text  style ={styles.label}>NAME</Text>
      <TextInput 
       style ={styles.input}
       placeholder="Enter your Name"
       value ={name}
       onChangeText={setName}/>

       {
        errors.name ? <Text style = { styles.errorText} > {errors.name}</Text> :null
       }

      <Text style ={styles.label}>MOBILE NO</Text>
      <TextInput  
      style ={styles.input}
      placeholder="Enter your Mobile No"
      value ={mobileno}
      onChangeText={setMobileno}/>

       {
        errors.mobileno ? <Text style = { styles.errorText} > {errors.mobileno}</Text> :null
       }

      <Text style ={styles.label}>LOCATION</Text>
      <TextInput  
      style ={styles.location}
      placeholder="Type here..."
      value ={location}
      onChangeText={setLocation}/>

       {
        errors.location ? <Text style = { styles.errorText} > {errors.location}</Text> :null
       }

      <Text style ={styles.label}>SERVICE</Text>
      <Picker
        
        selectedValue={selectedValue}
        
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}>

        <Picker.Item label="Select --" value="Select --" />  {/* Default Placeholder */}
        <Picker.Item label="Emergency Repairs" value="Emergency Repairs" />
        <Picker.Item label="Electrician Electrical Services" value="Electrician Electrical Services" />
        <Picker.Item label="Commercial Electrical Services" value="Commercial Electrical Services" />
        <Picker.Item label="Electrical Installations" value="Electrical Installations" />
        <Picker.Item label="Ups Service" value="Ups Service" />
      </Picker>
        
        
       {
        errors.selectedValue ? <Text style = { styles.errorText} > {errors.selectedValue}</Text> :null
       }



      <TouchableOpacity
            onPress={handleSubmit}
            style={{
            backgroundColor: 'skyblue',
            borderRadius: 5,
            alignItems: 'center',
            padding:10,
            width:90,
            
      }}>
      <Text style={{ fontSize: 16, color: 'black' ,fontWeight:"bold", }}>BOOK</Text>
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
    backgroundColor:"skyblue",
    alignItems:"center",
    
    
  },

  label:{
    fontSize:16,
    marginBottom:5,
    fontWeight:"bold",
    fontFamily:"cambria"
  },

  input:{
    height:40,
    borderColor:"skyblue",
    borderWidth:1,
    marginBottom:15,
    padding:22,
    borderRadius:5,
    width:290,
    fontFamily:"cambria"
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
    fontWeight:"bold",
    fontFamily:"cambria"
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

  start:{
    fontSize:20,
    fontWeight:"bold",
    alignItems: 'center',
    justifyContent:'center',
    color:"blue",
    fontFamily:"cambria"
  },

  location:{
    height:100,
    borderColor:"skyblue",
    borderWidth:1,
    marginBottom:15,
    padding:22,
    borderRadius:5,
    width:290,
    fontFamily:"cambria"
  },

  picker:{
    flex:1,
    height:40,
    borderColor:"skyblue",
    borderWidth:1,
    marginBottom:15,
    padding:18,
    borderRadius:5,
    width:290,
    fontFamily:"cambria",
    color:"black"
  },

  selectedText: {
    fontSize: 16,
    marginTop: 20,
  },

  
});