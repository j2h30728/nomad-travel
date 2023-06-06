import { useSetRecoilState } from "recoil";
import { travelState, travelsState } from "../atom";
import { Categories, Travel } from "../types/travel";
import { useForm } from "react-hook-form";

const CreateTravel = () => {
  const setTravel = useSetRecoilState(travelState);
  const setTravels = useSetRecoilState(travelsState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Travel>();

  const handleInvalid = ({ countryName }: Travel) => {
    console.log(countryName);
    setTravel({
      countryName,
      categories: Categories.wantToGo,
    });
    setValue("countryName", "");
    setTravels(prev => [
      ...prev,
      {
        countryName,
        categories: Categories.wantToGo,
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit(handleInvalid)}>
      <input
        {...register("countryName", { required: "입력해주세요." })}
        placeholder="이름"
      />
      <button>가자!</button>
    </form>
  );
};

export default CreateTravel;
