//Konfiguracja Webpack
module.exports={



    entry:["./js/projekt.jsx"],

    output: {

        filename: "./js/out.js"

    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },

    watch: true,

    module: {

        loaders: [{

            test: /\.jsx$/, exclude: /node_modules/,

            exclude: /node_modules/,

            loader: 'babel-loader',

            query: {

                presets: ['es2015','stage-2','react']

            }

        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },{
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader', 'sass-loader'
            ]
        }

        ]

    }

};