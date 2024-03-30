import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <View>
      <ScrollView horizontal={true}
      style={styles.container} 
      contentContainerStyle={{ flexDirection: 'row' }}
      >
        <View style={[styles.card, styles.elevated]} >
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]} >
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.elevated]} >
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elevated]} >
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevated]} >
          <Text>More...</Text>
        </View>
        <View style={[styles.card, styles.elevated]} >
          <Text>🈵</Text>
        </View>
      </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 18,
    color: '#fefcbf'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8
  },
  elevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2
  },
  container: {
    padding: 8
  }
})