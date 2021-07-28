export const required = value => {
	if(value) return undefined
	return "required"
}

export const email = value => {
	if(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
		return 'Invalid email address'
	}
	return  undefined
}

const minLength = (length)=>{
	return (value)=>{
		if(value && value.length >= length) return undefined
		return "---"
	}
}
export const minLength1 = minLength(1)