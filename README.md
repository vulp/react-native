# React-Native
[React Native] (https://facebook.github.io/react-native/)


##Building css with react-native-css

###React Native Css
Install [React native css] (https://www.npmjs.com/package/react-native-css)

###Sass
Install [sass] (http://sass-lang.com/install)

Process sass file from command line.
There was some errors when running sass to scss so I tried css and it worked...
``` shell
sass android/styles/sass/style.sass android/styles/css/style.css
```
and run this:
``` shell
react-native-css android/styles/css/style.css android/styles/js/style.js --literal
```

After this you can require styles to index
``` shell
styles = require('./android/styles/js/style.js');
```

##Building css with gulp-react-native-css

###Gulp
Build style.js automatically with:
``` shell
gulp sassToReact:watch
```
And manually with:
``` shell
gulp sassToReact
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


