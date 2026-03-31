interface HeightComparison {
  height: number;
  descriptions: string[];
}

const heightComparisons: HeightComparison[] = [
  // 11.0m:
  { height: 11.0, descriptions: ["that's a lot of books"] },
  // 10.0m:
  { height: 10.0, descriptions: ["a telephone pole", "a three-story building"] },
  // 9.0m:
  { height: 9.0, descriptions: ["a school bus", "two Volkswagen Beetles"] },
  // 8.0m:
  { height: 8.0, descriptions: ["the length ofa London bus", "a backyard tree"] },
  // 7.0m:
  { height: 7.0, descriptions: ["a yacht mast"] },
  // 6.0m:
  { height: 6.0, descriptions: ["a giant sloth", "a Stonehenge slab"] },
  // 5.5m:
  { height: 5.5, descriptions: ["a giraffe", "46 stacked soda cans"] },
  // 5.0m:
  { height: 5.0, descriptions: ["a giraffe", "250 dinner plates"] },
  // 4.5m:
  { height: 4.5, descriptions: ["a double-decker bus", "18 cats"] },
  // 4.0m:
  { height: 4.0, descriptions: ["an elephant", "4 bicycles"] },
  // 3.5m:
  { height: 3.5, descriptions: ["a Tyrannosaurus Rex", "a monster truck"] },
  // 3.0m:
  { height: 3.0, descriptions: ["a basketball hoop", "a street lamp"] },
  // 2.9m:
  { height: 2.9, descriptions: ["an ostrich", "a garden shed"] },
  // 2.8m:
  { height: 2.8, descriptions: ["a grizzly bear", "a white van"] },
  // 2.7m:
  { height: 2.7, descriptions: ["Robert Wadlow", "a standard ceiling"] },
  // 2.6m:
  { height: 2.6, descriptions: ["a football goal", "a shipping container"] },
  // 2.5m:
  { height: 2.5, descriptions: ["a tall step-ladder", "Big Bird"] },
  // 2.4m:
  { height: 2.4, descriptions: ["a volleyball net", "a phone booth"] },
  // 2.3m:
  { height: 2.3, descriptions: ["Yao Ming", "a Christmas tree"] },
  // 2.2m:
  { height: 2.2, descriptions: ["Shaquille O'Neal", "a refrigerator"] },
  // 2.1m:
  { height: 2.1, descriptions: ["Chewbacca", "a gas pump"] },
  // 2.0m:
  { height: 2.0, descriptions: ["LeBron James", "a moose"] },
  // 1.9m:
  { height: 1.9, descriptions: ["Snoop Dogg", "a vending machine"] },
  // 1.8m:
  { height: 1.8, descriptions: ["a garden fence", "a coat rack"] },
  // 1.7m:
  { height: 1.7, descriptions: ["Taylor Swift", "a floor lamp"] },
  // 1.6m:
  { height: 1.6, descriptions: ["Tom Cruise", "two kids in a trenchcoat"] },
  // 1.5m:
  { height: 1.5, descriptions: ["Danny Devito", "a garden shovel"] },
  // 1.4m:
  { height: 1.4, descriptions: ["a hippopotamus", "a pony"] },
  // 1.3m:
  { height: 1.3, descriptions: ["an 8-year-old child", "a large trash can"] },
  // 1.2m:
  { height: 1.2, descriptions: ["a bicycle", "a stack of three car tires"] },
  // 1.1m:
  { height: 1.1, descriptions: ["an acoustic guitar", "a golf bag"] },
  // 1.0m:
  { height: 1.0, descriptions: ["an electric guitar", "a large traffic cone"] },
  // 0.98m:
  { height: 0.98, descriptions: ["a large dog", "a kitchen counter"] },
  // 0.96m:
  { height: 0.96, descriptions: ["a bar stool", "a large suitcase"] },
  // 0.94m:
  { height: 0.94, descriptions: ["a dishwasher", "a walking cane"] },
  // 0.92m:
  { height: 0.92, descriptions: ["a baseball bat", "a toddler"] },
  // 0.9m:
  { height: 0.9, descriptions: ["a 3-year-old", "a cheetah"] },
  // 0.88m:
  { height: 0.88, descriptions: ["a kitchen trash can", "a radiator"] },
  // 0.86m:
  { height: 0.86, descriptions: ["a pig", "a dining chair"] },
  // 0.84m:
  { height: 0.84, descriptions: ["a potted plant", "a laundry hamper"] },
  // 0.82m:
  { height: 0.82, descriptions: ["a suitcase", "Moo Deng"] },
  // 0.8m:
  { height: 0.8, descriptions: ["a dining table", "a fire hydrant"] },
  // 0.78m:
  { height: 0.78, descriptions: ["a bicycle wheel", "a nightstand"] },
  // 0.76m:
  { height: 0.76, descriptions: ["an office desk", "a chair"] },
  // 0.74m:
  { height: 0.74, descriptions: ["a patio table", "a tennis racket"] },
  // 0.72m:
  { height: 0.72, descriptions: ["a skateboard", "a capybara"] },
  // 0.7m:
  { height: 0.7, descriptions: ["a traffic cone", "4 bananas"] },
  // 0.68m:
  { height: 0.68, descriptions: ["a nightstand", "a cooler box"] },
  // 0.66m:
  { height: 0.66, descriptions: ["a large backpack", "a bar stool"] },
  // 0.64m:
  { height: 0.64, descriptions: ["a French baguette", "3 bowling balls"] },
  // 0.62m:
  { height: 0.62, descriptions: ["a golden retriever", "the FA cup"] },
  // 0.6m:
  { height: 0.6, descriptions: ["a small trash can", "Moo Deng the pygmy hippo"] },
  // 0.58m:
  { height: 0.58, descriptions: ["a coffee table", "a fire extinguisher"] },
  // 0.56m:
  { height: 0.56, descriptions: ["a carry-on suitcase", "47 double-stuffed Oreos"] },
  // 0.54m:
  { height: 0.54, descriptions: ["a baguette", "a desk lamp"] },
  // 0.52m:
  { height: 0.52, descriptions: ["a penguin", "a desk lamp"] },
  // 0.5m:
  { height: 0.5, descriptions: ["a wild turkey", "a microwave"] },
  // 0.48m:
  { height: 0.48, descriptions: ["a dartboard", "a stool"] },
  // 0.46m:
  { height: 0.46, descriptions: ["a stool", "a computer tower"] },
  // 0.44m:
  { height: 0.44, descriptions: ["a car tire", "a chair seat"] },
  // 0.42m:
  { height: 0.42, descriptions: ["a car tire", "a bowling pin"] },
  // 0.4m:
  { height: 0.4, descriptions: ["a wine magnum", "a backpack"] },
  // 0.38m:
  { height: 0.38, descriptions: ["a large pizza", "a bowling pin"] },
  // 0.34m:
  { height: 0.34, descriptions: ["a cereal box", "a footlong sub"] },
  // 0.32m:
  { height: 0.32, descriptions: ["a wine bottle", "a sheet of paper"] },
  // 0.3m:
  { height: 0.3, descriptions: ["a vinyl record", "a 2-liter bottle"] },
  // 0.28m:
  { height: 0.28, descriptions: ["a paper towel roll", "5 AA batteries"] },
  // 0.26m:
  { height: 0.26, descriptions: ["A loaf of bread", "4 bricks"] },
  // 0.24m:
  { height: 0.24, descriptions: ["a basketball", "Punch the Monkey"] },
  // 0.22m:
  { height: 0.22, descriptions: ["a banana", "a pencil"] },
  // 0.2m:
  { height: 0.2, descriptions: ["Grumpy Cat", "a banana"] },
  // 0.18m:
  { height: 0.18, descriptions: ["a smartphone", "a shoebox (height)"] },
  // 0.16m:
  { height: 0.16, descriptions: ["a smartphone", "a soda can"] },
  // 0.14m:
  { height: 0.14, descriptions: ["a soda can", "a coffee mug"] },
  // 0.12m:
  { height: 0.12, descriptions: ["a coffee mug", "a deck of cards"] },
  // 0.1m:
  { height: 0.1, descriptions: ["a deck of cards", "a roll of toilet paper"] },
  // 0.08m:
  { height: 0.08, descriptions: ["a credit card", "5 dice"] },
  // 0.06m:
  { height: 0.06, descriptions: ["a large chicken egg", "a tennis ball"] },
  // 0.04m:
  { height: 0.04, descriptions: ["a golf ball", "a ping pong ball"] },
  // 0.02m:
  { height: 0.02, descriptions: ["a grape", "a bottle cap"] },
  // 0.01m:
  { height: 0.01, descriptions: ["an aspirin", "a blueberry"] },
  // 0.0m:
  { height: 0, descriptions: ["a grain of sand", "a speck of dust"] }
];

export const getComparison = (heightInMeters: number): string => {
  const comparison = heightComparisons.find(comp => heightInMeters >= comp.height);

  if (!comparison) {
    const defaultDescriptions = ["a single grain of rice", "a sesame seed", "a grain of sand"];
    return defaultDescriptions[Math.floor(Math.random() * defaultDescriptions.length)];
  }

  // Pick a random description from the available ones for this height category
  const randomIndex = Math.floor(Math.random() * comparison.descriptions.length);
  return comparison.descriptions[randomIndex];
}; 