import React, {useState, useContext} from 'react';
import { EmployeeContext } from '../../utils/employeeContext';
import "./style.css"


function SearchForm() {

  const [search, setSearch] = useState("")
  const {employees, setDisplayedEmployees} = useContext(EmployeeContext)
    
  const updateSearch = ({target}) => {
    const searchTerm = target.value

    setSearch(searchTerm)

    const filterResult = employees.filter(function(employee) {
      return employee.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ? true : false
    })
    setDisplayedEmployees([...filterResult])
  };

  return (
    <form className="search">
      <div className="form-group">
        <input
          value={search}
          onChange={updateSearch}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search by Name"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchForm;
