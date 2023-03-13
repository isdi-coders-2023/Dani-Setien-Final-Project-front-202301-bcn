import styled from "styled-components";

const LoaderStyled = styled.div`
  width: 100vw;
  position: absolute;
  left: 0;

  div {
    display: block;
  }

  .progress-bar {
    &__progress {
      animation: loader 15s ease infinite;

      background: ${(props) => props.theme.colors.accent};

      padding: 2px;
      margin-top: 1px;
    }
  }

  @keyframes loader {
    0% {
      width: 0;
    }

    2% {
      width: 10%;
    }

    10% {
      width: 24%;
    }

    20% {
      width: 41%;
    }

    30% {
      width: 50%;
    }

    40% {
      width: 52%;
    }

    45% {
      width: 60%;
    }

    65% {
      width: 76%;
    }

    80% {
      width: 86%;
    }

    100% {
      width: 100%;
    }
  }
`;

export default LoaderStyled;
