import { useEffect, useState } from "react";
import BackendApiUrl from "../api/BackendApiUrl";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
const useEngineer = () => {
  const [engineer, setEngineer] = useState(true);
  const [engineerLoading, setEngineerLoading] = useState(true);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      BackendApiUrl.get(`/Engineer/${email}`).then((data) => {
        setEngineer(data.Engineer);
        setEngineerLoading(false);
      });
    }
  }, [user]);
  return [engineer, engineerLoading];
};

export default useEngineer;
