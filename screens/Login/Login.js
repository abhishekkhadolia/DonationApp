import React, {useEffect, useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import TitleText from '../../components/TitleText/TitleText';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import InputText from '../../components/InputText/InputText';
import globalStyle from '../../assets/styles/globalStyle';
import Buttons from '../../components/Buttons/Buttons';
import {textColorBlue} from '../../assets/helper';
import {getLogin, loginWithEmailPassword} from '../../redux/reducers/User';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFingerprint} from '@fortawesome/free-solid-svg-icons';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.isLogin);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState();
  const [formValidated, setformValidated] = useState(false);
  const isLoginMessage = useSelector(state => state.user.message);
  const [submitForm, setSubmitForm] = useState(false);
  if (isLogin === true) {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }

  useEffect(() => {
    if (submitForm === true) {
      validateLoginForm();
    }
  }, [email, password, submitForm]);
  const validateLoginForm = () => {
    let errors = '';

    // Validate email field
    if (!email) {
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

    // Set the errors and update form validity
  };
  const handleSubmit = (email, password) => {
    setSubmitForm(true);
    if (formValidated === true) {
      dispatch(getLogin(email, password));
      setMessage(isLoginMessage);
    } else {
      console.log('Form is Not Validated');
    }
  };
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View style={style.container}>
        <TitleText
          title="Welcome Back"
          fontColor="#022150"
          titelFontSize={24}
          fontWeight="600"
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
      <View>
        <Text
          style={[
            isLogin === false && style.errorMessage,
            isLogin === true && style.successMessage,
          ]}>
          {message}
        </Text>
      </View>

      <View style={style.InputPadding}>
        <Buttons title="Login" onPress={() => handleSubmit(email, password)} />
      </View>
      <View style={style.CaptionText}>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <TitleText
            title="Don't have an account?"
            fontColor={textColorBlue}
            titelFontSize={16}
            fontWeight="600"
          />
        </Pressable>
      </View>
      <View style={style.CaptionText}>
        <Pressable onPress={() => navigation.navigate('OTPLogin')}>
          <FontAwesomeIcon
            icon={faFingerprint}
            size={50}
            style={style.figerPrint}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
