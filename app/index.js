import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function App() {
  const [rating, setRating] = useState(0);
  const [selectedIdeas, setSelectedIdeas] = useState("");
  const router = useRouter();

  const handleStarPress = (index) => {
    setRating(index + 1);
  };

  const ideas = [
    "Great Quality",
    "Value for Money",
    "Easy to Use",
    "Good Battery Life",
    "Good Sound Quality",
    "Good Camera",
    "Good Display",
    "Good Performance",
  ];

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleStarPress(i)}
          style={styles.starButton}
        >
          <Ionicons
            name={rating > i ? "star" : "star-outline"}
            size={24}
            color="#FFD700"
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  const handleIdeaPress = (idea) => {
    setSelectedIdeas(idea);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            // onPress={router.back()}
          />
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color="white" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Amazon.in"
              placeholderTextColor="gray"
            />
            <View style={{ flexDirection: "row", gap: 10 }}>
              <MaterialIcons name="control-camera" size={18} color="white" />
              <FontAwesome6 name="microphone" size={18} color="white" />
            </View>
          </View>
          <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>How would you rate it?</Text>
          <View style={styles.starsContainer}>{renderStars()}</View>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 18,
              marginTop: 10,
              color: "white",
            }}
          >
            Share a Video or Photo
          </Text>
          <TouchableOpacity style={styles.attachBox}>
            <MaterialCommunityIcons
              style={styles.attachText}
              name="camera-plus"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: "#0e272b",
              marginVertical: 20,
              paddingVertical: 20,
              marginHorizontal: 0,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>
              Your video could be the first. Imagine that...
            </Text>
          </View>
          <Text style={styles.ratingText}>Title your Review</Text>
          <TextInput
            style={{
              backgroundColor: "black",
              width: "100%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 11,
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginBottom: 10,
              alignSelf: "center",
              color: "white",
            }}
            placeholder="What's most important to know?"
            placeholderTextColor="gray"
          />
          <Text style={styles.ratingText}>Write your Review</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", marginTop: 10, marginBottom: 20 }}>
              Ideas:
            </Text>
            <FlatList
              horizontal
              data={ideas}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleIdeaPress(item)}>
                  <Text style={{ color: "gray", marginHorizontal: 5 }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ marginTop: 10, marginBottom: 20 }}
            />
          </View>

          <TextInput
            style={{
              backgroundColor: "#191f1f",
              width: "100%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 11,
              alignSelf: "flex-start",
              paddingHorizontal: 10,
              marginVertical: 10,
              height: 130,
              color: "white",
            }}
            placeholder="What did you like or dislike? What did you use this project for?"
            placeholderTextColor="#6c7272"
            value={selectedIdeas}
            onChangeText={(text) => setSelectedIdeas(text)}
          />
        </View>
        <View style={{ flexDirection: "row", borderTopWidth: 1 }}>
          <TouchableOpacity style={[styles.button, styles.submitButton]}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.nextButton]}>
            <Text style={[styles.buttonText]}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
  },
  header: {
    backgroundColor: "#014c55",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    width: "70%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 11,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    color: "grey",
    flex: 1,
    marginLeft: 10,
  },
  ratingContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  ratingText: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 10,
    color: "white",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  starButton: {
    padding: 5,
  },
  attachBox: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    height: 100,
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 2,
  },
  attachText: {
    flex: 1,
    alignSelf: "center",
    color: "white",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  submitButton: {
    backgroundColor: "black",
    borderColor: "white",
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: "#FED813",
    borderColor: "#FED813",
    marginLeft: 10,
  },
});
