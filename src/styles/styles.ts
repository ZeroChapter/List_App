import styled from "styled-components";
import { colors } from "./colors";

const imgUrl: string = "src/assets/checked.svg";
const crossUrl: string = "src/assets/cross.svg";
const penUrl: string = "src/assets/pen.svg";

export const Background = styled.div`
  background-color: ${colors.primary};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const StyledCheckBox = styled.button<{ $active: boolean }>`
  background-color: ${(props) =>
    props.$active ? colors.green : colors.primary};
  position: relative;
  border-radius: 20%;
  min-width: 50px;
  height: 50px;
  transition: all 0.3s ease;
  border: solid 1px ${colors.text};

  &::after {
    content: "";
    display: ${(props) => (props.$active ? "block" : "none")};
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    background-color: ${colors.primary};
    mask-image: url(${imgUrl});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  }
`;

export const BorderBox = styled.div<{ $color: string }>`
  margin: 0;
  padding: 0;
  border-radius: 10px;
  border: solid 1px ${(props) => props.$color};
`;

export const CrossIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${colors.cross};
  mask-image: url(${crossUrl});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url(${crossUrl});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;
export const PenIcon = styled.div`
  padding: 0;
  margin: 0;
  width: 20px;
  height: 20px;
  background-color: ${colors.green};
  mask-image: url(${penUrl});
  mask-size: 20px;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url(${penUrl});

  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;
export const Icon = styled.div<{
  $color: string;
  $imageUrl: string;
  $scale?: number;
}>`
  padding: 0;
  margin: 0;
  width: ${(props) => (props.$scale ? 30 * props.$scale : 30)}px;
  height: ${(props) => (props.$scale ? 30 * props.$scale : 30)}px;
  background-color: ${(props) => props.$color};
  mask-image: url(${(props) => props.$imageUrl});
  mask-size: 20px;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url(${(props) => props.$imageUrl});

  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;

export const Container = styled.div<{
  color: string;
  $margin?: string;
  $padding?: string;
  $width?: string;
}>`
  padding: ${(props) => (props.$padding ? props.$padding : "10px")};
  margin: ${(props) => (props.$margin ? props.$margin : "10px")};
  border-radius: 10px;
  background-color: ${(props) => props.color};
  width: ${(props) => (props.$width ? props.$width : "max-content")};
  max-width: 370px;
`;
export const ItemContainer = styled.div<{ $mark?: boolean }>`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.$mark ? colors.green : colors.primary)};
  display: flex;
  background: ${(props) =>
    props.$mark ? colors.greenGradient : colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  max-width: 350px;
  width: 350px;
  font-size: 18px;
  color: ${(props) => (props.$mark ? colors.alternativText : colors.text)};
`;
export const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2px;
  max-width: 370px;
  width: 370px;
`;
export const LinePoint = styled.div<{ $done: boolean; $width: number }>`
  min-height: 10px;
  width: ${(prop) => prop.$width}%;
  background-color: ${(prop) => (prop.$done ? colors.green : colors.primary)};
  border-radius: 5px;
  border: solid 1px ${colors.text};
`;
export const DropDown = styled.div<{ $activ: boolean; color: string }>`
  margin: 0px;
  display: ${(prop) => (prop.$activ ? "block" : "none")};
  border-radius: 10px;
  color: ${(prop) => prop.color};
`;
export const ColorButton = styled.button<{ $color: string; $activ: boolean }>`
  box-shadow: ${(props) => (props.$activ ? "0 0 5px 2px #141C16" : "none")};
  cursor: pointer;
  background: ${(props) => props.$color};
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin: 5px;
  border: none;
`;
export const CustomInput = styled.textarea`
  width: 350px;
  margin: 10px 0px 10px 0px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: ${colors.primary};
  font-size: 18px;
  height: content;
  resize: none;
  color: ${colors.text};
  &:focus {
    box-shadow: 0 0 5px 1px #141c16;
  }
  &::placeholder {
    color: ${colors.text};
    opacity: 0.7;
  }
`;
export const StyledButtton = styled.button<{
  $border?: string;
  $color?: string;
  $margin?: string;
  $padding?: string;
}>`
  padding: ${(props) => (props.$padding ? props.$padding : "5px")};
  margin: ${(props) => (props.$margin ? props.$margin : "10px")};
  border-radius: 10px;
  border: solid 2px
    ${(props) => (props.$border ? props.$border : colors.primary)};
  background-color: ${(props) =>
    props.$color ? props.$color : colors.primary};
  font-size: 20px;
  color: ${colors.text};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  &:hover {
    box-shadow: 0 0 5px 1px #141c16;
  }
`;
export const Flex = styled.div<{
  dir: "row" | "column";
  $whidth?: string;
  $gap?: string;
  $align?: "center" | "start" | "end";
  $justify?: "center" | "start" | "end";
}>`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: ${(props) => props.dir};
  whidth: ${(props) => props.$whidth};
  gap: ${(props) => props.$gap};
  align-items: ${(props) => (props.$align ? props.$align : "center")};
  justify-content: ${(props) => (props.$justify ? props.$justify : "center")};
`;
export const HiddenDiv = styled.div<{ $active: boolean }>`
  display: ${(props) => (props.$active ? "block" : "none")};
  whidth: ${(props) => (props.$active ? "100%" : "0")};
`;

export const PopUp = styled.div<{ $active: boolean }>`
  background: rgba(0, 0, 0, 0.65);
  display: ${(props) => (props.$active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
`;
