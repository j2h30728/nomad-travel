import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";

import { travelsState } from "../recoil";
import { CategoriesType, TravelType } from "../types/travel";

const CreateTravelForm = () => {
  const setTravels = useSetRecoilState(travelsState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TravelType>();

  const handleInvalid = ({ countryName }: TravelType) => {
    setValue("countryName", "");
    setTravels(prev => [
      ...prev,
      {
        countryName,
        category: CategoriesType.wantToGo,
        travelId: Date.now(),
      },
    ]);
  };

  return (
    <>
      <h2>내가 가고싶은 나라들</h2>
      <form onSubmit={handleSubmit(handleInvalid)}>
        <input
          {...register("countryName", { required: "입력해주세요." })}
          placeholder="이름"
        />
        <p>{errors.countryName?.message}</p>
        <button>가자!</button>
      </form>
    </>
  );
};

export default CreateTravelForm;
