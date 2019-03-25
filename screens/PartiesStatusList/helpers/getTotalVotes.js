export function getTotalVotes(partiesWithVotes) {
  return Object.entries(partiesWithVotes).reduce(
    (acc, party) => acc + party[1].currentVotes,
    0
  );
}
