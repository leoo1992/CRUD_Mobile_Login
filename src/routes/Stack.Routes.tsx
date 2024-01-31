import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserForm } from "../views/UserForm/UserForm";
import { UserList } from "../views/UserList/UserList";

export function StackRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator
      initialRouteName="List"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#fff",
        headerShadowVisible: false,
      }}
    >
      <Screen
        name="List"
        component={UserList}
        options={() => {
          return {
            title: "Usuários",
            headerRight: () => (
            <></>
            ),
          };
        }}
      />
      <Screen
        name="Form"
        component={UserForm}
        options={() => {
          return {
            title: "Cadastro de Usuário",
          };
        }}
      />
    </Navigator>
  );
}
