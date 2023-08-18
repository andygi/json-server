const TIME_INTERVAL = 3000;
const TOTAL_ITEMS = 5;
let index = 0;

const addRecord = () => {
    const imageId = index + 20;
    const axios = require('axios');
    let data = JSON.stringify({
        url: `https://picsum.photos/id/${imageId}/800/1200`,
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3004/content',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    axios
        .request(config)
        .then((response) => {
            // console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    index++;
};

const loopRequest = setInterval(() => {
    console.log(index, TOTAL_ITEMS);
    if (index + 1 >= TOTAL_ITEMS) {
        clearInterval(loopRequest);
    }
    addRecord();
}, TIME_INTERVAL);

module.exports = () => {
    const data = { content: [] };
    loopRequest;
    return data;
};
