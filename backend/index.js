const express = require('express');
const redis = require('redis');
const app = express();
const PORT = 3000;

const redisClient = redis.createClient({
    host: 'redis', // 注意這裡使用的是服務名稱
    port: 6379
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

redisClient.connect();

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
