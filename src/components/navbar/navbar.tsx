const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 p-4 mb-4 flex items-center">
      {/* Icon on the left */}
      <span className="mr-4 flex items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 12l2 2l4-4" />
        </svg>
      </span>
      <ul className="flex gap-4 ml-2">
        <li>
          <a href="/" className="font-bold text-gray-800 hover:text-blue-600 transition-colors">Home</a>
        </li>
        <li>
          <a href="/admin" className="font-bold text-gray-800 hover:text-blue-600 transition-colors">Admin</a>
        </li>
        <li>
          <a href="/teacher" className="font-bold text-gray-800 hover:text-blue-600 transition-colors">Teacher</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;