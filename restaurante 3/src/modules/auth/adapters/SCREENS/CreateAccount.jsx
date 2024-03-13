import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

export default function CreateAccount() {
    return(
        <View style ={styles.container}>
            <Text>Creación de cuenta</Text>
            <Image
                source={{uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3a7ae4cc-a75d-4699-a6bc-6865990ac208/dfd2rhy-ce9692d7-7464-42ca-8aab-2dabf302e9c4.png/v1/fill/w_793,h_1008,q_70,strp/liebe__black_clover__by_ghostskull01z_dfd2rhy-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYyOCIsInBhdGgiOiJcL2ZcLzNhN2FlNGNjLWE3NWQtNDY5OS1hNmJjLTY4NjU5OTBhYzIwOFwvZGZkMnJoeS1jZTk2OTJkNy03NDY0LTQyY2EtOGFhYi0yZGFiZjMwMmU5YzQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XQY1QdWSS-2m0wYwJLKIkB30H_4LlKimHqk6HhCSqJs"}}
                style={{width: 200, height: 200}}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    }
})