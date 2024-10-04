import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const storiesData = [
  {
    id: '1',
    title: "Trip to Napa Valley",
    description: "Visited the beautiful vineyards in Napa.",
    image: require('../../../assets/images/story1.png'),
  },
  {
    id: '2',
    title: "Summer Beach Vacation",
    description: "Relaxing by the beach with family.",
    image: require('../../../assets/images/story2.png'),
  },
  {
    id: '3',
    title: "Hiking Adventure",
    description: "Explored the mountain trails.",
    image: require('../../../assets/images/story3.png'),
  },
  // Add more stories here...
];

const StoriesListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStories, setFilteredStories] = useState(storiesData);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === '') {
      setFilteredStories(storiesData);
    } else {
      const filteredData = storiesData.filter(story =>
        story.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredStories(filteredData);
    }
  };

  const renderStory = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
        <TouchableOpacity style={styles.likeButton}>
          <Icon name="heart-o" size={20} color="#522F60" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={25} color="black" />
        </TouchableOpacity>
      <Text style={styles.headerTitle}>Stories</Text>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#989999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="search"
          placeholderTextColor={'#e5e8e8'}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Icon name="microphone" size={20} color="#989999" />
      </View>

      {/* Stories List */}
      <FlatList
        data={storiesData}
        renderItem={renderStory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 1,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlignVertical: 'center',
    width: '100%',
    //marginLeft: 10,
    color: '#333',
    textAlign: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 0,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 0,
    overflow: 'hidden',
    marginBottom: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    margin: 8,
    marginLeft: 16,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  viewButton: {
    backgroundColor: '#522F60',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  viewButtonText: {
    color: 'white',
    fontSize: 14,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 20,
    elevation: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#522F60',
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 1,
    marginHorizontal: 16,
    marginBottom: 13,
    marginVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    height: 40,
  },
  searchIcon: {
    marginRight: 7,

  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color:'black',
  },
});

export default StoriesListScreen;
