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
- redux-thunk
  supaya bisa jalain Action Creators secara Asyncronous
  https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
- redux: reducer: utility function
  nyederhanain reducer return function, tanpa perlu spread operator, soalnya udah di handle di file utility.js
  utility.js:
  ```
  export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues,
    }
  };
  ```
  reducer.js: BEFORE
  ```
  return {
    ...state,
    counter: state.counter + 1,
  }            
  ```
  reducer.js: AFTER
  ```
  return updateObject(state, {counter: state.counter + 1,})
  ```