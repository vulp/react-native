/**
 * Server listing app
 * @author Tuomo Pohjola
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  Button,
  ListView,
  ViewPagerAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

var REQUEST_URL = 'http://192.168.56.1:3000/movielist';
styles = require('./styles/js/style.js');

class AwesomeProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

 componentDidMount() {
    this.fetchData();
  }

   fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
           dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
           loaded: true,
        });
      })
      .done();
   }

   render() {
    if (!this.state.loaded) {
        return this.renderLoadingView();
    }
      return(
      <View style={styles.mainContainer}>
          <View style={styles.buttons}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { _viewPager.setPage(0); }}>

                <Image style={styles.image} source={require('./pic.jpg')} >
                    <Text>Inside</Text>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { _viewPager.setPage(1); }}>

                <Image style={styles.image} source={require('./pic.jpg')} >
                    <Text>Inside</Text>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { _viewPager.setPage(3); }}>

                <Image style={styles.image} source={require('./pic.jpg')} >
                    <Text>Inside</Text>
                </Image>
            </TouchableOpacity>

          </View>

          <ViewPagerAndroid
            ref={viewPager => { _viewPager = viewPager; }}
            style={styles.viewPager}
            initialPage={0}>

            <View style={styles.pageStyle}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie}
                    style={styles.listView}
                />
            </View>

            <View style={styles.pageStyle}>
                <AddCustomer />
            </View>

            <View style={styles.pageStyle}>
                <Text>Create something here</Text>
            </View>

          </ViewPagerAndroid>
      </View>
    );
  }

  renderLoadingView() {
    return (
        <View style={styles.container}>
            <Text>
                Loading movies...
            </Text>
        </View>
    );
  }

  renderMovie(movie) {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: movie.posters.thumbnail}}
                style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.year}>{movie.year}</Text>
            </View>
        </View>
    );
  }
}

/*
Customer creating form
*/
var AddCustomer = React.createClass({
    getInitialState: function() {
        return {
            name:'',
            ip:'',
            server_alias:'',
            username:'',
            password:'',
        };
    },
    handleSubmit() {

    },
    handleClear() {

    },
    render: function() {
        return (
            <View >
                <ScrollView
                    style={styles.scrollView}>
                    <Text>Add new Customer</Text>
                    <Text>Customer name</Text>
                    <TextInput
                       autoFocus = {true}
                       placeholder = "Add customer name here"
                       onChangeText={(name) => this.setState({name})}
                    />

                    <Text>Server address</Text>
                    <TextInput
                       placeholder = "Add ip"
                       onChangeText={(ip) => this.setState({ip})}
                    />

                    <Text>Server alias</Text>
                    <TextInput
                       placeholder = "Add alias"
                       onChangeText={(server_alias) => this.setState({server_alias})}
                    />

                    <Text>Username</Text>
                    <TextInput
                       placeholder = "username"
                       onChangeText={(username) => this.setState({username})}
                    />

                    <Text>Password</Text>
                    <TextInput
                       placeholder = "password"
                       secureTextEntry = {true}
                       onChangeText={(password) => this.setState({password})}
                    />
                  <TouchableWithoutFeedback >
                    <View  style={styles.button}>
                      <Text>Submit</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </ScrollView>
            </View>

        );
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
