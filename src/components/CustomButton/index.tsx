import { Button } from "native-base";
import { ReactNode } from "react";
import { THEMES } from "../../styles/themes";

interface ButtonProps {
  label: ReactNode;
  onPress?: () => void;
}

export default function CustomButton({ label, onPress }: ButtonProps) {
  return (
    <Button
      mt={5}
      p={3}
      w={"100%"}
      fontWeight={"bold"}
      bgColor={THEMES.colors.blue[800]}
      onPress={onPress}
    >
      {label}
    </Button>
  );
}
