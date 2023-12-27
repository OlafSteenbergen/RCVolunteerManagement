import React, {useState, useMemo } from 'react';
import {all_employees} from './allEmployees';
import Emp from './Emp';

function Title({getFromChild}) {
    const [empl, setEmpl] = useState(all_employees.Employees);
    const [query, setQuery] = useState("");
    const [queryPos, setQueryPos] = useState("");

    const positions = []
    for (let e of empl){
      if (!positions.includes(e.jobTitleName)){
      positions.push(e.jobTitleName)}
    } 
    
      

    const filteredEmps = useMemo(() => {
      return empl
      .filter(d => d.preferredFullName.toLowerCase().includes(query))
      .filter(d => d.jobTitleName.toLowerCase().includes(queryPos.toLowerCase()));
    });

    getFromChild(filteredEmps.length.toString())
    
    return (
    <div>
      <div className='flex justify-center'>
        <input type='text' placeholder='Search' className='search' onChange={e=>setQuery(e.target.value)} class="block w-3/12 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <div class="ml-5 inline-flex rounded-md shadow-sm" role="group">
        {positions.map(p => (
          <>
          <button type="button" value={p} onClick={pos=>setQueryPos(pos.target.value)} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            {p}
          </button>

          </>
        ))}
        </div>
      </div>
        <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          
            {filteredEmps.map(d => (
                <>
                  <Emp d={d} empl={empl}/> 
                </>
                
            ))}
            </div>
    </div>
  )
}

export default Title