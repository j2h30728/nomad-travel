export interface TravelType {
  countryName: string;
  category: CategoriesType;
  travelId: number;
}
export enum CategoriesType {
  "wantToGo" = "wantToGo",
  "haveBeenTo" = "haveBeenTo",
  "like" = "like",
}
