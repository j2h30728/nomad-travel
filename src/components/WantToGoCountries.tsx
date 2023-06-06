import { useRecoilValue } from "recoil";

import { travelsState } from "../recoil";
import { CategoriesType } from "../types/travel";
import { useChagneCategory, useDeleteTravel } from "../hooks";

const WantToGoCountries = () => {
  const travels = useRecoilValue(travelsState);
  const handleChangeCategory = useChagneCategory();
  const handleDeleteTravel = useDeleteTravel();

  const wantToGoTravels = travels.filter(
    travel => travel.category === CategoriesType.wantToGo
  );

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
