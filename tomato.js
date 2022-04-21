class Tomato {
	static decryptImage(imageBuffer) {
		const mark = imageBuffer[0]
		const encodeImageData = imageBuffer.slice(1)
		let decryptImageData = []
		for (var v of encodeImageData) {
			decryptImageData.push(v ^ mark)
		}
		return decryptImageData

	}
	static getContentType(url) {
		const index = url.lastIndexOf('.') + 1
		return 'image/' + url.slice(index)

	}
}
module.exports = {
	Tomato
}
