import { Box, Checkbox, FormControl, Image, Text, VStack } from "native-base";
import Logo from "../../assets/logo.png";

import CustomTitle from "../../components/CustomTitle";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import SECOES from "./utils/secoes";

export default function Signup({ navigation }: any) {
  const [numSecao, setNumSecao] = useState(0);

  const avancarSecao = () => {
    if (numSecao === SECOES.length - 1) return;
    setNumSecao(numSecao + 1);
  };

  const voltarSecao = () => {
    if (numSecao === 0) {
      navigation.navigate("Login");
      return;
    }
    setNumSecao(numSecao - 1);
  };

  return (
    <VStack flex={1} alignItems={"center"} p="5" justifyContent={"center"}>
      <Image
        source={Logo}
        alt="Logo Elevii"
        w={120}
        h={120}
        resizeMode="contain"
      />
      <CustomTitle flex={0.2}>{SECOES[numSecao].titulo}</CustomTitle>
      <Box w="100%">
        {(SECOES[numSecao].campos ?? []).map((campo) => {
          return (
            <CustomInput
              key={campo.id}
              label={campo.label}
              placeholder={campo.placeholder}
            />
          );
        })}
        {SECOES[numSecao].id === 2 && (
          <Text mb="4" fontWeight={500} fontSize={"md"}>
            Selecione o plano
          </Text>
        )}
        {(SECOES[numSecao].checkBox ?? []).map((checkBox) => {
          return (
            <Checkbox key={checkBox.id} value={checkBox.value}>
              {checkBox.value}
            </Checkbox>
          );
        })}
      </Box>
      <CustomButton
        label={SECOES[numSecao].buttonText}
        onPress={avancarSecao}
      />
      <TouchableOpacity onPress={voltarSecao}>
        <Text mt="3">Voltar</Text>
      </TouchableOpacity>
    </VStack>
  );
}
