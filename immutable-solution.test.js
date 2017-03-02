describe('Immutable manipulations for Arrays', () => {
  test('Array Shallow copy', () => {
    const fruitBasket = ['Oranges', 'Bananas', 'Apples'];
    /* 
     * Use the spread operaror to make a shallow copy of the fruitBasket array.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = [...fruitBasket];
    expect(updatedFruitBasket).toEqual(['Oranges', 'Bananas', 'Apples']);
    expect(updatedFruitBasket).not.toBe(fruitBasket);
  })

  test('Immutable Append', () => {
    const fruitBasket = ['Oranges', 'Bananas', 'Apples'];
    /* 
     * Use the spread operaror to make a shallow copy of the fruitBasket array 
     * while at the same time adding a new item "Melon" to the end of the array.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = [...fruitBasket, 'Melon'];
    expect(updatedFruitBasket).toEqual(['Oranges', 'Bananas', 'Apples', 'Melon']);
    expect(updatedFruitBasket).not.toBe(fruitBasket);
    expect(fruitBasket).toEqual(['Oranges', 'Bananas', 'Apples']);
  })

  test('Immutable Prepend', () => {
    const fruitBasket = ['Oranges', 'Bananas', 'Apples'];
    /* 
     * Use the spread operaror to make a shallow copy of the fruitBasket array 
     * while at the same time adding a new item "Pineapple" to the beginning of the array.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = ['Pineapple', ...fruitBasket];
    expect(updatedFruitBasket).toEqual(['Pineapple', 'Oranges', 'Bananas', 'Apples']);
    expect(updatedFruitBasket).not.toBe(fruitBasket);
    expect(fruitBasket).toEqual(['Oranges', 'Bananas', 'Apples']);
  })

  test('Immutable Slice', () => {
    const fruitBasket = ['Oranges', 'Bananas', 'Apples', 'Strawberries'];
    /* 
     * Use the slice method to make a copy of the fruitBasket array
     * containing only the FIRST three items of the array.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = fruitBasket.slice(0,3);

    expect(updatedFruitBasket).toEqual(['Oranges', 'Bananas', 'Apples']);
    expect(updatedFruitBasket).not.toBe(fruitBasket);
    expect(fruitBasket).toEqual(['Oranges', 'Bananas', 'Apples', 'Strawberries']);
  })

  test('Immutable Slice (until the end)', () => {
    const fruitBasket = ['Oranges', 'Bananas', 'Apples', 'Strawberries'];
    /* 
     * Use the slice method to make a copy of the fruitBasket array
     * containing only the LAST two items ('Apples' and 'Strawberries').
     * Notice that when slicing up to the end of the array, you don't need
     * to provide the second parameter to the slice method.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const redFruits = fruitBasket.slice(2);

    expect(redFruits).toEqual(['Apples', 'Strawberries']);
    expect(fruitBasket).toEqual(['Oranges', 'Bananas', 'Apples', 'Strawberries']);
  })


  test('Remove at specific index', () => {
    const fruitBasket = ['Oranges', 'Bananas', 'Sausages', 'Apples', 'Strawberries'];
    /* 
     * Use a combination of the spread operator and the slice method to make
     * a copy of the fruitBasket array containing only the fruits
     * (In other words, remove the 'sausages' entry at index 2).
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = [...fruitBasket.slice(0,2),  ...fruitBasket.slice(3)];

    expect(updatedFruitBasket).toEqual(['Oranges', 'Bananas', 'Apples', 'Strawberries']);
    expect(fruitBasket).toEqual(['Oranges', 'Bananas', 'Sausages', 'Apples', 'Strawberries']);
  })

  test('Substitute at specific index', () => {
    const fruitBasket = ['Oranges', 'Bananas', 'Sausages', 'Apples', 'Strawberries'];
    /* 
     * Use a combination of the spread operator and the slice method to make
     * a copy of the fruitBasket array updating the
     * entry at index 2 (Sausages) for 'Blueberry'.
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = [...fruitBasket.slice(0,2), 'Blueberry', ...fruitBasket.slice(3)];

    expect(updatedFruitBasket).toEqual(['Oranges', 'Bananas', 'Blueberry', 'Apples', 'Strawberries']);
    expect(fruitBasket).toEqual(['Oranges', 'Bananas', 'Sausages', 'Apples', 'Strawberries']);
  })

  test('Filtering', () => {
    const fruitBasket = [
      {name: 'Oranges', tasty: true},
      {name: 'Bananas', tasty: true},
      {name: 'NastyBerry', tasty: false},
      {name: 'Strawberries', tasty: true}
    ];
    /* 
     * Use the array's filter method to create a new array
     * containing only "tasty" fruits
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = fruitBasket.filter(fruit => fruit.tasty);

    expect(updatedFruitBasket).toEqual([
      {name: 'Oranges', tasty: true},
      {name: 'Bananas', tasty: true},
      {name: 'Strawberries', tasty: true}
    ]);
    expect(fruitBasket).toEqual([
      {name: 'Oranges', tasty: true},
      {name: 'Bananas', tasty: true},
      {name: 'NastyBerry', tasty: false},
      {name: 'Strawberries', tasty: true}
    ]);
  })

  test('Conditional update', () => {
    const fruitBasket = [
      {name: 'Oranges', color: 'orange', tasty: false},
      {name: 'Bananas', color: 'yellow', tasty: false},
      {name: 'Apples', color: 'red', tasty: false},
      {name: 'Strawberries', color: 'red', tasty: false}
    ];
    /* 
     * The map method is also a powerful array method that always return a new array.
     * It can be used for complex immutable manipulations. 
     * Use map to change the 'tasty' value to 'true' for all red fruits 
     * 
     * Assign the new array to the updatedFruitBasket constant.
     */ 
    const updatedFruitBasket = fruitBasket.map((fruit) => {
      if(fruit.color==='red') {
        return {...fruit, tasty: true}
      }
      return fruit;
    });

    expect(updatedFruitBasket).toEqual([
      {name: 'Oranges', color: 'orange', tasty: false},
      {name: 'Bananas', color: 'yellow', tasty: false},
      {name: 'Apples', color: 'red', tasty: true},
      {name: 'Strawberries', color: 'red', tasty: true}
    ]);
    expect(fruitBasket).toEqual([
      {name: 'Oranges', color: 'orange', tasty: false},
      {name: 'Bananas', color: 'yellow', tasty: false},
      {name: 'Apples', color: 'red', tasty: false},
      {name: 'Strawberries', color: 'red', tasty: false}
    ]);
  })
});

