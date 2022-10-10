import Lottie from "lottie-react";
import React from "react";
import { useRouteError } from "react-router-dom";
import render from "../assets/showerror.json";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex justify-center items-center h-screen font-bold text-xl underline underline-offset-4 text-red-500">
      <div>
        <Lottie animationData={render} loop={true}></Lottie>
        <h1>{error.statusText || error.message}</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
