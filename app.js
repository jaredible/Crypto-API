const express = require('express')
const app = express()
const port = 3000

app.get('/prices/usd', (req, res) => res.json({
    "USD": {
        "BAT": 0.2038,
        "BTC": 9496.98,
        "DOGE": 0.002564,
        "ETH": 201.29,
        "LTC": 43.58,
        "XRP": 0.201
    }
}))

app.listen(port, () => console.log(`Crypto API listening at http://localhost:${port}`))