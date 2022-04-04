import Links from "./Links";
import { useState } from "react";
import { useResultContext } from "../context/ResultContextProvider";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();

  return (
    <div className="relative md:-ml-72 sm:-mt-10 mt-3 w-1/4">
      <div className="flex">
        <input
          type="text"
          value={text}
          className="sm:w-98 w-full h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover: shadow-lg"
          placeholder="Search Gogle or type URL"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="border-2 p-2 rounded-full ml-2 text-center hover:drop-shadow-sm bg-blue-400 text-white"
          onClick={() => {
            setSearchTerm(text);
          }}
        >
          Search
        </button>
      </div>
      <Links />
    </div>
  );
};

export default Search;
