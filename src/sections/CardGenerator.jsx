import Cards from "react-credit-cards-2";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { FaRegCopy } from "react-icons/fa";

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

  function generateRandomCardNumber() {
    let cardNumber = "";
    for (let i = 0; i < 4; i++) {
      cardNumber += Math.floor(1000 + Math.random() * 9000).toString();
    }
    return cardNumber;
  }

  const handleStartTyping = () => {
    const cardNumber = generateRandomCardNumber();
    setState((prevState) => ({ ...prevState, number: "" }));
    updateCardNumberWithDelay(cardNumber);
  };

  const handleCopy = () => {
    console.log(state.number);
    navigator.clipboard.writeText(state.number);
  }

  return (
    <section id="generator" className="flex flex-col container gap-10">
      <h1 className="text-center text-8xl font-bold text-amber-600 underline">
        <span className="z-10">Card Number Generator</span>
      </h1>
      <p className="text-center text-2xl">Generate a random string of 16 numbers</p>
      <div className="scale-110 transform">
        <Cards
          cvc={state.cvc}
          expiry={state.expiry}
          focused={state.focus}
          name={state.name}
          number={state.number}
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button className="text-2xl" onClick={handleStartTyping}>
          Generate
        </Button>
        <Button className="text-2xl" onClick={handleCopy} disabled={!state.number}>
          <FaRegCopy/>
        </Button>
      </div>
    </section>
  );
};

export default CardGenerator;
