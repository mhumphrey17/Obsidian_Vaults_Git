---
title: "Triangular Matrix"
aliases: ["triangular matrix", "upper triangular matrix", "lower triangular matrix"]
tags: ["Y1_Alg_s2_ch02_01", "concept", "matrix", "determinant"]
related_concepts: ["Block Triangular Matrix", "Determinant", "Matrix", "Diagonal Matrix"]
date_created: 2025-05-09
---

# Triangular Matrix

## Definition
A triangular matrix is a square matrix in which all entries either above or below the main diagonal are zero.

1. **Upper Triangular Matrix**: A matrix $A = (a_{ij}) \in M_{n,n}(\mathbb{F})$ is upper triangular if $a_{ij} = 0$ for all $i > j$. It has the form:
   
   $$A = \begin{pmatrix}
   a_{11} & a_{12} & a_{13} & \cdots & a_{1n} \\
   0 & a_{22} & a_{23} & \cdots & a_{2n} \\
   0 & 0 & a_{33} & \cdots & a_{3n} \\
   \vdots & \vdots & \vdots & \ddots & \vdots \\
   0 & 0 & 0 & \cdots & a_{nn}
   \end{pmatrix}$$

2. **Lower Triangular Matrix**: A matrix $A = (a_{ij}) \in M_{n,n}(\mathbb{F})$ is lower triangular if $a_{ij} = 0$ for all $i < j$. It has the form:
   
   $$A = \begin{pmatrix}
   a_{11} & 0 & 0 & \cdots & 0 \\
   a_{21} & a_{22} & 0 & \cdots & 0 \\
   a_{31} & a_{32} & a_{33} & \cdots & 0 \\
   \vdots & \vdots & \vdots & \ddots & \vdots \\
   a_{n1} & a_{n2} & a_{n3} & \cdots & a_{nn}
   \end{pmatrix}$$

## Properties
1. **Determinant**: The determinant of a triangular matrix is the product of its diagonal entries:
   $$\det(A) = a_{11} \cdot a_{22} \cdot \ldots \cdot a_{nn}$$

2. **Invertibility**: A triangular matrix is invertible if and only if all of its diagonal entries are non-zero.

3. **Transpose**: The transpose of an upper triangular matrix is a lower triangular matrix, and vice versa.

4. **Eigenvalues**: The eigenvalues of a triangular matrix are precisely its diagonal entries.

5. **Closure**: The sum, product, and inverse (when it exists) of triangular matrices of the same type (upper or lower) are also triangular matrices of the same type.

## Examples
### Example 1: Upper Triangular
$$A = \begin{pmatrix}
2 & 1 & 4 \\
0 & 3 & -1 \\
0 & 0 & 5
\end{pmatrix}$$

The determinant of this matrix is $\det(A) = 2 \cdot 3 \cdot 5 = 30$.

### Example 2: Lower Triangular
$$B = \begin{pmatrix}
7 & 0 & 0 \\
2 & -3 & 0 \\
4 & 1 & 2
\end{pmatrix}$$

The determinant of this matrix is $\det(B) = 7 \cdot (-3) \cdot 2 = -42$.

## Related Theorems
1. **LU Decomposition**: Under certain conditions, a square matrix can be decomposed as a product of a lower triangular matrix $L$ and an upper triangular matrix $U$.

2. **Schur Decomposition**: For any complex square matrix $A$, there exists a unitary matrix $U$ such that $U^*AU$ is upper triangular.

## Applications
1. Solving systems of linear equations efficiently
2. Matrix factorizations (such as LU, Cholesky)
3. Eigenvalue computations
4. Numerical stability in algorithms
5. Simplifying matrix operations

## Related Concepts
- [[Block Triangular Matrix]]: Generalizes triangular matrices to block form
- [[Diagonal Matrix]]: A matrix that is both upper and lower triangular
- [[Determinant]]: Has a simple formula for triangular matrices
- [[Matrix]]: The broader class to which triangular matrices belong
- [[Elementary Row Operation]]: Can be used to transform matrices into triangular form
