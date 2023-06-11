import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getListMenu();
  }, []);

  async function getListMenu() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4354839&lng=77.037736&restaurantId=653903'
    );
    const json = await data.json();
    setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info);
  }

  return (
    <div>
      <div>Id: {restaurantMenu.id}</div>
      <div>Name: {restaurantMenu.name}</div>
    </div>
  );
};

export default RestaurantMenu;
