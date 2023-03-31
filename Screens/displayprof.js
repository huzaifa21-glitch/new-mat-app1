// import React from 'react';
import { Modal,Text, Image, View, StyleSheet,ScrollView, Alert,Pressable,Dimensions} from 'react-native';
import { Globalstyles } from '../Styles/global';
import axios from 'axios';
import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';

let globaldata =[]
var myd={
  name:'',
  age: '',
  work: "",
  hobbies: "",
  education: "",
  description: "",
  city: ""
}

export default function DisplayProf ({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
    console.log("BEOFRE");
    const route = useRoute()
    const formdata = route.params?.data1
    console.log("Display prof "+formdata);
    // const newf = JSON.stringify(formdata);
    //   console.log('display'+newf);
      
      const data3={
        username:   formdata
        
      }
  //   render() {
 
  

  const [datax, setData] = useState(
    {
      name:'',
    age: '',
    work: "",
    hobbies: "",
    education: "",
    description: "",
    city: ""

    }
  );

  useEffect(() => {


    axios.post('http://192.168.18.99:3000/displayprof',{data3})
    .then(response => {
   
  
        // console.log('new resp'+JSON.stringify(response.data));
        if(response.data=="0")
        {
          Alert.alert("Error!","Try Again Later!")
          console.log("NO DATA FOUND "+response.data);
        }
        else{
  
          console.log("DATA CUM"+response.data);
          globaldata = [...response.data];
          // console.log(globaldata);
          globaldata[0].hobbies= globaldata[0].hobbies.replace(/\n/g, '');
          globaldata[0].hobbies= globaldata[0].hobbies.replace(',', ' ');

          myd={
            ...globaldata[0]
          }
          setData({
            ...globaldata[0]
          })
          // console.log(myd);
         
          
        }
        // console.log(response.data);
  
        // // const data = JSON.stringify(response);
        // console.log(response.data.length);
        //  globaldata = [...response.data];
        
    })
    .catch(error => {
        console.log(error);
  });



  }, []);
 
    console.log("COMPLETED");
   
     
    console.log(myd);
console.log(datax);

  
const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width;

    return (












      <View style={styles.container}>


{/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
    

      <ScrollView>
       

      <View style={styles.containerx}>
      <ScrollView>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={{ width: imageWidth, height: 300, borderBottomLeftRadius:50,borderBottomRightRadius:50,}}
        />
        <View style={styles.hobbiesContainer}>
        <Text style={Globalstyles.nameText}>{"kuch"} ,</Text>
        <Text style={Globalstyles.ageText}>{"kuch"} </Text>
        
        </View>
        <View style={styles.workContainer}>
        <Image source={require("../assets/work.png")}
            style={styles.image}></Image>
        <Text style={Globalstyles.eduText}>{"kuch"}</Text>
        </View>
        <View style={styles.workContainer}>
        <Image source={require("../assets/edu.png")}
            style={styles.image}></Image>
        <Text style={Globalstyles.eduText}>{"kuch"}</Text>
        </View>
        <View style={styles.workContainer}>
        <Image source={require("../assets/location.png")}
            style={styles.image}></Image>
        <Text style={Globalstyles.eduText}>{"kuch"}</Text>
        </View>
        <Text style={Globalstyles.aboutText}>Hobbies</Text>
        <View style={styles.hobbiesContainer}> 
            <Text style={Globalstyles.hobbiesText}>{"kuch"}</Text>
            {/* <Text style={Globalstyles.hobbiesText}>Baseball</Text>
            <Text style={Globalstyles.hobbiesText}>Reading</Text>
            <Text style={Globalstyles.hobbiesText}>Crypto</Text>
            <Text style={Globalstyles.hobbiesText}>Partying</Text>
            <Text style={Globalstyles.hobbiesText}>Cycling</Text> */}
        </View>
        <View>
        <Text style={Globalstyles.aboutText}>About</Text> 

        <Text style={styles.descText}>{"kuch"}</Text>
        </View>
        {/* <View style={styles.buttoncontainer}>
            <Pressable style={Globalstyles.profButton}  onPress={() => setModalVisible(true)}>
              <Text style={Globalstyles.buttontext}  > Get Contact </Text>
            </Pressable>
            </View> */}

        </ScrollView>
      </View>









        </ScrollView>
      </View>
   
  
    );
    
  }
// }

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },



  containerx: {
    // marginTop:20,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  hobbiesContainer:{
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop: 10,
  },
  workContainer:{
    marginTop:5,
    flexDirection:'row',
  },
  image:{
    marginLeft:10,
    height:20,
    width:20,
  },
  descText:{
    color: "#121212",
    fontSize: 16,
    marginTop:10,
    fontWeight:'500',
    marginLeft:10,
    marginRight:10,
    // fontFamily:'sans-Regular'
  },
  buttoncontainer:{
    alignItems: 'center',
    marginBottom:40
  },
  container: {
    // marginTop:20,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  hobbiesContainer:{
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop: 10,
  },
  workContainer:{
    marginTop:5,
    flexDirection:'row',
  },
  image:{
    marginLeft:10,
    height:20,
    width:20,
  },
  descText:{
    color: "#121212",
    fontSize: 16,
    marginTop:10,
    fontWeight:'500',
    marginLeft:10,
    marginRight:10,
    // fontFamily:'sans-Regular'
  },
  buttoncontainer:{
    alignItems: 'center',
    marginBottom:40
  }
});