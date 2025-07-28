import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const products = [
    {
      id: 1,
      name: 'Moletom Masculino',
      img: 'https://tse2.mm.bing.net/th/id/OIP.e4ndofZDTAiX23gzA0kOIgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 2,
      name: 'Moletom Feminino',
      img: 'https://tse4.mm.bing.net/th/id/OIP.O3EGymgCgl_vkjTYOFOWkgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 3,
      name: 'Camisa Social Masculina',
      img: 'https://tse3.mm.bing.net/th/id/OIP.zQ3gHUPxMt7aHsC1b1vH5gHaLF?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 4,
      name: 'Camisa Social Feminina',
      img: 'https://tse2.mm.bing.net/th/id/OIP.uXPrP-mD68fbNKfAWjXXLQHaJ1?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 5,
      name: 'Calça Sarja Jeans Masculina',
      img: 'https://static.netshoes.com.br/produtos/calca-jogger-jeans-sarja-masculina-com-punho-elastico-casual/04/HZR-0016-004/HZR-0016-004_zoom1.jpg?ts=1661244991',
    },
    {
      id: 6,
      name: 'Calça Jens Feminina',
      img: 'https://tse4.mm.bing.net/th/id/OIP.eg6DJ1oBl_D9elFIgSwehwHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
  ];

  return (
    <ScrollView className="bg-slate-300 p-4">
      <View className="mb-8">
        <TouchableOpacity className="self-start mb-4">
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>

        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-semibold">Best Dress Collection</Text>
          <View className="flex-row items-center space-x-3">
            <FontAwesome5 name="ticket-alt" size={20} color="#ec4899" solid={false} />
            <FontAwesome5 name="shopping-cart" size={22} color="#ec4899" />
          </View>
        </View>
      </View>

      <View className="flex-row flex-wrap gap-2 mb-6">
        {['Category', 'Color', 'Size', 'Price', 'More'].map((filter) => (
          <Text
            key={filter}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
          >
            {filter}
          </Text>
        ))}
      </View>

      <View className="flex-row flex-wrap justify-between">
        {products.map((product) => (
          <View
            key={product.id}
            className="w-[48%] mb-4 border rounded-lg overflow-hidden"
          >
            <Image
              source={{ uri: product.img }}
              className="w-full h-36"
              resizeMode="cover"
            />
            <View className="p-2">
              <Text className="text-sm font-medium text-gray-800">
                {product.name}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

