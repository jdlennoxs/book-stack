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
  { height: 9.0, descriptions: ["a squash court wall", "a Brachiosaurus shoulder"] },
  // 8.0m:
  { height: 8.0, descriptions: ["as long as a London bus", "a backyard tree"] },
  // 7.0m:
  { height: 7.0, descriptions: ["a yacht mast"] },
  // 6.0m:
  { height: 6.0, descriptions: ["a Tyrannosaurus Rex", "a Stonehenge slab"] },
  // 5.5m:
  { height: 5.5, descriptions: ["a giraffe", "a shipping container"] },
  // 5.0m:
  { height: 5.0, descriptions: ["a giraffe", "a one-story house with a peaked roof"] },
  // 4.5m:
  { height: 4.5, descriptions: ["a double-decker bus", "a box truck"] },
  // 4.0m:
  { height: 4.0, descriptions: ["an elephant", "a highway overhead sign"] },
  // 3.5m:
  { height: 3.5, descriptions: ["a moose", "a monster truck"] },
  // 3.0m:
  { height: 3.0, descriptions: ["a basketball hoop", "a street lamp"] },
  // 2.9m:
  { height: 2.9, descriptions: ["an ostrich", "a garden shed"] },
  // 2.8m:
  { height: 2.8, descriptions: ["a grizzly bear", "a traffic light pole"] },
  // 2.7m:
  { height: 2.7, descriptions: ["Robert Wadlow", "a standard ceiling"] },
  // 2.6m:
  { height: 2.6, descriptions: ["a soccer goal", "a tall step-ladder"] },
  // 2.5m:
  { height: 2.5, descriptions: ["a shipping container", "Big Bird"] },
  // 2.4m:
  { height: 2.4, descriptions: ["a volleyball net", "a phone booth"] },
  // 2.3m:
  { height: 2.3, descriptions: ["Yao Ming", "a doorway"] },
  // 2.2m:
  { height: 2.2, descriptions: ["Shaquille O'Neal", "a vending machine"] },
  // 2.1m:
  { height: 2.1, descriptions: ["Chewbacca", "a fridge"] },
  // 2.0m:
  { height: 2.0, descriptions: ["LeBron James", "a Christmas tree"] },
  // 1.9m:
  { height: 1.9, descriptions: ["Snoop Dogg", "a garden shovel"] },
  // 1.8m:
  { height: 1.8, descriptions: ["a garden fence", "a coat rack"] },
  // 1.7m:
  { height: 1.7, descriptions: ["Taylor Swift", "a floor lamp"] },
  // 1.6m:
  { height: 1.6, descriptions: ["Tom Cruise", "two kids in a trenchcoat"] },
  // 1.5m:
  { height: 1.5, descriptions: ["a mailbox", "a water jug stack"] },
  // 1.4m:
  { height: 1.4, descriptions: ["Danny DeVito", "a golf bag"] },
  // 1.3m:
  { height: 1.3, descriptions: ["an 8-year-old child", "a large trash can"] },
  // 1.2m:
  { height: 1.2, descriptions: ["a bicycle", "a golden retriever"] },
  // 1.1m:
  { height: 1.1, descriptions: ["an acoustic guitar", "a capybara"] },
  // 1.0m:
  { height: 1.0, descriptions: ["an electric guitar"] },
  // 0.98m:
  { height: 0.98, descriptions: ["a large dog", "a kitchen counter"] },
  // 0.96m:
  { height: 0.96, descriptions: ["a bar stool", "a large suitcase"] },
  // 0.94m:
  { height: 0.94, descriptions: ["a dishwasher", "a walking cane"] },
  // 0.92m:
  { height: 0.92, descriptions: ["a gas pump", "a toddler"] },
  // 0.9m:
  { height: 0.9, descriptions: ["an office desk", "a 2-year-old"] },
  // 0.88m:
  { height: 0.88, descriptions: ["a kitchen trash can", "a radiator"] },
  // 0.86m:
  { height: 0.86, descriptions: ["a baseball bat", "a dining chair"] },
  // 0.84m:
  { height: 0.84, descriptions: ["a potted plant", "a microwave"] },
  // 0.82m:
  { height: 0.82, descriptions: ["a suitcase", "a coffee table"] },
  // 0.8m:
  { height: 0.8, descriptions: ["a dining table", "a fire hydrant"] },
  // 0.78m:
  { height: 0.78, descriptions: ["a bicycle wheel", "a nightstand"] },
  // 0.76m:
  { height: 0.76, descriptions: ["a nightstand", "a patio chair"] },
  // 0.74m:
  { height: 0.74, descriptions: ["a patio table", "a tennis racket"] },
  // 0.72m:
  { height: 0.72, descriptions: ["a skateboard", "a guitar"] },
  // 0.7m:
  { height: 0.7, descriptions: ["a large traffic cone", "a cooler box"] },
  // 0.68m:
  { height: 0.68, descriptions: ["a nightstand", "a cooler box"] },
  // 0.66m:
  { height: 0.66, descriptions: ["a medium traffic cone", "a large backpack"] },
  // 0.64m:
  { height: 0.64, descriptions: ["a carry-on bag", "a stack of three bowling balls"] },
  // 0.62m:
  { height: 0.62, descriptions: ["a golden retriever", "the FA cup"] },
  // 0.6m:
  { height: 0.6, descriptions: ["a small trash can", "Moo Deng the pygmy hippo"] },
  // 0.58m:
  { height: 0.58, descriptions: ["a microwave", "a fire extinguisher"] },
  // 0.56m:
  { height: 0.56, descriptions: ["a vacuum cleaner", "a pizza box"] },
  // 0.54m:
  { height: 0.54, descriptions: ["a baguette", "a desk lamp"] },
  // 0.52m:
  { height: 0.52, descriptions: ["a penguin", "a desk lamp"] },
  // 0.5m:
  { height: 0.5, descriptions: ["a wild turkey", "a bowling pin"] },
  // 0.48m:
  { height: 0.48, descriptions: ["a dartboard", "a stool"] },
  // 0.46m:
  { height: 0.46, descriptions: ["a stool", "a laptop"] },
  // 0.44m:
  { height: 0.44, descriptions: ["a bowling pin", "a chair seat"] },
  // 0.42m:
  { height: 0.42, descriptions: ["a 2-liter bottle", "a shoebox"] },
  // 0.4m:
  { height: 0.4, descriptions: ["a wine magnum", "a 2-liter bottle"] },
  // 0.38m:
  { height: 0.38, descriptions: ["a large pizza", "a bowling pin"] },
  // 0.34m:
  { height: 0.34, descriptions: ["a cereal box", "a footlong sub"] },
  // 0.32m:
  { height: 0.32, descriptions: ["a wine bottle", "a sheet of paper"] },
  // 0.3m:
  { height: 0.3, descriptions: ["an iPad Pro", "a sheet of paper"] },
  // 0.28m:
  { height: 0.28, descriptions: ["a paper towel roll", "a basketball"] },
  // 0.26m:
  { height: 0.26, descriptions: ["a basketball", "a paperback book"] },
  // 0.24m:
  { height: 0.24, descriptions: ["a paperback book", "Punch the Monkey"] },
  // 0.22m:
  { height: 0.22, descriptions: ["a banana", "a pencil"] },
  // 0.2m:
  { height: 0.2, descriptions: ["Grumpy Cat", "a banana"] },
  // 0.18m:
  { height: 0.18, descriptions: ["a smartphone", "a stack of books"] },
  // 0.16m:
  { height: 0.16, descriptions: ["a smartphone", "a soda can"] },
  // 0.14m:
  { height: 0.14, descriptions: ["a soda can", "a coffee mug"] },
  // 0.12m:
  { height: 0.12, descriptions: ["a coffee mug", "a deck of cards"] },
  // 0.1m:
  { height: 0.1, descriptions: ["a deck of cards", "a large chicken egg"] },
  // 0.08m:
  { height: 0.08, descriptions: ["a chicken egg", "a credit card"] },
  // 0.06m:
  { height: 0.06, descriptions: ["a golf ball", "a D20 die"] },
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