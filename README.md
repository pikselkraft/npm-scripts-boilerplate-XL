# Pikselkraft npm scripts XL
A boilerplate of NPM scripts which uses the last web features and focuses on quality, accessibility and workflow optimisation.

## Workflow and technologies

* HTML5 / CSS3
* Use the BEM and Atomic design methodologies
* NPM script
* PostCSS

## Installation

> npm init
> npm install --save-dev

## Ressources

### Grid, reset, helpers (KNACSS)
http://www.knacss.com

KNACSS is a simple stylesheet with a reset, perfect to bootstrap a project with accessibility, performance and responsive web design in mind.
It's made by the French web agency [Alsacreations.fr](http://alsacreations.fr)

## NPM script
The core basis of this boilerplate is NPM, the script manages all the workflow to improve quality, manage test and the deployment.
This boilerplate uses the last standards of the web like CSS4 syntax with fallbacks support.

### List of scripts

	"–––––––INIT FOLDER SCRIPTS": "–––––––––––––",
	"info": "echo 'npm as a build tool: ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦'",
	"fold:clean": "rm -R -rf dist",
	"fold:assets": "mkdir -p assets/{css,img,fav,js,typo}",
	"fold:dist": "mkdir -p dist/public/{css,img,fav,js,typo}",
	"fold:files": "cp -R -f assets/js assets/img assets/fav assets/typo  assets/*.html  assets/*.xml  assets/*.txt assets/*.json  assets/typo assets/CNAME dist/public/",
	"–––––––CSS SCRIPTS": "–––––––––––––",
	"postcss": "postcss --config postcss.json",
	"css:bundle": "rework-npm assets/css/*.css -o assets/css/bundle.css",
	"css:concat": "rm assets/css/bundle.css assets/css/bundle.next.css  && cat assets/css/*.css > assets/css/bundle.css",
	"cssnext": "postcss -u postcss-cssnext assets/css/bundle.css >  assets/css/bundle.next.css",
	"css:comb": "csscomb assets/css/bundle.next.css",
	"css:minify": "cleancss assets/css/bundle.next.css -o dist/public/css/bundle.min.css",
	"build:css": "echo '=> build:css' && npm run css:concat && npm run cssnext && npm run css:comb && npm run css:minify",
	"–––––––IMG and SVG SCRIPTS": "–––––––––––––",
	"img:min": "imagemin assets/img/*.jpg dist/public/img/*.jpg -p",
	"svg:clean": "svgo -f assets/img/icons",
	"svg:opt": "svgo -f assets/img",
	"svg:icons": "svgo -f assets/img/icons && svg-sprite-generate -d assets/img/icons -o dist/public/img/icons.svg",
	"–––––––JS SCRIPTS": "–––––––––––––",
	"js:lint": "jshint assets/js/*.js",
	"js:minify": "uglifyjs assets/js/*.js -o dist/public/js/*.js",
	"–––––––WATCH SCRIPTS": "–––––––––––––",
	"watch": "watch 'npm run dist' assets/css/",
	"watch:nodemon": "nodemon -e css -x",
	"livereload": "live-reload --port 9091 dist/public",
	"browsersync": "browser-sync start --server --files 'dist/css/*.css, dist/js/*.js'",
	"–––––––SERVER SCRIPTS": "–––––––––––––",
	"server": "http-server dist/public/",
	"open:prod": "opener http://example.com",
	"open:stage": "opener http://staging.example.internal",
	"open:dev": "opener http://127.0.0.1:8080",
	"deploy:test": "npm run dist &&  surge . $npm_package_config_testUrl",
	"deploy:surge": "npm run dist && surge ",
	"–––––––EXPERIMENTAL FEATURES": "–––––––––––––",
	"html:copy": "concat assets/*.html | pbcopy",
	"css:copy": "cat dist/public/css/bundle.min.css | pbcopy",
	"css:uncss": "uncss dist/public/*.html >> dist/public/css/bundle.opt.css",
	"critical": "critical dist/public/index.html --base dist/public/ --inline --minify >  dist/public/index.critical.html && rm "
	"––––––– CREATE DIST FOLDER": "–––––––––––––",
	"dist": "npm run fold:clean && npm run fold:assets && npm run fold:dist && npm run fold:files && npm run build:css",
	"dist-opt": "npm run fold:clean && npm run fold:assets && npm run fold:dist && npm run fold:files && npm run build:css && npm run css:uncss"

## Details

* Copy tasks
	* manage the creation of folders and copy the files in dist/public
* CSS tasks
  * Concat CSS files
	* Cssnext
		* Autoprefixer
		* Use CSS4 features
		* px fallbacks
  * Comb -> watch quality of the css
  * Minify -> minify the CSS
  * Combine all the tasks
* Img and svg tasks
  * Optimise of the images
  * Optimise SVG files (clean)
  * Optimise SVG files
  * Generate SVG sprite
* JS tasks
  * Inspect JS files quality
  * Minify JS files
* Dev tools
  * Watch
  * Livereload
* Server tasks
  * Test server
	* Deploy
* Experimental
 * Copy files to use online tools for Uncss or Critical css
 * Uncss: use only the css class which are in HTML
 * Critical: IMPORTANT only work at CLI command not npm run
 * Dist: Build task, create folder, copy files, build css
 * Dist-opt: Build task, create folder, copy files, build css with Uncss task

*Critical command only works as CLI command yet*

## Liens utiles

More information about NPM scripts: [*NPM as a build tool*](https://medium.com/pixel-for-creative-people/npm-as-a-build-tool-for-front-end-development-b753c333373c)

* [*NPM*](https://www.npmjs.com)
* [Atomic css](http://bradfrost.com/blog/post/atomic-web-design/)
* [BEM css](http://getbem.com/introduction/)
* [CSSnext](http://cssnext.io/)
* Website of KNACSS : http://knacss.com
  * [**Documentation**](https://github.com/raphaelgoetter/KNACSS/tree/master/doc)
  * [**Documentation**](https://github.com/raphaelgoetter/KNACSS/tree/master/doc)
  * On Alsacreations.com [FR]: ["KNACSS framework"](http://www.alsacreations.com/tuto/lire/1577-decouverte-du-framework-css-KNACSS.html)
