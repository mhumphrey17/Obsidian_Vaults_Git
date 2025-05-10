---
title: "PS08-Q01-Solution: Eigenvalues, Multiplicities, and Diagonalisability (3x3 Examples)"
aliases: ["Solution to PS8 Q1"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-08", "difficulty-warmup", "eigenvalues", "diagonalization"]
related_problem: [[PS08-Q01]]
---

# PS08-Q01-Solution: Eigenvalues, Multiplicities, and Diagonalisability (3x3 Examples)

## Original Problem
Find the algebraic and geometric multiplicities of the eigenvalues of the following matrices.

$$
A=\left(\begin{array}{lll}
2 & 1 & 0 \\
0 & 2 & 1 \\
0 & 0 & 2
\end{array}\right) \quad \text { and } \quad B=\left(\begin{array}{ccc}
5 & 0 & 0 \\
0 & 7 & -1 \\
0 & 4 & 3
\end{array}\right)
$$

Is either of these matrices diagonalisable?

## Solution Process
For matrix A:
1. Calculate the characteristic polynomial:
   $$\Delta_A(t) = \det(A - tI) = \det\left(\begin{array}{lll}2-t & 1 & 0 \\ 0 & 2-t & 1 \\ 0 & 0 & 2-t\end{array}\right)$$
   
   Since A is upper triangular, $\Delta_A(t) = (2-t)^3$.

2. Find eigenvalue and its algebraic multiplicity:
   - Eigenvalue: λ = 2
   - Algebraic multiplicity: a.m.(2) = 3

3. Calculate geometric multiplicity:
   Find the kernel of $A - 2I$:
   $$A - 2I = \left(\begin{array}{lll}0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0\end{array}\right)$$
   
   This matrix has rank 2, so by the Rank-Nullity Theorem, nullity = 1.
   Therefore, g.m.(2) = 1.
   
   The eigenspace is spanned by $(1,0,0)$.

For matrix B:
1. Calculate the characteristic polynomial:
   Since the first column is $(5,0,0)^T$, we can use cofactor expansion along the first column:
   $$\Delta_B(t) = (5-t) \det\left(\begin{array}{cc}7-t & -1 \\ 4 & 3-t\end{array}\right)$$
   $$= (5-t)[(7-t)(3-t) - (-1)(4)]$$
   $$= (5-t)[21 - 10t + t^2 + 4]$$
   $$= (5-t)[t^2 - 10t + 25]$$
   $$= (5-t)(t-5)^2$$
   $$= (5-t)^3$$

2. Find eigenvalue and its algebraic multiplicity:
   - Eigenvalue: λ = 5
   - Algebraic multiplicity: a.m.(5) = 3

3. Calculate geometric multiplicity:
   Find the kernel of $B - 5I$:
   $$B - 5I = \left(\begin{array}{ccc}0 & 0 & 0 \\ 0 & 2 & -1 \\ 0 & 4 & -2\end{array}\right)$$
   
   This matrix has rank 1 (the last two rows are linearly dependent), so nullity = 2.
   Therefore, g.m.(5) = 2.

## Key Insights
- For matrix A: a.m.(2) = 3 but g.m.(2) = 1, so A is **not diagonalisable**
- For matrix B: a.m.(5) = 3 but g.m.(5) = 2, so B is **not diagonalisable**

Both matrices fail the diagonalizability criterion: an eigenvalue has algebraic multiplicity ≠ geometric multiplicity.

## Alternative Approaches
1. For computing eigenspaces, we could directly solve the system $(A - λI)v = 0$ to find eigenvectors explicitly.
2. For triangular matrices, eigenvalues are simply diagonal entries (can be seen directly for matrix A).

## Common Mistakes
- Forgetting that for diagonalizability, we need a.m.(λ) = g.m.(λ) **for all eigenvalues**
- Miscalculating rank when finding the geometric multiplicity
- Assuming upper triangular matrices are automatically diagonalizable
- Not checking the relationship between algebraic and geometric multiplicities

## Notes
- When calculating characteristic polynomials, use the structure of the matrix (e.g., triangular, block structure) to simplify computation
- The Rank-Nullity Theorem is essential for finding geometric multiplicities efficiently
