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
	
	if (section.hasOwnProperty("images")) {
		const image = c("img", null, "header_image")
		image.src = chooseRandomItem(section.images)
		container.append(image)
	}

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
	const images = section.images
	const src = chooseRandomItem(images)
	const image = c("img", null, "gallery_image")
	image.src = src
	
	container.append(image)
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
		container.append(form(container.form))
	}
	
	if (section.hasOwnProperty("images")) {
		const src = chooseRandomItem(section.images)
		const image = c("img", null, "gallery_image")
		image.src = src
		container.append(image)
	}
	
	return container
}

function form(fields) {
	return ""
}

function links(section) {
	return ""
}