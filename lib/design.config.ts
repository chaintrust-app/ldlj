import { keyframes } from "styled-components/macro"

export const colors = {
  cornflower: "#6B92FF",
  columbia: "#9FD8FF",
  rock: "#9DB2EC",
  lavender: "#DFEAFF",

  shamrock: "#3DD598",
  radicalRed: "#FF2E6C",
  brightSun: "#FFC542",
  lightSun: "#FFF3D9",
  orange: "#FF974A",
  amaranth: "#FC5A5A",

  navy: "#031D42",
  slateGrey: "#6E7C98",
  lightBlueGrey: "#B8C6E3",
  moon: "#D0D3E5",
  mist: "#ECF1FF",
  desertStorm: "#EFF0F6",
  white: "#FFFFFF",
  disabledGrey: "#DAE0F3",
  steelBlue: "#485D7B",
}

export const opacityColors = {
  shamrock: "rgba(61, 213, 152, 0.2)",
  amaranth: "rgba(252, 90, 90, 0.2)",
  mistSemiTransparant: "#ECF1FF80",
}

export const spacings = {
  defaultPadding: "4rem",
  alertPadding: "2rem 3rem",
}

export const gradients = {
  blue: `linear-gradient(125.36deg, ${colors.cornflower} 5.35%, ${colors.columbia} 94.88%)`,
  background: `radial-gradient(84.12% 84.12% at 10.68% 23.02%, rgba(142, 192, 255, 0.4) 6.54%, rgba(142, 192, 255, 0) 72.59%);`,
}

export const sizes = {
  screen: {
    breakpoint: `max-width: 1260px`,
  },
  button: {
    standard: 42.5,
  },
}

export const boxShadow = " 0 0.5rem 1.75rem rgba(2, 76, 248, 0.1)"

export const appearing = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  
  to {
    transform: rotate(360deg)
  }
`
export const bump = keyframes`
  from {
    transform: scale(1)
  }
 
  33% {
    transform: scale(1.08)
  }
  66% {
    transform: scale(0.88)
  }

  to {
    transform: scale(1)
  }
`
