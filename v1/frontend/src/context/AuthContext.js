import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [teamName, setTeamName] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('hacksnippet_auth');
    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth);
        setIsAuthenticated(true);
        setTeamName(authData.teamName);
      } catch (error) {
        console.error('Error parsing auth data:', error);
        localStorage.removeItem('hacksnippet_auth');
      }
    }
    setLoading(false);
  }, []);

  const login = (teamName, password) => {
    // TODO: Replace with actual API call to verify credentials
    // For now, this is a placeholder that accepts any team name and password
    // You should replace this with a call to your backend/Google Script
    
    // Mock validation - replace with actual API call
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        // In a real app, you would make an API call here:
        // const response = await fetch(LOGIN_API_URL, { ... });
        
        // For now, accept any login (you'll need to implement actual validation)
        const authData = {
          teamName: teamName,
          loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('hacksnippet_auth', JSON.stringify(authData));
        setIsAuthenticated(true);
        setTeamName(teamName);
        resolve(authData);
      }, 500);
    });
  };

  const logout = () => {
    localStorage.removeItem('hacksnippet_auth');
    setIsAuthenticated(false);
    setTeamName(null);
  };

  const value = {
    isAuthenticated,
    teamName,
    login,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
