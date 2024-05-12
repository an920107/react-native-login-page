import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TextInputIOSProps, View } from 'react-native';
import { styles } from '../style/styles';

type Props = {
  hint?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  textContentType?: TextInputIOSProps["textContentType"];
  secureTextEntry?: boolean;
  errorMessage?: string;
}


export default function AbundantTextInput(props: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const isError = (props.errorMessage ?? "").length > 0;

  return (
    <View style={{ flexDirection: "column", width: "100%", alignItems: "flex-start" }}>
      {(
        ((props.hint != undefined && isFocused) || (props.value ?? input).length > 0)
          ? <Text style={[styles.textInputHint, isError ? selfStyles.errorText : {}, {marginBottom: 4}]}>{props.hint}</Text>
          : <></>
      )}
      <TextInput
        style={[styles.textInput, isError ? selfStyles.errorBorder : {}]}
        placeholder={isFocused ? "" : props.hint}
        placeholderTextColor={isError ? "#dd1100" : undefined}
        onFocus={() => { setIsFocused(true); }}
        onBlur={() => { setIsFocused(false); }}
        value={props.value ?? input}
        onChangeText={props.onChangeText ?? setInput}
        textContentType={props.textContentType}
        secureTextEntry={props.secureTextEntry ?? false}
      />
      {(
        isError
          ? <Text style={[styles.textInputHint, selfStyles.errorText, {marginTop: 4}]}>{props.errorMessage}</Text>
          : <></>
      )}
    </View>
  )
}

const selfStyles = StyleSheet.create({
  errorBorder: {
    borderColor: "#dd1100",
  },
  errorText: {
    color: "#dd1100",
  }
});