describe('Immutable manipulations for Objects', () => {
  test('Object Shallow copy', () => {
    const state = {
      name: 'Jon Snow',
      occupation: 'Lord Commander',
      skills: [] // knows nothing...
    }

    /* 
     * Use the spread operaror to make a copy of the 'state' object.
     * 
     * Assign the new object to the updatedState constant.
     */ 

    const updatedState = {...state};
    expect(updatedState).toEqual({name: 'Jon Snow', occupation: 'Lord Commander', skills: []});
    expect(updatedState).not.toBe(state);
  })

  test('Immutable update', () => {
    const state = {
      name: 'Jon Snow',
      occupation: 'Lord Commander',
      skills: [] // knows nothing...
    }

    /* 
     * Use the spread operaror to make a copy of the 'state' object
     * while at the same updating the value of the 'occupation' key
     * to 'King in the North'.
     * 
     * Assign the new object to the updatedState constant.
     */ 

    const updatedState = {...state, occupation: 'King in the North'};
    expect(updatedState).toEqual({name: 'Jon Snow', occupation: 'King in the North', skills: []});
    expect(updatedState).not.toBe(state);
  })

  test('Immutable deep update', () => {
    const state = {
      name: 'Jon Snow',
      occupation: 'Lord Commander',
      skills: [] // knows nothing...
    }

    /* 
     * Use the spread operaror to make a copy of the 'state' object
     * while at the same updating the value of the 'occupation' key
     * to 'King in the North' and adding a new item "Fighting"
     * to the skills array.
     * 
     * Be aware that the spread operator makes shallow copies,
     * so if you try to add an item to the `skills` array directly,
     * you'll end up changing the original one.
     * 
     * Assign the new object to the updatedState constant.
     */ 

    const updatedState = {
      ...state, 
      occupation: 'King in the North',
      skills: [...state.skills, 'Fighting']
    };

    expect(updatedState).toEqual({
      name: 'Jon Snow', occupation: 'King in the North', skills: ['Fighting']
    });
    expect(updatedState.skills).not.toBe(state.skills);
    expect(updatedState).not.toBe(state);
  })
});

describe('Bonus', () => {
  test('Immutable maniulation using dynamic keys', () => {
    const ownedCars = {
      ferrari: true,
      porsche: false,
      shelby: false,
    };

    const recentlyBoughtCar = 'porsche';

    /* 
     * Use the spread operaror to make a copy of the 'ownedCars' object
     * while at the same updating to true the value whose key is stored
     * in the 'recentlyBoughtCar' variable.
     * 
     * Assign the new object to the updatedOwnedCars constant.
     */ 

    const updatedOwnedCars = {...ownedCars, [recentlyBoughtCar]: true};
    expect(updatedOwnedCars).toEqual({
      ferrari: true, porsche: true, shelby: false
    });
    expect(updatedOwnedCars).not.toBe(ownedCars);
  })
});
