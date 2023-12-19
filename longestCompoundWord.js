const fs = require('fs'); // to read input file contents
const readline = require('readline'); // to read user input (i.e. file_name)

const isCompounded = (word, unique_words) => {
  // base condition
  if (unique_words.has(word)) {
    return true;
  }

  for (let i = 1; i < word.length; i++) {
    const prefix = word.slice(0, i);
    const suffix = word.slice(i);
    /* only if the current prefix is found to exist as a word 
    in words then only go for the rest of the suffix */
    if (unique_words.has(prefix) && isCompounded(suffix, unique_words)) {
      return true;
    }
  }
  return false;
}

const find_longestCompoundedWord = (words) => {
  /* sorting words in decreasing order of their lengths so that the very 
  first compounded word which we get is automatically the longest possible */
  words.sort((a, b) => b.length - a.length);
  // making a collections of unique words
  const unique_words = new Set(words);

  for (const word of words) {
    /* delete the current word from unique_words so that any 
    prefix or suffix doesn't match to the word itself */
    unique_words.delete(word);
    if (isCompounded(word, unique_words)) {
      return word;
    }
  }
  // if not found return null
  return null;
}

const publishOutput = ({
  longestCompoundWord, 
  secondLongestCompoundWord, 
  timeTaken, 
  file_name
}) => {
  console.log(`Longest Compound Word: ${
    longestCompoundWord == null 
    ? "couldn't locate &#x1F50D; for 1st longest compound word" 
    : longestCompoundWord}`);
  console.log(`Second Longest Compound Word: ${
    secondLongestCompoundWord == null 
    ? "couldn't locate &#x1F50D; for 2nd longest compound word" 
    : secondLongestCompoundWord}`);
  console.log(`Time taken to process file ${file_name}: ${timeTaken} milliseconds`);
}

const getUserInput = (file_name) => {
  /* creating a relative path for file
  example: current_directory + '/' + file_name */
  const relativePath = process.cwd() + '/' + file_name;
  const start_time = Date.now();

  // extract all the words from Input_0?.txt file and make an array out of those words
  const words = fs.readFileSync(relativePath, 'utf8')
  .split('\n')
  .map(word => word.trim()) // to remove '/r' from end of extracted words
  .filter(word => word !== ''); // just a pre-cautionary search to filter out any unnecessary empty string

  // longest compound word
  const longestCompoundWord = find_longestCompoundedWord(words);
  // slice-off longest compound word from words array
  words.splice(words.indexOf(longestCompoundWord), 1);

  // find second longest compound word
  const secondLongestCompoundWord = find_longestCompoundedWord(words);

  const end_time = Date.now();
  const timeTaken = end_time - start_time;

  // publish the output
  publishOutput({
    longestCompoundWord, 
    secondLongestCompoundWord, 
    timeTaken, 
    file_name
  });
}

/* creating an interface named 'read_line' to interact with user via creating 
prompts and taking in the response (which is the file_name) as input for the 
call_back function to initiate the process of finding longest compound word */
const read_line = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

read_line.question('Enter the file name: ', (file_name) => {
  getUserInput(file_name);
  read_line.close();
});