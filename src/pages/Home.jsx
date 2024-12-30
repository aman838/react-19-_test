"use client";
import React, { useContext, useEffect, useTransition, use } from "react";
import { CounterContext } from "../context/counter-context";
import { getUserList } from "../services/home-service";
function Home() {
  const counterData = useContext(CounterContext);
  const [isPending, setTransition] = useTransition();

  const getData = () => {
    setTransition(async () => {
      const response = await getUserList();
      console.log(response, "response");
    });
  };

  const getUserData = async () => {
    try {
      const resp = await use(getUserList());
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const [counter, setCounter] = counterData.counter;

  useEffect(() => {
    // getData();
    getUserData();
  }, []);

  if (isPending) {
    return <div>wait.. </div>;
  }

  return (
    <div>
      <meta name="author"></meta>
      <title>home page</title>
      <div>Home {counter} </div>
    </div>
  );
}

export default Home;
