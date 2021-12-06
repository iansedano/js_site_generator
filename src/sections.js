const SECTION_TYPES = {
	"header": header,
	"text": text,
	"gallery": gallery,
	"contact": contact,
	"links": links
} 

function buildSections(sections){
	const body = d.getElementById("root")
	
	sections.forEach((section) => {
		console.log(section)
		body.append(SECTION_TYPES[section.type](section))
	})
}

function header(section) {
	const container = c("div", null, "header-container")
	const header = c("h1", section.header)
	const image = c("img", null, "header_image")
	image.src = section.images[0]
	container.append(header, image)
	return container
}

function text(section) {
	const container = c("div", null, "text-container")
	const header = c("h2", section.header)
	const text = c("p", section.text)
	container.append(header, text)
	return container
}

function gallery(section) {
	const container = c("div", null, "gallery-container")
	const images = section.images
	const src = images[Math.floor(Math.random() * images.length)]
	const image = c("img", null, "gallery_image")
	image.src = src
	
	container.append(image)
	return container
	
}

function contact(section) {

}

function links(section) {
	
}