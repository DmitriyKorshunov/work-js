const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions(...potions) {
    return this.potions;
  },
  addPotion(newPotion) {
    //console.log(newPotion);

    for (const potion of this.potions) {
      console.log(potion);
      console.log(potion.name);
      console.log(newPotion.name);
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
    console.log(this.potions);
    return this.potions;
  },
  removePotion(potionName) {
    console.log(potionName);
    for (const potion of this.potions) {
      const potionIndex = this.potions.indexOf(potion);
      console.log(potionIndex);
      if (potion.name === potionName) {
        this.potions.splice(potionIndex, 1);
        return this.potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    //console.log(oldName);
    //console.log(newName);

    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return this.potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
};
console.log(atTheOldToad.removePotion('Dragon breath'));
//atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
//в массиве potions последним элементом будет этот объект
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
// массив potions не изменяется
// atTheOldToad.removePotion("Dragon breath"),
// в свойстве potions будет массив[{ name: "Speed potion", price: 460 },
// { name: "Stone skin", price: 520 }]
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
// в свойстве potions будет массив[{ name: "Speed potion", price: 460 },
// { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 }]
