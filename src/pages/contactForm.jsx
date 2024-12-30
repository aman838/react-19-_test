import React, { useState, useActionState } from "react";
import { formSubmission } from "../services/home-service";

function ContactForm() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  const [user, submitAction, isPending] = useActionState(login, {
    data: null,
    error: null,
  });

  async function login(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const payload = { username, password };
    try {
      const response = await formSubmission(payload);
      return { data: response.data };
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>ContactForm</div>

      <div>counter: {counter} </div>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>

      <form action={submitAction}>
        <div>
          <input placeholder="Username" name="username" />
        </div>
        <div>
          <input placeholder="password" name="password" />
        </div>
        <div>
          <button type="submit" disabled={isPending}>
            submit
          </button>
        </div>
      </form>
      {isPending && <div>...loading</div>}

      {user?.data !== null && <div>{user.data.username}</div>}
    </>
  );
}

export default ContactForm;
