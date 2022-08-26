import { View, Text,StyleSheet,useWindowDimensions,ScrollView} from 'react-native';
import React,{useState} from 'react';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {

  const {control,handleSubmit,watch} = useForm();
  
  const pwd = watch('password')


  const navigation =useNavigation();
  
    const {height} = useWindowDimensions();

    const onRegisterPresed =() =>
    {
       navigation.navigate('ConfirmEmail')
    };
  
    const onSignInPress =()=>
    {
      navigation.navigate('SignIn')
    };

    const  onTermsOfUsePressed =()=>
    {
      console.warn("onTermsOfUsePressed");
    };

    const  onPrivacyPressed =()=>
    {
      console.warn("onPrivacyPressed");
    }





    return (
      <ScrollView showsVerticalScrollIndicator={false}  style ={{backgroundColor:'#F9FBFC'}}>
    <View style = {styles.root}>
      <Text style ={styles.title}>Create an account</Text>



      <CustomInput name="username" 
       placeholder="Username"  
       control={control} rules={{required:'Username is required',
       minLength:{value:3,message:'Username should be at least 3 characters long'},
       maxLength:{value:24,message:'Username should be max 24 characters long'}
       
       
       }}/>


      <CustomInput name ="Email" placeholder="Email"
      control ={control} rules ={{pattern:{value:EMAIL_REGEX,message:'Email is invalid'}}}
      />


      <CustomInput name ="password" 
      placeholder="Password" 
      secureTextEntry={true} control={control}
      rules={{required:'Password is required', minLength:{value:8,message:'Password should be minimum 3 characters long'}}}/> 


      <CustomInput  name = "password-repeat" placeholder="Password Repeat" secureTextEntry={true}
       control={control}
       rules={{validate: value=>
        value === pwd || 'Password do not match'}}
      />


      <CustomButton text ="Register" onPress={handleSubmit(onRegisterPresed)}/>

    <Text style = {styles.text}>By registering, you confirm that you accept our {``} 
    <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and {``} <Text style ={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>

     
   
    <SocialSignInButtons/>

  <CustomButton text ="Have an account? Sign in" 
      onPress={onSignInPress} 
      type ="TERTIARY"/>

    </View>
    </ScrollView>
  );
};






const styles = StyleSheet.create({
root:{
alignItems:'center',
padding:20
},
text:{color:'gray',
marginVertical:10,

},
link:{
color:'#FDB075'

},
title:{
  fontSize:24,
  fontWeight:'bold',
  color:'#051c60',
  margin:10
}


});





export default SignUpScreen