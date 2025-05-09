---
title: Determinant
aliases:
  - determinant
  - det
  - "|A|"
tags:
  - Y1_Alg_s2_ch02_01
  - concept
  - matrix
  - determinant
related_concepts:
  - Matrix
  - Permutation
  - Elementary Row Operation
  - Elementary Column Operation
  - Triangular Matrix
date_created: 2025-05-09
---

# Determinant

## Definition
The determinant is a scalar value assigned to a square matrix that provides information about the matrix's properties. For a matrix $A \in M_{n \times n}(\mathbb{F})$, the determinant is defined as:

$$\operatorname{det} A = \sum_{\sigma \in S_{n}}(\operatorname{sgn} \sigma) a_{\sigma(1) 1} \ldots a_{\sigma(n) n}$$

where:
- $S_n$ is the set of all permutations of $\{1, 2, \ldots, n\}$
- $\sigma$ is a permutation in $S_n$
- $\operatorname{sgn} \sigma$ is the sign of the permutation $\sigma$, equal to $(-1)^{(l_1-1) + \ldots + (l_t-1)}$ where $l_1, \ldots, l_t$ are the cycle lengths of the disjoint cycles in $\sigma$
- $a_{ij}$ are the elements of matrix $A$

The determinant is also denoted as $|A|$.

## Properties
1. For the identity matrix $I$, $\operatorname{det}(I) = 1$
2. For an upper triangular or lower triangular matrix, the determinant equals the product of the diagonal entries: $\operatorname{det}(A) = a_{11} \cdot a_{22} \cdot \ldots \cdot a_{nn}$
3. If $A$ has two identical rows or columns, then $\operatorname{det}(A) = 0$
4. The determinant of a matrix equals the determinant of its transpose: $\operatorname{det}(A) = \operatorname{det}(A^T)$
5. A matrix is invertible if and only if its determinant is non-zero

## Examples
### Example 1: 2×2 Matrix
For a 2×2 matrix, the determinant can be calculated as:

$$\operatorname{det}\left(\begin{array}{ll}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{array}\right) = a_{11}a_{22} - a_{21}a_{12}$$

### Example 2: 3×3 Matrix
For a 3×3 matrix, the determinant can be calculated as:

$$\operatorname{det}\left(\begin{array}{lll}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{array}\right) = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{11}a_{32}a_{23} - a_{21}a_{12}a_{33} - a_{31}a_{22}a_{13}$$

## Related Theorems
1. **Product Formula**: For any two square matrices $A$ and $B$ of the same size, $\operatorname{det}(AB) = \operatorname{det}(A) \cdot \operatorname{det}(B)$
2. **Effect of Elementary Operations**:
   - Scaling a row or column by factor $k$ multiplies the determinant by $k$
   - Adding a multiple of one row/column to another doesn't change the determinant
   - Swapping two rows or columns changes the sign of the determinant

## Applications
1. Solving systems of linear equations using Cramer's rule
2. Finding the inverse of a matrix
3. Testing for linear independence of vectors
4. Computing the volume of a parallelepiped in $n$-dimensional space
5. Finding eigenvalues of a matrix

## Related Concepts
- [[Matrix]]: The determinant is a scalar function defined on square matrices
- [[Permutation]]: Permutations are central to the definition of determinants
- [[Matrix Inverse]]: A matrix is invertible if and only if its determinant is non-zero
- [[Triangular Matrix]]: Has a simple determinant equal to the product of diagonal entries
