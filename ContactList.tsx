import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Piyush Jha',
      status: 'Just an ordinary guy',
      imageUrl: 'https://imgs.search.brave.com/7kG6OqVk6mmZ6Glx2i8I8P9kb_euweo34CYDrmiOKPc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI1NzYy/MzQuanBn'
    },
    {
      uid: 2,
      name: 'Lokesh Jha',
      status: 'Just an extra ordinay teacher',
      imageUrl: 'https://imgs.search.brave.com/aqzkWY2BvX9Ch8kokG5kKOME4_kdvbx44af_XjEvrUs/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9OYXJ1/dG8tQ29vbC1XYWxs/cGFwZXIuanBn'
    },
    {
      uid: 3,
      name: 'Suhel Khan',
      status: 'Katua from UP',
      imageUrl: 'https://imgs.search.brave.com/QpxJe7J4s8GLJYzFseoq9VE-zbnt1mx0aKxvAkQjyyY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5MzUz/MDMuanBn'
    },
    {
      uid: 4,
      name: 'Amritesh Chakrobarty',
      status: 'Lonely guy from somewhere',
      imageUrl: 'https://imgs.search.brave.com/gbXnsrH9llsmMlX-ZCSRJ7guIFXXUpQMHIsOaHjgreU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdkL2Mw/L2U4LzdkYzBlOGFi/NDQ3YTQwMDdlNWNl/ZjZhMWZjYzViYjdl/LmpwZw'
    },
  ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}
      >
      {contacts.map(({uid,name,status,imageUrl}) => (
        <View key={uid} style={styles.userCard}>
          <Image 
          source={{
            uri: imageUrl
          }}
          style={styles.userImage}
          />
          <View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userStatus}>{status}</Text>
          </View>
        </View>
      ))}
      </ScrollView>
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
  container:{
    paddingHorizontal: 16,
    marginBottom: 4
  },
  userCard:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#e53e3e',
    padding: 8,
    borderRadius: 10
  },
  userImage:{
    width: 60,
    height: 60,
    borderRadius: 60/2,
    marginRight: 14
  },
  userName:{
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'
  },
  userStatus:{
    fontSize: 12,
    color: '#FFF'
  },

})