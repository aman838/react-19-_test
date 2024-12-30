import React, { useState, useOptimistic, useRef } from "react";

const sendMessage = (message) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        text: message,
        sending: false,
      });
    }, 1500);
  });

  return promise;
};

function Message() {
  const [message, setMessage] = useState([]);
  const formRef = useRef();
  const [optimisticMessage, addOptimisticMessage] = useOptimistic(
    message,
    (currenState, newState) => [
      ...currenState,
      {
        text: newState,
        sending: true,
      },
    ]
  );

  const handleMessage = async (formData) => {
    const message = formData.get("message");
    formRef.current.reset();
    addOptimisticMessage(message);
    const data = await sendMessage(message);
    setMessage((prev) => [...prev, data]);
  };

  console.log(optimisticMessage, "optimisticMessage");
  return (
    <>
      <meta name="author"></meta>
      <title>Thread page</title>
      <div>Message</div>
      <div>
        <div>
          {optimisticMessage?.map((item, index) => {
            return (
              <div key={index}>
                {item.text}{" "}
                <span>
                  <small>{item.sending && "(sending...)"}</small>
                </span>
              </div>
            );
          })}
        </div>
        <form action={handleMessage} ref={formRef}>
          <input placeholder="type message..." name="message" />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default Message;
