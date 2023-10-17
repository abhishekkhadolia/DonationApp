import React, {useRef} from 'react';
import {Pressable, TextInput} from 'react-native';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
const InputSearch = props => {
  const TextInputRef = useRef(null);
  const handleFocus = () => {
    TextInputRef.current.focus();
  };
  return (
    <Pressable style={style.container} onPress={handleFocus}>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={style.icon} />
      <TextInput style={style.input} ref={TextInputRef} />
    </Pressable>
  );
};

export default InputSearch;
