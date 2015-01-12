# SimpleGulpfile
A basic gulpfile that can be used to build simple projects. The 'gulp' command builds scripts, builds styles, and watches for changes in both.

NOTE!! : Remember to remove 'assets' from the .gitignore file if you want to commit changes in that folder

Compress-Images
Compresses images stored in img-tmp folder and stores them in the assets folder 

Build-Scripts
Compresses all of the js files used in hte project and adds them to assets/js

Build-Styles
Builds all of the sass files used in hte project and adds them to assets/css

Concat-Scripts
Contatenates all of the javascript files stores in the assets/js folder and places them inside of the /min subdirectory (only to be used for distribution purposes)