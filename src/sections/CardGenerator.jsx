import Cards from "react-credit-cards-2";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const CardGenerator = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const updateCardNumberWithDelay = (cardNumber) => {
    let index = -1;

    const intervalId = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        number: prevState.number + cardNumber[index],
      }));
      index++;
      if (index >= cardNumber.length) {
        clearInterval(intervalId);
      }
    }, 300);
  };

  const handleStartTyping = () => {
    const cardNumber = "1234 5678 9012 3456";
    setState((prevState) => ({ ...prevState, number: "" }));
    updateCardNumberWithDelay(cardNumber);
  };

  

  return (
    <section id="generator" className="flex flex-col container gap-10">
      <h1 className="text-center text-8xl font-bold text-amber-600 underline">
        <span className="z-10">Card Number Generator</span>
      </h1>
      <div className="scale-110 transform">
        <Cards
          cvc={state.cvc}
          expiry={state.expiry}
          focused={state.focus}
          name={state.name}
          number={state.number}
        />
      </div>
      <div className="flex justify-center items-center">
        <Button className="text-2xl" onClick={handleStartTyping}>
          Generate
        </Button>
      </div>
    </section>
  );
};

export default CardGenerator;
