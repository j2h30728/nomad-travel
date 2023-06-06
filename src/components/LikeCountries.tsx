import { useRecoilValue } from "recoil";

import { CategoriesType } from "../types/travel";
import { useChagneCategory } from "../hooks";
import { likeTravlesSelector } from "../recoil/selectors";

const LikeCountries = () => {
  const handleChangeCategory = useChagneCategory();

  const likeTravles = useRecoilValue(likeTravlesSelector);

  return (
    <>
      <h2>내가 좋아하는 나라들</h2>
      {likeTravles.map(travel => {
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
