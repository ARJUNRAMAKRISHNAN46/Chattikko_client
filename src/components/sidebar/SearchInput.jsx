import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useConversation } from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState();
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) {
      return;
    }

    if(search.length < 3) {
      return toast.error("Search term must be at least three charactors long");
    }

    const conversation = conversations.find((c) => c.userName.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found!")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input inpu-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
