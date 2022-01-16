import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  nickname: string;
  picture: string;
};

type State = {
  user: User | null;
  logoutUser: () => void;
};

const AuthContext = createContext<State | undefined>(undefined);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { logout, isLoading, user: auth0User } = useAuth0();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (auth0User) {
      const { nickname = "", picture = "" } = auth0User;
      setUser({ nickname, picture });
    }
  }, [auth0User]);

  const logoutUser = () => {
    logout({ returnTo: window.location.origin });
  };

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <AuthContext.Provider value={{ user, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Auth context must be used within a Provider!");
  }

  return context;
};

export { useAuthContext };

export default AuthContextProvider;
