/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from 'react-native-splash-screen'
import ToDo from './ToDo';

const {height, width} = Dimensions.get('window');

class App extends Component {
  state = {
    newToDo: '',
    loadedToDos: false,
  };
  // constructor(props:Props) {
  //   super(props);
  //   this.state = {
  //     messages: []
  //   };
  // }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    if (!loadedToDos)
    {
      SplashScreen.show();
    }
    const {newToDo, loadedToDos} = this.state;
    console.log('Hello World');
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>TODO List</Text>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={'New To Do'}
            value={this.newToDo}
            onChangeText={this._createNewToDo}
            placeholderTextColor={'#999'}
            returnKeyType={'done'}
            autoCorrect={false}
            onSubmitEditing={this._addToDo}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo text={"Hello, I'm To Do"} />
          </ScrollView>
        </View>
      </View>
    );
  }

  _createNewToDo = (text) => {
    this.setState({
      newToDo: text,
    });
  };

  _loadedToDos = () => {
    this.setState({loadedToDos: true})
  }

  _addToDo = () => {
    const  {newToDo} = this.state;
    if(newToDo != ''){
      this.setState({
        newToDo:""
      });

      const toDos = {
        1: {
          id: 1,
          text: "buy milk",
          isCompleted: false,
          date: 20190625
        }
      }
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '200',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 25,
  },
  toDos: {
    alignItems: 'center',
  },
});

export default App;
