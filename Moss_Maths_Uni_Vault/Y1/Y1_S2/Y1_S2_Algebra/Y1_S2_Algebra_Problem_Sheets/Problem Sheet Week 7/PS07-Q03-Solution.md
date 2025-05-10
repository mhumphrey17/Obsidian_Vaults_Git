---
title: "PS07-Q03-Solution: Eigenvalues, Diagonalisation, Matrix Power, Equivalence vs Similarity (3x3)"
aliases: ["Solution to PS7 Q3"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-07", "difficulty-homework", "eigenvalues", "diagonalization", "matrix-powers", "equivalence", "similarity"]
related_problem: [[PS07-Q03]]
---

# PS07-Q03-Solution: Eigenvalues, Diagonalisation, Matrix Power, Equivalence vs Similarity (3x3)

## Original Problem
Let $A=\left(\begin{array}{ccc}-1 & 2 & 0 \\ 1 & -1 & 2 \\ 0 & 1 & -1\end{array}\right), \quad B=\left(\begin{array}{ccc}3 & -1 & 1 \\ 0 & 2 & 0 \\ 1 & -1 & 3\end{array}\right) \quad \in M_{3,3}(\mathbb{R})$.

(i) Find the eigenvalues of $A$ and $B$.
(ii) Find invertible matrices $P$ and $Q$ such that $P^{-1} A P$ and $Q^{-1} B Q$ are diagonal.
(iii) Find an explicit formula for $A^{n}$.
(iv) Are $A$ and $B$ equivalent? Are they similar?

## Solution Process

### Part (i): Finding Eigenvalues

**For matrix $A$:**
$$\Delta_A(t) = \left|\begin{array}{ccc}
-1-t & 2 & 0 \\
1 & -1-t & 2 \\
0 & 1 & -1-t
\end{array}\right|$$

Expanding along the first row:
$$= (-1-t)\left|\begin{array}{cc}-1-t & 2 \\ 1 & -1-t\end{array}\right| - 2\left|\begin{array}{cc}1 & 2 \\ 0 & -1-t\end{array}\right|$$

$$= (-1-t)((1+t)^2 - 2) - 2(-(1+t))$$
$$= (-1-t)(t^2 + 2t - 1) + 2(1+t)$$
$$= -t^3 - 3t^2 + t + 3$$
$$= -(t+1)(t-1)(t+3)$$

Therefore, eigenvalues of $A$: $\lambda_1 = 1, \lambda_2 = -1, \lambda_3 = -3$

Since we have 3 distinct eigenvalues, $A$ is diagonalizable.

**For matrix $B$:**
$$\Delta_B(t) = \left|\begin{array}{ccc}
3-t & -1 & 1 \\
0 & 2-t & 0 \\
1 & -1 & 3-t
\end{array}\right|$$

Expanding along the second row:
$$= (2-t)\left|\begin{array}{cc}3-t & 1 \\ 1 & 3-t\end{array}\right|$$
$$= (2-t)((3-t)^2 - 1)$$
$$= (2-t)(t^2 - 6t + 8)$$
$$= -(t-2)^2(t-4)$$

Therefore, eigenvalues of $B$: $\lambda_1 = 2$ (multiplicity 2), $\lambda_2 = 4$

### Part (ii): Finding Diagonalizing Matrices

**For matrix $A$:**

For $\lambda = 1$: Solve $(A - I)\mathbf{v} = 0$
$$\left(\begin{array}{ccc}-2 & 2 & 0 \\ 1 & -2 & 2 \\ 0 & 1 & -2\end{array}\right)\begin{pmatrix}v_1 \\ v_2 \\ v_3\end{pmatrix} = \begin{pmatrix}0 \\ 0 \\ 0\end{pmatrix}$$

Eigenvector: $\mathbf{v}_1 = (2, 2, 1)$

For $\lambda = -1$: Solve $(A + I)\mathbf{v} = 0$
Eigenvector: $\mathbf{v}_2 = (-2, 0, 1)$

For $\lambda = -3$: Solve $(A + 3I)\mathbf{v} = 0$
Eigenvector: $\mathbf{v}_3 = (2, -2, 1)$

Therefore:
$$P = \left(\begin{array}{ccc}2 & -2 & 2 \\ 2 & 0 & -2 \\ 1 & 1 & 1\end{array}\right), \quad P^{-1} = \frac{1}{8}\left(\begin{array}{ccc}1 & 2 & 2 \\ -2 & 0 & 4 \\ 1 & -2 & 2\end{array}\right)$$

$$D = \left(\begin{array}{ccc}1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & -3\end{array}\right)$$

**For matrix $B$:**

For $\lambda = 2$: The eigenspace is 2-dimensional with basis vectors:
$\mathbf{v}_1 = (1, 1, 0)$ and $\mathbf{v}_2 = (-1, 0, 1)$

For $\lambda = 4$: Eigenvector: $\mathbf{v}_3 = (1, 0, 1)$

Therefore:
$$Q = \left(\begin{array}{ccc}1 & -1 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 1\end{array}\right), \quad Q^{-1} = \frac{1}{2}\left(\begin{array}{ccc}0 & 2 & 0 \\ -1 & 1 & 1 \\ 1 & -1 & 1\end{array}\right)$$

$$D' = \left(\begin{array}{ccc}2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 4\end{array}\right)$$

### Part (iii): Formula for $A^n$

Since $A = PDP^{-1}$:
$$A^n = PD^nP^{-1} = \frac{1}{8}\left(\begin{array}{ccc}2 & -2 & 2 \\ 2 & 0 & -2 \\ 1 & 1 & 1\end{array}\right)\left(\begin{array}{ccc}1 & 0 & 0 \\ 0 & (-1)^n & 0 \\ 0 & 0 & (-3)^n\end{array}\right)\left(\begin{array}{ccc}1 & 2 & 2 \\ -2 & 0 & 4 \\ 1 & -2 & 2\end{array}\right)$$

After computation:
$$A^n = \frac{1}{8}\left(\begin{array}{ccc}
2+4(-1)^n+2(-3)^n & 4-4(-3)^n & 4+8(-1)^n+4(-3)^n \\
2-2(-3)^n & 4+4(-3)^n & 4-4(-3)^n \\
1-2(-1)^n+(-3)^n & 2-(-3)^n & 2+4(-1)^n+(-3)^n
\end{array}\right)$$

### Part (iv): Equivalence and Similarity

**Matrix Equivalence:**
Both $A$ and $B$ have rank 3 (they're invertible), so they are equivalent.

**Matrix Similarity:**
For similarity, matrices must have the same eigenvalues (counting multiplicity):
- $A$ has eigenvalues: 1, -1, -3
- $B$ has eigenvalues: 2, 2, 4

Since the eigenvalues are different, $A$ and $B$ are not similar.

(We can also check: $\det(A) = 3$ and $\det(B) = 16$, confirming they're not similar.)

## Key Insights
- 3×3 characteristic polynomials can be computed systematically using cofactor expansion
- Multiple eigenvalues require checking algebraic vs geometric multiplicity
- Eigenvalues completely determine similarity up to field considerations
- Equivalence only requires equal rank, while similarity requires identical eigenvalues

## Alternative Approaches
- Could use row operations to compute determinants more efficiently
- Could verify diagonalization by direct computation
- Could use the fact that trace and determinant are invariants under similarity

## Common Mistakes
- Computational errors in 3×3 determinants
- Not checking that eigenvectors are linearly independent
- Confusing equivalence and similarity conditions
- Arithmetic errors in matrix multiplication
