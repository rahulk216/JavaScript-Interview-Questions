//n kids in a circle
//k number on toys
//get the last kid who gets the toys

//3k - 5t => 2nd kid in a circle

function lastKid(n, m, k=1) {
    if (m <= n - k + 1)
        return m + k - 1;
    m = m - (n - k + 1);
    return (m % n == 0) ? n : (m % n); 
}
console.log(lastKid(3,6));
