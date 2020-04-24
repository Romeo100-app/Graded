import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight,Image, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  state={
    homePageDisplay: 'block',
    gradePageDisplay: 'none',
    calPageDisplay: 'none',
    apPageDisplay: 'none',
    regPageDisplay: 'none',
  }
  handleHomePagePress = () => this.setState(state=> ({
    homePageDisplay: 'block',
    gradePageDisplay: 'none',
    calPageDisplay: 'none',
    apPageDisplay: 'none',
    regPageDisplay: 'none',
  }));
  handleGradePagePress = () => this.setState(state=> ({
    homePageDisplay: 'none',
    gradePageDisplay: 'block',
    calPageDisplay: 'none',
    apPageDisplay: 'none',
    regPageDisplay: 'none',
  }));
  handleCalPagePress = () => this.setState(state=> ({
    homePageDisplay: 'none',
    gradePageDisplay: 'none',
    calPageDisplay: 'block',
    apPageDisplay: 'none',
    regPageDisplay: 'none',
  }));
  handleAPPagePress = () => this.setState(state=> ({
    homePageDisplay: 'none',
    gradePageDisplay: 'none',
    calPageDisplay: 'none',
    apPageDisplay: 'block',
    regPageDisplay: 'none',
  }));
  handleRegPagePress = () => this.setState(state=> ({
    homePageDisplay: 'none',
    gradePageDisplay: 'none',
    calPageDisplay: 'none',
    apPageDisplay: 'none',
    regPageDisplay: 'block',
  }));
    render() {
        return (
            <View style={styles.container}>
            <View style={{display: this.state.homePageDisplay}}>
            <View style={styles.contentContainer1}>
                <Text style={styles.gradeTitle}>
                  Graded
                </Text>
                <Text style={styles.welcome}>
                  Your personal GPA Calculator
                </Text>
                <TouchableHighlight style={styles.startButton}
                  onPress ={this.handleGradePagePress}>
                    <Text style={styles.startText}>
                      Get Started
                    </Text>
                </TouchableHighlight>
            </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {

  },
  gradeTitle: {
    fontSize: 80,
    fontFamily: 'Comic Sans MS',
    color: 'red',
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightgreen',
  },
  contentContainer1: {
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#00539CFF',
  },
  startButton: {
    height: 65,
    width: 200,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  startText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});
