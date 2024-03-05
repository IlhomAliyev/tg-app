import { Button, CloseButton, NumberInput, Stack } from "@chakra-ui/react";
import { CButton } from "../../UI/CButton/CButton";
import styles from "./MainPage.module.scss";
import useTelegram from "../../hooks/useTelegram";

export const MainPage = () => {
  const { user, onClose, onToggleButton } = useTelegram();

  return (
    <div className={styles.MainPage}>
      <h1>Main</h1>
      <Stack direction="row" justify="space-between">
        <CButton onClick={onToggleButton}>Toggle</CButton>
        <CloseButton colorScheme="telegram" onClick={onClose} />
        <Button variant="telegram">Chakra</Button>
      </Stack>
      <NumberInput format={value => `${value}`} />
      <p>{user?.first_name}</p>
    </div>
  );
};
