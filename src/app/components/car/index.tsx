import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { ICar } from "../../../typings/car";
import Button from "../button";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 16.5em;
  height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        flex-col
        items-center
        justify-between
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        mx-auto
        sm:my-3
    `}
`;

const CarThumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CarName = styled.h3`
  ${tw`
        text-base
        font-bold
        text-black
        my-1
    `}
`;

const PricesContainer = styled.div`
  ${tw`
        w-full
        flex
        justify-start
        mt-3
    `}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
        inline-flex
        text-xs
        font-thin
    `}
`;

const DailyPrice = styled.h5`
  ${tw`
        text-red-500
        font-bold
        text-sm
        mr-3
    `}
`;

const MonthlyPrice = styled.h5`
  ${tw`
        text-gray-500
        font-bold
        text-sm
    `}
`;

const SmallIcon = styled.span`
  ${tw`
        text-gray-400
        text-sm
        mr-1
    `}
`;

const CarDetailsContainer = styled.div`
  ${tw`
        flex
        w-full
        justify-between
    `}
`;

const CarDetail = styled.span`
  ${tw`
        flex
        items-center
    `}
`;

const CarInfo = styled.h6`
  ${tw`
        text-gray-600
        text-xs
    `}
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
      flex
      bg-gray-300
      my-2
  `}
`;

const RentButton = styled(Button)`
  ${tw`
        min-w-full
        mt-5
    `}
`;

const Car = (props: ICarProps) => {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
    monthlyPrice,
    mileage,
    gearType,
    gas,
  } = props;

  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} alt="" />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice} <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice} <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Seperator />
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text="Rent Now" />
    </CarContainer>
  );
};

export default Car;
