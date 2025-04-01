function List1() {

	const vegetables = ['bringle', 'califlower' , 'lady finger' , 'cabage']; 
	const vegtabelelist = vegetables.map((vegetable , index) =>   <li>{vegetable}</li>   )

	return (
		<div><ol>{vegtabelelist}</ol></div>
	)

}

export default List1