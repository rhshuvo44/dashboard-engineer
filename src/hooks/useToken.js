import { useEffect, useState } from "react";
import BackendApiUrl from "../api/BackendApiUrl";

const useToken = () => {
  const [token, setToken] = useState("");
  const user = true;
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      BackendApiUrl.put(`/user/${email}`, currentUser).then((data) => {
        const accessToken = data.token;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
      });
    }
  }, [user]);
  return [token];
};

export default useToken;
