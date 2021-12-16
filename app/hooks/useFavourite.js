import { useState } from "react"
import { useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import Storage from "../services/Storage";

const useFavourite = (post_id) => {
    const [isFavourite, toggleFavourite] = useState(false);
    const { allFavourites } = useSelector(state => state);

    useEffect(() => {
        checkIsFavourite();
    }, [allFavourites?.data])

    const checkIsFavourite = async () => {
        const userId = await Storage.getUserId();
        if (userId) {
            const filterAllFavourites = allFavourites?.data.filter(item => item?.post_id === post_id);
            if (Array.isArray(filterAllFavourites) && filterAllFavourites.length > 0) {
                toggleFavourite(true);
            } else {
                toggleFavourite(false);
            }
        } else {
            toggleFavourite(false);
        }
    }


    return { isFavourite }
}

export default useFavourite;