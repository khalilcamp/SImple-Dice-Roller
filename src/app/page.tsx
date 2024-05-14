"use client";
import { useState, RollResult } from "react"; // Import useState

import { Dice, RollResult, rollDice, rollDices } from "./index";

export default function Home() {
  const [dice, setDice] = useState<Dice>({ sides: 6, quantity: 1 });
  const [result, setResult] = useState<RollResult | null>(null);

  const handleDiceRoll = () => {
    const result = rollDices(dice);
    setResult(result);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-400">
      <div className="flex flex-col gap-3 text-sky-400 bg-gray-900">
        Quantia de dados:
        <input
          type="number"
          value={dice.quantity}
          onChange={(e) => {
            console.log("Quantity:", e.target.value);
            setDice({ ...dice, quantity: parseInt(e?.target.value) });
          }}
        />
        Lados:
        <input
          type="number"
          value={dice.sides}
          onChange={(e) => {
            setDice({ ...dice, sides: parseInt(e?.target.value) });
          }}
        />
        <button className="bg-stone-800"onClick={handleDiceRoll}> Rolar </button>

        {result && (
          <div className="bg-neutral-900 text-black-400">
            Resultado: {result.total}
            ; Rolagens individuais: {result.rolls.join(",")}
          </div>
        )}

      </div>
    </main>
  );
}
