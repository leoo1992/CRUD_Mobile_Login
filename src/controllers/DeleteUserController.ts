import { Alert } from "react-native";

export function handleConfirmUserDelete(user: any, dispatch: any) {

  Alert.alert("Deletar usuário", `Excluir ` + user.name + " ?", [
    {
      text: "Não",
      style: "cancel",
    },
    {
      text: "Sim",
      onPress: () => {
        dispatch({
          type: "deleteUser",
          payload: user,
        });
      },
    },
  ]);
}
