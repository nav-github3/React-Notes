function Button() {

	// const onClickHandler = () =>  console.log("navneet !! ")
	// const onClickHandler2 = (name) => console.log(`${name} stop clicking me `)

	let count = 0; 
	const handleClick = (name) => {

		if(count < 3){
			count++;
			console.log(`${name} ypu click me ${count}times `)
		}
		else {
			console.log(`${name} stop clicking me !! `)
		}
	}


	// event object = An object that contains information about the event that occured. It is passed as an argument to the event handler function.
	const handleClick1 = (e) => {
			console.log(e);
	}


	return( <button onClick={(e) => {handleClick1(e)}} >Click me</button> )

}


export default Button