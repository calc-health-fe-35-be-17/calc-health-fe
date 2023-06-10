// export const foodCard = [
//   {
//     img: 'https://images.unsplash.com/photo-1536688261748-9d56b3acf077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
//     title: 'Cake',
//     nutrition: {
//       kalori: 2.11,
//       carbon: 0.34,
//     },
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1644288232801-2b40ff99d54f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80',
//     title: 'Sate Ayam',
//     nutrition: {
//       kalori: 2.11,
//       carbon: 0.34,
//     },
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=429&q=80',
//     title: 'Hamburger',
//     nutrition: {
//       kalori: 2.11,
//       carbon: 0.34,
//     },
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1532452960476-f234eee8bd71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
//     title: 'Roti Bakar',
//     nutrition: {
//       kalori: 2.11,
//       carbon: 0.34,
//     },
//   },
// ];

export const planMeal = [
  {
    underweight: {
      makanan: {
        sarapan: [
          '1 Banana',
          '1 cup of bran cereal with 8oz 2%',
          '1 black tea',
        ],
        makanSiang: [
          '2 slices wheat bread',
          'Sliced lettuce and tomato',
          '.5oz. of lite mayonnaise',
          '2 slices of roast beef',
          '1 cup of mixed fruit',
          '12 ounces of diet soft drink',
        ],
        makanMalam: [
          '1 small tossed salad',
          '1 cups of cooked pasta',
          '1/2 cup tomato sauce',
          '1 Tbsp grated cheese',
          '12 ounces of water (0)',
        ],
      },
    },
  },
  {
    normal: {
      makanan: {
        sarapan: [
          '1 Banana',
          '1 cup of bran cereal with 8oz 2%',
          '1 black tea',
        ],
        makanSiang: [
          '2 slices wheat bread',
          'Sliced lettuce and tomato',
          '.5oz. of lite mayonnaise',
          '2 slices of roast beef',
          '1 cup of mixed fruit',
          '12 ounces of diet soft drink',
        ],
        makanMalam: [
          '1 small tossed salad',
          '1 cups of cooked pasta',
          '1/2 cup tomato sauce',
          '1 Tbsp grated cheese',
          '12 ounces of water (0)',
        ],
      },
    },
  },
  {
    overweight: {
      sarapan: ['1 Banana', '1 cup of bran cereal with 8oz 2%', '1 black tea'],
      makanSiang: [
        '2 slices wheat bread',
        'Sliced lettuce and tomato',
        '.5oz. of lite mayonnaise',
        '2 slices of roast beef',
        '1 cup of mixed fruit',
        '12 ounces of diet soft drink',
      ],
      makanMalam: [
        '1 small tossed salad',
        '1 cups of cooked pasta',
        '1/2 cup tomato sauce',
        '1 Tbsp grated cheese',
        '12 ounces of water (0)',
      ],
    },
  },
  {
    obesity: {
      makanan: {
        sarapan: [
          '1 Banana',
          '1 cup of bran cereal with 8oz 2%',
          '1 black tea',
        ],
        makanSiang: [
          '2 slices wheat bread',
          'Sliced lettuce and tomato',
          '.5oz. of lite mayonnaise',
          '2 slices of roast beef',
          '1 cup of mixed fruit',
          '12 ounces of diet soft drink',
        ],
        makanMalam: [
          '1 small tossed salad',
          '1 cups of cooked pasta',
          '1/2 cup tomato sauce',
          '1 Tbsp grated cheese',
          '12 ounces of water (0)',
        ],
      },
    },
  },
];

const foodplan = planMeal.map(item => {
  return item.normal.makanan;
});

const sarapan = foodplan.map(item => {
  return item;
});

console.log(sarapan);
