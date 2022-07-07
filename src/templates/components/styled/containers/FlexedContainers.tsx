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

export const Flex100 = styled.div`
  width: 100%;

  display: flex;

  margin: ${(props: IContainer) => props.marginY} ${(props: IContainer) => props.marginX || '0'};
  background-color: ${(props: IContainer) => props.backColor};
  @media screen and (max-width: 56.25em) {
    width: 100%;
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
