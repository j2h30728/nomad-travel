export interface TravelType {
  countryName: string;
  category: CategoriesType;
  travelId: number;
}
export enum CategoriesType {
  "WAMT_TO_GO" = "WAMT_TO_GO",
  "HAVE_BEEN_TO" = "HAVE_BEEN_TO",
  "LIKE" = "LIKE",
}
