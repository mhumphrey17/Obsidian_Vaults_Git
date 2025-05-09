---
title: "Symmetric"
aliases: ["Symmetric Matrix", "Real Self-adjoint Matrix"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "concept", "real-matrix", "self-adjoint", "transpose", "orthogonal-diagonalization", "spectral-theorem"]
related_concepts: ["Adjoint", "Self-adjoint", "Hermitian", "Transpose", "Spectral Theorem", "Orthogonal Transformation", "Eigenvalue"]
---

# Symmetric

## Definition
A real matrix $A \in M_{n,n}(\mathbb{R})$ is **symmetric** if $A^T = A$, where $A^T$ is the transpose.

This means $a_{ij} = a_{ji}$ for all $i,j$.

## Properties
1. **Real entries**: All entries are real (by definition)
2. **Real eigenvalues**: All eigenvalues are real
3. **Orthogonal eigenvectors**: Eigenvectors for distinct eigenvalues are orthogonal
4. **Always diagonalizable**: Every symmetric matrix is orthogonally diagonalizable
5. **Normal**: Every symmetric matrix is normal ($A^TA = AA^T$)

## Examples

### Example 1: Basic Symmetric Matrix
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{pmatrix}$$

### Example 2: Diagonal Matrix
$$A = \begin{pmatrix} 3 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$$
Every diagonal matrix is symmetric.

### Example 3: Covariance Matrix
The covariance matrix of a dataset:
$$\Sigma = \frac{1}{n-1}\sum_{i=1}^n (x_i - \bar{x})(x_i - \bar{x})^T$$
is always symmetric and positive semi-definite.

## Spectral Theorem Result
For any symmetric matrix $A$, there exists an orthogonal matrix $P$ such that:
$$P^{-1}AP = P^TAP = D$$
where $D$ is diagonal with real entries (the eigenvalues).

## Identification with Self-adjoint
A matrix $A$ is symmetric if and only if the linear operator $\phi_A: \mathbb{R}^n \rightarrow \mathbb{R}^n$ defined by $\phi_A(x) = Ax$ is self-adjoint with respect to the standard dot product on $\mathbb{R}^n$.

## Construction Properties
- **Sum**: If $A$ and $B$ are symmetric, so is $A + B$
- **Scalar multiplication**: If $A$ is symmetric and $\lambda \in \mathbb{R}$, then $\lambda A$ is symmetric
- **Product**: If $A$ and $B$ are symmetric, $AB$ is symmetric if and only if $A$ and $B$ commute
- **Powers**: If $A$ is symmetric, $A^k$ is symmetric for any positive integer $k$
- **Matrix multiplication**: $AA^T$ is always symmetric for any matrix $A$

## Special Types
- **Positive definite symmetric**: All eigenvalues are positive
- **Positive semi-definite symmetric**: All eigenvalues are non-negative
- **Negative definite symmetric**: All eigenvalues are negative

## Applications
- **Principal Component Analysis**: Based on symmetric covariance matrices
- **Quadratic forms**: $x^TAx$ where $A$ is symmetric
- **Optimization**: Hessian matrices in calculus of variations
- **Physics**: Moment of inertia tensors, stress tensors

## Related Concepts
- [[Hermitian]]: Complex analogue where $A = A^{\dagger}$
- [[Self-adjoint]]: Abstract operator concept that symmetric matrices represent
- [[Normal]]: General class that includes symmetric matrices
- [[Spectral Theorem]]: Main result about orthogonal diagonalizability
- [[Orthogonal Transformation]]: Used to diagonalize symmetric matrices
- [[Adjoint]]: The transpose operation in the real case

## Notes
- Symmetric matrices are perhaps the most important matrices in applications
- They arise naturally in many contexts due to the symmetry of relationships
- Every symmetric matrix is also Hermitian, but not vice versa
- The space of symmetric $n \times n$ matrices has dimension $\frac{n(n+1)}{2}$