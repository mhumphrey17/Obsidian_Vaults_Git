---
title: "PS04-Q04-Solution: Rank and Factorization of Matrices"
aliases: ["Solution to PS04 Q04"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-04", "difficulty-homework", "rank", "matrix-factorization", "gaussian-elimination"]
related_problem: [[PS04-Q04]]
---

# PS04-Q04-Solution: Rank and Factorization of Matrices

## Original Problem

Find the ranks and factorizations $A = BC$ with $B$ and $C$ of maximal rank for:

(a) $A = \begin{pmatrix}
1 & 0 & 2 & -1 \\
2 & 0 & 4 & -2 \\
2 & 0 & 4 & -2
\end{pmatrix}$

(b) $A = \begin{pmatrix}
1 & 2 & 1 & 0 \\
2 & 5 & 5 & 1 \\
-2 & -3 & 0 & 3
\end{pmatrix}$

## Solution Process

### Part (a)

**Finding Row Basis:**
- Row 1: $(1, 0, 2, -1)$
- Row 2: $(2, 0, 4, -2) = 2 \times$ Row 1
- Row 3: $(2, 0, 4, -2) = 2 \times$ Row 1

Every row is a multiple of Row 1, so Row 1 forms a basis for the row space.

**Row rank = 1**

**Finding Column Basis:**
- Column 1: $(1, 2, 2)^T$
- Column 2: $(0, 0, 0)^T$ (zero vector)
- Column 3: $(2, 4, 4)^T = 2 \times$ Column 1
- Column 4: $(-1, -2, -2)^T = -1 \times$ Column 1

Every column is a multiple of Column 1, so Column 1 forms a basis for the column space.

**Column rank = 1**

**Factorization:**
$$A = \begin{pmatrix}
1 \\
2 \\
2
\end{pmatrix}\begin{pmatrix}
1 & 0 & 2 & -1
\end{pmatrix}$$

### Part (b)

**Finding Column Basis:**

Let's analyze the columns:
- $c_1 = \begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix}$
- $c_2 = \begin{pmatrix} 2 \\ 5 \\ -3 \end{pmatrix}$  
- $c_3 = \begin{pmatrix} 1 \\ 5 \\ 0 \end{pmatrix}$
- $c_4 = \begin{pmatrix} 0 \\ 1 \\ 3 \end{pmatrix}$

**Step 1:** Check if $c_1$ and $c_2$ are independent.
Neither is a multiple of the other, so they are linearly independent.

**Step 2:** Check if $c_3$ is in span{$c_1, c_2$}.
Solve $c_3 = \lambda_1 c_1 + \lambda_2 c_2$:

$$\begin{pmatrix}
1 & 2 | 1 \\
2 & 5 | 5 \\
-2 & -3 | 0
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 2 | 1 \\
0 & 1 | 3 \\
0 & 1 | 2
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 2 | 1 \\
0 & 1 | 3 \\
0 & 0 | -1
\end{pmatrix}$$

This system is inconsistent, so $c_3 \notin$ span{$c_1, c_2$}.

Therefore, $\{c_1, c_2, c_3\}$ is linearly independent.

**Step 3:** Since we have 3 linearly independent vectors in $\mathbb{F}^3$, they form a maximal linearly independent set and thus a basis for the column space.

**Column rank = 3**

**Step 4:** Find coordinates of $c_4$ in basis $\{c_1, c_2, c_3\}$.
Solve $c_4 = \lambda_1 c_1 + \lambda_2 c_2 + \lambda_3 c_3$:

$$\begin{pmatrix}
1 & 2 & 1 | 0 \\
2 & 5 & 5 | 1 \\
-2 & -3 & 0 | 3
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 0 & 0 | -12 \\
0 & 1 & 0 | 7 \\
0 & 0 & 1 | -2
\end{pmatrix}$$

So $c_4 = -12c_1 + 7c_2 - 2c_3$.

**Factorization:**
$$A = \begin{pmatrix}
1 & 2 & 1 \\
2 & 5 & 5 \\
-2 & -3 & 0
\end{pmatrix}\begin{pmatrix}
1 & 0 & 0 & -12 \\
0 & 1 & 0 & 7 \\
0 & 0 & 1 & -2
\end{pmatrix}$$

**Alternative:** Since the matrix has full rank (rank 3), we can also write $A = I_3 \cdot A$ where $I_3$ is the 3×3 identity matrix.

## Summary

**(a)** rank = 1, $A = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}\begin{pmatrix} 1 & 0 & 2 & -1 \end{pmatrix}$

**(b)** rank = 3, $A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 5 & 5 \\ -2 & -3 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 & 0 & -12 \\ 0 & 1 & 0 & 7 \\ 0 & 0 & 1 & -2 \end{pmatrix}$

## Key Insights

1. **Maximum Rank:** In part (b), the 3×4 matrix achieves the maximum possible rank of 3
2. **Systematic Approach:** Using Gaussian elimination to solve for coordinates is systematic and reliable
3. **Dimension Analysis:** The factorization dimensions match: 3×3 and 3×4 give 3×4
4. **Alternative Formulations:** Full-rank matrices can use identity factorizations

## Common Mistakes

1. Not checking all possible linear combinations when testing independence
2. Making arithmetic errors during row operations
3. Forgetting to verify that factorizations multiply correctly
4. Confusing row operations on the matrix with coordinate calculations
