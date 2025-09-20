export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-20">
      <p>© {new Date().getFullYear()} My Restaurant</p>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-400 underline ml-2"
      >
        Instagram
      </a>
    </footer>
  );
}
