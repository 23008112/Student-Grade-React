function Student(props){
    return(
        <div><h1>Name: {props.name} </h1>
        <p>Roll: {props.roll}</p>
        <p>Mark: {props.mark}</p>
        <p>Grade: {props.calculateGrade(props.mark)}</p>
        
    
        </div>
    )
}
export default Student;