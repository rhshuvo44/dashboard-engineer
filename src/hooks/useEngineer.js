import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import BackendApiUrl from "../api/BackendApiUrl";
import auth from "../firebase.init";
const useEngineer = () => {
  const [engineer, setEngineer] = useState(true);
  const [engineerLoading, setEngineerLoading] = useState(true);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      BackendApiUrl.get(`/employee/${email}`).then((data) => {
        setEngineer(data.Engineer);
        setEngineerLoading(false);
      });
    }
  }, [user]);
  return [engineer, engineerLoading];
};

export default useEngineer;
