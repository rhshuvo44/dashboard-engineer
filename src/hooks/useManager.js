import { useEffect, useState } from "react";
import BackendApiUrl from "../api/BackendApiUrl";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
const useManager = () => {
  const [manager, setManager] = useState(true);
  const [managerLoading, setManagerLoading] = useState(true);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      BackendApiUrl.get(`/manager/${email}`).then((data) => {
        setManager(data.manager);
        setManagerLoading(false);
      });
    }
  }, [user]);
  return [manager, managerLoading];
};

export default useManager;
