import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { handleCloseOutside } from "helpers/handleCloseOutside";
import {
  BurgerSidebarContainer,
  BurgerSidebarWrapper,
  BurgerSidebarOverlay,
} from "common/Modal/styles";
import { BurgerSidebarProps } from "helpers/types";
import { PageHideOuterScroll } from "styles/globalStyles";

export const BurgerSidebar = ({
  open,
  children,
  handleClose,
}: BurgerSidebarProps) => {
  const TIMEOUT: number = 450;
  const wrapperRef = useRef(null);
  handleCloseOutside(wrapperRef, handleClose);

  return (
    <BurgerSidebarOverlay shouldShow={open}>
      <PageHideOuterScroll shouldHide={open} />
      <CSSTransition
        in={open}
        classNames="burgerslide-transition"
        unmountOnExit
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        <BurgerSidebarWrapper>
          <BurgerSidebarContainer ref={wrapperRef}>
            {children}
          </BurgerSidebarContainer>
        </BurgerSidebarWrapper>
      </CSSTransition>
    </BurgerSidebarOverlay>
  );
};
