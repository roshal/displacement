console.log(1)
const pixi = require('pixi.js')


const loader = new pixi.Loader()

const container_center = (container) => {
	//container.position.x = size.x / 2
	//container.position.y = size.y / 2
	container.pivot.set(container.width / 2, container.height / 2)
}

const container_tile = (
	texture,
	limit = {
		x: 0,
		y: 0,
	},
	scale = 1,
	padding = 0,
) => {
	const container = new pixi.Container()
	const array = []
	{
		let x = 0
		while (x < limit.x) {
			let y = 0
			while (y < limit.y) {
				array.push([x, y])
				y += 1
			}
			x += 1
		}
	}
	for (const [x, y] of array) {
		const sprite = new pixi.Sprite(texture)
		sprite.anchor.set(0.5)
		sprite.scale.x = scale * (x % 2 * 2 - 1)
		sprite.scale.y = scale * (y % 2 * 2 - 1)
		sprite.position.x = (x + 0.5) * (padding + sprite.width)
		sprite.position.y = (y + 0.5) * (padding + sprite.height)
		container.addChild(sprite)
	}
	return container
}

//const resources = {
//	tile_sweet: '//i.imgur.com/I17husy.png',
//	tile_black: '//i.imgur.com/1tpzTTg.png',
//	tile_brown: '//i.imgur.com/wIJn3tP.png',
//	tile_color: '//i.imgur.com/FNmIdxF.jpg',
//	mask_duet: '//i.imgur.com/EVcGslR.png',
//	mask_mash: '//i.imgur.com/2uFGaRG.png',
//}

const resources = {
	tile: require('//images/tile.jpg'),
	mask: require('//images/mask.png'),
}

const application = new pixi.Application()

const process = (loader, resources) => {
	{
		const dictionary = {}
		for (const key in resources) {
			let texture = resources[key].texture
			const length = {
				x: texture.width,
				y: texture.height,
			}
			const container = container_tile(texture, {
				x: 8,
				y: 8,
			})
			texture = new pixi.RenderTexture.create(container.width, container.height)
			application.renderer.render(container, texture)
			const sprite = new pixi.Sprite(texture)
			container_center(sprite)
			dictionary[key] = {
				length,
				offset: {
					x: 0,
					y: 0,
				},
				sprite,
			}
			application.stage.addChild(dictionary[key].sprite)
		}
		//dictionary['mask'].sprite.filters = [
		//	new pixi.filters.AlphaFilter(0.8),
		//]
		const filter = new pixi.filters.DisplacementFilter(dictionary['mask'].sprite, 1 << 8)
		filter.autoFit = false
		dictionary['tile'].sprite.filters = [
			filter,
		]
		let number = 1
		for (const key in resources) {
			const sign = number
			number *= -1
			application.ticker.add((time) => {
				time <<= 0
				//time <<= 3
				//time *= 8
				//dictionary[key].sprite.rotation = (dictionary[key].sprite.rotation + time) % 360
				dictionary[key].offset.x = (dictionary[key].offset.x + time) % (2 * dictionary[key].length.x)
				dictionary[key].offset.y = (dictionary[key].offset.y + time) % (2 * dictionary[key].length.y)
				dictionary[key].sprite.position.x = sign * (dictionary[key].length.x - dictionary[key].offset.x)
				dictionary[key].sprite.position.y = sign * (dictionary[key].offset.y - dictionary[key].length.y)
			})
		}
		document.body.appendChild(application.view)
	}
}

export default () => {
	for (const key in resources) {
		application.loader.add(key, resources[key])
	}
	application.loader.load(process)
}
