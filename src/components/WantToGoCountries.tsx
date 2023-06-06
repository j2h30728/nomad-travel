import { useRecoilValue } from "recoil";

import { CategoriesType } from "../types/travel";
import { useChagneCategory, useDeleteTravel } from "../hooks";
import { wantToGoTravelsSelector } from "../recoil/selectors";

const WantToGoCountries = () => {
  const handleChangeCategory = useChagneCategory();
  const handleDeleteTravel = useDeleteTravel();

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
                  category: CategoriesType.haveBeenTo,
                })
              }>
              ✅
            </button>
            <button onClick={() => handleDeleteTravel(travel.travelId)}>
              🗑️
            </button>
          </div>
        );
      })}
    </>
  );
};

export default WantToGoCountries;
