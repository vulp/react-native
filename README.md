# React-Native
[React Native] (https://facebook.github.io/react-native/)

[React native css] (https://www.npmjs.com/package/react-native-css)



##Sass
Install sass http://sass-lang.com/install

Process sass file from command line
``` shell
sass android/styles/sass/style.sass android/styles/css/style.css
```
##React Native Css
``` shell
react-native-css android/styles/css/style.css android/styles/js/style.js --literal
```

After this you can require styles to index
``` shell
styles = require('./android/styles/js/style.js');
```

##Back-end
Nodejs Express MongoDb
https://github.com/vulp/node-server

# Todo
"babel": {
    "presets": ["es2015", "react"]
}

depencies:

history

dev-depencies:

babel
gulp

``` shell
sass --watch app/sass:public/stylesheets
react-native-css android/styles/sass/style.css android/styles/js/style.js --watch
```


