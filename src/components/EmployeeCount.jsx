import React from 'react'

function EmployeeCount({countEmp}) {
  return (

    <div>
      <h1 className="m-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Employees</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
        Number of results: {countEmp}</p>
    </div>
  )
}

export default EmployeeCount