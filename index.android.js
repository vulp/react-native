/**
 * React Native App testing
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ViewPagerAndroid,
  TouchableOpacity
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
        <Text>Todo: add data adding here</Text>
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
