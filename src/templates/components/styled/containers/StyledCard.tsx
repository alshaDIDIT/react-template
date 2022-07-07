import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: .25rem;
  position: relative;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  opacity: 0;
  .on-sight {
    animation: show ease-out .5s forwards;
  }

  .on-second-sight {
    animation: show-text ease-in .5s forwards;
  }

  @keyframes show {
    0% {opacity: 0%;} 100% {opacity: 100%;}
  }

  @keyframes show-text {
    0% {transform: translateY(4rem);} 100% {transform: translateY(0);}
  }

  #video-bg {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
  }

  #title-video {
    width: 100%;
    object-fit: cover;
  }
`;

interface ITransparent {
  height?: string;
}

export const TransparentGradient = styled.div`
  width: 100%;
  height: ${(props: ITransparent) => props.height || '100%'};
  border-radius: .25rem;
  position: relative;

  ${CardContainer}:hover & {
    background: rgb(93,93,93);
    background: linear-gradient(
        205deg,
        rgba(93,93,93,0) 0%,
        rgba(82,82,82,0.10968137254901966) 34%,
        rgba(17,17,17,0.6138830532212884) 98%
    );
    animation: gradient linear .25s;

    @keyframes gradient {
      0% {opacity: 0;} 100% {opacity: 100%;} }
  }
`;

export const CardBackColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: silver;
  border-radius: .25rem;
  z-index: 0;
`;

export const CardTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 4rem 2rem;
  z-index: 99;

  h1 {
    color: white;
    font-size: 3.5rem;
    text-shadow: .1rem .1rem .1rem rgba(0,0,0,.5);
  }
  
  h2 {
    font-family: 'Source Sans Pro', sans-serif;
    color: #8eaad9;
    font-size: 1.6rem;
    font-weight: bolder;
    letter-spacing: .25rem;
    text-shadow: .1rem .1rem .1rem rgba(0,0,0,.5);
  }
`;

export const BasicCardFrame = styled.div`
  width: 100%;
  height: 42rem;
  padding: 2rem;
`;

export const TallCardFrame = styled.div`
  width: 100%;
  height: 84rem;
  padding: 2rem;
`;

export const TitleCardFrame = styled.div`
  width: 100%;
  height: 60rem;
  padding: 2rem;
`;


