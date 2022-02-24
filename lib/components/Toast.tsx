import { ToastContainer } from "react-toastify";
import styled from "styled-components/macro";
import * as React from "react";

import { colors } from "../design.config";

export const StyledToastContainer = styled((props) => (
  <ToastContainer {...props} />
))`
  .Toastify__toast {
    margin: 1rem;
    min-height: 8rem;
    width: 50rem;
    border-radius: 1rem;
    right: 12.5rem;
  }

  .Toastify__toast--error > .Toastify__toast-body {
    margin: 0;
    border-left: solid 2px ${colors.amaranth};

    & > div > h4 {
      font-family: "Poppins", sans-serif;
      font-size: 2rem;
      color: ${colors.navy};
      font-weight: 600;
    }
    & > div > p {
      font-family: "Roboto", sans-serif;
      font-size: 1.5rem;
      color: ${colors.slateGrey};
      font-weight: 500;
    }
  }

  .Toastify__toast--success > .Toastify__toast-body {
    margin: 0;
    border-left: solid 2px ${colors.shamrock};

    & > div > h4 {
      font-family: "Poppins", sans-serif;
      font-size: 2rem;
      color: ${colors.navy};
      font-weight: 600;
    }
    & > div > p {
      font-family: "Roboto", sans-serif;
      font-size: 1.5rem;
      color: ${colors.slateGrey};
      font-weight: 500;
    }
  }

  .Toastify__toast-icon {
    margin-left: 0.25rem;
    margin-right: 1.25rem;
    & > svg {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  .Toastify__close-button {
    align-self: center;
    & > svg {
      stroke: ${colors.rock};
      & > path {
        fill: ${colors.rock};
      }
    }
  }
`;
