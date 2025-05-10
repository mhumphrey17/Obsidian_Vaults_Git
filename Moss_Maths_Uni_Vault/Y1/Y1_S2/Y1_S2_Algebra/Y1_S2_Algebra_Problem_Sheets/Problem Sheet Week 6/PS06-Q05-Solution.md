---
title: "PS06-Q05-Solution: Computing Determinants by Expansion"
aliases: ["Solution to PS6 Q5"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-06", "difficulty-homework", "determinants", "cofactor-expansion", "4x4-matrices"]
related_problem: [[PS06-Q05]]
---

# PS06-Q05-Solution: Computing Determinants by Expansion

## Original Problem
Find the following determinants by expanding about an appropriate row/column.

$$\text{(i) } \left|\begin{array}{cccc}
0 & -1 & 4 & 1 \\
3 & 0 & -2 & 1 \\
-1 & 0 & 2 & 2 \\
1 & 2 & 0 & 3
\end{array}\right| \quad \text{(ii) } \left|\begin{array}{cccc}
1 & 0 & -1 & 0 \\
2 & 4 & 0 & -3 \\
3 & 0 & 1 & 0 \\
5 & 2 & 2 & 1
\end{array}\right|$$

## Solution Process

### Part (i)
The most efficient approach is to expand about column 2, which has three zeros:

$$\det A = -(-1)\left|\begin{array}{ccc}
3 & -2 & 1 \\
-1 & 2 & 2 \\
1 & 0 & 3
\end{array}\right| + 2\left|\begin{array}{ccc}
0 & 4 & 1 \\
3 & -2 & 1 \\
-1 & 2 & 2
\end{array}\right|$$

$$= \left|\begin{array}{ccc}
3 & -2 & 1 \\
-1 & 2 & 2 \\
1 & 0 & 3
\end{array}\right| + 2\left|\begin{array}{ccc}
0 & 4 & 1 \\
3 & -2 & 1 \\
-1 & 2 & 2
\end{array}\right|$$

For the first 3×3 determinant, expand about row 3:
$$\left|\begin{array}{ccc}
3 & -2 & 1 \\
-1 & 2 & 2 \\
1 & 0 & 3
\end{array}\right| = 1\left|\begin{array}{cc}
-2 & 1 \\
2 & 2
\end{array}\right| + 3\left|\begin{array}{cc}
3 & -2 \\
-1 & 2
\end{array}\right|$$

$$= (-4-2) + 3(6-2) = -6 + 12 = 6$$

For the second 3×3 determinant, expand about column 1:
$$\left|\begin{array}{ccc}
0 & 4 & 1 \\
3 & -2 & 1 \\
-1 & 2 & 2
\end{array}\right| = 3\left|\begin{array}{cc}
4 & 1 \\
2 & 2
\end{array}\right| - (-1)\left|\begin{array}{cc}
4 & 1 \\
-2 & 1
\end{array}\right|$$

$$= 3(8-2) + (4+2) = 18 + 6 = 24$$

Therefore:
$$\det A = 6 + 2(24) = 6 + 48 = 54$$

### Part (ii)
For this matrix, we observe that rows 1 and 3 have many zeros. Let's expand about row 3:

$$\det B = 3\left|\begin{array}{ccc}
0 & -1 & 0 \\
4 & 0 & -3 \\
2 & 2 & 1
\end{array}\right| + 1\left|\begin{array}{ccc}
1 & 0 & 0 \\
2 & 4 & -3 \\
5 & 2 & 1
\end{array}\right|$$

For the first 3×3 determinant, expand about row 1:
$$\left|\begin{array}{ccc}
0 & -1 & 0 \\
4 & 0 & -3 \\
2 & 2 & 1
\end{array}\right| = -(-1)\left|\begin{array}{cc}
4 & -3 \\
2 & 1
\end{array}\right| = (4+6) = 10$$

For the second 3×3 determinant, expand about row 1:
$$\left|\begin{array}{ccc}
1 & 0 & 0 \\
2 & 4 & -3 \\
5 & 2 & 1
\end{array}\right| = 1\left|\begin{array}{cc}
4 & -3 \\
2 & 1
\end{array}\right| = 4+6 = 10$$

Therefore:
$$\det B = 3(10) + 1(10) = 30 + 10 = 40$$

## Key Insights
- Strategic choice of expansion row/column can significantly reduce computation
- Look for rows or columns with the most zeros
- When expanding 3×3 determinants, the same principle applies
- The calculations can still be lengthy even with optimal choices

## Alternative Approaches
- Could use row operations to create more zeros before expanding
- Could use the permutation formula directly, but that involves 24 terms for a 4×4 matrix

## Common Mistakes
- Forgetting to alternate signs in the expansion
- Making arithmetic errors in the 2×2 determinant calculations
- Not being systematic about which row/column to expand
- Mixing up the signs when calculating cofactors

## Computational Efficiency
For 4×4 matrices, thoughtful expansion can reduce the problem to computing four 3×3 determinants, each of which can be further reduced to three 2×2 determinants, for a total of 12 simple calculations instead of 24 terms in the permutation formula.
