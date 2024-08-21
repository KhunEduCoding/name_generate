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
            firstNames: ["Juan", "Maria", "Carlos", "Isabella"],
            lastNames: ["Garcia", "Martinez", "Hernandez"]
        },
        french: {
            firstNames: ["Pierre", "Marie", "Jacques", "Claire"],
            lastNames: ["Dupont", "Lefebvre", "Moreau"]
        },
        khmer: {
            firstNames: ["Sokha", "Vanna", "Ratanak", "Maly"],
            lastNames: ["Phnom", "Sok", "Sros", "Chhoeung"]
        },
        thai: {
            firstNames: ["Sakchai", "Kumari", "Chai", "Srisuwan"],
            lastNames: ["Somchai", "Suda", "Prasert", "Kanya"]
        },
        ភាសារខ្មែរ: {
            firstNames: ["ព្រាំ", "សុក", "ស្រស់", "ឈុន"],
            lastNames: ["សម", "សុខ", "ស្រេង", "ជុំ"]
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
