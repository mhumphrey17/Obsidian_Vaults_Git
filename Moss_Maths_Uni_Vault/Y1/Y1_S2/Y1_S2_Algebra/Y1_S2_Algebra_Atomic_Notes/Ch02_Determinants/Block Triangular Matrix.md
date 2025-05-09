---
title: "Block Triangular Matrix"
aliases: ["block triangular matrix", "blockwise triangular matrix"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "matrix", "determinant", "triangular-matrix", "block-matrix", "linear-algebra", "matrix-theory"]
related_concepts: ["Triangular Matrix", "Block Matrix", "Determinant", "Field"]
---

# Block Triangular Matrix

## Definition
A block triangular matrix is a matrix that can be partitioned into submatrices (blocks) such that all blocks below (or above) the diagonal blocks are zero matrices. A blockwise upper triangular matrix has the form:

$$A = \begin{pmatrix}
A_1 & * & * & \cdots & * \\
0 & A_2 & * & \cdots & * \\
0 & 0 & A_3 & \cdots & * \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & A_k
\end{pmatrix}$$

where $A_1, A_2, \ldots, A_k$ are square matrices (diagonal blocks) and $*$ represents arbitrary matrices of appropriate dimensions.

Similarly, a blockwise lower triangular matrix has zeros above the diagonal blocks.

## Properties
1. The determinant of a block triangular matrix equals the product of the determinants of its diagonal blocks:
   $$\det(A) = \det(A_1) \cdot \det(A_2) \cdot \ldots \cdot \det(A_k)$$

2. A block triangular matrix is invertible if and only if all of its diagonal blocks are invertible

3. The eigenvalues of a block triangular matrix are the eigenvalues of all its diagonal blocks combined

4. Both block upper triangular and block lower triangular matrices exhibit the same properties regarding determinants

## Examples
### Example 1: 2×2 Block Matrix
Consider a block upper triangular matrix:

$$A = \begin{pmatrix}
A' & B \\
0 & A''
\end{pmatrix}$$

where $A' \in M_{k,k}$ and $A'' \in M_{l,l}$ are square matrices.

The determinant of $A$ is:
$$\det(A) = \det(A') \cdot \det(A'')$$

### Example 2: Block Diagonal Matrix
A block diagonal matrix is a special case of a block triangular matrix:

$$A = \begin{pmatrix}
A_1 & 0 & \cdots & 0 \\
0 & A_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & A_k
\end{pmatrix}$$

Its determinant is $\det(A) = \det(A_1) \cdot \det(A_2) \cdot \ldots \cdot \det(A_k)$.

## Related Theorems
1. **Determinant Formula (Proposition 2.1.4)**: If $A$ is blockwise upper (or lower) triangular, then:
   $$\det(A) = \det(A_1) \cdot \det(A_2) \cdot \ldots \cdot \det(A_k)$$

2. **Block LU Decomposition**: Every invertible matrix can be represented as a product of block triangular matrices

## Applications
1. Computing determinants efficiently for large matrices with block structure
2. Solving block-structured linear systems
3. Analyzing stability in control systems
4. Understanding the eigenstructure of complex matrices

## Related Concepts
- [[Triangular Matrix]]: A special case of block triangular matrices where each diagonal block is 1×1
- [[Block Matrix]]: A matrix subdivided into submatrices (blocks)
- [[Determinant]]: Has a simple formula for block triangular matrices
- [[Matrix Inverse]]: Can be computed efficiently for certain block triangular matrices
