const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',  // Fichier d'entrée
  output: {
    path: path.resolve(__dirname, 'dist'),  // Dossier de sortie
    filename: 'bundle.js',  // Nom du fichier de sortie
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Extensions que Webpack peut résoudre
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Fichiers .js et .jsx
        exclude: /node_modules/,  // Ne pas traiter les fichiers dans node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Transpile JSX et JS moderne
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),  // Serve le dossier dist
    compress: true,
    port: 9000,  // Port pour le serveur de développement
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Fichier HTML d'entrée
    }),
  ],
  mode: 'development',  // Mode développement (pour activer les optimisations de développement)
};
