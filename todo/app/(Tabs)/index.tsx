import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/header";
import useTheme from "@/hooks/useTheme";
import Loading from "@/components/LoadingSpinner";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AdicionarTodo from "@/components/AdicionarTodo";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Doc , Id } from "@/convex/_generated/dataModel";
import { Ionicons } from "@expo/vector-icons";

type Todo = Doc<"todo">;

export default function Index() {
  // css
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors) 

  const todos = useQuery(api.todo.getTodos);
  const toggleTodo = useMutation(api.todo.toggleTodo)

  const isLoading = todos === undefined

  if(isLoading) return <Loading />

  // observa os erros
  const handleToggleTodo = async (id: Id<"todo">) => {
    try{
      await toggleTodo({ id })
    } 
    catch (error){
      console.log("ERRO AO MUDAR TODO", error)
      Alert.alert("ERROR", "ERRO AO MUDAR O TODO")
    }
  };

  const renderTodoItem = ({ item } : {item: Todo}) => {
    return(
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          
        <TouchableOpacity
            style={homeStyles.checkbox}
            activeOpacity={0.7}
            onPress={() => handleToggleTodo(item._id)}
          >
            <LinearGradient
              colors={
                item.isCompleted
                  ? colors.gradients.success
                  : colors.gradients.muted
              }
              style={[
                homeStyles.checkboxInner,
                {
                  borderColor: item.isCompleted ? "transparent" : colors.border,
                },
              ]}
            >
              {item.isCompleted && (
                <Ionicons name="checkmark" size={18} color="#fff" />
              )}
            </LinearGradient>

          </TouchableOpacity>

          <View>
            <Text
              style={[
                homeStyles.todoText,
                item.isCompleted && {
                  textDecorationLine: "line-through",
                  color: colors.textMuted,
                  opacity: 0.6,
                },
              ]}
            >
              {item.text}
            </Text>
          </View>
        </LinearGradient>
      </View>
    )
  }

  return (
      <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <Text style={homeStyles.title} >HOME</Text>
        <AdicionarTodo />

        <FlatList data={todos} renderItem={renderTodoItem} keyExtractor={(item) => item._id} style={homeStyles.todoList} contentContainerStyle={homeStyles.todoListContent}/>

      {/* {todos?.map((todo) => <Text key={todo._id}>{todo.text}</Text>)} */}
      </SafeAreaView>
      </LinearGradient>
  )

  
}