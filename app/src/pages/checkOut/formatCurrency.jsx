export function formatCurrency(amount) {
  if (typeof amount !== "number") {
    return "";
  }
  return `$${amount.toFixed(2)}`;
}

