// navigation/AppNavigator.js
import React from 'react';
import { DicaDoDia } from '../DicaDoDia/DicaDoDia';
import { RecursoEstudo } from '../RecursoEstudo/RecursoEstudo';
import { PerfilAluno } from '../PerfilAluno/PerfilAluno';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


export const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Dica do Dia">
            <Tab.Screen name="Dica do Dia" component={DicaDoDia} options={{
               tabBarIcon: () => (
                <MaterialCommunityIcons name="lightbulb-outline" size={30} />
               ),

               tabBarStyle: {
                backgroundColor: "green"
               }, 
               
               tabBarLabelStyle: {
                fontSize: 12,
                color: "white"
                
                    },

               headerStyle: {
                 backgroundColor: "green"
               },
               headerTintColor: "white"
            }} />
            <Tab.Screen name="Recursos de Estudo" component={RecursoEstudo} options={{
                tabBarIcon: () => (
                 <MaterialCommunityIcons name="notebook-outline" size={30}/>
                ),

                tabBarStyle: {
                    backgroundColor: "green"
                   }, 

                tabBarLabelStyle: {
                    fontSize: 12,
                    color: "white"
                },
                headerStyle: {
                    backgroundColor: "green"
                  },
                  headerTintColor: "white"
            }} />
            <Tab.Screen name="Perfil do Aluno" component={PerfilAluno} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="account-box-multiple-outline" size={30} />
                ),

                tabBarStyle: {
                    backgroundColor: "green"
                   }, 

                tabBarLabelStyle: {
                    fontSize: 12,
                    color: "white"
                },

                headerStyle: {
                    backgroundColor: "green"
                  },
                  headerTintColor: "white"
            }} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigator;
