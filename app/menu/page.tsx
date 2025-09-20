import Image from "next/image";

export default function MenuPage() {
  const dishes = [
    { id: 1, name: "Dish 1", image: "/dish-images/dish1.jpeg" },
    { id: 2, name: "Dish 2", image: "/dish-images/dish2.jpeg" },
    { id: 3, name: "Dish 3", image: "/dish-images/dish3.jpeg" },
    { id: 4, name: "Dish 4", image: "/dish-images/dish4.jpeg" },
    { id: 5, name: "Dish 5", image: "/dish-images/dish1.jpeg" },
    { id: 6, name: "Dish 6", image: "/dish-images/dish2.jpeg" },
  ];

  return (
    <section className="p-12 pt-20 sm:pt-40">
      <h1 className="text-4xl font-bold mb-10 text-center underline">
        Our Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition"
          >
            {/* Fixed aspect ratio container */}
            <div className="relative w-full aspect-square">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
