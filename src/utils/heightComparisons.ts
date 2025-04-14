interface HeightComparison {
  height: number;
  description: string;
}

const heightComparisons: HeightComparison[] = [
  { height: 3.0, description: "a Wacky Waving Tube Man" },
  { height: 2.9, description: "a grand piano" },
  { height: 2.8, description: "an eagle's wingspan" },
  { height: 2.7, description: "a smart car" },
  { height: 2.6, description: "a sofa" },
  { height: 2.5, description: "a surfboard" },
  { height: 2.4, description: "a garage door" },
  { height: 2.3, description: "a vending machine" },
  { height: 2.2, description: "a moose" },
  { height: 2.1, description: "a bear" },
  { height: 2.0, description: "Dwayne 'The Rock' Johnson" },
  { height: 1.9, description: "a phone booth full of eels" },
  { height: 1.8, description: "Taylor Swift" },
  { height: 1.7, description: "a tall human" },
  { height: 1.6, description: "a floor lamp" },
  { height: 1.5, description: "Danny DeVito" },
  { height: 1.4, description: "a mailbox" },
  { height: 1.3, description: "a child" },
  { height: 1.2, description: "a penguin riding a skateboard" },
  { height: 1.1, description: "a guitar" },
  { height: 1.0, description: "a baseball bat" },
  { height: 0.9, description: "a fire hydrant" },
  { height: 0.8, description: "two bowling pins" },
  { height: 0.7, description: "one garden gnome" },
  { height: 0.6, description: "five coffee mugs" },
  { height: 0.5, description: "a car tire" },
  { height: 0.4, description: "Grogu" },
  { height: 0.3, description: "one vinyl record" },
  { height: 0.2, description: "a banana" },
  { height: 0.1, description: "one credit card" }
];

export const getComparison = (heightInMeters: number): string => {
  const comparison = heightComparisons.find(comp => heightInMeters > comp.height);
  return comparison?.description || "one credit card";
}; 