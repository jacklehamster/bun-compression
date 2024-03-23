export function splitIntoCharCode(s: string): number[] {
  return s.split("").map(c => c.charCodeAt(0));
}
