import { COLORS } from "helpers/colorPalette";
import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { EaseInDialog } from "styles/globalStyles";

interface StyledDialogProps {
  isOpen?: boolean;
}

const DialogContainer = styled.div<StyledDialogProps>`
  z-index: 50;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

const Card = styled(EaseInDialog)`
  position: relative;
  z-index: 51;
  top: 25%;
  background: ${COLORS.blackDark};
  border: 1px solid ${COLORS.greenLight};
  color: white;
  height: auto;
  margin: 0 auto;
  // border-radius: 1rem;
  max-width: 500px;
  padding: 10px;
`;

export interface DialogProps extends StyledDialogProps {
  onClose?: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  // window.onclick?(() => {
  //   console.log("i click window")
  // });

  return (
    <DialogContainer
      onClick={(e) => {
        console.log("clicked container");
        onClose && onClose();
      }}
      isOpen={isOpen}
    >
      <CSSTransition
        in={isOpen}
        classNames="dialog"
        unmountOnExit
        timeout={{
          enter: 450,
          exit: 450,
        }}
      >
        <Card
          onClick={(e) => {
            console.log("clicked card");
            e.stopPropagation();
          }}
        >
          {children}
        </Card>
      </CSSTransition>
    </DialogContainer>
  );
};
