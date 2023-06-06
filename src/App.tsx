import {
  HaveBeenToCountries,
  CreateTravelForm,
  WantToGoCountries,
  LikeCountries,
} from "./components";

export default function App() {
  return (
    <main>
      <CreateTravelForm />
      <WantToGoCountries />
      <HaveBeenToCountries />
      <LikeCountries />
    </main>
  );
}
