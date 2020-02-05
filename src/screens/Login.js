import React,{Component} from 'react';
import InputField from '../component/InputField';
import NextArrowButton from '../component/button/NextArrowButton';
import colors from '../styles/color';
import {View, Text, ScrollView, StyleSheet,KeyboardAvoidingView} from 'react-native';

class Login extends Component{
    render(){
        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                 <View style={styles.scrollViewWrapper}>
                    <ScrollView style ={styles.scrollView}>
                        <Text style={styles.loginHeader}>Login Component</Text>
                        <InputField 
                            labelText="EMAIL ADDRESS" 
                            labelTextSize={14} 
                            labelColor={colors.white} 
                            textColor={colors.white} 
                            borderBottomColor={colors.white} 
                            inputType="email" 
                            customStyle={{marginBottom:30}} 
                
                        />
                        <InputField 
                        labelText="PASSWORD" 
                        labelTextSize={14} 
                        labelColor={colors.white} 
                        textColor={colors.white} 
                        borderBottomColor={colors.white} 
                        inputType="password"  
                        customStyle={{marginBottom:30}}

                        />
                         
                    </ScrollView>
                    <NextArrowButton />
                </View>
            </KeyboardAvoidingView>
           
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flex: 1,
      backgroundColor:colors.green
    },
    scrollViewWrapper:{
        marginTop: 70,
        flex: 1
    },
    loginHeader:{
        fontSize: 20,
        fontWeight: "300",
        marginBottom: 40
    }
  });
export default Login;

