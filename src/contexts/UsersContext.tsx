import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  createContext,
} from "react";
import users from "../data/users";

const UsersContext = createContext({ users });

export const UsersProvider = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <UsersContext.Provider value={{ users }}>
      {props.children}
    </UsersContext.Provider>
  );
};
export default UsersContext;
