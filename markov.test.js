// unit tests for markov machine
const { makeText } = require('./makeText');
const markov = require("./markov");


test('mm.maketext should return a string ', () => {
    let mm = new markov.MarkovMachine("The cat in the hat");
    expect(typeof mm.makeText()).toBe('string');
});

