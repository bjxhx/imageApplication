const axios = require('axios');

const getImageData = async (url) => {
    try {
        const res = await axios.get(url,{
			responseType: 'arraybuffer',
		});
        return res.data
    } catch (err) {
		console.log(err)
        return null
    }
};
module.exports = {
	getImageData
}
