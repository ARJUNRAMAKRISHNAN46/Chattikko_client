import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        className="input inpu-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
