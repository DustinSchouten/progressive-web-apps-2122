require('dotenv').config()
const express = require('express')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))

let setCache = function (req, res, next) {  
    if (req.method == 'GET') {
        res.set('Cache-control', 'public, max-age=31536000');
    } else {
        res.set('Cache-control', 'no-store');
    }
    next();
}
app.use(setCache);

app.get('/', function (req, res) {
    res.render('index', {
        pageTitle: 'homepage',
        quote: {text: 'The app for the best and most inspirational quotes!'},
        quote_text_fontsize: '1.75em',
    })
})


app.get('/quotes', function (req, res) {
    fetchJson('https://quote.api.fdnd.nl/v1/quote').then(function (jsonData) {
        jsonData = jsonData.filter((item) => {
            return item.text.length > 10
        })
        res.render('quotes', {
            pageTitle: 'overviewpage',
            data: jsonData,
        })
    })
})


app.get('/quote/:id', function (req, res) {
    fetchJson(`https://quote.api.fdnd.nl/v1/quote`).then(function (jsonData) {
        let id = req.params.id.split(':')[1];
        let quote_text_length = jsonData[id].text.length;
        let quote_text_fontsize = '1.75em';
        if (quote_text_length > 100) {
            quote_text_fontsize = '1.4em';
        }
        let image_avatar = (jsonData[id].avatar || '/images/image_skeleton.png');
        res.render('quote', {
            pageTitle: 'quotepage',
            quote: jsonData[id],
            quote_text_fontsize: quote_text_fontsize,
            image_avatar: image_avatar,
        })
    })
})

app.get('/offline', function (req, res) {
    res.render('offline', {
        pageTitle: 'offline',
        quote: {text: 'Life is what happens, when you go offline...'},
        quote_text_fontsize: '1.75em'
    })
})


app.set('port', process.env.PORT || 8000)

const server = app.listen(app.get('port'), function () {
  console.log(`Application started on port: ${app.get('port')}`)
})

async function fetchJson(url) {
    return await fetch(url)
        .then((response) => response.json())
        .then((body) => body.data)
        .catch((error) => error)
}