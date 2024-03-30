import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCards from './ElevatedCards'
import Fancycards from './Fancycards'
import ActionCard from './ActionCard'
import ContactList from './ContactList'

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.net}>
        <View>
          <Text style={styles.headingText}>NETFLIX</Text>
        </View>
        <View >
          <Text style={styles.container}>Originals</Text>
        </View>
        <FlatCards />
        <ElevatedCards />
        <Fancycards />
        <ActionCard />
        <ContactList />
      </View>
     </ScrollView>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e53e3e',
    textAlign: 'center',
    paddingTop: 8

  },
  container: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#cbd5e0',
    textAlign: 'center',
  },
  net: {
    flex: 1,
    backgroundColor: 'black',
  }
}
)

export default App