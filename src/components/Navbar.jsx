import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex sm:justify-center space-x-4 pt-6">
        {[
          ["1", "Home", "#hero"],
          ["2", "About", "#about"],
          ["3", "Skills", "#skills"],
          ["4", "Projects", "#projects"],
          ["5", "Contact", "#contact"],
        ].map(([id, title, url]) => (
          <a
            key={id}
            href={url}
            className="rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300 font-medium dark:hover:bg-blue-900 hover:bg-slate-400 text-md md:text-lg"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
