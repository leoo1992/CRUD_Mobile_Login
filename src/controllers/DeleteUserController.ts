import { Alert } from "react-native";

export function handleConfirmUserDelete(user: any) {
    Alert.alert("Deletar usuário", `Excluir ` + user.name + " ?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => console.warn("deletado usuario " + user.id),
      },
    ]);
  }