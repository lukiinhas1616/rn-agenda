import { Box, FormControl, Input } from "native-base";

interface InputProps {
  label: string;
  placeholder?: string;
}

export default function CustomInput({ label, placeholder }: InputProps) {
  return (
    <Box>
      <FormControl.Label>{label}</FormControl.Label>
      <Input placeholder={placeholder} />
    </Box>
  );
}
