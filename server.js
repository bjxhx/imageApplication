// 加载框架并新建实例
const fastify = require('fastify')({
	logger: false
})
// 加载解密函数
const {
	Tomato
} = require('./tomato.js')
const {
	getImageData
} = require('./request.js')
// 声明路由
fastify.get('/tomato/image', function(request, reply) {
	console.log(Tomato)
	const url = request.query.url
	getImageData(url).then(res => {
		console.log(res)
		console.log('send')
		reply.send(res)
	})


})

// 启动服务！
fastify.listen(3000, '0.0.0.0', function(err, address) {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
	fastify.log.info(`server listening on ${address}`)
})
