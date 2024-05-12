import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { styles } from '../style/styles'
import AbundantTextInput from '../component/AbundantTextInput';

type Props = {}

export default function LoginPage({ }: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>NCU APP</Text>
      <View style={{ flexDirection: "row", width: "65%", alignItems: "center", marginVertical: 10 }}>
        <View style={{ flex: 1, height: 8, borderRadius: 3, backgroundColor: "#000" }}></View>
        <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: "#000", marginHorizontal: 6 }}></View>
        <View style={{ flex: 1, height: 8, borderRadius: 3, backgroundColor: "#000" }}></View>
      </View>
      <View style={{ height: 40 }} />
      <AbundantTextInput
        hint="電子郵件"
        value={email}
        onChangeText={setEmail}
        textContentType="emailAddress"
      />
      <View style={{ height: 15 }} />
      <AbundantTextInput
        hint="密碼"
        value={password}
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry={true}
      />
      <View style={{ height: 30 }} />
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "flex-end" }}>
        <TouchableOpacity>
          <Text style={styles.secondaryButton}>或者，建立新帳號</Text>
        </TouchableOpacity>
        <View style={{ width: 10 }} />
        <TouchableOpacity>
          <Text style={styles.primaryButton}>登入</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}