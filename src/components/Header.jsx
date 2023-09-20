export default function Header() {
  return (
    <>
      <header className="text-white px-4 sm:px-8 py-2 bg-sky-700 sm:py-3 hover:bg-sky-800">
        <nav className="flex justify-between items-center h-16">
          <h1>Where in the world</h1>
          <button>Dark Mode</button>
        </nav>
      </header>
    </>
  );
}
