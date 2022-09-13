const cats = [
    { color: 'orange stripes', flavor: 'spicy' }
];
export default {
    name: 'cats', // For debugging.
    get(req, res) {
        res.write(JSON.stringify(cats));
        res.end();
    },
    post(req, res) {},
    put(req, res) {},
    delete(req, res) {},
}