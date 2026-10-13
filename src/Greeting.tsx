import React from "react";

// Type for the props accepted by the component.
type GreetingProps = {
  name: string;
};

// A simple functional component that greets the user by name.
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
