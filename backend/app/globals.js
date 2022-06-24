const path = require('path')

const PRODUCTION = false

const DEV_MYSQL_DATABASE = 'curitibaki'
const DEV_MYSQL_HOST = '127.0.0.1'
const DEV_MYSQL_PORT = 3307
const DEV_MYSQL_USER = 'root'
const DEV_MYSQL_PASSWORD = ''

const PROD_MYSQL_DATABASE = 'curitibaki'
const PROD_MYSQL_HOST = '147.182.141.12'
const PROD_MYSQL_PORT = 3306
const PROD_MYSQL_USER = 'curitibaki'
const PROD_MYSQL_PASSWORD = '$Eusl1x0s0'

module.exports = {
    PRODUCTION: PRODUCTION,

    SERVER_PORT: 27300,

    PRIVATE_KEY: path.resolve(__dirname, '../keys/CURITIBAKI_PEM_RSA_22062022'),
    PUBLIC_KEY: path.resolve(__dirname, '../keys/CURITIBAKI_PEM_RSA_22062022.pub'),

    PUBLIC_DIR: path.resolve(__dirname, '../public'),
    PUBLIC_TEMP_DIR: path.resolve(__dirname, '../public/temp'),

    DATA_DIR: path.resolve(__dirname, '../public/data'),
    DUMP_DIR: path.resolve(__dirname, '../dump'),

    MYSQL_DATABASE: (!PRODUCTION) ? DEV_MYSQL_DATABASE : PROD_MYSQL_DATABASE,
    MYSQL_HOST: (!PRODUCTION) ? DEV_MYSQL_HOST : PROD_MYSQL_HOST,
    MYSQL_PORT: (!PRODUCTION) ? DEV_MYSQL_PORT : PROD_MYSQL_PORT,
    MYSQL_USER: (!PRODUCTION) ? DEV_MYSQL_USER : PROD_MYSQL_USER,
    MYSQL_PASSWORD: (!PRODUCTION) ? DEV_MYSQL_PASSWORD : PROD_MYSQL_PASSWORD
};

