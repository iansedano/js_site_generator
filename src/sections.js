const SECTION_TYPES = {
	"header": header,
	"text": text,
	"gallery": gallery,
	"contact": contact,
	"links": links
}


function chooseRandomItem(array) {
	return array[Math.floor(Math.random() * array.length)]
}

function renderImage(section, container) {
	if (section.hasOwnProperty("images")) {
		const image = c("img")
		image.src = chooseRandomItem(section.images)
		container.append(image)
	}
}

function buildSections(sections){
	const body = d.getElementById("root")
	
	sections.forEach((section) => {
		body.append(SECTION_TYPES[section.type](section))
	})
}

function header(section) {
	const container = c("section", null, "header-container")
	const header = c("h1", section.header)
	container.append(header)
	
	renderImage(section, container)

	return container
}

function text(section) {
	const container = c("section", null, "text-container")
	const header = c("h2", section.header)
	const text = c("p", section.text)
	container.append(header, text)
	return container
}

function gallery(section) {
	const container = c("section", null, "gallery-container")
	renderImage(section, container)
	
	return container
}

function contact(section) {
	const container = c("section", null, "contact-container")
	
	if (section.hasOwnProperty("header")) {
		container.append(
			c("h2", section.header)
		)
	}
	
	if (section.hasOwnProperty("email")) {
		const emailLink = c("a", "E-mail me")
		emailLink.href = "mailto:" + section.email
		container.append(emailLink)
	}
	if (section.hasOwnProperty("phone")) {
		container.append(
			c("p", section.phone)
			)
	}
	
	if (section.hasOwnProperty("form")) {
		container.append(build_form(section.form))
	}
	
	renderImage(section, container)
	
	return container
}



function links(section) {
	return ""
}