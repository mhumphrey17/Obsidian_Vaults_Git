---
title: "PS08-Q04-Solution: Eigenvalues, Multiplicities, Diagonalisation, and P Matrix"
aliases: ["Solution to PS8 Q4"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-08", "difficulty-homework", "eigenvalues", "diagonalization"]
related_problem: [[PS08-Q04]]
---

# PS08-Q04-Solution: Eigenvalues, Multiplicities, Diagonalisation, and P Matrix

## Original Problem
Find the eigenvalues of the following matrices and their algebraic and geometric multiplicities. In each case, say whether the matrix is diagonalisable (and why). If it is diagonalisable, find an invertible matrix $P$ such that $P^{-1}AP$ is diagonal.

$$\text{(i) } A = \left(\begin{array}{ccc}
3 & 1 & -1 \\
-1 & 2 & 1 \\
0 & 1 & 2
\end{array}\right) \quad \text{(ii) } A = \left(\begin{array}{lll}
4 & 0 & 1 \\
2 & 3 & 2 \\
1 & 0 & 4
\end{array}\right)$$

## Solution Process

### Part (i): Matrix A
1. Find the characteristic polynomial $\Delta_A(t) = \det(A - tI)$:
   $$A - tI = \left(\begin{array}{ccc}
   3-t & 1 & -1 \\
   -1 & 2-t & 1 \\
   0 & 1 & 2-t
   \end{array}\right)$$
   
   Expanding along the first column:
   $$\Delta_A(t) = (3-t)\left|\begin{array}{cc}2-t & 1 \\ 1 & 2-t\end{array}\right| - (-1)\left|\begin{array}{cc}1 & -1 \\ 1 & 2-t\end{array}\right|$$
   $$= (3-t)[(2-t)^2 - 1] + [1(2-t) - (-1)(1)]$$
   $$= (3-t)[(2-t)^2 - 1] + (2-t) + 1$$
   $$= (3-t)(2-t)^2$$

2. Find eigenvalues and their algebraic multiplicities:
   - λ = 3 with a.m.(3) = 1
   - λ = 2 with a.m.(2) = 2

3. Find geometric multiplicities:
   
   For λ = 3: Solve $(A - 3I)v = 0$
   $$A - 3I = \left(\begin{array}{ccc}
   0 & 1 & -1 \\
   -1 & -1 & 1 \\
   0 & 1 & -1
   \end{array}\right)$$
   
   This has rank 2, so g.m.(3) = 1. One eigenvector is $(1,0,0)$.
   
   For λ = 2: Solve $(A - 2I)v = 0$
   $$A - 2I = \left(\begin{array}{ccc}
   1 & 1 & -1 \\
   -1 & 0 & 1 \\
   0 & 1 & 0
   \end{array}\right)$$
   
   This has rank 2 (the first two columns are linearly independent), so g.m.(2) = 1.
   One eigenvector is $(1,0,1)$.

4. Since g.m.(2) = 1 < 2 = a.m.(2), matrix A is **not diagonalisable**.

### Part (ii): Matrix A
1. Find the characteristic polynomial $\Delta_A(t) = \det(A - tI)$:
   $$A - tI = \left(\begin{array}{ccc}
   4-t & 0 & 1 \\
   2 & 3-t & 2 \\
   1 & 0 & 4-t
   \end{array}\right)$$
   
   Expanding along the second column:
   $$\Delta_A(t) = (3-t)\left|\begin{array}{cc}4-t & 1 \\ 1 & 4-t\end{array}\right|$$
   $$= (3-t)[(4-t)^2 - 1]$$
   $$= (3-t)(16 - 8t + t^2 - 1)$$
   $$= (3-t)(t^2 - 8t + 15)$$
   $$= (3-t)(t-3)(t-5)$$
   $$= (3-t)^2(5-t)$$

2. Find eigenvalues and their algebraic multiplicities:
   - λ = 5 with a.m.(5) = 1
   - λ = 3 with a.m.(3) = 2

3. Find geometric multiplicities:
   
   For λ = 3: Solve $(A - 3I)v = 0$
   $$A - 3I = \left(\begin{array}{lll}
   1 & 0 & 1 \\
   2 & 0 & 2 \\
   1 & 0 & 1
   \end{array}\right)$$
   
   This has rank 1, so g.m.(3) = 2. Two linearly independent eigenvectors are $(0,1,0)$ and $(1,0,-1)$.
   
   For λ = 5: We must have g.m.(5) = 1 since a.m.(5) = 1.

4. Since g.m.(λ) = a.m.(λ) for both eigenvalues, matrix A is **diagonalisable**.

5. Find the diagonalizing matrix P:
   
   For λ = 5: Solve $(A - 5I)v = 0$
   $$A - 5I = \left(\begin{array}{ccc}
   -1 & 0 & 1 \\
   2 & -2 & 2 \\
   1 & 0 & -1
   \end{array}\right)$$
   
   One eigenvector is $(1,2,1)$.
   
   Therefore, the matrix P with columns as the eigenvectors is:
   $$P = \left(\begin{array}{ccc}
   0 & 1 & 1 \\
   1 & 0 & 2 \\
   0 & -1 & 1
   \end{array}\right)$$

## Key Insights
- Matrix (i) fails diagonalizability test due to multiplicity mismatch for λ = 2
- Matrix (ii) is diagonalisable with P constructed from eigenvectors
- The characteristic polynomial of matrix (ii) factors nicely, showing the geometric structure

## Alternative Approaches
1. We could verify our P matrix by computing P^{-1}AP and checking it's diagonal
2. For finding eigenvectors, we could use more systematic row reduction methods

## Common Mistakes
- Miscalculating ranks when finding geometric multiplicities
- Incorrect characteristic polynomial computation (especially signs)
- Ordering eigenvalues/eigenvectors inconsistently when forming P
- Forgetting that all eigenvalues must satisfy a.m. = g.m. for diagonalizability

## Notes
- The matrix P can be constructed in different ways (different choices of eigenvectors)
- When checking if P^{-1}AP is diagonal, det(P) ≠ 0 is guaranteed by eigenvector independence
