function emailValidator(e) {
	if (!isEmail(e.target.value)){
		e.target.style.backgroundColor = "red"
	} else e.target.style.backgroundColor = ""
}

function isEmail(string) {
	const emailRegex = /.+@.+/
	
	return Boolean(string.match(emailRegex))
}

function submitHandler(e) {
	e.preventDefault()
	const formData = new FormData(e.target)
	
	const entryIterator = formData.entries()
	output = {}
	let data = entryIterator.next()
	while (data.done !== true) {
		console.log(data)
		output[data.value[0]] = data.value[1]
		data = entryIterator.next()
	}
	
	if (!isEmail(output["email"])) {
		alert('Invalid Form Submission');
		return;
	}
	
	console.log(output)
}

function build_form(fields) {
	const formElement = c("form")
	
	
	fields.forEach((field) => {
		const fieldContainer = c("div")
		if (field.type == "text") {
			const idString = "input" + field.type + field.label
			
			const input = c("input")
			input.type = "text"
			input.id = idString
			input.name = field.label
			
			const label = c("label", field.label)
			label.htmlFor = idString
			fieldContainer.append(label, c("br"), input)
			
		} else if (field.type == "email") {
			const idString = "input" + field.type + field.label
			const input = c("input")
			input.type = "text"
			input.id = idString
			input.name = "email"
			
			input.addEventListener("input", emailValidator)
			
			const label = c("label", field.label)
			label.htmlFor = idString
			fieldContainer.append(label, c("br"), input)
		}
		
		
		formElement.append(fieldContainer)
	})
	
	const submitButton = c("input")
	submitButton.type = "submit"
	submitButton.value = "Submit"
	
	formElement.addEventListener("submit", submitHandler)
	
	formElement.append(submitButton)
	
	return formElement
}