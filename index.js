var send = require('micro');
var fisl = require('first-image-search-load');
var fetch = require('node-fetch');

module.exports = async(req, res) => {
    var url = await fisl.getFirstImageURL(decodeURI(req.url));
    var img = await fetch(url);
    res.setHeader('Content-Type', img.headers.get('content-type'));
    send(res, 200, await img.buffer());
}