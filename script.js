const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const lengthInput = document.getElementById("length");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

function generatePassword() {
  const length = lengthInput.value;
  let characters = "";
  let password = "";

  if (lowercase.checked)
    characters += "abcdefghijklmnopqrstuvwxyzабвгдежзийклмнопрстуфхцчшщъыьэюя";
  if (uppercase.checked)
    characters +=
      "ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯאבגדהוזחטיכלמנסעפףצץקרשת";
  if (numbers.checked) characters += "0123456789";
  if (symbols.checked) characters += "!@#$%^&*()_+-=[]{}|;:,.<>?";

  if (characters === "") {
    alert("Please select at least one character type!");
    return;
  }

  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordBox.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (passwordBox.value === "") return;

  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied!");
});
