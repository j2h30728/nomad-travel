import { atom } from "recoil";

import { TravelType, CategoriesType } from "../types/travel";

export const travelState = atom<TravelType>({
  key: "travelState",
  default: {
    countryName: "",
    category: CategoriesType.wantToGo,
    travelId: 0,
  },
});

export const travelsState = atom<Array<TravelType>>({
  key: "travelsState",
  default: [],
});
