"use client";
import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    alert("Reservation submitted!");
    setError("");
    setEmail("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-10">
  <div className="bg-white dark:bg-gray-800 shadow-2xl p-10 rounded-2xl w-full max-w-md text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
      Book a Reservation
    </h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
        placeholder="Enter your email"
        className={`p-3 rounded-lg border focus:ring-2 focus:outline-none transition ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 dark:border-gray-600 focus:ring-green-500"
        } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white`}
      />

      {error && <p className="text-red-500 text-sm text-left">{error}</p>}

      <button
        type="submit"
        className="px-6 py-3 bg-black dark:bg-green-500 text-white dark:text-black font-semibold rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-green-400 transition"
      >
        Submit
      </button>
    </form>
  </div>
</section>
  );
}
