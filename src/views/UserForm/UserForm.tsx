import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { styles, saveIcon } from "./styles";

export function UserForm({ route, navigation }: any) {
  const [user, setUser] = useState(route.params ? route.params : {});

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textFieldInit}>Url Avatar :</Text>
      <TextInput
        style={styles.input}
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder="Insira uma Url"
        value={user.avatarUrl}
      />
      <Text style={styles.textField}>Nome :</Text>
      <TextInput
        style={styles.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe o nome do usuário"
        value={user.name}
      />
      <Text style={styles.textField}>Email :</Text>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informe seu email"
        value={user.email}
      />
      <View style={styles.buttonGroup}>
        <Button
          title="Salvar"
          onPress={() => navigation.navigate("List", user)}
          type="solid"
          icon={saveIcon}
          iconPosition="left"
          iconContainerStyle={styles.containerSaveIcon}
          buttonStyle={styles.submitButton}
        />
      </View>
    </View>
  );
}
