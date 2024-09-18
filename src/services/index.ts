export const getApiCommit = async () => {
  return await fetch("https://api.github.com/repos/facebook/react/stats/commit_activity")
    .then(
      (resp) =>
        resp.json() as Promise<
          {
            total: number;
            week: number;
            days: number[];
          }[]
        >,
    )
    .then((weeks) => {
      return weeks.map(({week, days}) => ({
        id: week,
        date: new Date(week * 1000),
        days: days.map((contributions, index) => {
          const date = new Date(week * 1000 + 1000 * 60 * 60 * 24 * (index + 1));

          return {
            contributions,
            date,
          };
        }),
      }));
    });
};

export const x = [
  {
    total: 24,
    week: 1695513600,
    days: [0, 4, 1, 10, 5, 4, 0],
  },
  {
    total: 47,
    week: 1696118400,
    days: [0, 9, 12, 13, 10, 3, 0],
  },
  {
    total: 27,
    week: 1696723200,
    days: [0, 9, 8, 2, 6, 2, 0],
  },
  {
    total: 26,
    week: 1697328000,
    days: [1, 5, 6, 3, 5, 4, 2],
  },
  {
    total: 24,
    week: 1697932800,
    days: [0, 6, 2, 7, 5, 4, 0],
  },
  {
    total: 62,
    week: 1698537600,
    days: [0, 8, 13, 24, 11, 6, 0],
  },
  {
    total: 72,
    week: 1699142400,
    days: [0, 7, 15, 17, 18, 15, 0],
  },
  {
    total: 42,
    week: 1699747200,
    days: [2, 7, 11, 9, 9, 4, 0],
  },
  {
    total: 6,
    week: 1700352000,
    days: [0, 0, 3, 1, 2, 0, 0],
  },
  {
    total: 26,
    week: 1700956800,
    days: [0, 3, 8, 6, 3, 6, 0],
  },
  {
    total: 30,
    week: 1701561600,
    days: [0, 9, 5, 6, 3, 7, 0],
  },
  {
    total: 40,
    week: 1702166400,
    days: [0, 14, 6, 0, 5, 15, 0],
  },
  {
    total: 14,
    week: 1702771200,
    days: [2, 2, 2, 8, 0, 0, 0],
  },
  {
    total: 0,
    week: 1703376000,
    days: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    total: 4,
    week: 1703980800,
    days: [0, 0, 3, 1, 0, 0, 0],
  },
  {
    total: 26,
    week: 1704585600,
    days: [1, 1, 6, 5, 5, 7, 1],
  },
  {
    total: 32,
    week: 1705190400,
    days: [0, 4, 6, 2, 7, 13, 0],
  },
  {
    total: 62,
    week: 1705795200,
    days: [0, 6, 11, 9, 13, 22, 1],
  },
  {
    total: 76,
    week: 1706400000,
    days: [1, 13, 11, 5, 18, 28, 0],
  },
  {
    total: 82,
    week: 1707004800,
    days: [4, 29, 19, 6, 8, 16, 0],
  },
  {
    total: 55,
    week: 1707609600,
    days: [2, 8, 14, 9, 9, 8, 5],
  },
  {
    total: 56,
    week: 1708214400,
    days: [1, 9, 15, 10, 10, 9, 2],
  },
  {
    total: 36,
    week: 1708819200,
    days: [1, 9, 8, 7, 8, 3, 0],
  },
  {
    total: 42,
    week: 1709424000,
    days: [2, 4, 6, 16, 6, 8, 0],
  },
  {
    total: 43,
    week: 1710028800,
    days: [0, 13, 4, 16, 5, 3, 2],
  },
  {
    total: 76,
    week: 1710633600,
    days: [0, 16, 14, 9, 16, 21, 0],
  },
  {
    total: 85,
    week: 1711238400,
    days: [1, 12, 27, 14, 14, 14, 3],
  },
  {
    total: 76,
    week: 1711843200,
    days: [0, 13, 38, 14, 4, 6, 1],
  },
  {
    total: 79,
    week: 1712448000,
    days: [0, 25, 11, 26, 10, 7, 0],
  },
  {
    total: 58,
    week: 1713052800,
    days: [0, 8, 8, 10, 21, 9, 2],
  },
  {
    total: 56,
    week: 1713657600,
    days: [3, 6, 18, 9, 14, 4, 2],
  },
  {
    total: 38,
    week: 1714262400,
    days: [0, 4, 4, 6, 12, 12, 0],
  },
  {
    total: 51,
    week: 1714867200,
    days: [0, 12, 14, 7, 7, 2, 9],
  },
  {
    total: 57,
    week: 1715472000,
    days: [0, 5, 6, 19, 7, 18, 2],
  },
  {
    total: 46,
    week: 1716076800,
    days: [2, 13, 13, 3, 8, 3, 4],
  },
  {
    total: 48,
    week: 1716681600,
    days: [1, 0, 11, 13, 8, 12, 3],
  },
  {
    total: 43,
    week: 1717286400,
    days: [1, 10, 5, 4, 10, 12, 1],
  },
  {
    total: 55,
    week: 1717891200,
    days: [1, 16, 15, 13, 4, 6, 0],
  },
  {
    total: 37,
    week: 1718496000,
    days: [0, 6, 2, 2, 5, 16, 6],
  },
  {
    total: 41,
    week: 1719100800,
    days: [0, 4, 14, 13, 5, 5, 0],
  },
  {
    total: 25,
    week: 1719705600,
    days: [2, 9, 5, 4, 4, 0, 1],
  },
  {
    total: 45,
    week: 1720310400,
    days: [0, 7, 4, 10, 9, 12, 3],
  },
  {
    total: 46,
    week: 1720915200,
    days: [0, 12, 15, 2, 15, 2, 0],
  },
  {
    total: 68,
    week: 1721520000,
    days: [0, 9, 14, 8, 22, 15, 0],
  },
  {
    total: 64,
    week: 1722124800,
    days: [0, 25, 16, 9, 4, 10, 0],
  },
  {
    total: 35,
    week: 1722729600,
    days: [0, 3, 12, 11, 6, 3, 0],
  },
  {
    total: 50,
    week: 1723334400,
    days: [0, 8, 8, 11, 7, 16, 0],
  },
  {
    total: 38,
    week: 1723939200,
    days: [1, 5, 7, 11, 13, 1, 0],
  },
  {
    total: 31,
    week: 1724544000,
    days: [0, 4, 6, 9, 8, 4, 0],
  },
  {
    total: 24,
    week: 1725148800,
    days: [0, 0, 4, 6, 8, 5, 1],
  },
  {
    total: 37,
    week: 1725753600,
    days: [0, 10, 6, 3, 8, 8, 2],
  },
  {
    total: 17,
    week: 1726358400,
    days: [0, 12, 5, 0, 0, 0, 0],
  },
];
