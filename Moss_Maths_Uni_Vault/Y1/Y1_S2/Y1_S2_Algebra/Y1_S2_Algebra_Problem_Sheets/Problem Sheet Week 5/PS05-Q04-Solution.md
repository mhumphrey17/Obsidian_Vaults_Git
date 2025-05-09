---
title: "PS05-Q04-Solution: Computing Determinants"
aliases: ["Solution to PS05 Q04"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-05", "difficulty-homework", "determinant-calculation", "row-operations"]
related_problem: [[PS05-Q04]]
---

# PS05-Q04-Solution: Computing Determinants

## Original Problem
Compute the following determinants.

(i) $\left|\begin{array}{cccc}1 & 3 & -1 & 0 \\ 2 & 4 & 0 & -1 \\ 3 & 1 & 1 & -2 \\ 0 & 2 & 2 & 1\end{array}\right|$

(ii) $\left|\begin{array}{cccc}3 & 1 & 6 & 2 \\ 3 & 5 & 11 & 2 \\ 0 & 8 & 11 & 0 \\ 2 & 7 & 9 & 1\end{array}\right|$

## Solution Process

### Part (i)

Use elementary row operations to obtain upper triangular form:

$$\left|\begin{array}{cccc}1 & 3 & -1 & 0 \\ 2 & 4 & 0 & -1 \\ 3 & 1 & 1 & -2 \\ 0 & 2 & 2 & 1\end{array}\right| = \left|\begin{array}{cccc}1 & 3 & -1 & 0 \\ 0 & -2 & 2 & -1 \\ 0 & -8 & 4 & -2 \\ 0 & 2 & 2 & 1\end{array}\right| \begin{aligned} & R_2 - 2R_1 \\ & R_3 - 3R_1 \end{aligned}$$

$$= \left|\begin{array}{cccc}1 & 3 & -1 & 0 \\ 0 & -2 & 2 & -1 \\ 0 & 0 & -4 & 2 \\ 0 & 0 & 4 & 0\end{array}\right| \begin{aligned} & R_3 - 4R_2 \\ & R_4 + R_2 \end{aligned}$$

$$= \left|\begin{array}{cccc}1 & 3 & -1 & 0 \\ 0 & -2 & 2 & -1 \\ 0 & 0 & -4 & 2 \\ 0 & 0 & 0 & 2\end{array}\right| \begin{aligned} & R_4 + R_3 \end{aligned}$$

For an upper triangular matrix, the determinant is the product of diagonal entries:
$$= 1 \cdot (-2) \cdot (-4) \cdot 2 = 16$$

### Part (ii)

Use elementary row operations and column operations to convert to block triangular form:

$$\left|\begin{array}{cccc}3 & 1 & 6 & 2 \\ 3 & 5 & 11 & 2 \\ 0 & 8 & 11 & 0 \\ 2 & 7 & 9 & 1\end{array}\right| = \left|\begin{array}{cccc}3 & 1 & 6 & 2 \\ 0 & 4 & 5 & 0 \\ 0 & 8 & 11 & 0 \\ 2 & 7 & 9 & 1\end{array}\right| \begin{aligned} & R_2 - R_1 \end{aligned}$$

$$= \left|\begin{array}{cccc}3 & 1 & 6 & 2 \\ 2 & 7 & 9 & 1 \\ 0 & 8 & 11 & 0 \\ 0 & 4 & 5 & 0\end{array}\right| \begin{aligned} & R_2 \leftrightarrow R_4 \end{aligned}$$

$$= -\left|\begin{array}{cccc}3 & 2 & 6 & 1 \\ 2 & 1 & 9 & 7 \\ 0 & 0 & 11 & 8 \\ 0 & 0 & 5 & 4\end{array}\right| \begin{aligned} & C_2 \leftrightarrow C_4 \end{aligned}$$

Now we have a block triangular matrix. Using the product formula for block triangular matrices:

$$= -\left|\begin{array}{cc}3 & 2 \\ 2 & 1\end{array}\right| \cdot \left|\begin{array}{cc}11 & 8 \\ 5 & 4\end{array}\right|$$

Calculate each 2×2 determinant:
- $\left|\begin{array}{cc}3 & 2 \\ 2 & 1\end{array}\right| = 3 \cdot 1 - 2 \cdot 2 = 3 - 4 = -1$
- $\left|\begin{array}{cc}11 & 8 \\ 5 & 4\end{array}\right| = 11 \cdot 4 - 8 \cdot 5 = 44 - 40 = 4$

Therefore:
$$= -(-1) \cdot 4 = 4$$

## Key Insights
1. Systematic elimination creates triangular structure efficiently
2. Block triangular form allows computation as product of smaller determinants
3. Careful tracking of sign changes and factors is essential
4. Different strategies (row operations, column operations, or combinations) can simplify calculations

## Alternative Approaches
- Could expand along a row or column with many zeros
- Could use Gaussian elimination completely to upper triangular form
- Could identify patterns in matrix structure to find shortcuts

## Common Mistakes
1. Arithmetic errors during row operations
2. Forgetting to track sign changes from row swaps
3. Incorrect application of determinant properties
4. Misapplying the block triangular formula
