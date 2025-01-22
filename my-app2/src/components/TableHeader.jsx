import'./Table.css'

const TableHeader = () => {
    return (
      <div>
         <thead className="two">
          <th style={{color:"red", backgroundColor:"yellow"}}>EmpId</th>
          <th style={{color:"blue", backgroundColor:"grey"}}>EmpName</th>
         </thead>
      </div>
    )
  }
  
  export default TableHeader