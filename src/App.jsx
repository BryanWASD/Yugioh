import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [carta, setCarta] = useState(0);
  useState;
  useEffect(() => {
    const fetchCarta = async () => {
      const response = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=12600382`
      );
      const data = await response.data;
      setCarta(data.data[0]);
    };
    fetchCarta();
  }, []);

  return (
    <div className="">
      <div className="row">
        <div className="col-4">
          <h1>{carta.name}</h1>
          <img src={carta.card_images?.[0]?.image_url} alt={carta.name} />
          <p>{carta.desc}</p>
        </div>
        <div className="col-8 ">
          <table className="pt-6 table table-bordered">
            <thead>
              <tr>
                <th>ATK</th>
                <th>DEF</th>
                <th>Type</th>
                <th>Race</th>
                <th>Level</th>
                <th>Atributte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{carta.atk}</td>
                <td>{carta.def}</td>
                <td>{carta.type}</td>
                <td>{carta.race}</td>
                <td>{carta.level}</td>
                <td>{carta.attribute}</td>
              </tr>
            </tbody>
          </table>
          <h2>Sets</h2>
          <ul>
            {carta.card_sets?.map((set) => (
              <li key={set.set_code}>
                {set.set_name} - {set.set_rarity}
              </li>
            ))}
          </ul>
          <h2>Prices</h2>
          <ul>
            {carta.card_prices?.map((price) => (
              <li key={price.ebay_price}>
                eBay: ${price.ebay_price} - TCGPlayer: ${price.tcgplayer_price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
