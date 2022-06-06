const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=22e9a015f0b2ff7074e25f04cfea93d9&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }={}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined) 
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temperature = body.current.temperature
            const precip = body.current.precip
            callback(undefined, 'It is currently ' + temperature + ' degress out. There is a ' + precip + '% chance of rain.')
        }
    })
}

module.exports = forecast