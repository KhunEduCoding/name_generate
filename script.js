// // Example data for name generation
// const names = {
//     english: {
//         firstNames: ["John", "Jane", "Michael", "Emily"],
//         lastNames: ["Smith", "Johnson", "Williams", "Jones"]
//     },
//     spanish: {
//         firstNames: ["Juan", "Maria", "Carlos", "Isabella"],
//         lastNames: ["Garcia", "Martinez", "Hernandez", "Lopez"]
//     },
//     french: {
//         firstNames: ["Pierre", "Marie", "Jacques", "Claire"],
//         lastNames: ["Dupont", "Lefebvre", "Moreau", "Girard"]
//     },
//     khmer: {
//         firstNames: ["សិខា", "វណ្ណា", "រតនៈ", "ម៉ាលី"],
//         lastNames: ["ព្រាំ", "សុក", "ស្រស់", "ឈុន"]
//     },
//     thai: {
//         firstNames: ["Somchai", "Suda", "Prasert", "Kanya"],
//         lastNames: ["Sakchai", "Kumari", "Chai", "Srisuwan"]
//     },
//     // Added language
//     ភាសារខ្មែរ: {
//         firstNames: ["Sokha", "Vanna", "Ratanak", "Maly"],
//         lastNames: ["Phnom", "Sok", "Sros", "Chhoeung"]
//     }
//     // Add more languages as needed
// };

// // Function to generate a random item from an array
// function getRandomItem(array) {
//     return array[Math.floor(Math.random() * array.length)];
// }

// // Function to generate either a name or a username based on radio button selection
// function generate() {
//     const language = document.getElementById('language').value;
//     const generationType = document.querySelector('input[name="generationType"]:checked').value;
//     const count = parseInt(document.getElementById('count').value);
//     const firstNames = names[language]?.firstNames || [];
//     const lastNames = names[language]?.lastNames || [];
//     let output = '';

//     if (generationType === 'name') {
//         if (firstNames.length > 0 && lastNames.length > 0) {
//             for (let i = 0; i < count; i++) {
//                 const firstName = getRandomItem(firstNames);
//                 const lastName = getRandomItem(lastNames);
//                 output += `${firstName} ${lastName}<br>`;
//             }
//         } else {
//             output = 'No names available for the selected language.';
//         }
//     } else if (generationType === 'username') {
//         if (firstNames.length > 0 && lastNames.length > 0) {
//             for (let i = 0; i < count; i++) {
//                 const firstName = getRandomItem(firstNames);
//                 const lastName = getRandomItem(lastNames);
//                 const username = `${firstName}_${lastName}`;
//                 output += `${username}<br>`;
//             }
//         } else {
//             output = 'No names available for the selected language.';
//         }
//     }

//     document.getElementById('usernameDisplay').innerHTML = output;
// }

// // Function to copy the output to the clipboard
// function copyOutput() {
//     const outputText = document.getElementById('usernameDisplay').innerText;
//     navigator.clipboard.writeText(outputText).then(() => {
        
//     }).catch(err => {
//         console.error('Failed to copy: ', err);
//         alert('Failed to copy. Please try again.');
//     });
// }


