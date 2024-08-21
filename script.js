// Example data for name generation
const names = {
    english: {
        firstNames: ["John", "Jane", "Michael", "Emily"],
        lastNames: ["Smith", "Johnson", "Williams", "Jones"]
    },
    spanish: {
        firstNames: ["Juan", "Maria", "Carlos", "Isabella"],
        lastNames: ["Garcia", "Martinez", "Hernandez", "Lopez"]
    },
    french: {
        firstNames: ["Pierre", "Marie", "Jacques", "Claire"],
        lastNames: ["Dupont", "Lefebvre", "Moreau", "Girard"]
    },
    khmer: {
        firstNames: ["Sokha", "Vanna", "Ratanak", "Maly"],
        lastNames: ["Phnom", "Sok", "Sros", "Chhoeung"]
    },
    thai: {
        firstNames: ["Somchai", "Suda", "Prasert", "Kanya"],
        lastNames: ["Sakchai", "Kumari", "Chai", "Srisuwan"]
    },
    // Add more languages as needed
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
        
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
