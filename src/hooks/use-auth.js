import { useContext } from "react";

export const useAuth = () => {

  // HACE FALTA ALIMENTAR EL STATE DE AUTH, A TRAVÉS DE APP CONTEXT
  // TAL COMO ESTÁ, NO FUNCIONA
  /* 
  const savedUserData = localStorage.getItem("userInfo");
  const savedUserDataParsed = JSON.parse(savedUserData);
  const AppContext = savedUserDataParsed; // INVESTIGAR SI AIXÒ VA AIXÍ
  console.log('app context', AppContext);
  */
  const AppContext = {user: "Joan Colom"};

  const [auth, setAuth] = useContext(AppContext);

  return {
    isAuthenticated: !!auth.user,
  };
}
