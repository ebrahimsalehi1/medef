const redis = require('redis');
const client = redis.createClient({});
client.on('connect', () => {
    console.log('Connected to redis ...');
});
client.on('ready', () => {
    client.set("ebrahim-0", "hello worlds 0 ...");
    client.set("ebrahim-1", "hello worlds 1 ...");
    client.set("ebrahim-2", "hello worlds 2 ...");
    client.set("ebrahim-3", "hello worlds 3 ...");
    client.set("ebrahim-4", "hello worlds 4 ...");
    console.log("results", client.get("ebrahim-0"));
    client.get("ebrahim-0", (err, value) => {
        if (err)
            throw err;
        console.log(value);
    });
});
