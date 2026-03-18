import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.styles';

const settings = () => {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors)

  return (
    <View>
      <TouchableOpacity onPress={toggleDarkMode} style={homeStyles.title}>MUDA TEMA</TouchableOpacity>
    </View>
  )
}

export default settings