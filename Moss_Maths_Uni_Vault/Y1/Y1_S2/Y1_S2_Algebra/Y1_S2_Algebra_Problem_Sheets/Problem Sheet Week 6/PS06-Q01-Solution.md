---
title: "PS06-Q01-Solution: Determinant Expansion and Inverse"
aliases: ["Solution to PS6 Q1"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-06", "difficulty-warmup", "determinants", "adjugate", "matrix-inversion"]
related_problem: [[PS06-Q01]]
---

# PS06-Q01-Solution: Determinant Expansion and Inverse

## Original Problem
Find the determinant of $A=\left(\begin{array}{lll}2 & 3 & 4 \\ 1 & 2 & 1 \\ 3 & 4 & 2\end{array}\right)$, by expanding about some row and some column (and check you get the same answer). Find $A^{-1}$.

## Solution Process
### Part 1: Determinant by Column Expansion
Expanding about column 1:

$$\det A = 2\left|\begin{array}{ll}
2 & 1 \\
4 & 2
\end{array}\right|-1\left|\begin{array}{ll}
3 & 4 \\
4 & 2
\end{array}\right|+3\left|\begin{array}{ll}
3 & 4 \\
2 & 1
\end{array}\right|$$

Calculating each 2×2 determinant:
- $\left|\begin{array}{ll}2 & 1 \\ 4 & 2\end{array}\right| = 2 \cdot 2 - 1 \cdot 4 = 0$
- $\left|\begin{array}{ll}3 & 4 \\ 4 & 2\end{array}\right| = 3 \cdot 2 - 4 \cdot 4 = -10$  
- $\left|\begin{array}{ll}3 & 4 \\ 2 & 1\end{array}\right| = 3 \cdot 1 - 4 \cdot 2 = -5$

Therefore: $\det A = 2(0) - 1(-10) + 3(-5) = 0 + 10 - 15 = -5$

### Part 2: Determinant by Row Expansion
Expanding about row 2:

$$\det A = -1\left|\begin{array}{ll}
3 & 4 \\
4 & 2
\end{array}\right|+2\left|\begin{array}{ll}
2 & 4 \\
3 & 2
\end{array}\right|-1\left|\begin{array}{ll}
2 & 3 \\
3 & 4
\end{array}\right|$$

Calculating each 2×2 determinant:
- $\left|\begin{array}{ll}3 & 4 \\ 4 & 2\end{array}\right| = -10$ (as calculated above)
- $\left|\begin{array}{ll}2 & 4 \\ 3 & 2\end{array}\right| = 2 \cdot 2 - 4 \cdot 3 = -8$
- $\left|\begin{array}{ll}2 & 3 \\ 3 & 4\end{array}\right| = 2 \cdot 4 - 3 \cdot 3 = -1$

Therefore: $\det A = -1(-10) + 2(-8) - 1(-1) = 10 - 16 + 1 = -5$

✓ Both expansions give the same result: $\det A = -5$

### Part 3: Finding the Inverse
To find $A^{-1}$, we use the formula: $A^{-1} = \frac{1}{\det A} \operatorname{adj}(A)$

First, we compute the adjugate matrix by finding all cofactors:

The cofactor matrix is:
$$\operatorname{cof}(A) = \left(\begin{array}{ccc}
0 & 1 & -2 \\
10 & -8 & 1 \\
-5 & 2 & 1
\end{array}\right)$$

The adjugate is the transpose of the cofactor matrix:
$$\operatorname{adj}(A) = \left(\begin{array}{ccc}
0 & 10 & -5 \\
1 & -8 & 2 \\
-2 & 1 & 1
\end{array}\right)$$

Therefore:
$$A^{-1} = \frac{1}{\det A} \operatorname{adj}(A) = \frac{1}{-5} \left(\begin{array}{ccc}
0 & 10 & -5 \\
1 & -8 & 2 \\
-2 & 1 & 1
\end{array}\right) = \left(\begin{array}{ccc}
0 & -2 & 1 \\
-\frac{1}{5} & \frac{8}{5} & -\frac{2}{5} \\
\frac{2}{5} & -\frac{1}{5} & -\frac{1}{5}
\end{array}\right)$$

## Key Insights
- The determinant calculation gives the same result regardless of which row or column is used for expansion
- The adjugate matrix is constructed by transposing the cofactor matrix
- For a 3×3 matrix, finding the inverse via the adjugate formula requires calculating 9 different 2×2 determinants

## Alternative Approaches
Could use Gaussian elimination to find both the determinant and the inverse simultaneously, but the adjugate method provides good practice with cofactor calculations.

## Common Mistakes
- Forgetting to alternate signs in the cofactor expansion
- Not transposing the cofactor matrix to get the adjugate
- Arithmetic errors in 2×2 determinant calculations
- Forgetting to divide by the determinant when finding the inverse
