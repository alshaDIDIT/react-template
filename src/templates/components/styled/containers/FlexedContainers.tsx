import styled from "styled-components";
import {IContainer} from "../models/IFlexedContainers";

export const CenterContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin: ${(props: IContainer) => props.marginY} ${(props: IContainer) => props.marginX || '0'};
  background-color: ${(props: IContainer) => props.backColor};
  
  //@media screen and (max-width: 56.25em) {}
`;

export const MaxWidthContainer = styled.div`
  width: 100%;
  max-width: 145rem;

  display: flex;
  flex-wrap: wrap;

  margin: ${(props: IContainer) => props.marginY} ${(props: IContainer) => props.marginX || '0'};
  background-color: ${(props: IContainer) => props.backColor};
  @media screen and (max-width: 56.25em) {

  }
`;

export const Flex100Wrap = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  // margin: ${(props: IContainer) => props.marginY} ${(props: IContainer) => props.marginX || '0'};
  // background-color: ${(props: IContainer) => props.backColor};
  // @media screen and (max-width: 56.25em) {
  //   width: 100%;
  // }
`;

export const Flex50Wrap = styled.div`
  width: 50%;

  display: flex;
  flex-wrap: wrap;

  margin: ${(props: IContainer) => props.marginY} ${(props: IContainer) => props.marginX || '0'};
  background-color: ${(props: IContainer) => props.backColor};
  @media screen and (max-width: 56.25em) {
    width: 100%;
  }
`;

export const Flex50WrapXS = styled.div`
  width: 50%;

  display: flex;
  flex-wrap: wrap;

  margin: ${(props: IContainer) => props.marginY} ${(props: IContainer) => props.marginX || '0'};
  background-color: ${(props: IContainer) => props.backColor};
  @media screen and (max-width: 56.25em) { /* 900px / 16px = 56.25em */
    
  }

  @media screen and (max-width: 37.5em) { /* 600px / 16px = 37.5em */
  }

  @media screen and (max-width: 31.25em) { /* 500px / 16px = 31.25em */
    width: 100%;
  }

  @media screen and (max-width: 25em) { /* 400px / 16px = 25em */

  }
`;

export const Flex100 = styled.div`
  width: 100%;

  display: flex;

  margin: ${(props: IContainer) => props.marginY} ${(props: IContainer) => props.marginX || '0'};
  background-color: ${(props: IContainer) => props.backColor};
  @media screen and (max-width: 56.25em) {
    //width: 100%;
  }
`;

export const Flex50 = styled.div`
  width: 50%;

  display: flex;

  margin: ${(props: IContainer) => props.marginY} ${(props: IContainer) => props.marginX || '0'};
  background-color: ${(props: IContainer) => props.backColor};
  @media screen and (max-width: 56.25em) {
    width: 100%;
  }
`;
