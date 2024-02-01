import { useContext } from "react";
import { FlatList, View } from "react-native";
import { GetUserItem } from "../../components/GetUserItem";
import UsersContext from "../../contexts/UsersContext";

export function UserList() {
  const {users} =useContext(UsersContext);
  
  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={users}

        renderItem={({ item }) => <GetUserItem item={item} />}
      />
    </View>
  );
}
