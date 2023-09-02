import { Stack, useRouter } from "expo-router";
import { StyleSheet, Button } from "react-native";



import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

// export default function Create() {
//     const router = useRouter();

//     return (
//         <View style={styles.container}>
//             <Stack.Screen
//                 options={{
//                     title: "  Scannez votre code",
//                     headerLeft: () => (
//                         <Button
//                             title="<  Retour "
//                             color={Platform.OS === "ios" ? "#fff" : "#264c59"}
//                             onPress={() => router.back()}
//                         />
//                     )
//                 }}
//             />
//               <View style={styles.main}>
//                 <Text style={styles.title}>ModalTest</Text>
//                 <Text style={styles.subtitle}>Create a new post.</Text>
//             </View>
//             <View style={styles.main}>
//                 <Text style={styles.title}>ModalTest2</Text>
//                 <Text style={styles.subtitle}>Create a new post.</Text>
//             </View>
//             <View style={styles.main}>
//                 <Text style={styles.title}>ModalTest3</Text>
//                 <Text style={styles.subtitle}>Create a new post.</Text>
//             </View>
//             <View style={styles.main}>
//                 <Text style={styles.title}>ModalTest4</Text>
//                 <Text style={styles.subtitle}>Create a new post.</Text>
//             </View>
//             <View style={styles.main}>
//                 <Text style={styles.title}>ModalTest5</Text>
//                 <Text style={styles.subtitle}>Create a new post.</Text>
//             </View>
//             <View style={styles.main}>
//                 <Text style={styles.title}>ModalTest6</Text>
//                 <Text style={styles.subtitle}>Create a new post.</Text>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 24
//     },
//     main: {
//         // flex: 1,
//         // justifyContent: "center",
//         // alignContent: "center",
//         maxWidth: 250,
//         height: 350,
//         marginHorizontal: "auto",
//         borderColor :"#38434D",
//         borderStyle : "solid",
//         borderWidth : 10
        
//     },
//     title: {
//         textAlign: "center",
//         fontSize: 30,
//         fontWeight: "bold",
//         color: "white"
//     },
//     subtitle: {
//         fontSize: 36,
//         color: "#38434D"
//     }
// });



export default function ModalScreen() {
    const router = useRouter();
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Modal</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/modal.tsx" />
  
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });