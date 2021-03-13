const getEmployerRole = (employeeName, employees) => {
    return employees.find(employeeObj => employeeObj.name === employeeName).role;
};

module.exports = getEmployerRole;
