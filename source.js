'use strict';

const STORE = {
  questions: [
    {
      question:  'How many cups are in a quart?',
      choices: [
        '1',
        '2',
        '3',
        '4'
      ],
      answer: '4'
    },
    {
      question:  'How many teaspoons are in a tablespoon',
      choices: [
        '1',
        '2',
        '3',
        '4'
      ],
      answer: '3'
    },
    {
      question:  'How many pints are in a gallon?',
      choices: [
        '2',
        '4',
        '6',
        '8'
      ],
      answer: '8'
    },
    {
      question:  'How many fluid ounces are in a cup?',
      choices: [
        '4',
        '6',
        '8',
        '10'
      ],
      answer: '8'
    },
    {
      question:  'How many ounces are in a pound?',
      choices: [
        '8',
        '16',
        '24',
        '32'
      ],
      answer: '16'
    },
  ],
  currentQuestion: 0,
  currentScore: 0
};