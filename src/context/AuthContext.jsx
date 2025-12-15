// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase"; // // 👈 sube un nivel, luego firebase.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", firebaseUser.uid);
        const snap = await getDoc(userRef);

        if (snap.exists()) {
          const data = snap.data();
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            username: data.username || firebaseUser.email?.split("@")[0],
          });
        } else {
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            username: firebaseUser.email?.split("@")[0],
          });
        }
      } catch (err) {
        console.error("Error cargando usuario:", err);
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          username: firebaseUser.email?.split("@")[0],
        });
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const register = async (email, username, password) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = cred.user;

      await setDoc(doc(db, "users", firebaseUser.uid), {
        email,
        username,
        createdAt: new Date(),
      });

      setUser({ uid: firebaseUser.uid, email, username });
    } catch (error) {
      console.error("Error en register:", error);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = cred.user;

      const userRef = doc(db, "users", firebaseUser.uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const data = snap.data();
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          username: data.username || firebaseUser.email?.split("@")[0],
        });
      } else {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          username: firebaseUser.email?.split("@")[0],
        });
      }
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error en logout:", error);
      throw error;
    }
  };

  const value = { user, register, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          Cargando...
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
