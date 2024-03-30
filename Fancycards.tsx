import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'

export default function Fancycards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.elevated]}>
        <Image 
          source={{
            uri: 'https://imgs.search.brave.com/3bTucpD0kay67KZZcCOR9bgdKAek1QatO1lfVs86JcI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzMxMy8xMzQv/NDg5L3NwYWNlLWNv/bXB1dGVyLTE5MjB4/MTIwMC1kZXNrdG9w/LXdhbGxwYXBlci1w/cmV2aWV3LmpwZw'
          }}
        style={styles.cardImage}
        />
        
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Moon Base</Text>
          <Text style={styles.cardLabel}>Astronaut's Paradise</Text>
          <Text style={styles.cardDescription}>A dome-shaped structure with a panoramic view of the stark lunar landscape. Inside, an astronaut lounges in a gravity-adjusted recliner, sipping a cold beer from a specially designed container, enjoying a rare moment of relaxation in the serene silence of space. 🌕🍺✨</Text>
          <Text style={styles.cardFooter}>4,05,682 Kilometers Away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#fefcbf'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  elevated: {
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1
    },
  },
  cardImage:{
    height: 180,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 26,
    // resizeMode: 'cover',
  },
  cardBody:{
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardTitle:{
    color: '#000000',
    fontSize:22,
    fontWeight: 'bold',
    marginBottom: 6
  },
  cardLabel:{
    color: '#000000',
    fontSize:14,
    marginBottom: 6
  },
  cardDescription:{
    color: '#000000',
    fontSize:12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1
  },
  cardFooter:{
    color: '#000000'
  }
})