import { atom } from "recoil";
import { Travel, Categories } from "../types/travel";

export const travelState = atom<Travel>({
  key: "travelState",
  default: {
    countryName: "",
    categories: Categories.wantToGo,
  },
});

export const travelsState = atom<Array<Travel>>({
  key: "travelsState",
  default: [],
});
