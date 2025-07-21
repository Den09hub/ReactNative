import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 flex-row flex-wrap p-20 space-y-4 bg-slate-500">
      {/* <Text className="text-5xl text-dark-200 font-bold bg-slate-500 p-10">Bem vindo</Text> */}
      <View className="w-1/2 p-2 bg-white">
        {/* <Image source={require('./assets/ps5.jpg')}/> */}
        <Text className="text-2xl font-bold">Nome</Text>
      </View>
      <View className="w-1/2 p-2 bg-white">
        <Text className="text-2xl font-bold">Nome</Text>
      </View>
      <View className="w-1/2 p-2 bg-white">
        <Text className="text-2xl font-bold">Nome</Text>
      </View>
      <View className="w-1/2 p-2 bg-white">
        <Text className="text-2xl font-bold">Nome</Text>
      </View>
      <View className="w-1/2 p-2 bg-white">
        <Text className="text-2xl font-bold">Nome</Text>
      </View>
      <View className="w-1/2 p-2 bg-white">
        <Text className="text-2xl font-bold">Nome</Text>
      </View>
    </View>
  );
}
