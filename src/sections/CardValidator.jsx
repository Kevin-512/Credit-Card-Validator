import Cards from "react-credit-cards-2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Lottie from "lottie-react";
import Correct from "../assets/animations/correct.json";
import Incorrect from "../assets/animations/incorrect.json";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const CardValidator = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const [creditCheck, setcreditCheck] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  const handleCheckValid = () => {
    setAnimationKey((prevKey) => prevKey + 1);
    let check = state.number;
    check = check.replace(/\s|-/g, "");

    const digits = check.split("").map(Number);
    const reversedDigits = digits.reverse();

    for (let i = 1; i < reversedDigits.length; i += 2) {
      reversedDigits[i] *= 2;
      if (reversedDigits[i] > 9) {
        reversedDigits[i] -= 9;
      }
    }

    const totalSum = reversedDigits.reduce((acc, digit) => acc + digit, 0);

    if (totalSum % 10 === 0) {
      setcreditCheck(true);
      console.log("Correct");
    } else {
      setcreditCheck(false);
      console.log("Incorrect");
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 16) {
      value = value.slice(0, 16);
    }

    setState({ ...state, number: value });
  };

  return (
    <section id="validator" className="flex flex-col container gap-10">
      <h1 className="text-center text-8xl font-bold text-amber-600 underline">
        <span className="z-10">Card Validator</span>
      </h1>
      <p className="text-center text-2xl">
        Input a string of 16 numbers to validate its correctness
        <br />
        <br />
        Validation using Luhn's Algorithm
      </p>
      <div className="scale-110 transform">
        <Cards
          cvc={state.cvc}
          expiry={state.expiry}
          focused={state.focus}
          name={state.name}
          number={state.number}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <Input
          className="w-80"
          type="text"
          placeholder="Credit Card Number"
          onChange={handleChange}
          maxLength={16}
          value={state.number}
        />
        <Button className="text-2xl" onClick={handleCheckValid}>
          Check
        </Button>
        {creditCheck == true && (
          <Lottie
            key={animationKey}
            className="w-20"
            animationData={Correct}
            loop={false}
          />
        )}
        {creditCheck == false && (
          <Lottie
            key={animationKey}
            className="w-20"
            animationData={Incorrect}
            loop={false}
          />
        )}
      </div>
    </section>
  );
};

export default CardValidator;
