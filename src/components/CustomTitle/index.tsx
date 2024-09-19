import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface TitleProps extends ITextProps {
  children: ReactNode;
}

export default function CustomTitle({ children, ...rest }: TitleProps) {
  return (
    <Text
      fontSize={"xl"}
      fontWeight={"bold"}
      color={"gray.500"}
      textAlign={"start"}
      w={"100%"}
      mt="10"
      {...rest}
    >
      {children}
    </Text>
  );
}
