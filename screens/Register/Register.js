import React, {useEffect, useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import TitleText from '../../components/TitleText/TitleText';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import InputText from '../../components/InputText/InputText';
import globalStyle from '../../assets/styles/globalStyle';
import Buttons from '../../components/Buttons/Buttons';
import {textColorBlue} from '../../assets/helper';
const Register = props => {
  const [message, setMessage] = useState(null);
  const [formValidated, setformValidated] = useState(false);
  const [isRegisterCheck, setisRegisteredCheck] = useState(false);
  const [fullName, setfullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submitForm, setSubmitForm] = useState(false);
  useEffect(() => {
    if (submitForm === true) {
      validateRegisterForm();
    }
  }, [fullName, email, password, submitForm]);

  const validateRegisterForm = () => {
    let errors = null;

    if (!fullName) {
      errors = 'Name is required.';
    } else if (!email) {
      errors = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors = 'Email is invalid.';
    } else if (!password) {
      errors = 'Password is required.';
    } else if (password.length < 6) {
      errors = 'Password must be at least 6 characters.';
    }

    if (errors) {
      setMessage(errors);
      setformValidated(false);
    } else {
      setMessage(null);
      setformValidated(true);
    }
  };
  const handleSubmit = () => {
    setSubmitForm(true);
    if (formValidated === true) {
      console.log('Validated');
      setMessage('Registration Successfull');
      setisRegisteredCheck(true);
      props.navigation.navigate('Home');
      //useSellector
    } else {
      console.log('Form is Not Validated');
      setisRegisteredCheck(false);
    }
  };
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View style={style.container}>
        <TitleText
          title="Hello and Welcome!"
          fontColor="#022150"
          titelFontSize={24}
          fontWeight="600"
        />
      </View>
      <View style={style.InputPadding}>
        <InputText
          title="First & Last Name"
          secure={false}
          onChangeText={value => setfullName(value)}
        />
      </View>
      <View style={style.InputPadding}>
        <InputText
          title="Email"
          secure={false}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={style.InputPadding}>
        <InputText
          title="Password"
          secure={true}
          onChangeText={value => setPassword(value)}
        />
      </View>
      <Text
        style={[
          isRegisterCheck === false && style.errorMessage,
          isRegisterCheck === true && style.successMessage,
        ]}>
        {message}
      </Text>
      <View style={style.InputPadding}>
        <Buttons title="Register" onPress={() => handleSubmit()} />
      </View>
      <View style={style.CaptionText}>
        <Pressable onPress={() => props.navigation.navigate('Login')}>
          <TitleText
            title="I have already have account?"
            fontColor={textColorBlue}
            titelFontSize={16}
            fontWeight="600"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Register;
