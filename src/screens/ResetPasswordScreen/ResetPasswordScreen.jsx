import { View, Text,StyleSheet,useWindowDimensions,ScrollView} from 'react-native';
import React,{useState} from 'react';
import {useNavigation} from '@react-navigation/native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useForm} from 'react-hook-form';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const {control,handleSubmit} = useForm();
  const [code,setCode] = useState('');
 

  
  
    const {height} = useWindowDimensions();

    const onSubmitPresed=() =>
    {
       navigation.navigate('Home');
    };
  
    const onSignInPress =()=>
    {
      navigation.navigate('SignIn');
    };

   




    return (
      <ScrollView showsVerticalScrollIndicator={false} >
    <View style = {styles.root}>
      <Text style ={styles.title}>Reset your password</Text>

      <CustomInput name = "code" placeholder="Enter your confirmation code" 
      control={control}
      rules={{required:'Code is required'}}/>



<CustomInput name ="new-password" 
      placeholder=" Enter your new Password" 
      secureTextEntry={true} control={control}
      rules={{required:' New password is required', minLength:{value:8,message:'New password should be minimum 3 characters long'}}}/> 

     <CustomButton text ="Submit" onPress={handleSubmit(onSubmitPresed)}/>
     
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





export default ResetPasswordScreen