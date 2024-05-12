import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { styles } from '../style/styles'
import AbundantTextInput from '../component/AbundantTextInput';
import { StackScreenProps } from '@react-navigation/stack';

export default function LoginPage(props: StackScreenProps<any, any>) {
  const [email, setEmail] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | undefined>(undefined);

  const handleLogin = () => {
    var errorFlag = false;

    if (email.length === 0) {
      setEmailErrorMessage("電子郵件不得為空");
      errorFlag = true;
    } else if (!new RegExp("^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]+$").test(email)) {
      setEmailErrorMessage("電子郵件格式不符");
      errorFlag = true;
    } else setEmailErrorMessage(undefined);

    if (password.length === 0) {
      setPasswordErrorMessage("密碼不得為空");
      errorFlag = true;
    } else if (password.length < 8) {
      setPasswordErrorMessage("密碼長度必須至少為 8");
      errorFlag = true;
    } else setPasswordErrorMessage(undefined);

    if (!errorFlag)
      props.navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>NCU APP</Text>
      <View style={{ flexDirection: "row", width: "65%", alignItems: "center", marginVertical: 10 }}>
        <View style={{ flex: 1, height: 8, borderRadius: 3, backgroundColor: "#000" }}></View>
        <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: "#000", marginHorizontal: 6 }}></View>
        <View style={{ flex: 1, height: 8, borderRadius: 3, backgroundColor: "#000" }}></View>
      </View>
      <View style={{ height: 60 }} />
      <AbundantTextInput
        hint="電子郵件"
        value={email}
        onChangeText={setEmail}
        textContentType="emailAddress"
        errorMessage={emailErrorMessage}
      />
      <View style={{ height: 15 }} />
      <AbundantTextInput
        hint="密碼"
        value={password}
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry={true}
        errorMessage={passwordErrorMessage}
      />
      <View style={{ height: 30 }} />
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "flex-end" }}>
        <TouchableOpacity>
          <Text style={styles.secondaryButton}>或者，建立新帳號</Text>
        </TouchableOpacity>
        <View style={{ width: 10 }} />
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.primaryButton}>登入</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}