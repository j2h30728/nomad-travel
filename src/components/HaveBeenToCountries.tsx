import { useRecoilValue } from "recoil";

import { CategoriesType } from "../types/travel";
import { useChagneCategory } from "../hooks";
import { HaveBeenToTravlesSelector } from "../recoil/selectors";

const HaveBeenToCountries = () => {
  const handleChangeCategory = useChagneCategory();
  const HaveBeenToTravles = useRecoilValue(HaveBeenToTravlesSelector);

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
                  category: CategoriesType.LIKE,
                })
              }>
              👍
            </button>
            <button
              onClick={() =>
                handleChangeCategory({
                  countryName: travel.countryName,
                  travelId: travel.travelId,
                  category: CategoriesType.WAMT_TO_GO,
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
