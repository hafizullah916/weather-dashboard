import { useContext } from "react";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/Location-data";
import { useDebounce } from "../../hooks";

export default function Search() {
  // const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term) => {
    console.log(term);
    const fetchedLocation = getLocationByName(term);
    console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }, 800);

  const handleChange = (e) => {
    const value = e.target.value;
    // setSearchTerm(value);
    doSearch(value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChange}
          required
        />
        {/* <button type="submit">
          <img src={SearchImage} alt="search" />
        </button> */}
      </div>
    </form>
  );
}
