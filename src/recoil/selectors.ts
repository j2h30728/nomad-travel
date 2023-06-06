import { selector } from "recoil";

import { travelsState } from "./atoms";
import { TravelType, CategoriesType } from "../types/travel";

export const HaveBeenToTravlesSelector = selector<Array<TravelType>>({
  key: "HaveBeenToTravlesSelector",
  get: ({ get }) => {
    return get(travelsState).filter(
      travel => travel.category === CategoriesType.HAVE_BEEN_TO
    );
  },
});

export const wantToGoTravelsSelector = selector<Array<TravelType>>({
  key: "wantToGoTravelsSelector",
  get: ({ get }) => {
    return get(travelsState).filter(
      travel => travel.category === CategoriesType.WAMT_TO_GO
    );
  },
});

export const likeTravlesSelector = selector<Array<TravelType>>({
  key: "likeTravlesSelector",
  get: ({ get }) => {
    return get(travelsState).filter(
      travel => travel.category === CategoriesType.LIKE
    );
  },
});
