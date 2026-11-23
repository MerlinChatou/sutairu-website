/** @type {{ queries: string[], visibleCards: Set<string> }} */
export const searchState = $state({
  queries: [],
  visibleCards: new Set(),  
});