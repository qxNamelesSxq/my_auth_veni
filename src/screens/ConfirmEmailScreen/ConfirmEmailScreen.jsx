import { View, Text,StyleSheet,useWindowDimensions,ScrollView} from 'react-native';
import React,{useState} from 'react';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const ConfirmEmailScreen = () => {

  const {control,handleSubmit,formState:{errors},watch} = useForm();


    const {height} = useWindowDimensions();

    const navigation =useNavigation();

    const onConfirmPresed =() =>
    {
      // console.warn(data);
        navigation.navigate('Home');
    };
  
    const onSignInPress =()=>
    {
      navigation.navigate('SignIn');
    };

    const onResendPress =()=>
    {
      console.warn("onResendPress");
    };

   




    return (
      <ScrollView showsVerticalScrollIndicator={false} >
    <View style = {styles.root}>
      <Text style ={styles.title}>Confirm your email</Text>

      <CustomInput name = "code" placeholder="Enter your confirmation code" 
      control={control}
      rules={{required:'Confirmation code is required'}}
      
      />
     

     <CustomButton text ="Confirm" onPress={handleSubmit(onConfirmPresed)}/>

      <CustomButton text ="Resend code" 
      onPress={onResendPress} 
      type ="SECONDARY"/>


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





export default ConfirmEmailScreen