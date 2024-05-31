const express = require('express');
const redis = require('redis');
const app = express();
const PORT = 3000;

const redisClient = redis.createClient({
    socket: {
        host: "redis", // 注意這裡使用的是服務名稱
        port: 6379
    }
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

redisClient.connect();

const args = process.argv.slice(2);
console.log('Arguments:', args);

app.get('/', (req, res) => {
    res.send(`Arguments: ${args.join(' ')}`);
});

app.get('/count', async (req, res) => {
    const count = await redisClient.get('counter') || 0;
    res.json({ count });
});

app.post('/increment', async (req, res) => {
    const newCount = await redisClient.incr('counter');
    res.json({ count: newCount });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
