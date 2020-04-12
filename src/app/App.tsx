import { userApi } from "api";
import Axios, { AxiosResponse } from "axios";
import { Loading } from "components/Loading";
import { profileSelector, setUserInfo } from "modules/profile/profileSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const loadUserApp = () => import("./UserApp");
const loadGuestApp = () => import("./GuestApp");

const UserApp = React.lazy(loadUserApp);
const GuestApp = React.lazy(loadGuestApp);

export function App() {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    let source = Axios.CancelToken.source();

    const updateProfile = ({ data }: AxiosResponse) =>
      mounted && dispatch(setUserInfo(data["user_info_token"]));

    function fetchProfile() {
      userApi
        .info()
        .then((data) => updateProfile(data))
        .catch()
        .finally(() => setLoading(false));
    }

    setLoading(true);
    fetchProfile();

    return () => {
      mounted = false;
      source.cancel();
    };
  }, [dispatch]);

  useEffect(() => {
    loadUserApp();
  }, []);

  if (isLoading) return <Loading />;
  return profile.id ? <UserApp /> : <GuestApp />;
}
