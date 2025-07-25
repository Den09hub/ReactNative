import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-slate-300">

      <View className="">
        <Text className="text-2xl px-10 mt-10 font-bold">Best Dress Collection</Text>
      </View>

      <View className="flex-row justify-center gap-6">

        <View className="flex-col gap-6">

          <View className="w-72 h-52 p-2 bg-white rounded-xl shadow justify-between">
            <View className="flex-1">
              <Image source={require('../assets/images/ps5.jpg')} className="w-full h-32 rounded-xl" resizeMode="contain"/>
            </View>
            <Text className="text-2xl font-bold mt-2">Nome</Text>
          </View>
          <View className="w-72 h-52 p-2 bg-white rounded-xl shadow justify-between">
            <Text className="text-2xl font-bold">Nome</Text>
          </View>
          <View className="w-72 h-52 p-2 bg-white rounded-xl shadow justify-between">
            <Text className="text-2xl font-bold">Nome</Text>
          </View>

        </View>

        <View className="flex-col gap-6">

          <View className="w-72 h-52 p-2 bg-white rounded-xl shadow justify-between">
            <Text className="text-2xl font-bold">Nome</Text>
          </View>
          <View className="w-72 h-52 p-2 bg-white rounded-xl shadow justify-between">
            <Text className="text-2xl font-bold">Nome</Text>
          </View>
          <View className="w-72 h-52 p-2 bg-white rounded-xl shadow justify-between">
            <Text className="text-2xl font-bold">Nome</Text>
          </View>

        </View>

      </View>

    </View>
  );
}
