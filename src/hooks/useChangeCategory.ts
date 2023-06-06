import { useSetRecoilState } from "recoil";

import { travelsState } from "../recoil";
import { TravelType } from "../types/travel";

const useChagneCategory = () => {
  const setTravels = useSetRecoilState(travelsState);

  const handleChangeCategory = ({
    countryName,
    travelId,
    category,
  }: TravelType) => {
    setTravels(prev => {
      const targetIndex = prev.findIndex(
        travel => travel.countryName === countryName
      );
      const updatedTravel = {
        countryName,
        travelId,
        category,
      };
      return [
        ...prev.slice(0, targetIndex),
        updatedTravel,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };
  return handleChangeCategory;
};

export default useChagneCategory;
