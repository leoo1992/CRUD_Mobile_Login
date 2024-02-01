import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    color: "#000",
    fontWeight: "bold",
    borderColor: "darkgrey",
    borderWidth: 1.5,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: "#fff",
    height: 40,
  },

  viewContainer: {
    padding: 20,
    backgroundColor: "#D3D3D3",
    flex: 1,
  },

  textFieldInit: {
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },

  textField: {
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
  },

  submitButton: {
    borderRadius: 10,
    borderColor: "darkgrey",
    borderWidth: 1.5,
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },

  containerSaveIcon: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },

  buttonGroup: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
  }

});

export const saveIcon = {
  name: "save",
  color: "white",
};
