function emailValidator(e) {
	if (!isEmail(e.target.value)){
		e.target.style.backgroundColor = "red"
	} else e.target.style.backgroundColor = ""
}

function isEmail(string) {
	const emailRegex = /.+@.+/
	
	if (string.match(emailRegex)) {
		return true
	} else return false
}

function build_form(fields) {
	console.log(fields)
	const form_element = c("form")
	
	fields.forEach((field) => {
		if (field.type == "text") {
			const fieldContainer = c("p")
			
			const input = c("input")
			input.type = "text"
			input.id = "input" + field.type + field.label
			
			const br = c("br")
			
			const label = c("label", field.label)
			label.htmlFor = "input" + field.type + field.label
			
			fieldContainer.append(label, br, input)
			form_element.append(fieldContainer)
		} else if (field.type == "email") {
			const fieldContainer = c("p")
			
			const input = c("input")
			input.type = "text"
			input.id = "input" + field.type + field.label
			input.addEventListener("input", emailValidator)
			
			const br = c("br")
			
			const label = c("label", field.label)
			label.htmlFor = "input" + field.type + field.label
			
			
			fieldContainer.append(label, br, input)
			form_element.append(fieldContainer)
		}
		
		
	})
	
	return form_element
}