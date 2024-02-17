import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartImage from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

export default function AddToFavorite() {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);

  const [isFavourite, toggleIsFavourite] = useState(false);

  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleIsFavourite(found);
  }, []);

  const handleFavourites = () => {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    toggleIsFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartImage} alt="heart" />
        </button>
      </div>
    </div>
  );
}
