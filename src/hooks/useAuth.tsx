import React, { ReactNode, useState, useEffect, useContext } from "react";
import * as api from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
};

interface AuthContextData {
  user: User | null;
  fetchUser: (email: string, password: string) => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('user')!) ?? null);

  const fetchUser = async (email: string, password: string) => {
    const currentUser = await api.login(email, password);
    if (currentUser) {
      console.log("AQUI É O DADO DA API", currentUser);
      localStorage.setItem('user', JSON.stringify(currentUser));
      setUser(currentUser as User);
    };
  };
  const loadUser = async () => {
    const userCollection = await localStorage.getItem('user');
    if (userCollection) {
      const parsedUser = await JSON.parse(userCollection) as User;
      fetchUser(parsedUser.email, parsedUser.password)
    };
  };
  useEffect(() => {
    if (user === null) {
      loadUser();
    }
    console.log("AQUI É O  MEU USER", user);
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };