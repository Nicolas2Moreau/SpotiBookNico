// import { StatusBar } from 'expo-status-bar';
// import { Platform, StyleSheet } from 'react-native';

// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';

// export default function ModalScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Modal</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="app/(tabs)/modal.tsx" />

//       {/* Use a light status bar on iOS to account for the black space above the modal */}
//       <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });


import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, View, Button, Platform } from "react-native";

export default function ModalTest() {
    const router = useRouter();

    function showCreateModal() {
        router.push("/modalExample");
    }
   
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <Button
                            title="Add New"
                            color={Platform.OS === "ios" ? "#fff" : "#264c59"}
                            onPress={showCreateModal}
                        />
                    )
                }}
            />
            <View style={styles.main}>
                <Text style={styles.title}>Posts</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto"
    },
    title: {
        fontSize: 64,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D"
    }
});