import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = token => {
    localStorage.setItem('authToken', token);
  };

  const signupUser = async requestBody => {
    return apiService.signupUser(requestBody);
  };

  const signupCompany = async requestBody => {
    return apiService.signupCompany(requestBody);
  };

  const loginUser = async requestBody => {
    return apiService.loginUser(requestBody).then(response => {
      storeToken(response.data.authToken);
      authenticateUser();
    });
  };

  const loginCompany = async requestBody => {
    return apiService.loginCompany(requestBody).then(response => {
      storeToken(response.data.authToken);
      authenticateUser();
    });
  };

  const authenticateUser = () => {
    apiService
      .verify()
      .then(response => {
        // If the server verifies that JWT token is valid  ✅
        const user = response.data;
        // Update state variables
        // console.log(user);
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);
      })
      .catch(() => {
        // If the server sends an error response (invalid token) ❌
        // Update state variables
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
      });
  };

  const removeToken = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem('authToken');
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    // Run the function after the initial render,
    // after the components in the App render for the first time.
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser, signupUser, loginUser, signupCompany, loginCompany }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };