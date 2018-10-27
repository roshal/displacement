export default async () => {
	const pixi = await import('pixi.js')
	const center = (element, size) => {
		element.position.x = size.w / 2
		element.position.y = size.h / 2
		element.pivot.set(
			element.width / 2,
			element.height / 2,
		)
	}
	const return_container = (
		texture,
		limit = {
			x: 1,
			y: 1,
		},
	) => {
		const container = new pixi.Container
		const point = {
			x: 0,
			y: 0,
		}
		point.x = 0
		while (point.x < limit.x) {
			point.y = 0
			while (point.y < limit.y) {
				const sprite = new pixi.Sprite(
					texture,
				)
				sprite.anchor.set(0.5)
				sprite.scale.x = 1 - point.x % 2 * 2
				sprite.scale.y = 1 - point.y % 2 * 2
				sprite.position.x = (point.x + 0.5) * sprite.width
				sprite.position.y = (point.y + 0.5) * sprite.height
				container.addChild(
					sprite,
				)
				point.y += 1
			}
			point.x += 1
		}
		return container
	}
	void
	[
		//'1tpzTTg',
		//'2uFGaRG',
		'2yYayZk',
		//'EVcGslR',
		'I17husy',
		//'wIJn3tP',
	].map(
		(
			string,
		) => {
			pixi.loader.add(
				string,
				'https://i.imgur.com/' + string + '.png',
			)
		},
	)
	pixi.loader.load(
		(
			loader,
			resources,
		) => {
			const texture = resources['I17husy'].texture
			const size = {
				w: texture.width,
				h: texture.height,
			}
			const application = new pixi.Application(
				size.w,
				size.h,
			)
			const background = return_container(
				texture,
				{
					x: 1,
					y: 1,
				},
			)
			//center(
			//	background,
			//	size,
			//)
			application.stage.addChild(
				background,
			)
			const items = [
				//'2uFGaRG',
				'2yYayZk',
				//'EVcGslR',
			].map(
				(
					string,
				) => {
					const texture = resources[string].texture
					const container = return_container(
						texture,
						{
							x: 2,
							y: 2 * size.y / texture.height,
						},
					)
					const new_texture = new pixi.RenderTexture.create(
						background.width,
						background.height,
					)
					application.renderer.render(
						container,
						new_texture,
					)
					const sprite = new pixi.Sprite(
						new_texture,
					)
					center(
						sprite,
						size,
					)
					application.stage.addChild(
						sprite,
					)
					//container.scale.set(
					//	Math.max(
					//		size.w / container.width,
					//		size.h / container.height,
					//	) * 2,
					//)
					return sprite
				},
			)
			background.filters = items.map(
				(
					item,
				) => {
					//NoiseFilter
					//DisplacementFilter
					const filter = new pixi.filters.NoiseFilter(
						item,
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
					//background.rotation -= time / 60
					//background.position.y -= time
					//background.position.y %= background.height / 2
					items.map((
						item,
					) => {
						//item.rotation += time / 60
						item.position.y += time
						item.position.y %= item.height / 2
					})
				},
			)
			document.body.appendChild(
				application.view,
			)
		},
	)
}
