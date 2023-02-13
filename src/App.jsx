import { useEffect, useState } from "react";
import { shipfinderApiService } from "./services";

export default function App() {
  const [ships, setShips] = useState([]);

  // This runs once when the component mounts
  useEffect(
    () => {
      shipfinderApiService.getShips().then((ships) => setShips(ships));
    },

    // This is an empty array, so it only runs once
    []
  );

  // TODO: Look at the MUI Table (or whatever) and figure out how to use it

  return (
    <ul>
      {ships.map((ship) => (
        <li key={ship.id}>
          {ship.latdec}, {ship.longdec}
        </li>
      ))}
    </ul>
  );
}
