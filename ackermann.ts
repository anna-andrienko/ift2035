function B0 (r1: number): number {
    return ++r1;
}

function B (i: number, r1: number): number {
    if (i === 0) {
        return ++r1;
    }
    let r0 = 1;
    r1++;
    for (let j = 0; j < r1; j++) {
        let m = i - 1;
        r0 = B(m, r0);
    }
    return r0;
}

console.log(B(0, 0));
console.log(B(1, 1));
console.log(B(2, 2));
console.log(B(3, 3));
console.log(B(4, 1));