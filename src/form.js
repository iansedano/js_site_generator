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

function submitHandler(e) {
	e.preventDefault()
	const inputElements = e.target.querySelectorAll("p")
	const output = {}
	inputElements.forEach(element => {
		
		const label = element.querySelector("label").innerText
		const value = element.querySelector("input").value
		
		if (label == "E-mail") {
			if (!isEmail(value)) {
				alert("Invalid Form Submission")
				return
			}
		}
		
		output[label] = value
		
	})
	
	console.log(output)
}

function build_form(fields) {
	const formElement = c("form")
	
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
			formElement.append(fieldContainer)
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
			formElement.append(fieldContainer)
		}
	})
	
	const submitButton = c("input")
	submitButton.type = "submit"
	submitButton.value = "Submit"
	
	formElement.addEventListener("submit", submitHandler)
	
	formElement.append(submitButton)
	
	return formElement
}