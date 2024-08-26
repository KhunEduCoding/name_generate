// // Function to generate a random name (First name and Last name) based on selected language
// document.getElementById('generate-name').addEventListener('click', function() {
//     const language = document.getElementById('language-select').value;
//     let firstNames, lastNames;

//     switch (language) {
//         case 'khmer-latin':
//             firstNames = ["Chann", "Rachana", "Samnang", "Sokha", "Thida"];
//             lastNames = ["Chan", "Sok", "San", "Thon", "Bopha"];
//             break;
//         case 'khmer':
//             firstNames = ["ចាន់", "រចនា", "សំណាង", "សុខា", "ថីដា"];
//             lastNames = ["ចាន់", "សុខ", "សាន", "ថន", "បុប្ផា"];
//             break;
//         case 'thai':
//             firstNames = ["อาทิตยา", "กันต์", "ปกรณ์", "สุรชัย", "พิทยา"];
//             lastNames = ["ชัย", "วิทยา", "บูรณ์", "ชาตรี", "ทวีศักดิ์"];
//             break;
//         default:
//             firstNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
//             lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
//     }

//     const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
//     const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
//     const fullName = `${randomFirstName} ${randomLastName}`;
//     document.getElementById('name-output').innerText = fullName;
// });

// // Function to generate a Gmail address based on the generated name
// document.getElementById('generate-gmail').addEventListener('click', function() {
//     const nameOutput = document.getElementById('name-output').innerText;
//     if (!nameOutput) {
//         alert("Please generate a name first");
//         return;
//     }
//     const nameParts = nameOutput.split(' ');
//     const firstName = nameParts[0];
//     const lastName = nameParts[1];
//     const randomStr = Array.from(crypto.getRandomValues(new Uint8Array(2)), byte => ('0' + byte.toString(6)).slice(-2)).join('');
//     const gmailAddress = `${firstName}${lastName}${randomStr}@gmail.com`.toLowerCase();
//     document.getElementById('gmail-output').innerText = gmailAddress;
// });

// // Function to generate a random password using uppercase letters and numbers
// document.getElementById('generate-password').addEventListener('click', function() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let password = '';
//     for (let i = 0; i < 12; i++) {
//         password += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     document.getElementById('password-output').innerText = password;
// });

// // Function to generate a secret key with input username
// document.getElementById('generate-secret').addEventListener('click', function() {
//     const username = document.getElementById('username-input').value;
//     if (!username) {
//         alert("Please enter a username");
//         return;
//     }
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let randomStr = '';
//     for (let i = 0; i < 4; i++) {
//         randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     const secretOutput = `${username}+${randomStr}@yandex.com`;
//     document.getElementById('secret-output').innerText = secretOutput;
// });


