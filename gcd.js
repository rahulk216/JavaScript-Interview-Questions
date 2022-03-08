function gcd(x, y) {
	let max = Math.max(x, y);
	for (let i = max; i >= 1; i--) {
		if (x % i == 0 && y % i == 0) {
			return i;
		}
	}
}
const ans = gcd(201, 30);
console.log(ans);
