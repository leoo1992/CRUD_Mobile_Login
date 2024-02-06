import { useContext } from "react";
import { View } from "react-native";
import { Avatar, ListItem, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { styles, styleIcon } from "./styles";
import { handleConfirmUserDelete } from "../../controllers/DeleteUserController";
import UsersContext from "../../contexts/UsersContext";

export function GetUserItem({ item: user }: any) {
  const navigation = useNavigation();
  const { dispatch } = useContext(UsersContext);

  return (
    <ListItem bottomDivider onPress={() => navigation.navigate("Form", user)}>
      <View style={styles.avatar}>
        <Avatar rounded key={user.id} source={{ uri: user.avatarUrl }} />
      </View>
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{user.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.subTitle}>
          {user.email}
        </ListItem.Subtitle>
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
            onPress={() => handleConfirmUserDelete(user, dispatch)}
            type="clear"
            icon={styleIcon.delete}
            buttonStyle={styleIcon.deleteStyle}
          />
        </View>
      </ListItem.Content>
    </ListItem>
  );
}
