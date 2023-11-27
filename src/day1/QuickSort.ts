function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    // Select pivot
    const pivot = arr[hi];

    let idx = lo - 1;

    // Move all values lower than pivot (weak sort)
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    // Place pivot after all the lower numbers
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    console.log(idx);
    console.log(arr);

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
