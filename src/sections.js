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
		body.append(SECTION_TYPES[section.type](section))
	})
}

function header(section) {
	const container = c("div", null, "header-container")
	const header = c("h1", section.header)
	const image = c("img")
	image.src = section.images[0]
	
	container.append(header, image)
	return container
}

function text(section) {
	
}

function gallery(section) {
	
}

function contact(section) {
	
}

function links(section) {
	
}