const users = document.querySelector('.users'),
      szKeys = ['name', 'username', 'email'],
      data = getData();

Object.values(data).forEach(({name, username, email}) => {  
  const szData = szKeys.reduce((resault, k) => ((resault[k] = []), resault), {}); 
  Object.values(email).forEach(email => {
    szKeys.forEach(key => szData[key].push(email[key])); 
  });
  row = users.insertRow();                                               
  [name, username, email].forEach(v => row.insertCell().textContent = v);  
});

function getData() {
    return {
    "1": {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
        },
    "2": {
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    },
    "3": {
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    },
    "4": {
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    },
    "5": {
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    },
    "6": {
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    },
    "7": {
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    },
    "8": {
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    },
    "9": {
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    },
    "10": {
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    },
    };
    }