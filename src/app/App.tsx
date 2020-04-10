import { userApi } from "api";
import { Loading } from "components/Loading";
import { profileSelector, setUserInfo } from "modules/profile/profileSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const loadUserApp = () => import("./UserApp");
const loadGuestApp = () => import("./GuestApp");

const UserApp = React.lazy(loadUserApp);
const GuestApp = React.lazy(loadGuestApp);

export const App = () => {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);
  const [isLoading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    function fetchProfile() {
      userApi
        .info()
        .then(({ data }: any) => dispatch(setUserInfo(data["user_info_token"])))
        .finally(() => setLoading(false));
    }

    setLoading(true);
    fetchProfile();
  }, [dispatch]);

  useEffect(() => {
    loadUserApp();
  }, []);

  if (isLoading) return <Loading />;
  return profile.id ? <UserApp /> : <GuestApp />;
};
