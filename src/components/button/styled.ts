import styled from "styled-components";

export interface StyledButtonProps {
  color?: "primary" | "secondary" | "tertiary" | "caution" | "solid" | "ghost";
  size?: "small" | "regular" | "large";
  fullWidth?: boolean;
  selected?: boolean;
}

export const StyledButton = styled.button.attrs(
  (props: StyledButtonProps): StyledButtonProps => ({
    size: props.size || "regular",
    color: props.color || "primary",
    fullWidth: props.fullWidth || true,
    selected: props.selected || false,
  })
)`
  display: block;
  padding: 0 ${(props) => props.theme.space[3]};
  margin: ${(props) => props.theme.space[2]} 0;
  border-radius: ${(props) => props.theme.border_radius};
  font-size: ${(props) => props.theme.font_sizes.text};
  font-weight: ${(props) => props.theme.font_weight.normal};
  line-height: ${(props) => props.theme.line_heights[1]};
  transition: ${(props) => props.theme.transition[0]};
  box-shadow: ${(props) => props.theme.shadows[0]};
  cursor: pointer;
  user-select: none;
  height: 40px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  max-width: ${(props) => props.theme.space[9]};
  word-break: keep-all;
  white-space: nowrap;
  letter-spacing: ${(props) => props.theme.letter_spacings.caps};
`;
