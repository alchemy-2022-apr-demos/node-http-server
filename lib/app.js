import candies from './candies.js';
import cats from './cats.js';

const log = (...args) => console.log('[server]', ...args);

const routes = {
    candies,
    cats,
};

export default function (req, res) {
    //    "get"       "GET"
    const httpMethod = req.method.toLowerCase();
    log('Method:', httpMethod);
    //                  ['api', 'v1', 'candies']
    const urlSegments = req.url.split('/');
    log('URL segments:', urlSegments);
    //    'candies'
    const resourcePath = urlSegments[urlSegments.length - 1];
    log('Resource path:', resourcePath);
    //              candies.get
    // const handler = routes[resource][httpMethod];
    const resource = routes[resourcePath];
    log('resource:', resource);
    const handler = resource[httpMethod];
    log('handler:', handler);
    // candies.get(req, res);
    handler(req, res);
}