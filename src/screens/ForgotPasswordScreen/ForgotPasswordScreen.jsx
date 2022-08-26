import { View, Text,StyleSheet,useWindowDimensions,ScrollView} from 'react-native';
import React,{useState} from 'react';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const {control,handleSubmit} = useForm();
  
    const {height} = useWindowDimensions();
   

    const onSendPresed=() =>
    {
      navigation.navigate('ResetPassword');
      // console.warn(data);
        
    };
  
    const onSignInPress =()=>
    {
      navigation.navigate('SignIn');
    };

  

   




    return (
      <ScrollView showsVerticalScrollIndicator={false} >
    <View style = {styles.root}>
      <Text style ={styles.title}>Reset your password</Text>

      <CustomInput name="username" 
       placeholder="Username"  
       control={control} rules={{required:'Username is required',
       minLength:{value:3,message:'Username should be at least 3 characters long'},
       maxLength:{value:24,message:'Username should be max 24 characters long'}
       }}/>

     <CustomButton text ="Send" onPress={handleSubmit(onSendPresed)}/>
     
    <CustomButton text ="Back to Sign in" 
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





export default ForgotPasswordScreen