// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StoriesListScreen from '../Viewing/stories/StoriesListScreen.js';

 
const HomeScreen = ({ navigation }) => {
    const [likedStatus, setLikedStatus] = useState([false, false, false, false]);

    // Function to toggle the like status for a specific card
    const toggleLike = (index) => {
      const newStatus = [...likedStatus];
      newStatus[index] = !newStatus[index]; // Toggle the like status
      setLikedStatus(newStatus);
    }; 
  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
        <Image 
          source={require('./images/HEADER.png')}
          style={styles.headerImage}
        />
    </View>
    <View style={styles.bannerContainer}>
        <Image
          source={require('./images/bannericon.png')}
          style={styles.bannerImage}
        />
        <View style={styles.bannerTextContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Stories')}>
        <Text style={styles.bannerTitle}>my memories</Text>
        </TouchableOpacity>
        </View>
    </View>
    <View style={styles.card}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
          <TouchableOpacity>
            <Image
              source={require('./images/Jay_and_Mingmei.png')}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Fall Harvest Party 2024</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Image
              source={require('./images/IMG_0423.png')}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>David's visit to Cardinale</Text>
          </TouchableOpacity>

        </ScrollView>
    </View>
    <View style={styles.bannerContainer}>
        <Image
          source={require('./images/bannericon.png')}
          style={styles.bannerImage} 
        />
        <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerTitle}>memories from others</Text>
        </View>
    </View>
    <View style={styles.card}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
          <TouchableOpacity>
            <Image
              source={require('./images/mfo1.png')}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Opus One with Takagi-san</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./images/mfo2.png')}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Met with Elizabet Pressler!</Text>
          </TouchableOpacity>
        </ScrollView>
    </View>
    <View style={styles.bannerContainer}>
        <Image
          source={require('./images/bannericon2.png')}
          style={styles.bannerImage} 
        />
        <Icon
          name='cutlery'
          size={1}
          color='#522F60'
          padding={8}
        />
        <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerTitle1}>featured restaurants</Text>
        </View>
    </View>
    <View style={styles.card1}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
          <TouchableOpacity >
            <Image
              source={require('./images/fr1.png')}
              style={styles.cardIcon1}
            />
            <Text style={styles.cardTitle}>TAMA</Text>
            <TouchableOpacity
                style={styles.likeButton}
                onPress={() => toggleLike(0)}
              >
                <Icon
                  name={likedStatus[0] ? 'heart' : 'arrow-up-from-square'}  // Static heart outline icon
                  size={17}
                  color='#522F60'
                  padding={8}
                />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./images/fr2.png')}
              style={styles.cardIcon1}
            />
            <Text style={styles.cardTitle}>Met with Elizabet Pressler!</Text>
            <TouchableOpacity
                style={styles.likeButton}
                onPress={() => toggleLike(1)}
              >
                <Icon
                  name={likedStatus[1] ? 'heart' : 'heart-o'}  // Static heart outline icon
                  size={17}
                  color='#522F60'
                  padding={8}
                />
              </TouchableOpacity>
          </TouchableOpacity>
        </ScrollView>
    </View>
   </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  bannerContainer: {
    marginBottom: 5,
    padding: 10, 
    flexDirection: 'row',
  },
  bannerImage: {
    width: 15,
    height: 30,
    borderRadius: 1,
    resizeMode: 'contain',
    marginRight: 4,
  },
  bannerTextContainer: {
    flex: 1, 
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#522F60',
    textAlign: 'left',
    marginTop: 3,
    fontFamily: 'HiraginoSans',
  },
  bannerTitle1: {
    fontSize: 18,
    fontWeight: '600',
    color: '#30425F',
    textAlign: 'left',
    marginTop: 3,
    fontFamily: 'HiraginoSans',
  },
  headerImage: {
    width: '100%',   
    height: 300,   
    //resizeMode: 'contain', 
  },
  cardsWrapper: {
    marginTop:0,
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#fff',
    padding: 1,
    width: '100%',
    height: 170,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 1,
  },
  card1: {
    backgroundColor: '#fff',
    padding: 1,
    width: '100%',
    height: 228,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 1,
  },
  cardIcon1: {
    width: 160,
    height: 160,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 1,        
    borderRadius: 11,
    padding: 20,
    marginRight: 10,
  },
  cardIcon: {
    width: 160,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 1,        
    borderRadius: 11,
    padding: 20,
    marginRight: 10,
    
  },
  cardTitle: {
    fontFamily: 'Hiragino Sans GB W6',  // Set the font family to Hiragino Sans
    fontSize: 18,            // Set font size to 14px
    fontWeight: '600',           // Set font weight to 600
    lineHeight: 22,  
    width: 150,            // Set line height to 22px
    letterSpacing: 0.02,         // Set letter spacing to 0.02em
    textAlign: 'left',           // Align text to the left
    color: '#333',
    marginLeft: 10,
    resizeMode: 'contain',
  },
  likeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 11,
  },
});

export default HomeScreen;
