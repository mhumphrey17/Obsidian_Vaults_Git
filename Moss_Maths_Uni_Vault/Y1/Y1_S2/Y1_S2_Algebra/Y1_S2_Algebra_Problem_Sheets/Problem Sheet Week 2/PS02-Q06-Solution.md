---
title: "PS02-Q06-Solution: Linear Independence of Orthonormal Vectors"
aliases: ["Solution to PS02 Q06"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-02", "difficulty-advanced", "orthonormal", "inner-product", "linear-independence"]
related_problem: [[PS02-Q06]]
---

# PS02-Q06-Solution: Linear Independence of Orthonormal Vectors

## Original Problem

Prove that any orthonormal list of vectors $\mathbf{x}_1, \ldots, \mathbf{x}_k \in \mathbb{F}^n$ is linearly independent, where orthonormal means:

$$\mathbf{x}_i^T \mathbf{x}_j = \begin{cases}
1 & \text{if } i = j \\
0 & \text{otherwise}
\end{cases}$$

## Solution Process

**Setup:** Suppose we have a linear dependence relation:
$$\sum_{j=1}^{k} \lambda_j \mathbf{x}_j = \mathbf{0}$$

for some scalars $\lambda_1, \ldots, \lambda_k \in \mathbb{F}$.

**Key Insight:** Take the inner product of both sides with $\mathbf{x}_i$ for any fixed $i \in \{1, \ldots, k\}$.

**Left side:**
$$\mathbf{x}_i^T \left(\sum_{j=1}^{k} \lambda_j \mathbf{x}_j\right) = \sum_{j=1}^{k} \lambda_j (\mathbf{x}_i^T \mathbf{x}_j)$$

Using the orthonormality condition:
- When $j = i$: $\mathbf{x}_i^T \mathbf{x}_i = 1$
- When $j \neq i$: $\mathbf{x}_i^T \mathbf{x}_j = 0$

Therefore:
$$\sum_{j=1}^{k} \lambda_j (\mathbf{x}_i^T \mathbf{x}_j) = \lambda_i \cdot 1 + \sum_{j \neq i} \lambda_j \cdot 0 = \lambda_i$$

**Right side:**
$$\mathbf{x}_i^T \mathbf{0} = 0$$

**Conclusion:**
$$\lambda_i = 0$$

Since this holds for any $i \in \{1, \ldots, k\}$, we have $\lambda_j = 0$ for all $j = 1, \ldots, k$.

This proves that the only linear dependence relation is the trivial one, so $\mathbf{x}_1, \ldots, \mathbf{x}_k$ are linearly independent. ∎

## Key Insights

1. **Orthogonality as a Tool**: The orthogonality conditions allow us to isolate individual coefficients
2. **Inner Product Properties**: The linear dependence test works because the inner product is linear in both arguments
3. **Field Independence**: This result holds for any field $\mathbb{F}$, not just real or complex numbers
4. **Geometric Intuition**: Orthonormal vectors point in "completely different directions" with unit length

## Alternative Proofs

**Matrix Approach:**
Form the matrix $A$ with columns $\mathbf{x}_1, \ldots, \mathbf{x}_k$. Then $A^T A = I_k$ (the $k \times k$ identity matrix). Since $A^T A$ is invertible, the columns of $A$ are linearly independent.

**Determinant Method:**
The Gram matrix $G_{ij} = \mathbf{x}_i^T \mathbf{x}_j$ of an orthonormal set is the identity matrix. Since $\det(I) = 1 \neq 0$, the vectors are linearly independent.

## Applications

1. **Basis Construction**: Orthonormal sets automatically form bases for their span
2. **Numerical Stability**: Orthonormal bases are numerically well-conditioned
3. **Quantum Mechanics**: Quantum states are represented by orthonormal vectors
4. **Signal Processing**: Fourier transforms use orthonormal basis functions

## Extensions

- This result generalizes to infinite-dimensional spaces (Hilbert spaces)
- It forms the foundation for the Gram-Schmidt orthogonalization process
- Orthonormal bases are optimal for many computational algorithms

## Common Mistakes

1. Forgetting to use the orthonormality conditions systematically
2. Not considering all indices in the proof
3. Assuming the result only works for real vectors
4. Confusing orthogonal (only perpendicular) with orthonormal (perpendicular and unit length)
