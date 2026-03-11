import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import  useTheme  from '@/hooks/useTheme';
import { createHomeStyles } from '@/assets/styles/home.styles';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const AdicionarTodo = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const [newTodo, setNewTodo] = useState("");
  const addTodo = useMutation(api.todo.addTodo);

  const handleAddTodo = async () => {
    if (newTodo.trim()){
      try {
        // trim tira os espaços
        await addTodo({ text : newTodo.trim() })
      } catch (error) {
          console.log("Erro ao adicionar todo", error);
          Alert.alert("Error", "Erro ao adicionar");
      }
    } 
  }

  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput style={homeStyles.input} placeholder='Digite uma tarefa' placeholderTextColor={colors.textMuted} multiline value={newTodo} onChangeText={setNewTodo} onSubmitEditing={handleAddTodo} />
        <TouchableOpacity onPress={handleAddTodo} disabled={!newTodo.trim()}>
          <LinearGradient style={homeStyles.addButton} colors={colors.gradients.primary}>
            <Ionicons name='add' size={42} color={'#fff'}></Ionicons>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Image style={homeStyles.img} source={{uri: "https://images.vexels.com/media/users/3/135933/isolated/preview/19ac9c9b9ff7376fc86b45fee366a1a2-icone-de-lista-de-verificacao-de-arquivo.png" }} />
    </View>
  )
}

export default AdicionarTodo