const employees = [
    {
      firstName: 'James',
      lastName: "Potter",
      age: 31,
      email: "jamespotter@asu.edu",
      role: "Software Engineer"
  
    },
        {
      firstName: 'Samuel',
      lastName: "Harris",
      age: 42,
      email: "samharris@apu.edu",
      role: "Lawyer"
  
    },
    {
      firstName: 'Elena',
      lastName: "Cashmore",
      age: 21,
      email: "elenac@blu.edu",
      role: "CEO"
  
    },
    {
      firstName: 'Margaret',
      lastName: "Madewell",
      age: 35,
      email: "margemade@tmc.edu",
      role: "Software Engineer"
  
    },
    {
      firstName: 'Bobbi',
      lastName: "Jackson",
      age: 39,
      email: "bobj@weq.edu",
      role: "Accountant"
  
    },
    {
      firstName: 'Arnold',
      lastName: "Messiah",
      age: 22,
      email: "arnoldmessi@bac.edu",
      role: "Software Engineer"
  
    },
    {
      firstName: 'Ernest',
      lastName: "Whitmore",
      age: 55,
      email: "ernestmore@jbp.edu",
      role: "Software Engineer"
  
    },
    {
      firstName: 'Rick',
      lastName: "Thaddeus",
      age: 31,
      email: "rickthad@asu.edu",
      role: "UI/UX Designer"
  
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


