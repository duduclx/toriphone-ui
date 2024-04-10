import React, { useState, useContext, createContext } from "react";
import {
  setSessionOnStorage,
  removeSessionOnStorage,
  getSessionOnStorage
} from "../stores/LocalStorage";

import Wazo from "@wazo/sdk";
import { WazoApiClient } from '@wazo/sdk'
import { t } from "i18next";
import { ApiRequester } from "@wazo/sdk";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [requester, setRequester] = useState({});
  let session = "";

  const login = async (email, password, server) => {
    setLoading(true);
    setErrorMessage("");
    // init
    const client = new WazoApiClient({
      server: server,
      agent: null,
      clientId: 'toriportal',
      isMobile: false
    })

    // retrieve session
    try {
      session = await client.auth.logIn({username: email.trim(), password: password.trim()})
      session.server = server;

      const apiclient = new ApiRequester({
        server: server,
        refreshTokenCallback: () => {},
        clientId: 'toriportal',
        agent: null,
        token: session.token
      })

      setRequester(apiclient)

      const profile = await apiclient.call(`auth/0.1/users/${session.uuid}`)
      session.profile = profile
      
    } catch (e) {
      displayAuthError(e);
    }

    setLoading(false);
    setSessionOnStorage(session)
    setUser(session);

    // refresh token
    Wazo.Auth.setOnRefreshToken((token) => {
      console.log('token refresh', token);
      // setUser({ token });
      // mettre à jour dans session, puis
      // setUser(session);
      // setSessionOnStorage(session);
    });
  };

  const logout = async () => {
    //await Wazo.Phone.disconnect();
    //await Wazo.Auth.logout();
    removeSessionOnStorage();
    setUser(null);
  };

  const displayAuthError = e => {
    if (e.toString().includes("TypeError")) {
      setErrorMessage(t("login.form_error_server"));
    } else {
      const error = JSON.parse(e.message);
      if (error.reason[0].includes("Authentication")) {
        setErrorMessage(t("login.form_error_login"));
      } else {
        setErrorMessage(t("login.form_error_other"));
      }
    }
  }


  const updatePassword = async (oldPassword, newPassword) => {
    try {
      await Wazo.auth.updatePassword(
        user.uuid,
        oldPassword,
        newPassword
      );
      return {
        status: "success",
        title: t("login.update_password_event"),
        description: t("login.update_password_event_true"),
        duration: 5000,
      };
    } catch (e) {
      return {
        status: "error",
        title: t("login.update_password_event"),
        description: t("login.update_password_event_false"),
        duration: 5000,
      };
    }
  };

  const value = {
    requester,
    user,
    loading,
    errorMessage,
    onLogin: login,
    onLogout: logout,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};