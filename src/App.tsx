import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Routes } from "./routes/Routes";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        animated={true}
      />
      <Routes />
    </>
  );
}
