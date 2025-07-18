import { useState, useMemo } from "react";

function isPrime(num: number) {
  console.log("11");
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export const PrimeChecker = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const isNumberPrime = useMemo(() => isPrime(number), [number]);
  ///const isNumberPrime = isPrime(number);

  return (
    <div>
      <h2>Kiểm tra số nguyên tố</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>
        {number} {isNumberPrime ? "là" : "không phải"} số nguyên tố
      </p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Rerender Check"
      />
    </div>
  );
};
