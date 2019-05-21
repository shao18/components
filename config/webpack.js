const path = require("path");
const Dotenv = require('dotenv-webpack');
require('dotenv').config();
module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "index_bundle.js"
    },
    resolve: {	
      modules: [
	    process.env.NODE_PATH, 
	    "node_modules"
      ],
    },	
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                  { loader: "style-loader" },
                  { 
		    loader: "css-loader",
		    options : {
                      modules : false
		    }
		  }
                ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }
        ]
    },
    plugins: [
	new Dotenv() 
    ]
}
