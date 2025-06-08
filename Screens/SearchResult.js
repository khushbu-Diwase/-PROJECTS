import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResult = ({ data, input, setInput }) => {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const place = item.place ?? "";
          const lowercasedInput = input?.toLowerCase() || "";

          if (place.toLowerCase().includes(lowercasedInput)) {
            return (
              <Pressable
                onPress={() => {
                  setInput(item.place);
                  navigation.navigate("Home", { input: item.place });
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <View>
                  <Image
                    style={{ width: 70, height: 70 }}
                    source={{ uri: item.placeImage }}
                  />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item.place}
                  </Text>
                  <Text style={{ marginVertical: 4 }}>
                    {item.shortDescription}
                  </Text>
                  <Text style={{ color: "gray", fontSize: 15 }}>
                    {item.properties.length} Properties{" "}
                  </Text>
                </View>
              </Pressable>
            );
          }

          return null;
        }}
      />
    </View>
  );
};

export default SearchResult;
