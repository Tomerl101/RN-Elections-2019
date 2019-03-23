export const sortByCurrentVotes = (parties, totalVotes) =>
  Object.entries(parties).sort(
    (a, b) => parties[b[0]].currentVotes - parties[a[0]].currentVotes
  );
