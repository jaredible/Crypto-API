const express = require('express')
const app = express()
const port = 3000

app.get('/coins', (req, res) => res.json({
    "data": {
        "BAT": {
            "symbol": "BAT",
            "name": "Basic Attention Token",
            "imageUrl": "https://www.cryptocompare.com/media/1383370/bat.png"
        },
        "BTC": {
            "symbol": "BTC",
            "name": "Bitcoin",
            "imageUrl": "https://www.cryptocompare.com/media/19633/btc.png"
        },
        "DOGE": {
            "symbol": "DOGE",
            "name": "Dogecoin",
            "imageUrl": "https://www.cryptocompare.com/media/19684/doge.png"
        },
        "ETH": {
            "symbol": "ETH",
            "name": "Ethereum",
            "imageUrl": "https://www.cryptocompare.com/media/20646/eth_logo.png"
        },
        "MIOTA": {
            "symbol": "MIOTA",
            "name": "IOTA",
            "imageUrl": "https://www.cryptocompare.com/media/1383540/iota_logo.png"
        },
        "LTC": {
            "symbol": "LTC",
            "name": "Litecoin",
            "imageUrl": "https://www.cryptocompare.com/media/35309662/ltc.png"
        },
        "TRX": {
            "symbol": "TRX",
            "name": "TRON",
            "imageUrl": "https://www.cryptocompare.com/media/34477805/trx.jpg"
        },
        "XMR": {
            "symbol": "XMR",
            "name": "Monero",
            "imageUrl": "https://www.cryptocompare.com/media/19969/xmr.png"
        },
        "XRP": {
            "symbol": "XRP",
            "name": "Ripple",
            "imageUrl": "https://www.cryptocompare.com/media/34477776/xrp.png"
        },
        "ZEC": {
            "symbol": "ZEC",
            "name": "ZCash",
            "imageUrl": "https://www.cryptocompare.com/media/351360/zec.png"
        }
    }
}))

app.get('/prices/usd', (req, res) => res.json({
    "data": {
        "BAT": {
            "symbol": "BAT",
            "price": 0.2038
        },
        "BTC": {
            "symbol": "BTC",
            "price": 9496.98
        },
        "DOGE": {
            "symbol": "DOGE",
            "price": 0.002564
        },
        "ETH": {
            "symbol": "ETH",
            "price": 201.29
        },
        "MIOTA": {
            "symbol": "MIOTA",
            "price": 0.2016
        },
        "LTC": {
            "symbol": "LTC",
            "price": 43.58
        },
        "TRX": {
            "symbol": "TRX",
            "price": 0.01498
        },
        "XMR": {
            "symbol": "XMR",
            "price": 65.22
        },
        "XRP": {
            "symbol": "XRP",
            "price": 0.201
        },
        "ZEC": {
            "symbol": "ZEC",
            "price": 45.33
        }
    }
}))

app.listen(port, () => console.log(`Crypto API listening at http://localhost:${port}`))