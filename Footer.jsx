import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; 2025 Portfolify. All Rights Reserved.</p>
      <div>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-white">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-white">
          LinkedIn
        </a>
        <a href="mailto:example@mail.com" className="mx-2 text-gray-400 hover:text-white">
          Email
        </a>
      </div>
    </footer>
  );
}
