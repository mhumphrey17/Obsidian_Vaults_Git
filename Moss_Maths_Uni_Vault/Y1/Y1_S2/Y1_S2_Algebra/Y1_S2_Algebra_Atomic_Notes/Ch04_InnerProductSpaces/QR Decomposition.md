---
title: "QR Decomposition"
aliases: ["QR Factorization", "QR Factorisation", "Orthogonal-Triangular Decomposition"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "theorem", "matrix-decomposition", "orthogonal-matrix", "numerical-analysis", "gram-schmidt", "upper-triangular-matrix", "least-squares", "linear-algebra"]
related_concepts: ["Gram-Schmidt Orthogonalization", "Orthogonal Matrix", "Upper Triangular Matrix", "Matrix Decomposition", "Least Squares", "Inner Product Space", "Field"]
---

# QR Decomposition

## Theorem Statement
Let $A \in M_{n,n}(\mathbb{R})$ be an invertible matrix. Then $A$ can be uniquely written as:
$$A = QR$$
where:
- $Q$ is an orthogonal matrix ($Q^T Q = I_n$)
- $R$ is an upper triangular matrix with positive entries on the diagonal

## Construction via Gram-Schmidt

The QR decomposition is constructed using the [[Gram-Schmidt Orthogonalization]] process:

1. Let $\mathbf{v}_1, \ldots, \mathbf{v}_n$ be the column vectors of $A$
2. Apply Gram-Schmidt to get orthonormal vectors $\mathbf{u}_1, \ldots, \mathbf{u}_n$
3. Form $Q$ with columns $\mathbf{u}_1, \ldots, \mathbf{u}_n$
4. Define $R$ by the relationship: $A = QR$, so $R = Q^T A$

## Explicit Formula for R

From the Gram-Schmidt process, we get:
- $R_{ii} = \|\mathbf{w}_i\|$ (where $\mathbf{w}_i$ is the $i$-th unnormalized vector in Gram-Schmidt)
- $R_{ij} = \langle \mathbf{u}_i, \mathbf{v}_j \rangle$ for $i < j$
- $R_{ij} = 0$ for $i > j$ (upper triangular)

## Example: 2×2 Matrix

Let $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.

**Step 1**: Apply Gram-Schmidt to columns:
- $\mathbf{v}_1 = (1,0)$, $\mathbf{v}_2 = (1,1)$
- $\mathbf{u}_1 = (1,0)$ (already normalized)
- $\mathbf{w}_2 = (1,1) - \langle (1,0), (1,1) \rangle (1,0) = (1,1) - 1 \cdot (1,0) = (0,1)$
- $\mathbf{u}_2 = (0,1)$

**Step 2**: Form matrices:
$$Q = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad R = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$$

Verify: $QR = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = A$ ✓

## Properties

### Uniqueness
The QR decomposition is unique for invertible matrices when $R$ has positive diagonal entries.

### Computational Method
Instead of applying Gram-Schmidt and then computing $R$, we can use:
$$R = Q^T A$$
which is often more numerically stable.

### Generalizations
- For non-square matrices: $A \in M_{m,n}(\mathbb{R})$ with $m \geq n$
- For complex matrices: $Q$ becomes unitary ($Q^* Q = I$)
- For singular matrices: Requires modified approaches

## Geometric Interpretation
- $Q$ represents an orthonormal change of basis
- $R$ encodes the relationships between original and orthonormal bases
- The decomposition separates the "rotation/reflection" part ($Q$) from the "stretching" part ($R$)

## Applications

### Least Squares Problems
To solve $Ax = b$ in the least squares sense:
1. Compute $A = QR$
2. Solve $Rx = Q^T b$ (which is triangular, hence easy)

### Eigenvalue Algorithms
The QR algorithm iteratively applies QR decomposition to find eigenvalues.

### Linear Systems
For well-conditioned systems, QR can be more stable than LU decomposition.

### Computer Graphics
Useful for extracting rotation and scaling components from transformation matrices.

## Computational Complexity
- Using Gram-Schmidt: $O(mn^2)$ for an $m \times n$ matrix
- Using Householder reflections: $O(mn^2 - n^3/3)$ with better numerical stability
- Using Givens rotations: $O(mn^2)$ with advantages for sparse matrices

## Numerical Considerations

### Stability
Standard Gram-Schmidt can be numerically unstable. Better approaches include:
- Modified Gram-Schmidt
- Householder reflections
- Givens rotations

### Condition Number
The orthogonal matrix $Q$ has condition number 1, making QR decomposition numerically stable for well-conditioned problems.

## Related Decompositions
- **LU Decomposition**: $A = LU$ (lower × upper triangular)
- **Cholesky Decomposition**: $A = LL^T$ (for positive definite matrices)
- **Singular Value Decomposition**: $A = U\Sigma V^T$ (more general)

## Related Concepts
- [[Gram-Schmidt Orthogonalization]]: The primary construction method
- [[Orthogonal Matrix]]: Properties of the $Q$ factor
- [[Upper Triangular Matrix]]: Properties of the $R$ factor
- [[Least Squares]]: Major application area
- [[Eigenvalue]]: Used in eigenvalue algorithms

## Extensions
- **Reduced QR**: When $A$ is $m \times n$ with $m > n$
- **Complete QR**: Including additional columns in $Q$
- **Pivoted QR**: For rank-deficient matrices

## Notes
- Fundamental decomposition in numerical linear algebra
- Provides a numerically stable way to solve many linear algebra problems
- The construction via Gram-Schmidt provides theoretical insight, but numerical implementations often use other methods
- Essential for numerical analysis and scientific computing
