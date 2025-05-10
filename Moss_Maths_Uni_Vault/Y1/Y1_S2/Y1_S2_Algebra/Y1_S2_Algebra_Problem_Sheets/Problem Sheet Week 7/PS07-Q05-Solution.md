---
title: "PS07-Q05-Solution: Invertibility and Eigenvalues of Inverse"
aliases: ["Solution to PS7 Q5"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-07", "difficulty-homework", "invertibility", "eigenvalues", "matrix-inverse"]
related_problem: [[PS07-Q05]]
---

# PS07-Q05-Solution: Invertibility and Eigenvalues of Inverse

## Original Problem
Let $A$ be a square matrix.

(i) Show that $A$ is invertible if and only if 0 is not an eigenvalue of $A$.
(ii) If $A$ is invertible and $\lambda$ is an eigenvalue of $A$, show that $\lambda^{-1}$ is an eigenvalue of $A^{-1}$.

## Solution Process

### Part (i): Invertibility ⟺ 0 not an eigenvalue

**Method 1: Using Rank-Nullity Theorem**

($\Rightarrow$) Suppose $A$ is invertible. Then:
- $A$ has full rank (rank $n$ for an $n \times n$ matrix)
- By Rank-Nullity Theorem: $\dim(\ker A) = n - \text{rank}(A) = n - n = 0$
- Therefore $\ker A = \{0\}$
- This means there is no non-zero vector $\mathbf{v}$ such that $A\mathbf{v} = 0\mathbf{v}$
- Hence 0 is not an eigenvalue of $A$

($\Leftarrow$) Suppose 0 is not an eigenvalue of $A$. Then:
- There is no non-zero vector $\mathbf{v}$ such that $A\mathbf{v} = 0$
- Therefore $\ker A = \{0\}$, so $\dim(\ker A) = 0$
- By Rank-Nullity Theorem: $\text{rank}(A) = n - \dim(\ker A) = n - 0 = n$
- Therefore $A$ has full rank and is invertible

**Method 2: Using Determinant**

Note that $\lambda = 0$ is an eigenvalue of $A$ if and only if:
$$\det(A - 0I) = \det(A) = 0$$

This occurs if and only if $A$ is not invertible.

Therefore, 0 is not an eigenvalue of $A$ if and only if $\det(A) \neq 0$ if and only if $A$ is invertible.

### Part (ii): Eigenvalues of $A^{-1}$

Given:
- $A$ is invertible
- $\lambda$ is an eigenvalue of $A$
- $\mathbf{v}$ is an eigenvector corresponding to $\lambda$

So we have: $A\mathbf{v} = \lambda\mathbf{v}$ with $\mathbf{v} \neq 0$

Since $A$ is invertible, we can multiply both sides by $A^{-1}$:
$$A^{-1}(A\mathbf{v}) = A^{-1}(\lambda\mathbf{v})$$
$$\mathbf{v} = \lambda A^{-1}\mathbf{v}$$

Since $\lambda \neq 0$ (from part (i), as $A$ is invertible), we can divide by $\lambda$:
$$\frac{1}{\lambda}\mathbf{v} = A^{-1}\mathbf{v}$$
$$A^{-1}\mathbf{v} = \lambda^{-1}\mathbf{v}$$

This shows that $\mathbf{v}$ is an eigenvector of $A^{-1}$ with eigenvalue $\lambda^{-1}$.

## Key Insights
- The kernel (null space) of a matrix is directly related to its eigenvalues
- Invertibility is equivalent to having trivial kernel
- Eigenvalues of inverse matrices are reciprocals of the original eigenvalues
- Eigenvectors remain the same when passing to the inverse matrix

## Alternative Approaches
- Could use characteristic polynomials: if $\lambda_1, \ldots, \lambda_n$ are eigenvalues of $A$, then $\det(A) = \lambda_1 \cdots \lambda_n$
- Could verify using specific examples with 2×2 matrices
- Could use the spectral theorem for diagonalizable matrices

## Common Mistakes
- Forgetting that $\lambda \neq 0$ when $A$ is invertible
- Confusing the direction of the biconditional in part (i)
- Not properly justifying that eigenvectors remain the same
- Assuming $A$ is diagonalizable

## Theoretical Significance
- This result is fundamental to understanding the spectral properties of matrices
- It connects algebraic properties (eigenvalues) with geometric properties (invertibility)
- It's crucial for applications in differential equations, Markov chains, and quantum mechanics
