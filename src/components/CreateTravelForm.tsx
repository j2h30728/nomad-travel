import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";

import { travelsState } from "../recoil/atoms";
import { CategoriesType, TravelType } from "../types/travel";
import styled from "styled-components";

const CreateTravelForm = () => {
  const setTravels = useSetRecoilState(travelsState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TravelType>();

  const handleSubmitTravel = ({ countryName }: TravelType) => {
    setValue("countryName", "");
    setTravels(prev => [
      ...prev,
      {
        countryName,
        category: CategoriesType.WAMT_TO_GO,
        travelId: Date.now(),
      },
    ]);
  };

  return (
    <>
      <h2>내가 가고싶은 나라들</h2>
      <form onSubmit={handleSubmit(handleSubmitTravel)}>
        <input
          {...register("countryName", { required: "😡 필수입니다!!!!" })}
          placeholder="이름"
        />
        <ErrorMessage>{errors.countryName?.message}</ErrorMessage>
        <button>가자!</button>
      </form>
    </>
  );
};

export default CreateTravelForm;

const ErrorMessage = styled.p`
  color: red;
`;
