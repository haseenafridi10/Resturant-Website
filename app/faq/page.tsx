export default function FAQPage() {
  return (
    <section className="min-h-screen flex items-center justify-center p-10 pt-20">
  <div className="max-w-2xl w-full text-center">
    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      <details className="group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">
          Do you offer vegan options?
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <p className="px-6 pb-4 text-gray-700 dark:text-gray-300">
          Yes, we have a wide variety of vegan dishes.
        </p>
      </details>

      <details className="group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">
          What’s the delivery time?
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <p className="px-6 pb-4 text-gray-700 dark:text-gray-300">
          Typically 30–40 minutes within the city.
        </p>
      </details>

      <details className="group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">
          Do you accept reservations?
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <p className="px-6 pb-4 text-gray-700 dark:text-gray-300">
          Yes, you can book a table via our Contact page.
        </p>
      </details>
    </div>
  </div>
</section>


  );
}
