import { StyleSheet, Text, View, Image, TouchableOpacity,Linking} from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteLink: string){
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevated]}>
      <View style={styles.headingContainer}>
      <Text style={styles.heading}>What's new in javascript 21 - ES12</Text>
      </View>
      <Image 
         source={{
            uri: 'https://imgs.search.brave.com/BBoiL3PUydbZQygU6N_78dubGqwcdErbgt9E8mgwPBA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzU1NC85ODQv/MzMvbXItcm9ib3Qt/NGstY29vbC1waWMt/d2FsbHBhcGVyLXBy/ZXZpZXcuanBn'
         }}
         style={styles.cardImage}
      />
      <View style={styles.bodyContainer}>
         <Text numberOfLines={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex explicabo iure ipsam dolorem? Sequi esse quidem aspernatur fugiat, amet laudantium modi odio non? Delectus porro veniam quas nemo iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rem ducimus corrupti ea quos consectetur eos esse sit asperiores totam, veritatis facilis tempora, deleniti similique! Suscipit unde beatae ratione provident!</Text>
      </View>
      <View style={styles.footerContainer}>
         <TouchableOpacity
          onPress={() => openWebsite('https://www.flatuicolorpicker.com/')}>
          <Text style={styles.socialLinks}>Read More</Text>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={() => openWebsite('https://github.com/Piyushjha69/react-native-app')}>
          <Text style={styles.socialLinks}>Follow Me</Text>
         </TouchableOpacity>
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
  heading:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#000',
    marginBottom:-20,
    marginTop:-170,
  },
  card:{
    alignItems: 'center',
    justifyContent: 'center',
    // width: 350,
    // height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  elevated:{
    backgroundColor: '#E07C24',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4
  },
  headingContainer:{
    height: 190,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText:{
    color: '#000',
    fontSize: 16,
    fontWeight: '600'
  },
  cardImage:{
    height: 210,
    width: '95%',
    marginBottom: 20,
    marginTop:-150 
  },
  bodyContainer:{
    padding: 5
  },
  footerContainer:{
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  socialLinks:{
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 40,
    marginLeft: 40
  }
})