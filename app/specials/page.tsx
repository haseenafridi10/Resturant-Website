"use client";
import { useState } from "react";

export default function SpecialsPage() {
  const [show, setShow] = useState(false);

  return (
   <section className="min-h-screen flex items-center justify-center p-10 pt-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
  <div className="bg-white dark:bg-gray-800 shadow-2xl p-12 rounded-2xl text-center max-w-lg w-full transform transition hover:scale-105">
    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
      Dish of the Day
    </h2>

    {show ? (
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Grilled Salmon with Lemon Butter Sauce 🍋🐟
      </p>
    ) : (
      <p className="mb-6 text-lg text-gray-500 dark:text-gray-400">
        Click to reveal today’s special!
      </p>
    )}

    <button
      onClick={() => setShow(!show)}
      className="px-8 py-3 bg-black dark:bg-yellow-500 text-white dark:text-black rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-yellow-400 transition"
    >
      {show ? "Hide Special" : "Show Special"}
    </button>
  </div>
</section>

  );
}
