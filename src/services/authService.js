// src/services/authService.js

export const login = async (email, password) => {
    const response = await fetch("http://localhost:3000/users/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }
    return data;
};
 
// src/services/authService.js
export const register = async ({ name, email, password }) => {
    const res = await fetch("http://localhost:3000/users/api/v1/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }
    return data;
  };
  