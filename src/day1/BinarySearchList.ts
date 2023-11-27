export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        const middle = Math.floor(lo + (hi - lo) / 2);
        if (haystack[middle] === needle) return true;

        if (haystack[middle] > needle) hi = middle;
        if (haystack[middle] < needle) lo = middle + 1;
    }

    return false;
}
