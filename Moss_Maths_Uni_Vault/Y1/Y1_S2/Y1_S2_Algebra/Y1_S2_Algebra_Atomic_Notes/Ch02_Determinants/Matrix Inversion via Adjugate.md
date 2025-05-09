---
title: "Matrix Inversion via Adjugate"
aliases: ["classical adjoint method", "adjugate inverse formula"]
tags: ["Y1_Alg", "Y1_Alg_s2_ch02_04", "concept", "determinant", "matrix", "matrix-inverse"]
related_concepts: ["Matrix Inverse", "Adjugate Matrix", "Determinant", "Cofactor", "Minor"]
date_created: 2025-05-09
---

# Matrix Inversion via Adjugate

## Definition
Matrix inversion via adjugate is a method for finding the inverse of a square matrix using its adjugate matrix (classical adjoint) and determinant. For an invertible square matrix $A \in M_{n,n}(\mathbb{F})$, the inverse is given by:

$$A^{-1} = \frac{1}{\det(A)} \operatorname{adj}(A)$$

where $\det(A)$ is the determinant of $A$ and $\operatorname{adj}(A)$ is the adjugate of $A$.

## Theoretical Foundation
This method is based on the fundamental relationship between a matrix and its adjugate:

$$A \cdot \operatorname{adj}(A) = \operatorname{adj}(A) \cdot A = \det(A) \cdot I_n$$

Dividing both sides by $\det(A)$ (which is possible when $A$ is invertible, i.e., $\det(A) \neq 0$):

$$A \cdot \frac{\operatorname{adj}(A)}{\det(A)} = \frac{\operatorname{adj}(A)}{\det(A)} \cdot A = I_n$$

This shows that $\frac{\operatorname{adj}(A)}{\det(A)}$ satisfies the definition of the inverse of $A$.

## Method Steps
1. Calculate the determinant of the matrix $A$: $\det(A)$
2. Verify that $\det(A) \neq 0$ (otherwise $A$ is not invertible)
3. Compute the $(i,j)$-cofactor $C_{ij}(A)$ for each entry in $A$
4. Form the cofactor matrix $C(A) = (C_{ij}(A))$
5. Transpose the cofactor matrix to get the adjugate: $\operatorname{adj}(A) = C(A)^T$
6. Divide each entry in the adjugate by the determinant: $A^{-1} = \frac{1}{\det(A)} \operatorname{adj}(A)$

## Examples
### Example 1: 2×2 Matrix
For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ with $\det(A) = ad - bc \neq 0$:

1. The cofactor matrix is $C(A) = \begin{pmatrix} d & -c \\ -b & a \end{pmatrix}$
2. The adjugate is $\operatorname{adj}(A) = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$
3. The inverse is $A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$

### Example 2: 3×3 Matrix
For the matrix $A = \begin{pmatrix} 3 & 0 & 1 \\ 1 & 2 & 4 \\ -1 & 0 & 1 \end{pmatrix}$:

1. Compute the determinant: $\det(A) = 8$
2. Compute the adjugate:
   $$\operatorname{adj}(A) = \begin{pmatrix} 2 & 0 & -8 \\ -5 & 4 & -11 \\ 2 & 0 & 6 \end{pmatrix}$$
3. Compute the inverse:
   $$A^{-1} = \frac{1}{8} \begin{pmatrix} 2 & 0 & -8 \\ -5 & 4 & -11 \\ 2 & 0 & 6 \end{pmatrix} = \begin{pmatrix} \frac{1}{4} & 0 & -1 \\ -\frac{5}{8} & \frac{1}{2} & -\frac{11}{8} \\ \frac{1}{4} & 0 & \frac{3}{4} \end{pmatrix}$$

Verification:
$$A \cdot A^{-1} = \begin{pmatrix} 3 & 0 & 1 \\ 1 & 2 & 4 \\ -1 & 0 & 1 \end{pmatrix} \begin{pmatrix} \frac{1}{4} & 0 & -1 \\ -\frac{5}{8} & \frac{1}{2} & -\frac{11}{8} \\ \frac{1}{4} & 0 & \frac{3}{4} \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

## Advantages and Limitations
### Advantages
1. **Explicit Formula**: Provides a direct formula for the inverse.
2. **Theoretical Significance**: Establishes a clear connection between determinants, cofactors, and matrix inversion.
3. **Symbolic Computation**: Excellent for symbolic (non-numerical) matrix inversion.

### Limitations
1. **Computational Complexity**: Has a time complexity of $O(n!)$ for an $n \times n$ matrix, making it inefficient for large matrices.
2. **Numerical Stability**: May lead to significant numerical errors in floating-point computations.
3. **Restricted to Square Matrices**: Cannot be used for non-square matrices.

## Applications
1. **Analytical Solutions**: Useful for finding closed-form expressions for inverses of symbolic matrices.
2. **Cramer's Rule**: The adjugate inversion method is closely related to Cramer's rule for solving linear systems.
3. **Theoretical Analysis**: Important in theoretical studies of matrix properties.
4. **Small Matrices**: Practical for manual computation of inverses of small matrices (2×2, 3×3).
5. **Computer Algebra Systems**: Used in symbolic computation software.

## Alternative Methods
1. **Gaussian Elimination**: More efficient for numerical computation, with time complexity $O(n^3)$.
2. **LU Decomposition**: Also $O(n^3)$ and allows for solving multiple linear systems efficiently.
3. **QR Decomposition**: More stable for ill-conditioned matrices.
4. **Iterative Methods**: For very large sparse matrices.

## Related Concepts
- [[Matrix Inverse]]: The object being computed
- [[Adjugate Matrix]]: Key component in the inversion formula
- [[Determinant]]: Required to compute the inverse via adjugate
- [[Cofactor]]: Used to construct the adjugate
- [[Minor]]: Used to compute cofactors
- [[Cramer's Rule]]: Related method for solving linear systems
