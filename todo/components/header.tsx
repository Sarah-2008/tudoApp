import { View, Text } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const header = () => {
  const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  const todo = useQuery(api.todo.getTodos);

  const todoCompletos = todo ? todo.filter((todo) => todo.isCompleted).length : 0;
  const todoTotal = todo ? todo.length : 0;
  const barraDeProgresso = todoTotal > 0 ? (todoCompletos / todoTotal)*100 : 0;
  // ternario         variavel = condição ? se verdadeiro : se falso

  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        {/* ICONE */}
        <LinearGradient colors={colors.gradients.primary} style={homeStyles.iconContainer}>
          <Ionicons name='calendar' size={30} color={"#fff"}/>
        </LinearGradient>
      </View>

        {/* TEXTO */}
        <View style={homeStyles.titleTextContainer}>
          <Text style={homeStyles.title}> Tarefas de hoje </Text>
          <Text style={homeStyles.subtitle} > {todoCompletos} de {todoTotal}</Text>
        </View>

        {/* BARRA DE TAREFA */}
        <View style={homeStyles.progressContainer}>
          <View style={homeStyles.progressBarContainer}>
              <View style={homeStyles.progressBar}>
                  <LinearGradient colors={["#b85656", "#5a0000"]} style={[homeStyles.progressFill, {width : `${barraDeProgresso}%`}]} />
              </View>
          </View>
        </View>
    </View>

  )
}

export default header