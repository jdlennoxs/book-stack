interface HeightComparison {
  height: number;
  descriptions: string[];
}

const heightComparisons: HeightComparison[] = [
  // 5.0m: mature male giraffes are 4.6-5.5m.
  { height: 5.0, descriptions: ["an adult male giraffe", "a two-story house"] },
  // 4.5m: great white sharks easily reach 4.5m when fully grown.
  { height: 4.5, descriptions: ["a large great white shark", "an adult female giraffe"] },
  // 4.0m: African elephant at shoulder is 3-4m.
  { height: 4.0, descriptions: ["an adult African elephant", "a double-decker bus"] },
  // 3.5m: A male adult moose with antlers is around 3.0-3.5m tall overall.
  { height: 3.5, descriptions: ["an adult male moose with antlers"] },
  // 3.0m: a basketball hoop is exactly 3.05m.
  { height: 3.0, descriptions: ["a basketball hoop"] },
  // 2.9m: A large male ostrich is up to 2.8-2.9m tall.
  { height: 2.9, descriptions: ["an adult male ostrich"] },
  // 2.8m: A professionally mounted basketball backboard's top edge. Or a large grizzly standing.
  { height: 2.8, descriptions: ["an adult male grizzly bear standing upright"] },
  // 2.7m: Robert Wadlow, tallest human in recorded history, was 2.72m.
  { height: 2.7, descriptions: ["Robert Wadlow, the tallest human in recorded history"] },
  // 2.6m: residential ceiling height is 2.4-2.7m.
  { height: 2.6, descriptions: ["a residential room's floor to ceiling height"] },
  // 2.5m: world record high jump is 2.45m.
  { height: 2.5, descriptions: ["the men's high jump world record"] },
  // 2.4m: men's volleyball net is 2.43m.
  { height: 2.4, descriptions: ["a men's professional volleyball net"] },
  // 2.3m: Yao Ming is 2.29m.
  { height: 2.3, descriptions: ["Yao Ming"] },
  // 2.2m: Shaquille O'Neal is 2.16m.
  { height: 2.2, descriptions: ["Shaquille O'Neal"] },
  // 2.1m: interior doors are typically 2.03-2.1m.
  { height: 2.1, descriptions: ["an interior doorway"] },
  // 2.0m: LeBron James is 2.06m.
  { height: 2.0, descriptions: ["LeBron James"] },
  // 1.9m: A large double-door household refrigerator is often about 1.8-1.9m.
  { height: 1.9, descriptions: ["a double-door household refrigerator"] },
  // 1.8m: Taylor Swift is 1.8m.
  { height: 1.8, descriptions: ["Taylor Swift"] },
  // 1.7m: Napoleon Bonaparte was 1.68m.
  { height: 1.7, descriptions: ["Napoleon Bonaparte"] },
  // 1.6m: a traditional floor lamp is 1.5-1.8m.
  { height: 1.6, descriptions: ["a floor lamp"] },
  // 1.5m: Danny DeVito is 1.47m.
  { height: 1.5, descriptions: ["Danny DeVito"] },
  // 1.4m: a typical street mailbox is 1.4m.
  { height: 1.4, descriptions: ["a street mailbox"] },
  // 1.3m: an 8-year-old human is ~1.28m.
  { height: 1.3, descriptions: ["an eight-year-old child"] },
  // 1.2m: a four-drawer office filing cabinet is 1.3m.
  { height: 1.2, descriptions: ["a four-drawer filing cabinet"] },
  // 1.1m: an acoustic guitar standing upright is 1-1.1m.
  { height: 1.1, descriptions: ["an acoustic guitar standing upright"] },
  // 1.0m: a meter stick is exactly 1.0m.
  { height: 1.0, descriptions: ["a meter stick", "a baseball bat standing upright"] },
  // 0.98m: a kitchen counter is 0.91m-0.98m.
  { height: 0.98, descriptions: ["a kitchen counter"] },
  // 0.96m: a physical bar stool is 0.75-0.96m.
  { height: 0.96, descriptions: ["a tall wooden bar stool"] },
  // 0.94m: an average walking cane is 0.91-0.96m.
  { height: 0.94, descriptions: ["a walking cane"] },
  // 0.92m: a yardstick is 0.91m.
  { height: 0.92, descriptions: ["a yardstick"] },
  // 0.9m: a two-year-old human is 0.86m.
  { height: 0.9, descriptions: ["a two-year-old toddler"] },
  // 0.88m: a tall kitchen trash can is around 0.8-0.9m.
  { height: 0.88, descriptions: ["a tall kitchen trash can"] },
  // 0.86m: a professional baseball bat is 34 inches (0.86m).
  { height: 0.86, descriptions: ["a professional baseball bat"] },
  // 0.84m: a large potted houseplant.
  { height: 0.84, descriptions: ["a large potted indoor plant"] },
  // 0.82m: a large hard-shell suitcase standing upright is 0.76-0.82m.
  { height: 0.82, descriptions: ["a large suitcase standing on its wheels"] },
  // 0.8m: an office desk height is 0.74m.
  { height: 0.8, descriptions: ["a dining room table"] },
  // 0.78m: a fire hydrant is typically 0.8m tall.
  { height: 0.78, descriptions: ["a typical fire hydrant"] },
  // 0.76m: a 29-inch mountain bike wheel is 0.74m across, leaning upright.
  { height: 0.76, descriptions: ["a mountain bike wheel standing upright"] },
  // 0.74m: a standard outdoor patio table is usually 0.74m tall.
  { height: 0.74, descriptions: ["a standard outdoor patio table"] },
  // 0.72m: a modern tennis racket standing upright is 0.68-0.73m.
  { height: 0.72, descriptions: ["a tennis racket standing upright"] },
  // 0.7m: a standard skateboard placed vertically on its tail.
  { height: 0.7, descriptions: ["a skateboard standing on its tail"] },
  // 0.68m: an end table or nightstand is typically 0.6-0.7m tall.
  { height: 0.68, descriptions: ["a bed nightstand"] },
  // 0.66m: a very tall traffic cone is 0.7m.
  { height: 0.66, descriptions: ["a large traffic cone"] },
  // 0.64m: a floor-standing tower fan.
  { height: 0.64, descriptions: ["a tower fan"] },
  // 0.62m: a carry-on luggage trolley standing upright is 0.55-0.62m.
  { height: 0.62, descriptions: ["a piece of carry-on luggage standing upright"] },
  // 0.6m: a medium sized indoor trash can.
  { height: 0.6, descriptions: ["a small office trash can"] },
  // 0.58m: the neck of an electric guitar is 0.45-0.6m.
  { height: 0.58, descriptions: ["the neck of an electric guitar"] },
  // 0.56m: a commercial fire extinguisher (usually 0.5-0.6m).
  { height: 0.56, descriptions: ["a standard red fire extinguisher"] },
  // 0.54m: a typical desktop computer tower.
  { height: 0.54, descriptions: ["a desktop PC tower"] },
  // 0.52m: a large loaf of French bread standing on end.
  { height: 0.52, descriptions: ["a large French baguette"] },
  // 0.5m: a mid-sized table lamp.
  { height: 0.5, descriptions: ["a desk lamp"] },
  // 0.48m: an adult wild turkey standing.
  { height: 0.48, descriptions: ["a wild turkey standing up"] },
  // 0.46m: a dartboard diameter is 0.45m.
  { height: 0.46, descriptions: ["a traditional pub dartboard"] },
  // 0.44m: a typical chair seat is 0.43-0.45m off the ground.
  { height: 0.44, descriptions: ["the seat of a dining chair"] },
  // 0.42m: a typical bowling pin is 0.38-0.4m tall.
  { height: 0.42, descriptions: ["a regulation bowling pin"] },
  // 0.4m: a men's shoebox is 0.3-0.35m long, placed vertically.
  { height: 0.4, descriptions: ["a shoebox placed on its end"] },
  // 0.38m: a 2-liter soda bottle is ~0.33-0.35m. A bowling pin is 0.38m.
  { height: 0.38, descriptions: ["a 2-liter soda bottle"] },
  // 0.36m: an average magnum wine bottle.
  { height: 0.36, descriptions: ["a magnum-sized wine bottle"] },
  // 0.34m: an adult emperor penguin chick is roughly 0.3m.
  { height: 0.34, descriptions: ["a large cereal box"] },
  // 0.32m: a 12-inch ruler is 0.3048m.
  { height: 0.32, descriptions: ["a twelve-inch wooden ruler"] },
  // 0.3m: a standard wine bottle is exactly 0.3m tall.
  { height: 0.3, descriptions: ["a standard bottle of wine"] },
  // 0.28m: an iPad Pro's longest edge is 0.28m. Placed vertically.
  { height: 0.28, descriptions: ["an iPad Pro standing upright"] },
  // 0.26m: a basketball diameter is 0.24m. Let's use a small paper towel roll.
  { height: 0.26, descriptions: ["a roll of paper towels"] },
  // 0.24m: a men's basketball diameter is 0.24m.
  { height: 0.24, descriptions: ["a full-sized men's basketball"] },
  // 0.22m: a trade paperback novel placed vertically.
  { height: 0.22, descriptions: ["a paperback novel standing upright"] },
  // 0.2m: a large banana balanced on its tip is ~0.2m.
  { height: 0.2, descriptions: ["a very large banana placed upright"] },
  // 0.18m: a new, unsharpened wooden pencil.
  { height: 0.18, descriptions: ["a brand new unsharpened pencil"] },
  // 0.16m: a large hardcover book laid flat.
  { height: 0.16, descriptions: ["the thickness of ten hardcover books stacked"] },
  // 0.14m: a modern smartphone placed upright.
  { height: 0.14, descriptions: ["a modern smartphone standing upright"] },
  // 0.12m: a classic 12oz soda can is 0.12m.
  { height: 0.12, descriptions: ["a 12-ounce soda can"] },
  // 0.1m: a coffee mug is typically 0.09-0.1m.
  { height: 0.1, descriptions: ["a typical ceramic coffee mug"] },
  // 0.08m: a deck of playing cards standing upright is 0.089m.
  { height: 0.08, descriptions: ["a deck of playing cards standing upright"] },
  // 0.06m: a large chicken egg stood on end is roughly 0.05-0.06m.
  { height: 0.06, descriptions: ["a large chicken egg standing on its end"] },
  // 0.04m: a golf ball is 0.042m tall.
  { height: 0.04, descriptions: ["a golf ball"] },
  // 0.02m: a standard 20-sided gaming die (D20) is roughly 0.02m high.
  { height: 0.02, descriptions: ["a solid 20-sided gaming die (D20)"] },
  // 0.01m: an aspirin tablet is about 1cm across.
  { height: 0.01, descriptions: ["a single aspirin tablet standing on its edge"] },
  // 0.0m: a single grain of fine sand.
  { height: 0, descriptions: ["a single grain of beach sand"] }
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