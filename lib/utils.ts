export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPriceZAR(amount: number) {
  const rounded = Math.round(amount);
  return `ZAR ${rounded.toLocaleString("en-ZA")}`;
}
