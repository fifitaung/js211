const pigLatin = () => {
    let word = document.getElementById("enterWord").value;
      if(word.match(/ /)) {
        word = word.toLowerCase().trim();
        let wordArr = word.split(' ');
        let result = '';
        for (let i = 0; i < wordArr.length; i++){
          if (i > 0){
            result += ' ';
          }
          result += translate(wordArr[i]);
        }
        document.getElementById("convertedShow").innerHTML = result;
        return result;
      }
      return translate(word);
    } 
    const translate = (word) =>{
      let vowels = ['a', 'e', 'i', 'o', 'u'];
        let newWord= "";
        if (vowels.indexOf(word[0]) > -1) {
            newWord = word + "yay";
            document.getElementById("converterShow").innerHTML = newWord;
            return newWord;
        } 
        else {
            let firstMatch = word.match(/[aeiou]/) || 0;
            let vowel = word.indexOf(firstMatch[0]);
            newWord = word.substring(vowel) + word.substring(0, vowel) + "ay";
            document.getElementById("converterShow").innerHTML = newWord;
            return newWord;
        }
      }
    // Your code here
  
  
  // the first function called in the program to get an input from the user
  // to run the function use the command: node main.js
  // to close it ctrl + C
  const getPrompt = () => {
    rl.question('word ', (answer) => {
      console.log( pigLatin(answer) );
      getPrompt();
    });
  }
  