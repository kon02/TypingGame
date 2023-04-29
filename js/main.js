'use strict';

{
  // 配列をシャッフルする関数
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const words = [
    'red',
    'blue',
    'pink',
    'white',
    'gray',
    'black',
    'green',
    'computer',
    'PC',
    'apple',
    'banana',
    'orange',
    'pear',
    'peach',
    'kiwi',
    'grape',
    'cherry',
    'lemon',
    'lime',
    'strawberry',
    'mango',
    'pineapple',
    'watermelon',
    'coconut',
    'avocado',
    'carrot',
    'tomato',
    'potato',
    'onion',
    'garlic',
    'pumpkin',
    'celery',
    'cucumber',
    'pepper',
    'lettuce',
    'broccoli',
    'asparagus',
    'spinach',
    'eggplant',
    'zucchini',
    'corn',
    'rice',
    'noodle',
    'bread',
    'pasta',
    'cheese',
    'yogurt',
    'milk',
    'juice',
    'coffee',
    'tea',
    'water',
    'soda',
    'chocolate',
    'candy',
    'cake',
    'cookie',
    'pie',
    'ice cream',
    'pizza',
    'hamburger',
    'sandwich',
    'hot dog',
    'salad',
    'soup',
    'stew',
    'curry',
    'fried rice',
    'fried chicken',
    'sushi',
    'tempura',
    'ramen',
    'udon',
    'soba',
    'steak',
    'chicken',
    'pork',
    'beef',
    'fish',
    'shrimp',
    'crab',
    'lobster',
    'clam',
    'oyster',
    'scallop',
    'squid',
    'octopus',
    'tofu',
    'tempura',
    'teriyaki',
    'sake',
    'beer',
    'wine',
    'whiskey',
    'vodka',
    'gin',
    'rum',
    'tequila',
    'cocktail',
    'martini',
    'margarita',
    'mojito',
    'cosmopolitan',
    'manhattan',
    'old fashioned',
    'gimlet',
    'screwdriver',
    'bloody mary',
    'mimosa',
    'bellini',
    'spritz',
    'cider',
    'ale',
    'IPA',
    'stout',
    'pilsner',
    'lager',
    'porter',
    'hefeweizen',
    'witbier',
    'saison',
    'sour',
    'bock',
    'doppelbock',
    'triple',
    'quadruple',
    'Belgian',
    'German',
    'English',
    'American',
    'Mexican',
    'Italian',
    'French',
    'Japanese',
    'Chinese',
    'Korean',
    'Thai',
    'Indian',
    'Greek',
    'Turkish',
    'Russian',
    'Brazilian',
    'Argentinian',
    'Australian',
    'Canadian',
    'Swiss',
    'Dutch',
    'Danish',
    'Swedish',
    'Norwegian',
    'Finnish',
    'Spanish',
    'Portuguese',
  ];
  const numWords = 10;
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');

  document.addEventListener('click', () => {
    if (isPlaying) {
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    shuffleArray(words);
    words.splice(numWords);
    setWord();
  });

  document.addEventListener('keydown', (e) => {
    if (!isPlaying) {
      return;
    }
    if (e.key !== word[loc]) {
      return;
    }
    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);
    if (loc === word.length) {
      loc = 0;
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        isPlaying = false;
        return;
      }
      setWord();
    }
  });

  function setWord() {
    word = words.shift();
    target.textContent = word;
  }
}


