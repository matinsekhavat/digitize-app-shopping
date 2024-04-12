const e2p = (n) => {
  return n.toLocaleString("fa").replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};

// Example usage
console.log(e2p(123456789)); // Output: "۱۲۳,۴۵۶,۷۸۹"
const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

export { e2p, p2e };
