import React, {FC} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
import { AuthContext } from '../context/context'
import {Button} from '../components'

const App: FC = () =>{

    const { signOut } = React.useContext(AuthContext)
    const func = ()=>{
        signOut()
    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <ScrollView 
                style={styles.container}
                contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                showsVerticalScrollIndicator={false}>
                <Image style={styles.userImg} source={require('../img/user.jpg')}/>
                <Text style={styles.userName}>Ed Harris</Text>
                <Text style={styles.aboutUser}>American actor, producer, director, and screenwriter. His performances in Apollo 13 (1995), The Truman Show (1998), Pollock (2000) and The Hours (2002) earned him critical acclaim in addition to Academy Award nominations.
                </Text>
                <View style={styles.userBtnWrapper}>
                    <TouchableOpacity style={styles.userBtn} onPress={()=> {}}>
                        <Text style={styles.userBtnTxt}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userBtn} onPress={()=> {}}>
                        <Text style={styles.userBtnTxt}>Follow</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.userInfoWrapper}>
                    <View style={styles.userInfoItem}>
                        <Text style={styles.userInfoTitle}>200</Text>
                        <Text style={styles.userInfoSubTitle}>Posts</Text>
                    </View>
                    <View style={styles.userInfoItem}>
                        <Text style={styles.userInfoTitle}>10,000</Text>
                        <Text style={styles.userInfoSubTitle}>Followers</Text>
                    </View>
                    <View style={styles.userInfoItem}>
                        <Text style={styles.userInfoTitle}>100</Text>
                        <Text style={styles.userInfoSubTitle}>Following</Text>
                    </View>
                    <Button title="Logout" onPress={()=> func()}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    userImg: {
      height: 150,
      width: 150,
      borderRadius: 75,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    aboutUser: {
      fontSize: 12,
      fontWeight: '600',
      color: '#666',
      textAlign: 'center',
      marginBottom: 10,
    },
    userBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 10,
    },
    userBtn: {
      borderColor: '#2e64e5',
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
    },
    userBtnTxt: {
      color: '#2e64e5',
    },
    userInfoWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginVertical: 20,
    },
    userInfoItem: {
      justifyContent: 'center',
    },
    userInfoTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'center',
    },
    userInfoSubTitle: {
      fontSize: 12,
      color: '#666',
      textAlign: 'center',
    },
  });