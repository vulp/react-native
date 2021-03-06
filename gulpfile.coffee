gulp = require 'gulp'
sass = require 'gulp-sass'
reactCss = require 'gulp-react-native-css'

config =
	src: 'styles/sass/*.sass'
	dest: 'styles/css'
	js_dest: 'styles/js'

gulp.task 'sassToReact', ->
	gulp.src config.src
	.pipe sass()
	.pipe reactCss()
	.pipe gulp.dest config.js_dest

gulp.task 'sassToReact:watch', ->
    gulp.watch config.src , ['sassToReact']

gulp.task 'default', ['sassToReact']
