import {restaurants} from '../mock-data';
import {restaurantBaseImgUrl, swiggyAPIFetchRestaurants} from './constants';
import {useState, useEffect} from 'react';

const SearchBox = ({filterList, setShowList}) => {
    const [searchText, setSearchText] = useState();
    
    
    function filter() {
        const filtered = filterList.filter(restaurant=> 
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setShowList(filtered);
    }

    return (
        <div>
            <input placeholder="Search by title..." 
            value={searchText}
            onChange={(e) => setSearchText(e.target?.value)}></input>
            <button onClick={filter}>Search</button>
        </div>
    )
}

const RestaurantBox = ({restaurant}) => {
    const {name, cloudinaryImageId, locality, cuisines} = restaurant;
    return (
        <div className="restaurant-container">
            <img src={restaurantBaseImgUrl+cloudinaryImageId} alt="img" />
            <h3>{name}</h3>
            <p>{locality}</p>
            <p>{cuisines.join(', ')}</p>
        </div>
    )
}

export default Body = () => {
    const [restaurantList, setRestaurantList] = useState(restaurants);
    const [showList, setShowList] = useState(restaurants);

    useEffect(()=> {fetchRestaurants()}, []);

    async function fetchRestaurants() {
        const result = await fetch(swiggyAPIFetchRestaurants);
        const body = await result.json();
        const restaurantsResult = body?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setRestaurantList(restaurantsResult);
        setShowList(restaurantsResult);
    }


    return (
        <div>
            <SearchBox filterList={restaurantList} setShowList={setShowList}/>
            <div className="restaurant-list">
            {
                showList.map(res => <RestaurantBox key={res.info.id} restaurant={res.info} />)
            }
            </div>
        </div>
    )
}