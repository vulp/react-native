/**
 * React Native App testing
 */

var REQUEST_URL = 'http://192.168.56.1:3000/movielist';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

styles = require('./android/styles/js/style.js');

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
        <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderMovie}
         style={styles.listView}
        />
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
