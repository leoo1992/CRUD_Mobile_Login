import { View, Alert } from "react-native";
import { Avatar, ListItem, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { styles, styleIcon } from "./styles";
import { handleConfirmUserDelete } from '../../controllers/DeleteUserController';

export function GetUserItem({ item: user }: any) {
  const navigation = useNavigation();

  return (
    <ListItem bottomDivider onPress={() => navigation.navigate("Form", user)}>
      <Avatar rounded key={user.id} source={{ uri: user.avatarUrl }} />
      <ListItem.Content>
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{user.email} </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content right>
        <View style={styles.contentRight}>
          <Button
            onPress={() => navigation.navigate("Form", user)}
            type="outline"
            icon={styleIcon.edit}
            buttonStyle={styleIcon.editStyle}
          />
          <Button
            onPress={() => handleConfirmUserDelete(user)}
            type="clear"
            icon={styleIcon.delete}
            buttonStyle={styleIcon.deleteStyle}
          />
        </View>
      </ListItem.Content>
    </ListItem>
  );
}
