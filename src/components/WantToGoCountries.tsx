import { useRecoilValue } from "recoil";

import { CategoriesType } from "../types/travel";
import { useChagneCategory, useRemoveTravel } from "../hooks";
import { wantToGoTravelsSelector } from "../recoil/selectors";

const WantToGoCountries = () => {
  const handleChangeCategory = useChagneCategory();
  const handleRemoveTravel = useRemoveTravel();

  const wantToGoTravels = useRecoilValue(wantToGoTravelsSelector);

  return (
    <>
      {wantToGoTravels.map(travel => {
        return (
          <div key={travel.travelId}>
            <span>{travel.countryName}</span>
            <button
              onClick={() =>
                handleChangeCategory({
                  countryName: travel.countryName,
                  travelId: travel.travelId,
                  category: CategoriesType.HAVE_BEEN_TO,
                })
              }>
              ✅
            </button>
            <button onClick={() => handleRemoveTravel(travel.travelId)}>
              🗑️
            </button>
          </div>
        );
      })}
    </>
  );
};

export default WantToGoCountries;
