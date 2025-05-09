---
title: "Cofactor"
aliases: ["cofactor", "matrix cofactor", "cofactors"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "determinant", "matrix", "minor", "adjugate-matrix", "matrix-inverse", "laplace-expansion", "linear-algebra", "matrix-theory"]
related_concepts: ["Minor", "Determinant", "Adjugate Matrix", "Matrix Inverse", "Laplace Expansion", "Field"]
---

# Cofactor

## Definition
For a square matrix $A = (a_{ij}) \in M_{n,n}(\mathbb{F})$, the $(i,j)$-cofactor, denoted by $C_{ij}(A)$, is defined as:

$$C_{ij}(A) = (-1)^{i+j} \mu_{ij}(A)$$

where $\mu_{ij}(A)$ is the $(i,j)$-minor of $A$, i.e., the determinant of the submatrix obtained by deleting the $i$-th row and $j$-th column of $A$.

The factor $(-1)^{i+j}$ is a sign that alternates in a checkerboard pattern:

$$\begin{pmatrix} + & - & + & \cdots \\ - & + & - & \cdots \\ + & - & + & \cdots \\ \vdots & \vdots & \vdots & \ddots \end{pmatrix}$$

## Properties
1. **Relation to Minors**: Cofactors are signed minors, where the sign depends on the position.

2. **Base Case**: For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
   - $C_{11}(A) = (+1) \cdot d = d$
   - $C_{12}(A) = (-1) \cdot c = -c$
   - $C_{21}(A) = (-1) \cdot b = -b$
   - $C_{22}(A) = (+1) \cdot a = a$

3. **Cofactor Matrix**: The matrix of cofactors $C(A) = (C_{ij}(A))$ is used to construct the adjugate matrix.

4. **Cofactor Expansion**: The determinant can be computed by multiplying entries in any row or column by their corresponding cofactors and summing.

## Applications
1. **Determinant Calculation**: Cofactors are used in the Laplace expansion formula for calculating determinants:
   $$\det(A) = \sum_{j=1}^{n} a_{ij} \cdot C_{ij}(A)$$
   for any fixed row $i$, or
   $$\det(A) = \sum_{i=1}^{n} a_{ij} \cdot C_{ij}(A)$$
   for any fixed column $j$.

2. **Adjugate Construction**: The adjugate matrix is the transpose of the cofactor matrix:
   $$\operatorname{adj}(A)_{ij} = C_{ji}(A)$$

3. **Matrix Inversion**: For an invertible matrix, the inverse can be computed using cofactors:
   $$A^{-1} = \frac{1}{\det(A)} \operatorname{adj}(A)$$

4. **Cramer's Rule**: Cofactors are integral to Cramer's rule for solving systems of linear equations.

## Examples
### Example 1: Cofactors of a 3×3 Matrix
Consider the matrix:
$$A = \begin{pmatrix} 3 & 1 & 2 \\ 1 & 0 & -1 \\ 0 & 1 & 2 \end{pmatrix}$$

The cofactor $C_{11}(A)$ is:
$$C_{11}(A) = (-1)^{1+1} \mu_{11}(A) = (+1) \cdot \det\begin{pmatrix} 0 & -1 \\ 1 & 2 \end{pmatrix} = 1$$

The cofactor $C_{12}(A)$ is:
$$C_{12}(A) = (-1)^{1+2} \mu_{12}(A) = (-1) \cdot \det\begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix} = (-1) \cdot 2 = -2$$

### Example 2: Cofactor Expansion for Determinant
We can compute the determinant of $A$ by expanding along the first row using cofactors:
$$\det(A) = a_{11}C_{11}(A) + a_{12}C_{12}(A) + a_{13}C_{13}(A)$$

where:
- $a_{11} = 3$, $C_{11}(A) = 1$
- $a_{12} = 1$, $C_{12}(A) = -2$
- $a_{13} = 2$, $C_{13}(A) = 1$

Therefore:
$$\det(A) = 3 \cdot 1 + 1 \cdot (-2) + 2 \cdot 1 = 3 - 2 + 2 = 3$$

## Related Theorems
1. **Laplace Expansion Theorem**: For any row $i$ or column $j$:
   $$\det(A) = \sum_{j=1}^{n} a_{ij} \cdot C_{ij}(A)$$
   $$\det(A) = \sum_{i=1}^{n} a_{ij} \cdot C_{ij}(A)$$

2. **Adjugate Relation**:
   $$A \cdot \operatorname{adj}(A) = \det(A) \cdot I_n$$
   where $I_n$ is the $n \times n$ identity matrix.

## Related Concepts
- [[Minor]]: The determinant of a submatrix used to define cofactors
- [[Determinant]]: Can be calculated using cofactor expansion
- [[Adjugate]]: Transpose of the cofactor matrix
- [[Matrix Inverse]]: Related to the adjugate and cofactors
- [[Laplace Expansion]]: A method for calculating determinants using cofactors
