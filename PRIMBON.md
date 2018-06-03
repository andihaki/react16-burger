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


