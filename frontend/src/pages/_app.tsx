// /root/dev/attendance-app/frontend/src/pages/_app.tsx
import React, { useState } from "react";
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { UserContext } from "@context/UserContext";
import { ApolloProvider } from "@apollo/client";
import client from "@apollos/client";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [userName, setUserName] = useState<string | null>(null);
  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userName, setUserName }}>
        <Component {...pageProps} />
        <ToastContainer autoClose={5000} />
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
