import { useRecoilValue } from "recoil";

import { travelsState } from "../recoil";
import { CategoriesType } from "../types/travel";
import { useChagneCategory } from "../hooks";

const HaveBeenToCountries = () => {
  const travels = useRecoilValue(travelsState);
  const handleChangeCategory = useChagneCategory();

  const HaveBeenToTravles = travels.filter(
    travel => travel.category === CategoriesType.haveBeenTo
  );

  return (
    <>
      <h2>내가 가본 나라들</h2>
      {HaveBeenToTravles.map(travel => {
        return (
          <div key={travel.travelId}>
            <span>{travel.countryName}</span>
            <button
              onClick={() =>
                handleChangeCategory({
                  countryName: travel.countryName,
                  travelId: travel.travelId,
                  category: CategoriesType.like,
                })
              }>
              👍
            </button>
            <button
              onClick={() =>
                handleChangeCategory({
                  countryName: travel.countryName,
                  travelId: travel.travelId,
                  category: CategoriesType.wantToGo,
                })
              }>
              ❌
            </button>
          </div>
        );
      })}
    </>
  );
};

export default HaveBeenToCountries;
