import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentRight: {
    flexDirection: "row",
  },

  title: {
    color: "purple",
    fontWeight: "bold",
  },

  subTitle: {
    color: "purple",
  },

  avatar: {
    borderColor: "purple",
    borderWidth: 2,
    borderRadius: 60,
  }
});

export const styleIcon = {
  editStyle: {
    borderWidth: 2,
    padding: 1,
    borderRadius: 20,
    width: 30,
    height: 30,
  },
  edit: {
    name: "edit",
    color: "#1E90FF",
    size: 15,
  },
  delete: {
    name: "delete",
    color: "red",
    size: 15,
  },
  deleteStyle: {
    borderColor: "red",
    borderWidth: 2,
    padding: 1,
    borderRadius: 20,
    width: 30,
    height: 30,
    marginLeft: 5,
  },
};
