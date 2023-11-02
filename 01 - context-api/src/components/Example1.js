import { useState } from "react";

export const Parent = () => {
  const [userName, setUserName] = useState("PedroTech");

  return (
    <div>
      {userName}
      <Child setUserName={setUserName} />
    </div>
  );
};

export const Child = ({ setUserName }) => {
  return <GrandChild setUserName={setUserName} />;
};

export const GrandChild = ({ setUserName }) => {
  return (
    <div>
      <button
        onClick={() => {
          setUserName("Lionel");
        }}
      >
        Change Username
      </button>
    </div>
  );
};
