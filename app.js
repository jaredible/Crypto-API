const express = require('express')
const app = express()
const port = 3000

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
        "LTC": {
            "symbol": "LTC",
            "price": 43.58
        },
        "XRP": {
            "symbol": "XRP",
            "price": 0.201
        }
    }
}))

app.listen(port, () => console.log(`Crypto API listening at http://localhost:${port}`))