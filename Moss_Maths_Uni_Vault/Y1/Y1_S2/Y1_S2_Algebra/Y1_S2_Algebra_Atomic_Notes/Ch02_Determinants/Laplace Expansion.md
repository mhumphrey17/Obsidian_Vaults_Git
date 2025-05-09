---
title: "Laplace Expansion"
aliases: ["cofactor expansion", "laplace expansion", "determinant expansion"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "determinant", "matrix", "minor", "cofactor", "adjugate-matrix", "cramer-s-rule", "linear-algebra", "matrix-theory"]
related_concepts: ["Determinant", "Minor", "Cofactor", "Adjugate Matrix", "Cramer's Rule", "Field"]
---

# Laplace Expansion

## Definition
The Laplace expansion (also known as cofactor expansion) is a method for calculating the determinant of a square matrix by expanding it as a weighted sum of determinants of smaller matrices. 

For an $n \times n$ matrix $A = (a_{ij})$, the Laplace expansion along the $i$-th row is:

$$\det(A) = \sum_{j=1}^{n} a_{ij} \cdot C_{ij}(A) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} \cdot \mu_{ij}(A)$$

Similarly, the Laplace expansion along the $j$-th column is:

$$\det(A) = \sum_{i=1}^{n} a_{ij} \cdot C_{ij}(A) = \sum_{i=1}^{n} (-1)^{i+j} a_{ij} \cdot \mu_{ij}(A)$$

where:
- $C_{ij}(A)$ is the $(i,j)$-cofactor of $A$
- $\mu_{ij}(A)$ is the $(i,j)$-minor of $A$

## Properties
1. **Row/Column Independence**: The expansion can be performed along any row or column, and will yield the same result.

2. **Recursive Nature**: The Laplace expansion provides a recursive formula for determinants, where the determinant of an $n \times n$ matrix is expressed in terms of determinants of $(n-1) \times (n-1)$ matrices.

3. **Computational Complexity**: While elegant mathematically, the Laplace expansion has exponential computational complexity ($O(n!)$) and is generally inefficient for large matrices.

4. **Strategic Row/Column Selection**: For practical calculations, it's often advantageous to expand along a row or column with many zero entries to simplify the computation.

## Examples
### Example 1: 3×3 Matrix Expansion
Consider the matrix:
$$A = \begin{pmatrix} 3 & 1 & 2 \\ 1 & 0 & -1 \\ 0 & 1 & 2 \end{pmatrix}$$

Expanding along the first row:
$$\det(A) = 3 \cdot C_{11}(A) + 1 \cdot C_{12}(A) + 2 \cdot C_{13}(A)$$

Where:
$$C_{11}(A) = (-1)^{1+1} \det\begin{pmatrix} 0 & -1 \\ 1 & 2 \end{pmatrix} = 1$$
$$C_{12}(A) = (-1)^{1+2} \det\begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix} = -2$$
$$C_{13}(A) = (-1)^{1+3} \det\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = 1$$

Therefore:
$$\det(A) = 3 \cdot 1 + 1 \cdot (-2) + 2 \cdot 1 = 3 - 2 + 2 = 3$$

### Example 2: Strategic Row Selection
Consider:
$$B = \begin{pmatrix} 2 & 0 & 0 & 1 \\ 3 & 1 & 0 & 2 \\ 0 & 0 & 4 & 0 \\ 5 & 0 & 0 & 3 \end{pmatrix}$$

It's efficient to expand along the third row, which has three zeros:
$$\det(B) = 4 \cdot C_{33}(B) = 4 \cdot (-1)^{3+3} \det\begin{pmatrix} 2 & 0 & 1 \\ 3 & 1 & 2 \\ 5 & 0 & 3 \end{pmatrix}$$

## Proof
The Laplace expansion can be proved using the multilinearity and alternating properties of determinants. The key insight is that when we form a matrix with repeated rows/columns by adding a row/column from elsewhere, the determinant is zero.

For a row expansion, we create matrices where row $i$ is replaced by other rows of the original matrix. Due to the alternating property, the determinant must be zero when a row appears twice. This leads to a system of equations from which the Laplace expansion formula emerges.

## Applications
1. **Recursive Determinant Calculation**: Provides a mathematical foundation for computing determinants recursively.

2. **Theoretical Understanding**: Helps establish connections between determinants and minors/cofactors.

3. **Specific Cases**: Efficient for sparse matrices or those with special structure.

4. **Adjugate Matrix Computation**: Used to establish the formula relating a matrix to its adjugate.

5. **Characteristic Polynomial**: Used to derive coefficients of characteristic polynomials in eigenvalue problems.

## Related Concepts
- [[Determinant]]: The quantity being calculated using Laplace expansion
- [[Minor]]: The determinants of submatrices used in the expansion
- [[Cofactor]]: The signed minors used as coefficients in the expansion
- [[Adjugate]]: Related to the cofactor matrix derived from Laplace expansion
- [[Cramer's Rule]]: Uses Laplace expansion concepts to solve linear systems
