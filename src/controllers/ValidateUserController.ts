import { useState, useContext } from "react";
import UsersContext from "../contexts/UsersContext";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

export const ValidateUserController = (route: { params: any }, ) => {
  const { dispatch } = useContext(UsersContext);
  const [user, setUser] = useState(route.params ? route.params : {});
  const [avatarUrlError, setAvatarUrlError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigation = useNavigation();


  const validateAvatarUrl = () => {
    if (!user.avatarUrl) {
      setAvatarUrlError("* URL do Avatar é obrigatória");
      return false;
    } else if (user.avatarUrl.length < 10) {
      setAvatarUrlError("* Deve conter pelo menos 10 letras");
      return true;
    } else if (user.avatarUrl.length > 60) {
      setAvatarUrlError("* Url muito longa");
      return true;
    } else {
      setAvatarUrlError("");
      return true;
    }
  };

  const validateName = () => {
    if (!user.name) {
      setNameError("* Nome é obrigatório");
      return false;
    } else if (user.name.length < 2) {
      setNameError("* Deve conter pelo menos 3 letras");
      return true;
    } else {
      setNameError("");
      return true;
    }
  };

  const validateEmail = () => {
    if (!user.email) {
      setEmailError("* Email é obrigatório");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      setEmailError("* Email inválido");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handleSave = (user: any) => {
    validateAvatarUrl(); 
    validateName(); 
    validateEmail();

    if (user.name && user.email && user.avatarUrl && !avatarUrlError && !nameError && !emailError) {
      dispatch({
        type: user.id ? "updateUser" : "addUser",
        payload: user,
      });
      navigation.navigate("List", { user });
    }
    return;
  };

  return {
    nameError,
    emailError,
    avatarUrlError,
    setAvatarUrlError,
    handleSave,
    user,
    setUser,
    validateAvatarUrl,
    validateName,
    validateEmail,
    Text,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Button,
    TextInput,
    ValidateUserController,
  };
};
