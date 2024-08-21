// Function to handle donations and display a success message
function donate() {
    // Open the donation link in a new tab
    window.open('https://pay.ababank.com/PuN1K86pLPqMyq5w7', '_blank');
    // Display a success message
    document.getElementById('donateMessage').innerHTML = 'Thanks 💕😘';
}

// Function to generate names or usernames based on the selected options
function generate() {
    const language = document.getElementById('language').value;
    const count = document.getElementById('count').value;
    const generationType = document.querySelector('input[name="generationType"]:checked').value;
    let output = "";

    for (let i = 0; i < count; i++) {
        if (generationType === "name") {
            output += generateName(language) + "<br>";
        } else if (generationType === "username") {
            output += generateUsername(language) + "<br>";
        }
    }

    document.getElementById('usernameDisplay').innerHTML = output;
}

// Function to generate a random name based on the selected language
function generateName(language) {
    // Add more names for different languages
    const names = {
        english: {
            firstNames: ["John", "Jane", "Michael", "Emily"],
            lastNames: ["Smith", "Johnson", "Williams"]
        },
        spanish: {
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
    ភាសារខ្មែរ: {
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

    const firstName = names[language].firstNames[Math.floor(Math.random() * names[language].firstNames.length)];
    const lastName = names[language].lastNames[Math.floor(Math.random() * names[language].lastNames.length)];
    return firstName + " " + lastName;
}

// Function to generate a random username
function generateUsername(language) {
    const name = generateName(language);
    const randomNum = Math.floor(Math.random() * 10000); // Add a random number suffix
    return name.replace(/\s+/g, '').toLowerCase() + randomNum;
}

// Function to generate a random password
function generatePassword() {
    const charset = "@#$%&nmoABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById('usernameDisplay').innerHTML = password;
}

// Function to generate a random Gmail address
function generateGmail() {
    const username = generateUsername(document.getElementById('language').value);
    const gmail = username + "@gmail.com";
    document.getElementById('usernameDisplay').innerHTML = gmail;
}

// Function to copy output text
function copyOutput() {
    const range = document.createRange();
    range.selectNode(document.getElementById('usernameDisplay'));
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); 
}