// Example data for name generation
const names = {
    english: {
        firstNames: [
            "John", "Jane", "Michael", "Emily", "Robert", "Mary", "James", "Patricia",
            "William", "Jennifer", "David", "Linda", "Richard", "Elizabeth", "Charles",
            "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Daniel", "Karen", "Matthew",
            "Nancy", "Anthony", "Lisa", "Mark", "Betty", "Paul", "Helen", "Andrew", 
            "Sandra", "Joshua", "Donna", "Ryan", "Carol", "Kevin", "Ruth", "Brian",
            "Shirley", "Edward", "Margaret", "Steven", "Amanda", "George", "Melissa",
            "Joshua", "Angela", "Kenneth", "Deborah", "Frank", "Stephanie", "Scott",
            "Rebecca", "Eric", "Laura", "Jack", "Helen", "Jonathan", "Deborah",
            "Gary", "Tracy", "Jacob", "Kimberly", "Larry", "Evelyn", "Patrick", "Sarah"
        ],
        lastNames: [
            "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson",
            "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin",
            "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis",
            "Lee", "Walker", "Hall", "Allen", "Young", "King", "Wright", "Scott", "Torres",
            "Nguyen", "Hill", "Adams", "Baker", "Nelson", "Carter", "Mitchell", "Perez",
            "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards",
            "Collins", "Stewart", "Morris", "Murphy", "Cook", "Rogers", "Gutierrez", 
            "Ortiz", "Murray", "Freeman", "Wells", "Webb", "Harrison", "Bowman", "Hawkins"
        ]
    },
    spanish: {
        firstNames: [
            "Juan", "Maria", "Carlos", "Isabella", "Luis", "Ana", "Jorge", "Lucia",
            "Miguel", "Sofia", "Pedro", "Valeria", "Antonio", "Gabriela", "Fernando",
            "Marta", "Pablo", "Elena", "Manuel", "Nuria", "Francisco", "Carmen", "Oscar",
            "Paola", "Andres", "Claudia", "Alberto", "Patricia", "Alejandro", "Carla",
            "Ricardo", "Teresa", "Hector", "Adriana", "Victor", "Susana", "Emilio",
            "Silvia", "Rafael", "Jessica", "Sebastian", "Andrea", "Julian", "Laura",
            "Roberto", "Natalia", "Daniela", "Mario", "Beatriz", "Guillermo", "Laura",
            "Nicolas", "Mariana", "Hugo", "Vanessa"
        ],
        lastNames: [
            "Garcia", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Perez", "Rodriguez",
            "Sanchez", "Ramirez", "Torres", "Flores", "Rivera", "Morales", "Gutierrez",
            "Ortega", "Vasquez", "Cruz", "Mendoza", "Ramos", "Castro", "Fernandez", 
            "Campos", "Castillo", "Serrano", "Guerra", "Romero", "Guzman", "Silva", 
            "Martinez", "Jaramillo", "Quintero", "Lopez", "Paniagua", "Arango", 
            "Bermudez", "Valencia", "Velasquez", "Mora", "Montoya", "Cano", "Cano", 
            "Arroyo", "Beltran", "Salazar", "Vega", "Naranjo", "Serrano", "Pardo",
            "Calle", "Tovar", "Prieto", "Osorio"
        ]
    },
    french: {
        firstNames: [
            "Pierre", "Marie", "Jacques", "Claire", "Jean", "Sophie", "Paul", "Nathalie",
            "Louis", "Isabelle", "Henri", "Elodie", "François", "Caroline", "Michel",
            "Charlotte", "Claude", "Catherine", "Philippe", "Amélie", "Louis", "Elise",
            "Antoine", "Nina", "Georges", "Juliette", "Matthieu", "Mathilde", "Laurent",
            "Amandine", "Luc", "Pascale", "Gérard", "Aurélie", "Alain", "Emilie", "Bernard",
            "Sylvie", "Alain", "Brigitte", "Jacqueline", "Bernard", "Margaux", "Roland",
            "Céline", "Dominique", "Mélanie", "Sylvain", "Olivier", "Élise", "Nicolas",
            "Laure", "Rémy", "Jérôme", "Elise", "Vincent", "Marie-Claire", "Lise", "Yannick"
        ],
        lastNames: [
            "Dupont", "Lefebvre", "Moreau", "Girard", "Dubois", "Laurent", "Roux", "Boyer",
            "Dumont", "Garnier", "Blanc", "Joly", "Gauthier", "Robin", "Marchand", "Louis",
            "Pires", "Marty", "Rousseau", "Charpentier", "Joubert", "Nicolas", "Bouchard",
            "Caron", "Lambert", "Clement", "Sanchez", "Durand", "Petit", "Roussel", "Perrin",
            "Bertin", "Lemoine", "Leblanc", "Humbert", "Boyer", "Guillet", "Benoit", "Barbier",
            "Faure", "Baron", "Richard", "Deschamps", "Delaunay", "Riviere", "Jeanne", "Gouin",
            "Bernard", "Boudin", "Dufour", "Benoit", "Lemoine", "Caron", "Boucher", "Moulin"
        ]
    },
    khmer: {
        firstNames: [
            "Sokha", "Vanna", "Ratanak", "Maly", "Chenda", "Srey", "Rathana", "Kosal",
            "Chhor", "Sok", "Kanha", "Bora", "Pheak", "Sovan", "Rith", "Sokun",
            "Bopha", "Sovann", "Phat", "Nary", "Phirun", "Chann", "Vichea", "Nita",
            "Visal", "Soriya", "Som", "Panh", "Vannak", "Bona", "Jara", "Keo",
            "Ravy", "Kiri", "Sophal", "Lida", "Navy", "Rong", "Phearom", "Sita",
            "Rong", "Chenda", "Ratanak", "Kosal", "Vannak", "Serey", "Mey", "Chhan"
        ],
        lastNames: [
            "Phnom", "Sok", "Sros", "Chhoeung", "Khmer", "Theng", "Pong", "Bun",
            "Khem", "Kim", "Seng", "Chin", "Phat", "Sovann", "Heng", "Te", "Lim",
            "Vann", "Borey", "Rath", "Oun", "Roth", "Chhuon", "Sok", "Pheng", "Kim",
            "Pe", "Chann", "Dao", "Lorn", "Pheak", "Sam", "Rong", "Nimol", "Neth",
            "Lina", "Seng", "Peang", "Tep", "Sok", "Teng", "Rath", "Vath", "Ravy"
        ]
    },
    thai: {
        firstNames:[
            "Sakchai", "Kumari", "Chai", "Srisuwan", "Pong", "Sang", "Tia", "Saeng",
            "Sorn", "Kiat", "Phong", "Rung", "Su", "Ying", "Jareon", "Kasem", "Wong",
            "Jitti", "Nong", "Mongkol", "Poom", "Rattana", "Boon", "Paitoon", "Boonyarit",
            "Chusri", "Ratana", "Som", "Jai", "Jaiwat", "Kanchana", "Somnuk", "Pongphat",
            "Suthee", "Rungkit", "Phiphat", "Chana", "Ying", "Kiat", "Kong", "Somchai",
            "Nipaporn", "Yothin", "Kham", "Boonmee", "Pongsak", "Chokchai", "Suk", "Sopha"
        ]
         ,
        lastNames: [
            "Somchai", "Suda", "Prasert", "Kanya", "Somkit", "Chai", "Napat", "Siriporn",
            "Piyawat", "Kittiya", "Jiraporn", "Nattapong", "Thanida", "Wissanu", "Pongporn",
            "Prapaporn", "Sakchai", "Korn", "Chalita", "Noppadol", "Yada", "Phong", 
            "Jirapong", "Kanyanat", "Supachai", "Siri", "Pornchai", "Narak", "Wattana",
            "Thawatchai", "Pornsak", "Lalita", "Suwanee", "Sudarat", "Krit", "Nittaya",
            "Siriwat", "Tanakorn", "Duangkamol", "Kanya", "Suphan", "Sophon", "Kanya",
            "Suthep", "Naree", "Sathit", "Wilaiporn"
        ]
    },
    'ភាសារខ្មែរ': {
        firstNames:[
            "ព្រាំ", "សុក", "ស្រស់", "ឈុន", "សិខា", "ទោ", "មិន", "ជន", "សឹង",
            "សូ", "ពៅ", "សោ", "រ៉ា", "ភិន", "សិ", "ខៀវ", "ម៉ឹង", "កើត",
            "ស៊ូ", "សៀ", "សម", "សោ", "ទឹក", "កែវ", "កាន់", "ប៉ែន", "ខែ",
            "សុត", "ករ", "ទន", "ធឿន", "ទឹក", "រ៉ាន់", "ស្រស់", "ផែន",
            "សុវិទ្យ", "សាន", "ភាន", "ស៊ូ", "រៀន", "មិន", "ហៀន", "សុខា"
        ]
         ,
        lastNames: [
            "សិខា", "វណ្ណា", "រតនៈ", "ម៉ាលី", "សូហា", "មីតា", "ពៅ", "ឆន",
            "សុខ", "ភឿក", "ស្រៈ", "មន្នី", "វាសនា", "សាលី", "មុន្នី", "នីតា",
            "រឿន", "សុវណ្ណ", "ពិសិដ្ឋ", "ម៉ែន", "មុខសុវណ្ណ", "សុភី", "សូម",
            "ស្និទ្ធ", "ចេក", "កែវ", "ហុង", "ខន", "វ៉ាន់", "សុន", "វ៉ាស",
            "គឹម", "ណារ", "ឧទ្ទិស", "ហៀន", "សម", "ខួប", "ចន", "រួម",
            "តូច", "អនុ", "ត្រា", "ផន", "ទៀ", "រ៉ា", "សុទ្ធ", "ថន"
        ]
    }
};


