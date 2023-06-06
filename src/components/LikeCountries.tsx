import { useRecoilValue } from "recoil";

import { travelsState } from "../recoil";
import { CategoriesType } from "../types/travel";
import { useChagneCategory } from "../hooks";

const LikeCountries = () => {
  const travels = useRecoilValue(travelsState);
  const handleChangeCategory = useChagneCategory();

  const favoriteTravles = travels.filter(
    travel => travel.category === CategoriesType.like
  );

  return (
    <>
      <h2>내가 좋아하는 나라들</h2>
      {favoriteTravles.map(travel => {
        return (
          <div key={travel.travelId}>
            <span>{travel.countryName}</span>
            <button
              onClick={() =>
                handleChangeCategory({
                  countryName: travel.countryName,
                  travelId: travel.travelId,
                  category: CategoriesType.haveBeenTo,
                })
              }>
              👎
            </button>
          </div>
        );
      })}
    </>
  );
};

export default LikeCountries;