// Function to generate a random name (First name and Last name) based on selected language
document.getElementById('generate-name').addEventListener('click', function() {
    const language = document.getElementById('language-select').value;
    let firstNames, lastNames;

    switch (language) {
        case 'khmer-latin':
            firstNames = ["Chann", "Rachana", "Samnang", "Sokha", "Thida","Sokha", "Vanna", "Ratanak", "Maly", "Chenda", "Srey", "Rathana", "Kosal",
                "Chhor", "Sok", "Kanha", "Bora", "Pheak", "Sovan", "Rith", "Sokun",
                "Bopha", "Sovann", "Phat", "Nary", "Phirun", "Chann", "Vichea", "Nita",
                "Visal", "Soriya", "Som", "Panh", "Vannak", "Bona", "Jara", "Keo",
                "Ravy", "Kiri", "Sophal", "Lida", "Navy", "Rong", "Phearom", "Sita",
                "Rong", "Chenda", "Ratanak", "Kosal", "Vannak", "Serey", "Mey", "Chhan"
            ],
            lastNames = ["Chan", "Sok", "San", "Thon", "Bopha", "Phnom", "Sok", "Sros", "Chhoeung", "Khmer", "Theng", "Pong", "Bun",
                "Khem", "Kim", "Seng", "Chin", "Phat", "Sovann", "Heng", "Te", "Lim",
                "Vann", "Borey", "Rath", "Oun", "Roth", "Chhuon", "Sok", "Pheng", "Kim",
                "Pe", "Chann", "Dao", "Lorn", "Pheak", "Sam", "Rong", "Nimol", "Neth",
                "Lina", "Seng", "Peang", "Tep", "Sok", "Teng", "Rath", "Vath", "Ravy"
            ];
          
              
            break;
        case 'khmer':
            firstNames = ["ចាន់", "រចនា", "សំណាង", "សុខា", "ថីដា","ព្រាំ", "សុក", "ស្រស់", "ឈុន", "សិខា", "ទោ", "មិន", "ជន", "សឹង",
            "សូ", "ពៅ", "សោ", "រ៉ា", "ភិន", "សិ", "ខៀវ", "ម៉ឹង", "កើត",
            "ស៊ូ", "សៀ", "សម", "សោ", "ទឹក", "កែវ", "កាន់", "ប៉ែន", "ខែ",
            "សុត", "ករ", "ទន", "ធឿន", "ទឹក", "រ៉ាន់", "ស្រស់", "ផែន",
            "សុវិទ្យ", "សាន", "ភាន", "ស៊ូ", "រៀន", "មិន", "ហៀន", "សុខា"];
            lastNames = ["ចាន់", "សុខ", "សាន", "ថន", "បុប្ផា","សិខា", "វណ្ណា", "រតនៈ", "ម៉ាលី", "សូហា", "មីតា", "ពៅ", "ឆន",
            "សុខ", "ភឿក", "ស្រៈ", "មន្នី", "វាសនា", "សាលី", "មុន្នី", "នីតា",
            "រឿន", "សុវណ្ណ", "ពិសិដ្ឋ", "ម៉ែន", "មុខសុវណ្ណ", "សុភី", "សូម",
            "ស្និទ្ធ", "ចេក", "កែវ", "ហុង", "ខន", "វ៉ាន់", "សុន", "វ៉ាស",
            "គឹម", "ណារ", "ឧទ្ទិស", "ហៀន", "សម", "ខួប", "ចន", "រួម",
            "តូច", "អនុ", "ត្រា", "ផន", "ទៀ", "រ៉ា", "សុទ្ធ", "ថន"];
            break;
        case 'thai':
            firstNames = ["อาทิตยา", "กันต์", "ปกรณ์", "สุรชัย", "พิทยา"];
            lastNames = ["ชัย", "วิทยา", "บูรณ์", "ชาตรี", "ทวีศักดิ์"];
            break;
        default:
            firstNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
            lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
    }

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${randomFirstName} ${randomLastName}`;
    document.getElementById('name-output').innerText = fullName;
});

// Function to generate a Gmail address based on the generated name
document.getElementById('generate-gmail').addEventListener('click', function() {
    const nameOutput = document.getElementById('name-output').innerText;
    if (!nameOutput) {
        alert("Please generate a name first");
        return;
    }
    const nameParts = nameOutput.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts[1];
    const randomStr = Array.from(crypto.getRandomValues(new Uint8Array(2)), byte => ('0' + byte.toString(16)).slice(-2)).join('');
    const gmailAddress = `${firstName}${lastName}${randomStr}@gmail.com`.toLowerCase();
    document.getElementById('gmail-output').innerText = gmailAddress;
});

// Function to generate a random password using uppercase letters and numbers
document.getElementById('generate-password').addEventListener('click', function() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('password-output').innerText = password;
});

// Function to generate a secret key with input username
document.getElementById('generate-secret').addEventListener('click', function() {
    const username = document.getElementById('username-input').value;
    if (!username) {
        alert("Please enter a username");
        return;
    }
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomStr = '';
    for (let i = 0; i < 4; i++) {
        randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const secretOutput = `${username}+${randomStr}@yandex.com`;
    document.getElementById('secret-output').innerText = secretOutput;
});

// Copy to clipboard function for all copy buttons
document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', function() {
        const outputId = this.getAttribute('data-output-id');
        const outputText = document.getElementById(outputId).innerText;
        
        if (!outputText) {
            alert("Nothing to copy!");
            return;
        }

        navigator.clipboard.writeText(outputText).then(() => {
            alert("Copied to clipboard!");
        }).catch(err => {
            alert("Failed to copy!");
        });
    });
});



// Function to update the clock and date
function updateClockDate() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = now.getFullYear();

    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}/${month}/${year}`;

    document.getElementById('clock-date').innerText = `${timeString}\n${dateString}`;
}

// Update the clock and date every second
setInterval(updateClockDate, 1000);

// Initialize clock and date on page load
updateClockDate();
