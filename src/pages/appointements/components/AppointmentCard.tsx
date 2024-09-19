import { Avatar, Text, VStack } from "native-base";
import CustomButton from "../../../components/CustomButton";

export function AppointmentCard() {
    return <VStack w={"100%"}>
        <Avatar size="xl" source={{ uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg" }} mt={5} />
        <Text> Nome: Lorem ipsum</Text>
        <Text> Cardiologista</Text>
        <Text> Data: 10/10/2021</Text>
        <CustomButton label="Agendar Consulta" />
    </VStack>
}