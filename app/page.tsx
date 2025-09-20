import Image from "next/image";

export default function HomePage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Side - Pizza */}
      <div className="relative flex flex-col justify-center items-center overflow-hidden group h-screen">
        <Image
          src="/img/burger2.jpeg"
          alt="Pizza"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:brightness-75 transition"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Discover Our Menu
          </h1>
          <a
            href="/menu"
            className="px-6 py-2 bg-black/70 text-white rounded hover:bg-black"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Right Side - Burger */}
      <div className="relative flex flex-col justify-center items-center overflow-hidden group h-screen">
        <Image
          src="/img/table.jpeg"
          alt="Burger"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:brightness-75 transition"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Book a Table
          </h1>
          <a
            href="/contact"
            className="px-6 py-2 bg-black/70 text-white rounded hover:bg-black"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </section>
  );
}
