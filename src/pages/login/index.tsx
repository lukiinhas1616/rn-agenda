import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "native-base";
import Logo from "../../assets/logo.png";
import { THEMES } from "../../styles/themes";
import { TouchableOpacity } from "react-native";
import CustomTitle from "../../components/CustomTitle";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function Login({ navigation }: any) {
  return (
    <VStack flex={1} alignItems={"center"} p="5" justifyContent={"center"}>
      <Image
        source={Logo}
        alt="Logo Elevii"
        w={120}
        h={120}
        resizeMode="contain"
        flex={1}
      />
      <CustomTitle>Faça Login</CustomTitle>
      <Box w="100%">
        <FormControl mt={5}>
          <CustomInput label="Email" placeholder="Informe o seu e-mail" />
          <CustomInput label="Senha" placeholder="Informe a sua senha" />
        </FormControl>
      </Box>
      <CustomButton
        label="Entrar"
        onPress={() => navigation.navigate("Tabs")}
      />
      <Link mt={"2"} flex={1}>
        Esqueceu a sua senha?
      </Link>
      <Box flexDir={"row"} mt={"2"}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text color={THEMES.colors.blue[300]}>Clique aqui !</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
