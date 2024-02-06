import React, { useRef, useEffect } from "react";
import { ValidateUserController } from "../../controllers/ValidateUserController";
import { styles, saveIcon } from "./styles";

export function UserForm(this: any, { route }: any) {
  const {
    nameError,
    emailError,
    avatarUrlError,
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
    validateAvatarUrl,
    validateName,
    validateEmail,
  } = ValidateUserController(route);

  const avatarUrlRef = useRef<any>(null);
  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <KeyboardAvoidingView
          style={styles.viewContainer}
          behavior="height"
          enabled
        >
          <Text
            style={
              avatarUrlError ? styles.textFieldInitError : styles.textFieldInit
            }
          >
            Url Avatar :
          </Text>
          <TextInput
            ref={avatarUrlRef}
            editable
            allowFontScaling
            autoCorrect={false}
            mode="outlined"
            style={[styles.input, avatarUrlError ? styles.inputError : null]}
            onChangeText={(text) => setUser({ ...user, avatarUrl: text })}
            onBlur={validateAvatarUrl}
            placeholder="Insira uma Url"
            placeholderTextColor={avatarUrlError ? "red" : "purple"}
            textColor={avatarUrlError ? "red" : "purple"}
            keyboardType="url"
            inputMode="url"
            right={
              <TextInput.Icon
                icon="camera"
                size={20}
                color={avatarUrlError ? "red" : "purple"}
                forceTextInputFocus
                rippleColor={avatarUrlError ? "red" : "purple"}
                style={styles.iconInput}
              />
            }
            value={user.avatarUrl}
          />
          {avatarUrlError ? (
            <Text style={styles.errorText}>{avatarUrlError}</Text>
          ) : null}

          <Text style={nameError ? styles.textFieldError : styles.textField}>
            Nome :
          </Text>
          <TextInput
            ref={nameRef}
            editable
            allowFontScaling
            autoCorrect={false}
            mode="outlined"
            style={[styles.input, nameError ? styles.inputError : null]}
            onChangeText={(text) => setUser({ ...user, name: text })}
            onBlur={validateName}
            placeholder="Informe o nome do usuário"
            placeholderTextColor={nameError ? "red" : "purple"}
            maxLength={40}
            inputMode="text"
            textColor={nameError ? "red" : "purple"}
            right={
              <TextInput.Icon
                icon="account"
                size={20}
                color={nameError ? "red" : "purple"}
                forceTextInputFocus
                rippleColor={nameError ? "red" : "purple"}
                style={styles.iconInput}
              />
            }
            value={user.name}
          />
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
          <Text style={emailError ? styles.textFieldError : styles.textField}>
            Email :
          </Text>
          <TextInput
            ref={emailRef}
            editable
            allowFontScaling
            autoCorrect={false}
            mode="outlined"
            style={[styles.input, emailError ? styles.inputError : null]}
            onChangeText={(text) => setUser({ ...user, email: text })}
            onBlur={validateEmail}
            placeholder="Informe seu email"
            placeholderTextColor={emailError ? "red" : "purple"}
            keyboardType="email-address"
            inputMode="email"
            textColor={emailError ? "red" : "purple"}
            right={
              <TextInput.Icon
                icon="email"
                size={20}
                color={emailError ? "red" : "purple"}
                forceTextInputFocus
                rippleColor={emailError ? "red" : "purple"}
                style={styles.iconInput}
              />
            }
            value={user.email}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}

          <View style={styles.buttonGroup}>
            <Button
              title="Salvar"
              titleStyle={styles.buttonText}
              onPress={() => handleSave(user)}
              type="solid"
              icon={saveIcon}
              iconPosition="left"
              iconContainerStyle={styles.containerSaveIcon}
              buttonStyle={styles.submitButton}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
