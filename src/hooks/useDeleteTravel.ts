import { useSetRecoilState } from "recoil";

import { travelsState } from "../recoil/atoms";

const useDeleteTravel = () => {
  const setTravels = useSetRecoilState(travelsState);
  const handleDeleteTravel = (travelId: number) => {
    return setTravels(prev =>
      prev.filter(travel => travel.travelId !== travelId)
    );
  };
  return handleDeleteTravel;
};

export default useDeleteTravel;
