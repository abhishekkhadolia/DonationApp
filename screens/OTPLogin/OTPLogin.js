import React, {Component, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import TitleText from '../../components/TitleText/TitleText';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import globalStyle from '../../assets/styles/globalStyle';

const OTPLogin = ({navigation}) => {
  const validateOtp = otp => {
    navigation.navigate('Login');
    console.log(otp);
  };

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View style={style.container}>
        <TitleText
          title="OTP Login"
          fontColor="#022150"
          titelFontSize={24}
          fontWeight="600"
        />
      </View>
      <View style={style.InputPadding}>
        <OTPInputView
          style={{width: '80%', height: 200}}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={style.underlineStyleBase}
          codeInputHighlightStyle={style.underlineStyleHighLighted}
          onCodeFilled={code => {
            validateOtp(code);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OTPLogin;
