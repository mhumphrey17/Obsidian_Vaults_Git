---
title: "2023-Q05-Solution: Eigenvalues and Orthogonal Diagonalization"
aliases: ["Solution to Past Paper 2023 Q5"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2023-exam", "section-a", "q5", "eigenvalues", "diagonalization"]
related_question: [[2023-Q05]]
solution_approach: "Characteristic polynomial computation and orthogonal eigenbasis construction"
key_techniques: ["Block determinant", "Symmetric matrix properties", "Orthonormal basis construction"]
common_mistakes: ["Arithmetic errors in characteristic polynomial", "Forgetting to normalize eigenvectors"]
---

# 2023-Q05-Solution: Eigenvalues and Orthogonal Diagonalization

## Original Question
Let
$$A = \begin{pmatrix} 4 & 0 & 0 \\ 0 & 3 & 2 \\ 0 & 2 & 3 \end{pmatrix}$$

(a) Compute the eigenvalues and their algebraic and geometric multiplicities.
(b) Find an orthogonal matrix P that diagonalises A.

## Solution Process

### Part (a): Eigenvalues and Multiplicities

**Step 1: Compute the characteristic polynomial**

$$\det(A - tI) = \begin{vmatrix} 4-t & 0 & 0 \\ 0 & 3-t & 2 \\ 0 & 2 & 3-t \end{vmatrix}$$

Using the block structure (first row/column has zeros except diagonal):
$$= (4-t) \begin{vmatrix} 3-t & 2 \\ 2 & 3-t \end{vmatrix}$$

$$= (4-t)[(3-t)^2 - 4]$$
$$= (4-t)[9 - 6t + t^2 - 4]$$
$$= (4-t)[t^2 - 6t + 5]$$
$$= (4-t)(t-1)(t-5)$$

**Step 2: Identify eigenvalues and algebraic multiplicities**

The eigenvalues are: $\lambda_1 = 4$, $\lambda_2 = 1$, $\lambda_3 = 5$

Each has algebraic multiplicity = 1 (simple roots).

**Step 3: Compute geometric multiplicities**

For each eigenvalue, we need to find $\dim \text{ker}(A - \lambda I)$.

Since $1 \leq \text{g.m.}(\lambda) \leq \text{a.m.}(\lambda) = 1$ for each eigenvalue,
the geometric multiplicity of each eigenvalue is also 1.

### Part (b): Orthogonal Matrix Diagonalization

**Step 1: Find eigenvectors**

For $\lambda = 4$:
$$(A - 4I)x = 0 \Rightarrow \begin{pmatrix} 0 & 0 & 0 \\ 0 & -1 & 2 \\ 0 & 2 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = 0$$

This gives $-x_2 + 2x_3 = 0$ and $2x_2 - x_3 = 0$, so $x_2 = x_3 = 0$.
Eigenvector: $v_1 = (1, 0, 0)$

For $\lambda = 5$:
$$(A - 5I)x = 0 \Rightarrow \begin{pmatrix} -1 & 0 & 0 \\ 0 & -2 & 2 \\ 0 & 2 & -2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = 0$$

This gives $x_1 = 0$ and $x_2 = x_3$.
Eigenvector: $v_2 = (0, 1, 1)$

For $\lambda = 1$:
$$(A - 1I)x = 0 \Rightarrow \begin{pmatrix} 3 & 0 & 0 \\ 0 & 2 & 2 \\ 0 & 2 & 2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = 0$$

This gives $x_1 = 0$ and $x_2 = -x_3$.
Eigenvector: $v_3 = (0, 1, -1)$

**Step 2: Verify orthogonality**

Check that the eigenvectors are mutually orthogonal:
- $v_1 \cdot v_2 = (1,0,0) \cdot (0,1,1) = 0$ ✓
- $v_1 \cdot v_3 = (1,0,0) \cdot (0,1,-1) = 0$ ✓  
- $v_2 \cdot v_3 = (0,1,1) \cdot (0,1,-1) = 0$ ✓

(This is expected since A is symmetric - [[LEM-5.2.12]])

**Step 3: Normalize the eigenvectors**

- $\|v_1\| = 1$, so $u_1 = v_1 = (1,0,0)$
- $\|v_2\| = \sqrt{1^2 + 1^2} = \sqrt{2}$, so $u_2 = \frac{1}{\sqrt{2}}(0,1,1)$
- $\|v_3\| = \sqrt{1^2 + (-1)^2} = \sqrt{2}$, so $u_3 = \frac{1}{\sqrt{2}}(0,1,-1)$

**Step 4: Construct the orthogonal matrix P**

$$P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ 0 & \frac{1}{\sqrt{2}} & \frac{-1}{\sqrt{2}} \end{pmatrix}$$

And P diagonalizes A with:
$$P^{-1}AP = \begin{pmatrix} 4 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

## Key Insights

1. **Block Structure**: The matrix A has a natural block structure that simplifies determinant calculation
2. **Symmetric Property**: Since A is symmetric, orthogonal diagonalization is guaranteed
3. **Simple Eigenvalues**: All eigenvalues have multiplicity 1, making the problem straightforward
4. **Automatic Orthogonality**: Eigenvectors for distinct eigenvalues of a symmetric matrix are automatically orthogonal

## Alternative Approaches

For part (a), could use cofactor expansion directly, but the block structure method is more efficient.

## Common Errors

1. **Determinant Calculation**: Expanding incorrectly or making arithmetic errors
2. **Solving Eigenvalue Equations**: Errors in solving $(A - \lambda I)x = 0$
3. **Normalization**: Forgetting to normalize eigenvectors or making calculation errors
4. **Matrix Order**: Mixing up the order of eigenvalues and eigenvectors in P

## Notes

- This problem showcases the power of the [[Spectral Theorem]] for symmetric matrices
- The special structure of A (block diagonal-like) makes computation easier
- In applications, such matrices often arise from quadratic forms or coupled systems
