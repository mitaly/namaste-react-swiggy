import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { restaurantBaseImgUrl } from "./constants";
export default RestaurantMenu = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [info, setInfo] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchDetail();
  }, []);

  async function fetchDetail() {
    const url =
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&` +
      `restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
    const result = await fetch(url);
    const json = await result.json();
    setDetail(json?.data?.cards);
    setInfo(json?.data?.cards[2]?.card?.card?.info);
    prepareMenuData(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap["REGULAR"]?.cards
    );
  }

  function prepareMenuData(menu) {
    const categories = menu?.filter((category) => category?.card?.card?.title);
    setCategories(categories);
  }

  return (
    <div className="detail-container">
      <h2>
        {info?.name} - {info?.avgRatingString}
      </h2>
      <img
        className="detail-img"
        src={restaurantBaseImgUrl + info?.cloudinaryImageId}
      />
      <h3>{info?.costForTwoMessage}</h3>
      <h4>{info?.cuisines?.join(",")}</h4>

      <ul>
        {categories?.map((category) => {
          return (
            <li>
              <h3>{category?.card?.card?.title}</h3>
              <ul>
                {category?.card?.card?.itemCards?.map((item) => (
                  <li>{item?.card?.info?.name}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
