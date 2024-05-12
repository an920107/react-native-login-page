import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../style/styles'
import { StackScreenProps } from '@react-navigation/stack';

type Props = {}

export default function HomePage(props: StackScreenProps<any, any>) {
  const handleLogout = () => {
    props.navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: "60%" }}
        resizeMode="contain"
        source={require("../../assets/happy-cat.gif")}
      />
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.primaryButton}>登出</Text>
      </TouchableOpacity>
    </View>
  )
}