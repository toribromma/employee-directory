const employees = [
    {
      firstName: 'James',
      lastName: "Potter",
      age: 31,
      email: "jamespotter@asu.edu",
      role: "Software Engineer"
  
    },
    {
      firstName: 'John',
      lastName: "Williams",
      age: 45,
      email: "johnwilliams@udr.edu",
      role: "UI/UX Designer"
    },
    {
      firstName: 'Paul',
      lastName: "Pope",
      age: 65,
      email: "paulpope@brs.edu",
      role: "Sales Manager"
    },
    {
      firstName: 'Ringo',
      lastName: "Galantis",
      age: 49,
      email: "ringogalantis@bec.edu",
      role: "Software Engineer"
    },
    {
      firstName: 'George',
      lastName: "Haroldson",
      age: 34,
      email: "georgeharoldson@uci.edu",
      role: "Software Engineer"
    }
  ];

export function getEmployees() {
    return new Promise(resolve => {
      resolve(employees);
    });
  };


