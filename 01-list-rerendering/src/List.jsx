function List() {  
	const fruits = ['apple' , 'orange' , 'banana', 'kiwi', 'mango', 'grape', 'pear', 'peach', 'plum', 'cherry'];



	// return ( fruits.map((fruit, index) => {
	// 		return (
	// 			<div key = {index}> {fruit} </div>
	// 		)
			
	// }))

	const listItems = fruits.map(fruit => <li>{fruit} </li> ); 
	return ( <ol>{listItems}</ol> )
}
export default List   