const candies = [
    { sweetness: 11, name: 'raw sugar' }
];

export default {
    name: 'candies', // For debugging.
    get(req, res) {
        res.write(JSON.stringify(candies));        
        res.end();
    },
    post(req, res) {
    },
    put(req, res) {
    },
    delete(req, res) {
        res.statusCode = 400;
        res.send("You can't have my candies!");
        res.end();
    },
}