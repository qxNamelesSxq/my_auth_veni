import { View, Text ,Image,StyleSheet,useWindowDimensions,ScrollView,TextInput} from 'react-native';
import React,{useState} from 'react';
import Logo from '../../../assets/images/veniLogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm,Controller} from 'react-hook-form'



const SignInScreen = () => {

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control,handleSubmit,formState:{errors}} = useForm();





    const onSignInPresed =(data) =>
  {
    console.log(data);

        //validate user
        navigation.navigate('Home');
    };
  
    const onForgotPasswordPresed =() =>{
      
        navigation.navigate("ForgotPassword");
    };


      const onSignInFacebook =() =>{
       
  };
      const onSignInGoogle =() =>{
    console.warn("Google");
};
      const onSignInApple =() =>{
  console.warn("Apple");
};

    const onSignUpPress =()=>
    {
      navigation.navigate("SignUp");
    }




    return (
      <ScrollView showsVerticalScrollIndicator={false} style ={{backgroundColor:'#F9FBFC'}}>
    <View style = {styles.root}>
      <Image source={Logo} style = {[styles.logo,{height:height*0.3},{marginBottom:10}]} 
      resizeMode = "contain"/>




       <CustomInput name="username" 
       placeholder="Username"  
       control={control} rules={{required:'Username is required'}}/>
      
      <CustomInput name ="password" 
      placeholder="Password" 
      secureTextEntry={true} control={control}
      rules={{required:'Password is required', minLength:{value:3,message:'Password should be minimum 3 characters long'}}}/> 



      <CustomButton text ="Sign In" onPress={ handleSubmit(onSignInPresed)}/>
      
      <CustomButton text ="Forgot password?" 
      onPress={onForgotPasswordPresed} 
      type ="TERTIARY"/>

      <CustomButton text ="Sign In with Facebook" onPress={onSignInFacebook}
      bgColor="#e7eaf4"
      fgColor="#4765a9"
      
      />
      <CustomButton text ="Sign In with Google" onPress={onSignInGoogle}
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      
      />
      <CustomButton text ="Sign In with Apple" onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      
      />

  <CustomButton text ="Don't have an account? Create one" 
      onPress={onSignUpPress} 
      type ="TERTIARY"/>

    </View>
    </ScrollView>
  );
};






const styles = StyleSheet.create({
root:{
alignItems:'center',
padding:20,


},


logo:{

    width:'70%',
    maxWidth:300,
    maxHeight:300,

}


});





export default SignInScreen