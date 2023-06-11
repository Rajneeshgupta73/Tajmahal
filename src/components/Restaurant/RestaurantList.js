import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const RestaurantCard = ({ name, cuisines, rating, distance, uuid }) => {
  return (
    <div className="restaurantCard">
      <img src={uuid} alt="img" />
      <div className="box">
        <h2>{name}</h2>
        <p>{cuisines.join(', ')}</p>
        <div className="starRating">
          <p>{rating} stars123</p>
          <p>{distance}</p>
        </div>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  const [restaurant, setRestaurant] = useState();
  const { id } = useParams();
  console.log('data id ' + id);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7081955&lng=75.8824422&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setRestaurant(json.data.cards[2].data.data.cards);
  }
  return (
    <div>
      {restaurant?.map((item) => (
        <RestaurantCard key={item.data.id} {...item.data} />
      ))}
    </div>
  );
};

export default RestaurantList;
