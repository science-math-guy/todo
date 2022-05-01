import React, { useState } from "react";
import { auth } from "../firebase";

export default function Home() {
      const [files, setFiles] = useState([]);
    let newFile = () => {
        let fileName = window.prompt("Name of the file:");
        setFiles(arr => [...arr,`${fileName}`])
    };
  return (
    <main className="h-screen bg-gray-700">
      <nav className="w-100 py-5 px-20 flex flex-row justify-between items-center bg-gray-800 text-white font-Poppins">
        <h1 className="text-2xl font-semiBold">Todo</h1>
        <div className="flex space-x-5 justify-between items-center">
          <ul className="flex flex-col justify-between items-end">
            <li>
              <p>{auth.currentUser.displayName}</p>
            </li>
            <li>
              <p className="text-xs">{auth.currentUser.email}</p>
            </li>
          </ul>
          <img
            className="rounded-full h-12"
            src={auth.currentUser.photoURL}
            alt=""
          />
        </div>
      </nav>
      <section className="px-20 py-10 text-white font-Poppins">
        <div className="flex flex-row space-x-10">
          <button
            onClick={newFile}
            className="h-36 w-36 border rounded-lg border-dashed font-light border-gray-400"
          >
            New Task
          </button>
          <div className="flex flex-row space-x-5">
            {files.map((file) => {
              return (
                <div className="flex-col h-36 w-60 border-2 rounded-lg font-light border-gray-400 flex justify-center items-center">
                  <p className="font-bold">{file}</p>
                  <p>---</p>
                  <p className="text-xs">No template</p>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="my-20" />
        <button
          className="px-5 py-3 border rounded-lg border-gray-600 bg-gray-800"
          onClick={() => auth.signOut()}
        >
          Sign out
        </button>
      </section>
    </main>
  );
}
