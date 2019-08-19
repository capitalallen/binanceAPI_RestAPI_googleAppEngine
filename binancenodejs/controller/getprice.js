const Binance = require('node-binance-api');
const binance = new Binance().options({
    APIKEY: 'xxx',
    APISECRET: 'xxx',
    useServerTime: true
  }); 
exports.returnPrice = (req,res,next) => {
    let pair = req.query.pair
    let limit = req.query.limit
    const time = Date.now();
    var prices = []
    binance.candlesticks(pair, "1h", (error, ticks, symbol) => {
        var temp = []
        // console.log(ticks)
        ticks.forEach((tick)=>{
            var t = {
                time:new Date(tick[0]),
                open: tick[1],
                high: tick[2],
                low: tick[3]   
            };
            temp = temp.concat(t);  
        })
        console.log(temp)
        res.status(201).json({
            temp
        })
    }, {limit: limit, endTime: time});
  }
