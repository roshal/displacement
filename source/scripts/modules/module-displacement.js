//
export default async () => {
	const pixi = await import('pixi.js')
	const container_center = (
		container,
		//	size,
	) => {
		//	container.position.x = size.x / 2
		//	container.position.y = size.y / 2
		container.pivot.set(
			container.width / 2,
			container.height / 2,
		)
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
		const offset = {
			x: 0,
			y: 0,
		}
		while (offset.x < limit.x) {
			offset.y = 0
			while (offset.y < limit.y) {
				const sprite = new pixi.Sprite(
					texture,
				)
				sprite.anchor.set(0.5)
				sprite.scale.x = (offset.x % 2 * 2 - 1) * scale
				sprite.scale.y = (offset.y % 2 * 2 - 1) * scale
				sprite.position.x = (offset.x + 0.5) * (padding + sprite.width)
				sprite.position.y = (offset.y + 0.5) * (padding + sprite.height)
				container.addChild(
					sprite,
				)
				offset.y += 1
			}
			offset.x += 1
		}
		return container
	}
	{
		const object = {
			//	'back_sweet': '//i.imgur.com/I17husy.png',
			//	'back_black': '//i.imgur.com/1tpzTTg.png',
			//	'back_brown': '//i.imgur.com/wIJn3tP.png',
			//	'back_color': '//i.imgur.com/FNmIdxF.jpg',
			'back': '//i.imgur.com/3T64Cw8.jpg',
			'mask': '//i.imgur.com/2yYayZk.png',
			//	'mask_duet': '//i.imgur.com/EVcGslR.png',
			//	'mask_mash': '//i.imgur.com/2uFGaRG.png',
		}
		Object.keys(object).map(
			(
				key,
			) => {
				pixi.loader.add(
					key,
					object[key],
				)
			},
		)
	}
	const size = {
		x: 1 << 9,
		y: 1 << 9,
	}
	const application = new pixi.Application(
		size.x,
		size.y,
	)
	const dictionary = {}
	const back = 'back'
	const mask = 'mask'
	pixi.loader.load(
		(
			loader,
			resources,
		) => {
			void [
				back,
				mask,
			].map(
				(
					item,
				) => {
					let texture = resources[item].texture
					const length = {
						x: texture.width,
						y: texture.height,
					}
					const container = container_tile(
						texture,
						{
							x: 4,
							y: 4,
						},
					)
					texture = new pixi.RenderTexture.create(
						container.width,
						container.height,
					)
					application.renderer.render(container, texture)
					const sprite = new pixi.Sprite(
						texture,
					)
					//	dictionary[item] = new pixi.extras.TilingSprite(
					//		texture,
					//		container.width << 2,
					//		container.height << 2,
					//	)
					container_center(
						sprite,
					)
					//	container.scale.set(
					//		Math.max(
					//			size.x / container.width,
					//			size.h / container.height,
					//		) * 2,
					//	)
					dictionary[item] = {
						length,
						offset: {
							x: 0,
							y: 0,
						},
						sprite,
					}
				},
			)
			void [
				back,
				mask,
			].map(
				(
					item,
				) => {
					application.stage.addChild(
						dictionary[item].sprite,
					)
				},
			)
			dictionary[back].sprite.filters = [
				mask,
			].map(
				(
					item,
				) => {
					const filter = new pixi.filters.DisplacementFilter(
						dictionary[item].sprite,
						1 << 8,
					)
					filter.autoFit = false
					return filter
				},
			)
			application.ticker.add(
				(
					time,
				) => {
					//	time *= 1 << 2
					//	dictionary[back].sprite.rotation += time / 256
					//	dictionary[back].sprite.rotation %= 360
					//	dictionary[mask].sprite.rotation -= time / 256
					//	dictionary[mask].sprite.rotation %= 360
					dictionary[back].offset.x += time
					dictionary[mask].offset.x += time
					dictionary[back].offset.y += time
					dictionary[mask].offset.y += time
					dictionary[back].offset.x %= dictionary[back].length.x * 2
					dictionary[mask].offset.x %= dictionary[mask].length.x * 2
					dictionary[back].offset.y %= dictionary[back].length.y * 2
					dictionary[mask].offset.y %= dictionary[mask].length.y * 2
					dictionary[back].sprite.position.x = dictionary[back].length.x - dictionary[back].offset.x
					dictionary[mask].sprite.position.x = dictionary[mask].offset.x - dictionary[mask].length.x
					dictionary[back].sprite.position.y = dictionary[back].offset.y - dictionary[back].length.y
					dictionary[mask].sprite.position.y = dictionary[mask].length.y - dictionary[mask].offset.y
				},
			)
			document.body.appendChild(
				application.view,
			)
		},
	)
}
