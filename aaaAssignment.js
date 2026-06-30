function greet(name) { 
 return name || "Guest"; 
} 
test('returns Guest when name is empty', () => { 
 // Arrange 
 const name = ''; 
 // Act 
 const result = greet(name); 
 // Assert 
 expect(result).toBe('Guest'); 
}); 
function toggle(value) { 
 return !value; 
}
test('toggles boolean value', () => {  // Arrange 
 const input = _true___; 
 // Act 
 const result =toggle(input); 
 // Assert 
 expect(result).toBe(_false___); 
}); 
function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test('adds item to array', () => {  // Arrange 
 const arr =[1,2]; 
 // Act 
 const result =addItem(arr, 3); 
 // Assert 
 expect(result).toEqual([1,2,3]); }); 
function removeItem(arr, item) {  return arr.filter(i => i !== item); } 
test('removes item from array', () => {  // Arrange 
 const arr = [1,2,3];
 // Act 
 const result =removeItem(arr,3); 
 // Assert 
 expect(result).toEqual([1,2]); 
}); 
function isValidPassword(password) { 
 return password.length >= 6; 
} 
test('returns true for valid password length', () => {  // Arrange 
 const password = 'pass123'; 
 // Act 
 const result = _isValidPassword(password); 
 // Assert 
 expect(result).toBe(true); 
}); 
function isValidPassword(password) { 
 return password.length >= 6; 
}
JavaScript 
function containsWord(sentence, word) {  return sentence.includes(word); } 
JavaScript 
function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test('returns true for password longer than 6', () => {
  const password = "mypassword123"; // Arrange
  const result = isValidPassword(password); // Act
  expect(result).toBe(true); // Assert
});
test('returns false for password shorter than 6', () => {
  const password = "abc"; 
  const result = isValidPassword(password);
  expect(result).toBe(false);
});
test('returns true for password of exactly 6 characters', () => {
  const password = "123456"; 
  const result = isValidPassword(password);
  expect(result).toBe(true);
});

test('returns false for password of exactly 5 characters', () => {
  const password = "12345"; 
  const result = isValidPassword(password);
  expect(result).toBe(false);
});

test('returns false for empty string', () => {
  const password = ""; 
  const result = isValidPassword(password);
  expect(result).toBe(false);
});
// Arrange
const text = "The quick brown fox";
const word = "quick";
// Act
const result1= containsWord(text, word);
// Assert
console.assert(result1 === true, "Standard positive case failed");

// Arrange
const wordMissing = "lazy";
// Act
const result2= containsWord(text, wordMissing);
// Assert
console.assert(result === false, "Negative case failed");
// Arrange
 const startWord = "The";
// Act
const result3= containsWord(text, startWord);
// Assert
console.assert(result3=== true, "Start of string failed");
// Arrange
const upperWord = "QUICK";
// Act
const result4 = containsWord(text, upperWord);
// Assert
console.assert(result4=== false, "Case sensitivity test failed");
// Arrange
const emptySearch = "";
// Act
const result5= containsWord(text, emptySearch);
// Assert
console.assert(result5=== true, "Empty search failed");
// Arrange
const list = [1, 2];
const newItem = 3;
// Act
const result6= addItem(list, newItem);
// Assert
console.assert(result6.length === 3 && result6.includes(3), "Standard add failed");
const emptyList = [];
const item = "A";
const result7= addItem(emptyList, item);
console.assert(result7.length === 1 && result7[0] === "A", "Add to empty failed");
// Arrange
const dupList = ["apple"];
const dupItem = "apple";
// Act
const result8 = addItem(dupList, dupItem);
// Assert
console.assert(result8.length === 2, "Duplicate add failed");
// Arrange
const mixList = [1, 2];
const obj = { id: 3 };
// Act
const result9 = addItem(mixList, obj);
// Assert
console.assert(typeof result9[2] === "object", "Mixed type add failed");
// Arrange
const nullList = [1];
// Act
const result10= addItem(nullList, null);
// Assert
console.assert(result10[1] === null, "Adding null failed");








 