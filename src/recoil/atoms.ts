import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

import { TravelType, CategoriesType } from "../types/travel";

const { persistAtom } = recoilPersist();

export const travelState = atom<TravelType>({
  key: "travelState",
  default: {
    countryName: "",
    category: CategoriesType.WAMT_TO_GO,
    travelId: 0,
  },
});

export const travelsState = atom<Array<TravelType>>({
  key: "travelsState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
