import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ICar } from "../../../typings/car";
import Car from "../../components/car";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import carService from "../../services/carService";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopCars } from "./selectors";
import { createSelector } from "reselect";
import { MoonLoader } from "react-spinners";
import {
  testCar1,
  testCar2,
  testCar3,
  testCar4,
  testCar5,
} from "../../../data/cars";

const TopCarsContainer = styled.div`
  ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        px-4
        md:px-8
        mb-10
    `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-4xl
    text-black
    font-extrabold
`}
`;

const CarsContainer = styled.div`
  width: 17em;
  /* height: 23em; */
  ${tw`
        md:w-full
        md:mx-auto
        mt-7
        md:mt-10
    `}
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    mt-9
    justify-center
    items-center
    text-sm
    text-gray-500
  `}
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    flex
    mt-9
    justify-center
    items-center
    text-base
    text-black
  `}
`;

// const actionDispatch = (dispatch: Dispatch) => ({
//   setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
// });

// const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
//   topCars,
// }));

const TopCars = () => {
  const show3InCarousel = useMediaQuery({ minWidth: SCREENS.lg });
  const show2InCarousel = useMediaQuery({ minWidth: SCREENS.md });
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const [isLoading, setIsLoading] = useState(false);

  const topCars = [testCar1, testCar2, testCar3, testCar4, testCar5];
  // const { topCars } = useSelector(stateSelector);
  // const { setTopCars } = actionDispatch(useDispatch());

  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchTopCars = async () => {
  //     const cars = await carService.getCars().catch((err) => {
  //       console.log("error", err);
  //     });

  //     if (cars) setTopCars(cars);
  //     setIsLoading(false);
  //   };

  //   fetchTopCars();
  // }, [setTopCars]);

  const settings = {
    dots: !isMobile,
    infinite: false,
    slidesToShow: show3InCarousel ? 3 : show2InCarousel ? 2 : 1,
  };

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const cars = !isEmptyTopCars
    ? topCars.map((car: ICar) => (
        <Car key={car.name} {...car} thumbnailSrc={car.thumbnailSrc} />
      ))
    : [];

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader />
        </LoadingContainer>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>No cars to show!</EmptyCars>}
      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Slider {...settings}>{cars}</Slider>
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
};

export default TopCars;
