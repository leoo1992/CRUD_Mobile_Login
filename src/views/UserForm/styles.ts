import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    color: "purple",
    marginTop: 5,
    backgroundColor: "#fff",
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    verticalAlign: "middle",
    padding: 0,
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: "purple",
    fontWeight: "bold",
  },

  viewContainer: {
    padding: 20,
    flex: 1,
  },

  iconInput: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    verticalAlign: "middle",
    alignItems: "center",
    margin: 0,
    flex: 1,
    backgroundColor: "transparent",
  },

  textFieldInit: {
    fontWeight: "bold",
    color: "purple",
    marginTop: 0,
  }, 

  textFieldInitError: {
    fontWeight: "bold",
    color: "red",
    marginTop: 0,
  },

  textField: {
    fontWeight: "bold",
    color: "purple",
    marginTop: 20,
  },

  textFieldError: {
    fontWeight: "bold",
    color: "red",
    marginTop: 20,
  },

  submitButton: {
    borderRadius: 10,
    borderColor: "darkgrey",
    backgroundColor: 'purple',
    borderWidth: 2,
    width: "40%",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    fontWeight: "bold",
    height: 45,
  },

  submitButtonError: {
    borderRadius: 10,
    borderColor: "red",
    backgroundColor: 'rgba(255,0,0,0.1)',
    borderWidth: 2,
    width: "40%",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    color: "red",
    fontWeight: "bold",
    height: 45,
  },

  buttonTextError: {
    color: "red",
    fontWeight: 'bold'
  },

  buttonText: {
    color: "white",
    fontWeight: 'bold'
  },

  containerSaveIcon: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    padding:0,
    margin:0
  },

  buttonGroup: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
  },

  containerSafeAreaView: {
    flex: 1,
  },

  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },

  inputError: {
    color: "red",
    backgroundColor: "rgba(255,0,0,0.1)",
    fontWeight: "bold",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: "red",
  },

  errorText: {
    color: "red",
    marginTop: 5,
    fontWeight: "bold",
  },

  iconError: {
    color: "red",
  },
});

export const saveIcon = {
  name: "save",
  color: "white",
};

export const saveIconError = {
  name: "nearby-error",
  color: "red",
};
