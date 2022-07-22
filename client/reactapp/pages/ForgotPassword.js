import React from "react";
import { SafeAreaView } from "react-native";
import { ImageBackground } from 'react-native';
import { Card,Paragraph} from "react-native-paper";
import { View } from 'react-native';
import { Button,TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";

function ForgotPassword(){
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const redirectHome = () => {
        navigation.navigate('login');
    }
    async function handleSubmit(e) {
        e.preventDefault();
        
        const data = {
            email: email
        };

        try {
            // Send login to the server.
            const response = await axios.post(
                `https://solstice-project.herokuapp.com/api/forgot-password`,
                data
            );

            // Tell the user an email has been sent
            navigation.navigate('forgotsuccess');
        } catch(err) {
            console.log(err);

            // TODO: Display error messages in red text to users.
            // this.setState({ signuperror: err.response.data.error, signuperrorVisible: true });
        }
    };
    return(
        <ImageBackground
        source ={require('.././assets/solar_mobile.png')}
        style={{width:'100%', height: '100%'}}>
            <SafeAreaView style={{display: "flex", flex: 1,justifyContent : "center",allignItems: "center", flexDirection:"row"}}>
                <View style={{width: "80%", marginTop: "55%"}}>
                    <Card style={{borderRadius: 20}}>
                        <Card.Title titleStyle={{textAlign:"center"}} title="Forgot Password?"></Card.Title>
                        <Card.Content>
                            <Paragraph style={{textAlign:"center",paddingBottom: 15}}>
                                Enter your email address below. You will receive a reset password email.
                            </Paragraph>
                            <TextInput onChangeText={setEmail} autoCapitalize='none' autoCorrect={false} autoCompleteType='email' label="Email" keyboardType="email-address"></TextInput>
                            <Card.Actions style={{justifyContent: "center"}}>
                                <Button onPress={redirectHome} width="32%" color="blue"  uppercase={false}>Go Back</Button>
                                <Button onPress={handleSubmit} width="32%" color="grey" mode="contained" uppercase={false}>Reset</Button>
                            </Card.Actions>
                        </Card.Content>
                    </Card>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
export default ForgotPassword;