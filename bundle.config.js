// bundle.config.js
module.exports = {
  bundle: {
    main: {
      scripts: [
        './src/js/app.js',
        './src/js/controllers.js',
        './src/js/directives.js',
        './src/js/routes.js',
        './src/js/controllers/*.js',
      ],
      styles: './src/css/**/*.min.css',
      options:{
        useMin: true,
        minCSS: true,
        uglify: true,
        rev: false,
        maps: false
      }
    },
    vendor: {
      scripts: [
        './libs/bootstrap/dist/js/bootstrap.min.js',
        './libs/angular-ui-router/release/angular-ui-router.min.js'
      ],
      styles: [
        './libs/bootstrap/dist/css/bootstrap.min.css'
      ],
      options:{
        useMin: true,
        minCSS: true,
        uglify: true,
        rev: false,
        maps: false
      }
    }
  }
  //,
  //copy: './content/**/*.{png,svg}'
};
