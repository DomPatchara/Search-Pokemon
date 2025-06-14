"use client";

import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const params = new URLSearchParams();
    params.set("name", query);
    router.push(`/pokemons?${params}`);
  };

  return (
    <div className="w-full flex items-center justify-center ml-10 md:ml-0">
      <div className="max-w-sm border border-black/50  md:py-1 md:px-2 rounded-2xl flex items-center justify-between">
        <input
          required
          type="text"
          className="pl-3 w-full outline-none"
          onChange={handleSearch}
          placeholder="Search Pokemon..."
        />
        <div className="rounded-full p-1">
          <IoIosSearch size={25}  />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
