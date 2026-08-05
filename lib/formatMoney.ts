export function formatMoney(amount: string | number| undefined, currencyCode: string| undefined, locale = "en-US") {
     if (amount === undefined || currencyCode === undefined) return "—";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(Number(amount));
}