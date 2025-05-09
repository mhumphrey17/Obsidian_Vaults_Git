---
title: "PS05-Q03-Solution: Computing Determinants using Row/Column Operations"
aliases: ["Solution to PS05 Q03"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-05", "difficulty-warmup", "row-operations", "column-operations", "determinant-calculation"]
related_problem: [[PS05-Q03]]
---

# PS05-Q03-Solution: Computing Determinants using Row/Column Operations

## Original Problem
Compute the following determinants by using elementary row/column operations to convert the matrix to a simpler form, e.g. triangular or blockwise triangular.

(i) $\left|\begin{array}{cccc}1 & 2 & -1 & 0 \\ 0 & 3 & 2 & -1 \\ 2 & -1 & 3 & 0 \\ 1 & 3 & -1 & 2\end{array}\right|$

(ii) $\left|\begin{array}{cccc}1 & 0 & -1 & 0 \\ 2 & 4 & 0 & -3 \\ 3 & 0 & 1 & 0 \\ 5 & 2 & 2 & 1\end{array}\right|$

## Solution Process

### Part (i)

We'll use elementary row operations to convert the matrix to triangular form:

$$\begin{aligned}
\left|\begin{array}{cccc}
1 & 2 & -1 & 0 \\
0 & 3 & 2 & -1 \\
2 & -1 & 3 & 0 \\
1 & 3 & -1 & 2
\end{array}\right| &= \left|\begin{array}{cccc}
1 & 2 & -1 & 0 \\
0 & 3 & 2 & -1 \\
0 & -5 & 5 & 0 \\
0 & 1 & 0 & 2
\end{array}\right| \begin{aligned}
& R_3 - 2R_1 \\
& R_4 - R_1
\end{aligned}
\end{aligned}$$

Next, swap rows 2 and 4, then simplify row 3:

$$\begin{aligned}
&= -\left|\begin{array}{cccc}
1 & 2 & -1 & 0 \\
0 & 1 & 0 & 2 \\
0 & -5 & 5 & 0 \\
0 & 3 & 2 & -1
\end{array}\right| \begin{aligned}
& R_2 \leftrightarrow R_4 \\
& \text{(sign change)}
\end{aligned}
\end{aligned}$$

$$\begin{aligned}
&= -\frac{1}{5}\left|\begin{array}{cccc}
1 & 2 & -1 & 0 \\
0 & 1 & 0 & 2 \\
0 & -1 & 1 & 0 \\
0 & 3 & 2 & -1
\end{array}\right| \begin{aligned}
& \frac{1}{5}R_3 \\
& \text{(factor out 5)}
\end{aligned}
\end{aligned}$$

Continue eliminating to get upper triangular form:

$$\begin{aligned}
&= -5\left|\begin{array}{cccc}
1 & 2 & -1 & 0 \\
0 & 1 & 0 & 2 \\
0 & 0 & 1 & 2 \\
0 & 0 & 2 & -7
\end{array}\right| \begin{aligned}
& R_3 + R_2 \\
& R_4 - 3R_2
\end{aligned}
\end{aligned}$$

$$\begin{aligned}
&= -5\left|\begin{array}{cccc}
1 & 2 & -1 & 0 \\
0 & 1 & 0 & 2 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & -11
\end{array}\right| \begin{aligned}
& R_4 - 2R_3
\end{aligned}
\end{aligned}$$

For an upper triangular matrix, the determinant is the product of diagonal entries:
$$= -5 \cdot 1 \cdot 1 \cdot 1 \cdot (-11) = -5 \cdot (-11) = 55$$

### Part (ii)

For this matrix, we'll use both row and column operations to create a block triangular structure:

First, swap rows and columns to group certain entries:
$$\begin{aligned}
\left|\begin{array}{cccc}
1 & 0 & -1 & 0 \\
2 & 4 & 0 & -3 \\
3 & 0 & 1 & 0 \\
5 & 2 & 2 & 1
\end{array}\right| &= -\left|\begin{array}{cccc}
5 & 2 & 2 & 1 \\
2 & 4 & 0 & -3 \\
3 & 0 & 1 & 0 \\
1 & 0 & -1 & 0
\end{array}\right| \begin{aligned}
& R_1 \leftrightarrow R_4 \\
& \text{(sign change)}
\end{aligned}
\end{aligned}$$

$$\begin{aligned}
&= \left|\begin{array}{cccc}
1 & 2 & 2 & 5 \\
-3 & 4 & 0 & 2 \\
0 & 0 & 1 & 3 \\
0 & 0 & -1 & 1
\end{array}\right| \begin{aligned}
& C_1 \leftrightarrow C_4 \\
& \text{(two sign changes = no change)}
\end{aligned}
\end{aligned}$$

Now we have a block triangular structure. Using the product formula for block triangular matrices:

$$= \left|\begin{array}{cc}
1 & 2 \\
-3 & 4
\end{array}\right| \cdot \left|\begin{array}{cc}
1 & 3 \\
-1 & 1
\end{array}\right|$$

Calculate each 2×2 determinant:
- $\left|\begin{array}{cc}1 & 2 \\ -3 & 4\end{array}\right| = 1 \cdot 4 - 2 \cdot (-3) = 4 + 6 = 10$
- $\left|\begin{array}{cc}1 & 3 \\ -1 & 1\end{array}\right| = 1 \cdot 1 - 3 \cdot (-1) = 1 + 3 = 4$

Therefore:
$$= 10 \cdot 4 = 40$$

## Key Insights
1. Strategic use of row operations can convert matrices to triangular form
2. The sign of the determinant changes with each row/column swap
3. Scaling a row by a factor multiplies the determinant by that factor
4. Block triangular matrices allow us to compute determinants as products of block determinants
5. Sometimes reordering rows and columns can reveal useful structure

## Common Mistakes
1. Forgetting to track sign changes when swapping rows
2. Not properly accounting for row scaling factors
3. Making arithmetic errors in row operations
4. Misidentifying block triangular structure
5. Incorrectly applying the product formula for block matrices
