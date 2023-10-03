export function typewriter(node: HTMLElement, { speed = 1 }) {
	console.log("🚀 ~ file: helpers.ts:2 ~ typewriter ~ speed:", speed)
	console.log("🚀 ~ file: helpers.ts:2 ~ typewriter ~ node:", node)
	
  const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE
	console.log("🚀 ~ file: helpers.ts:5 ~ typewriter ~ valid:", valid)

	if (!valid) throw new Error(`This transition only works on elements with a single text node child`)

	const text = node.textContent || ''
	console.log("🚀 ~ file: helpers.ts:11 ~ typewriter ~ text:", text)
	
  const duration = text.length / (speed * 0.01)
  console.log("🚀 ~ file: helpers.ts:14 ~ typewriter ~ duration:", duration)

  const returnObj = {
		duration,
		tick: (t: number) => {
			const i = Math.trunc(text.length * t)
			node.textContent = text.slice(0, i)
		}
	}
  console.log("🚀 ~ file: helpers.ts:23 ~ typewriter ~ returnObj:", returnObj)

	return returnObj
}