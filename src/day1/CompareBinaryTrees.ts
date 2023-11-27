// BFS
// export default function compare(
//     a: BinaryNode<number> | null,
//     b: BinaryNode<number> | null,
// ): boolean {
//     const q1 = [a];
//     const q2 = [b];

//     while (q1.length && q2.length) {
//         const curr1 = q1.shift();
//         const curr2 = q2.shift();

//         if (curr1?.value !== curr2?.value) return false;

//         if (curr1?.left) q1.push(curr1.left);
//         if (curr1?.right) q1.push(curr1.right);

//         if (curr2?.left) q2.push(curr2.left);
//         if (curr2?.right) q2.push(curr2.right);
//     }

//     return true;
// }

// DFS
export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) return true;

    if (a === null || b === null) return false;

    if (a.value !== b.value) return false;

    return compare(a.left, b.left) && compare(a.right, b.right);
}
