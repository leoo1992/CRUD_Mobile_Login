import { createContext, useReducer } from "react";
import users from "../models/dataUser/users";

interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}

interface State {
  users: User[];
}

interface DeleteUserAction {
  type: "deleteUser";
  payload: User;
}

interface AddUserAction {
  type: "addUser";
  payload: User;
}

interface UpdateUserAction {
  type: "updateUser";
  payload: User;
}

interface ActionMap {
  deleteUser: (state: State, action: DeleteUserAction) => State;
  addUser: (state: State, action: AddUserAction) => State;
  updateUser: (state: State, action: UpdateUserAction) => State;
}

type Action = DeleteUserAction | AddUserAction | UpdateUserAction; 

const initialState: State = { users };
const UsersContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

const actions: ActionMap = {
  deleteUser(state, action) {
    const user = action.payload;
    return {
      ...state,
      users: state.users.filter((u) => u.id !== user.id),
    };
  },

  addUser(state, action) {
    const user = action.payload;
    user.id = state.users[state.users.length - 1].id + 1;
    return {
      ...state,
      users: [...state.users, user],
    }
  },

  updateUser(state, action) {
    const user = action.payload;
    return {
      ...state,
      users: state.users.map((u) => (u.id === user.id ? user : u)),
    };
  }

};

export const UsersProvider: React.FC = (props: any) => {
  function reducer(state: State, action: Action) {
    const fn = actions[action.type as keyof ActionMap];
    return fn ? fn(state, action as any) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
