import React from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100 flex-col space-y-20">
      <h1 className="font-bold text-6xl text-red-800">Todo</h1>
      <button
        className="px-5 py-3 border rounded-lg border-gray-400 text-gray-800"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </main>
  );
}
