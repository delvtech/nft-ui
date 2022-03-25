import { Dialog } from "common/Dialog";
import { DialogTitle } from "common/Dialog/styles";
import useAddressScreening from "elf/hooks/useAddressScreening";
import useWeb3 from "elf/useWeb3";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 0 20px 10px;
  text-align: center;
`;

export const IneligibleAccountDialog = () => {
  const { account } = useWeb3();
  const { pass } = useAddressScreening(account);
  const { route, replace } = useRouter();
  const safeReplace = useRef(replace).current;
  useEffect(() => {
    if (pass === false && route !== "/void") {
      safeReplace("/void");
    }
  }, [pass, route, safeReplace]);
  return (
    <Dialog isOpen={pass === false}>
      <StyledContainer>
        <DialogTitle>Ineligible Account</DialogTitle>
        <p>This account is not eligible to use this website.</p>
      </StyledContainer>
    </Dialog>
  );
};
