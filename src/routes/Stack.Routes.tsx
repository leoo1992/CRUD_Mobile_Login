import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserForm } from "../views/UserForm/UserForm";
import { UserList } from "../views/UserList/UserList";
import Icon from "react-native-vector-icons/FontAwesome";
import { UsersProvider } from "../contexts/UsersContext";

export function StackRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <UsersProvider>
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
          options={({ navigation }) => {
            return {
              title: "Usuários",
              headerRight: () => (
                <Icon.Button
                  name="plus"
                  onPress={() => navigation.navigate("Form")}
                  color="#fff"
                  style={{
                    margin: 0,
                    padding: 0,
                    textAlign: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                  }}
                  backgroundColor="transparent"
                ></Icon.Button>
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
    </UsersProvider>
  );
}
