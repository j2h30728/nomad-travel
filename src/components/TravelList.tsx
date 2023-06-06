import { useRecoilState } from "recoil";
import { travelState, travelsState } from "../atom";
import Createtravel from "./CreateTravel";

const TravelList = () => {
  const [travel, settravel] = useRecoilState(travelState);
  const [travels, settravels] = useRecoilState(travelsState);

  return (
    <main>
      <h2>내가 가고싶은 나라들</h2>
      <Createtravel />
      {travels.map((travel, idx) => (
        <div key={`${travel}${idx}`}>
          <span>{travel.countryName}</span>
          <button>💛</button>
          <button>❌</button>
        </div>
      ))}
    </main>
  );
};
export default TravelList;
