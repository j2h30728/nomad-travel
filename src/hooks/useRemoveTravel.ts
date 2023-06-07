import { useSetRecoilState } from "recoil";

import { travelsState } from "../recoil/atoms";

const useRemoveTravel = () => {
  const setTravels = useSetRecoilState(travelsState);
  const handleRemoveTravel = (travelId: number) => {
    return setTravels(prev =>
      prev.filter(travel => travel.travelId !== travelId)
    );
  };
  return handleRemoveTravel;
};

export default useRemoveTravel;
