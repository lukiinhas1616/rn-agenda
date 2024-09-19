import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";
import CustomTitle from "../../components/CustomTitle";


export default function Profile() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={"center"}>
                <CustomTitle textAlign={"center"} color={"blue.500"}>Perfil</CustomTitle>
                <Avatar
                    size="xl"
                    source={{
                        uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
                    }}
                    mt={5}
                />
                <Text fontSize="xl" fontWeight="bold">Nome</Text>
                <Text fontSize="md">Lorem ipsum</Text>
                <Text fontSize="md">Salvador/Bahia</Text>

                <Divider my={5} />

                <CustomTitle textAlign={"center"} color={"blue.500"}>Historico Médico</CustomTitle>
                <Text fontSize="md">Bronquite</Text>
                <Text fontSize="md">Febre</Text>

            </VStack>
        </ScrollView>
    );
}