// Function to generate a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate either a name or a username based on radio button selection
function generate() {
    const language = document.getElementById('language').value;
    const generationType = document.querySelector('input[name="generationType"]:checked').value;
    const count = parseInt(document.getElementById('count').value);
    const firstNames = names[language]?.firstNames || [];
    const lastNames = names[language]?.lastNames || [];
    let output = '';

    if (generationType === 'name') {
        if (firstNames.length > 0 && lastNames.length > 0) {
            for (let i = 0; i < count; i++) {
                const firstName = getRandomItem(firstNames);
                const lastName = getRandomItem(lastNames);
                output += `${firstName} ${lastName}<br>`;
            }
            document.getElementById('usernameDisplay').innerHTML = output;
        } else {
            document.getElementById('usernameDisplay').innerHTML = 'No names available for the selected language.';
        }
    } else if (generationType === 'username') {
        if (firstNames.length > 0 && lastNames.length > 0) {
            for (let i = 0; i < count; i++) {
                const firstName = getRandomItem(firstNames);
                const lastName = getRandomItem(lastNames);
                const username = `${firstName}_${lastName}`;
                output += `${username}<br>`;
            }
            document.getElementById('usernameDisplay').innerHTML = output;
        } else {
            document.getElementById('usernameDisplay').innerHTML = 'No names available for the selected language.';
        }
    }
}

// Function to copy the output to the clipboard
function copyOutput() {
    const outputText = document.getElementById('usernameDisplay').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        // Optionally, add a message or notification
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
