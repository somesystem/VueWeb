module.exports = {
  extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  loaders: {
    'js': 'babel-loader?presets[]=es2015&presets[]=stage-0&plugins[]=transform-object-rest-spread'
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['last 9 versions']
    })
  ]
}
