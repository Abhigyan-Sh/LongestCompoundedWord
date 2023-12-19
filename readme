# Longest Compounded Word Finder

## Description

The program intends to find the "longest compounded word" alongwith the "second longest compounded word" from a text file given by user and mentions the time taken by the program to do so.

## Steps for Executing program
1. Clone the [github repository](https://github.com/Abhigyan-Sh/LongestCompoundedWord.git)
```
git clone https://github.com/Abhigyan-Sh/LongestCompoundedWord.git
```
2. Navigate to the project directory
```
cd impledge_technologies/
```
3. Execute the program
```
node longestCompoundWord.js
```

4. After that now it says, Enter the file name:

![enter the file name](/sample_imgs/screenshot1.png) 
```
Enter the file name: Input_01.txt
// OR 
Enter the file name: Input_02.txt
```

5. Now you will see the output as
![enter the file name](/sample_imgs/screenshot2.png)

## An Overview of Program

### Design decisions

starting-off with the file_name, as a developer its a wrong practice to hardcode your input or if someone has to provide file_name they shouldn't be doing so by writing into the code itself. So I use [readline module](https://www.geeksforgeeks.org/node-js-readline-module/) which allows the program to read input from user via terminal or command line interface.

File Path Handling: also I have kept relative file path rather than absolute file path as then all your programs/code, assets seems to be in one place and moreover in future if we shift the folder to some other directory, still the code would work as intended and nothing would break as relative path is still the same.

### Approach

1. We take the filename as input from the user. For this we use [readline module](https://www.geeksforgeeks.org/node-js-readline-module/) which helps to read the input line by line.

2. We start counting the time as soon as program starts after taking input from user.

3. Read the input file content considering [utf8 encoding](https://www.w3schools.com/charsets/ref_html_utf8.asp), we extract out words into an array which we call words.

4. Now as this array contains the longest compounded words if exists any so we need to iterate it *but the catch here is* that if we need to get the longest possible we need to store the current longest compounded word in some variable while iterating words array until a compounded word of greater length is found or we can instead sort the array in decreasing order of length of words instead which seems to be more easily done *as now the very first compounded word which we get is surely the longest*.

5. We will pick words one by one from the array words and will have to search for each possible prefix and suffix which can be made out of this single word but in doing that we encounter another challenge as the word can match to itself when `prefix == word` so for that we can use a SET data-structure which also serves as an alternate collection from which we will delete the current word for which we are finding that whether it could be the longest compounded word or not, and so that one of the possible prefix or suffix doesn't match with the word itself and that is where we employ the line 
```
for (const word of words) {
    unique_words.delete(word);
    ...
}
```
6. If there doesn't exists any possible compounded word we return a message saying "couldn't locate &#x1F50D; for ... longest compound word".

7. After the process has been done, get the current time as end_time and return `end_time - start_time` alongwith the results obtained for longest and second longest compounded words.