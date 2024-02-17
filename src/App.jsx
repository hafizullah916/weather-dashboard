import Page from "./Page";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

// 7e9789c3ed2b84e748effae2b12f04b5 api key
