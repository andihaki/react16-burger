# enable css-modules
1. yarn eject
2. di config
    - webpack.config.dev.js
        tambahkan
        """
        test: /\.css$/,
        use: [
        ...
            options: {
                ...
                modules: true,
                localIdentName: "[name]_[local]_[hash:base64:5]"
        """
    - webpack.config.prod.js
        tambahkan
        """
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
            ...
            use: [
                ...
                options: {
                    ...
                    modules: true, 
                    localIdentName: "[name]_[local]_[hash:base64:5]"

# REDUX advanced
- Middleware = fungsi antara Action <> Reducers
  bisa dipake buat logging, tombol x dispatch action y ke reducer, return state z
- Action Creators
  di actions.js
  export const increment = () => {
    return {
        type: INCREMENT
    };
  };
  di file.js
  import {increment} from './pathJsFile/actions.js';
  ga perlu lagi {type: actionType.INCREMENT}, jadinya increment