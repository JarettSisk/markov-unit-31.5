/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // creating a new map called chains
    let chains = new Map();
  
    //  looping through each word in this.words  
      for (let i = 0; i < this.words.length; i += 1) {
        // Setting the current word to a variable
        let word = this.words[i];
        // Setting the next word to a variable, or null if none.
        let nextWord = this.words[i + 1] || null;
        
        // If the chains map has the current word, 
        if (chains.has(word)) {
            // we 'get' the current word (key), then push the next word (value).
            chains.get(word).push(nextWord);
        } 
        // Else, we 'set' the key to be word, and value to be an array that contains next word.
        else chains.set(word, [nextWord]);
      }
      
    //   Update the classes chains to be equal to the updated chains. 
      this.chains = chains;
      console.log(this.chains);
  }

  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }

  /** return random text from chains */

  makeText(numWords = 100) {
        // pick a random key to begin
        let keys = Array.from(this.chains.keys());
        let key = MarkovMachine.choice(keys);
        let out = [];
    
        // produce markov chain until reaching termination word
        while (out.length < numWords && key !== null) {
          out.push(key);
          key = MarkovMachine.choice(this.chains.get(key));
        }
    
        return out.join(" ");
  }
}


module.exports = {
    MarkovMachine,
};


