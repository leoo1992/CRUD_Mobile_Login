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

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [avatarUrlError, setAvatarUrlError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { dispatch } = useContext(UsersContext);
  const navigation = useNavigation();

export const ValidateUserController = (route: { params: any }) => {
  const [user, setUser] = useState(route.params ? route.params : {});


  const validateEmail = (email: string) => {
    if (!email || email === "") {
      setEmailError("* Email é obrigatório");
      setDisabled(true);
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("* Email inválido");
      setDisabled(true);
      return false;
    } else {
      setEmailError("");
      setDisabled(false);
      return true;
    }
  };

  const validateName = (name: string) => {
    if (!name || name === "") {
      setNameError("* Nome é obrigatório");
      setDisabled(true);
      return false;
    } else if (name.length < 3) {
      setNameError("* Deve conter pelo menos 3 letras");
      setDisabled(true);
      return true;
    } else {
      setNameError("");
      setDisabled(false);
      return true;
    }
  };

  const validateAvatarUrl = (avatarUrl: string) => {
    if (!avatarUrl || avatarUrl === "") {
      setAvatarUrlError("* URL do Avatar é obrigatória");
      setDisabled(true);
      return false;
    } else if (avatarUrl.length < 10) {
      setAvatarUrlError("* Deve conter pelo menos 10 letras");
      setDisabled(true);
      return true;
    } else if (avatarUrl.length > 60) {
      setAvatarUrlError("* Url muito longa");
      setDisabled(true);
      return true;
    } else {
      setAvatarUrlError("");
      setDisabled(false);
      return true;
    }
  };

  const handleSave = (user: any) => {
    const { name, email, avatarUrl } = user;

    if (
      validateAvatarUrl(avatarUrl) &&
      validateName(name) &&
      validateEmail(email)
    ) {
      setDisabled(false);
      dispatch({
        type: user.id ? "updateUser" : "addUser",
        payload: user,
      });
      navigation.navigate("List", user);
    } else {
      setDisabled(true);
    }
  };

  return {
    nameError,
    emailError,
    avatarUrlError,
    setAvatarUrlError,
    disabled,
    setDisabled,
    validateName,
    validateEmail,
    validateAvatarUrl,
    handleSave,
    user,
    setUser,
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
