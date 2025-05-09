---
title: "Minor"
aliases: ["minor", "matrix minor", "minors"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "determinant", "matrix", "cofactor", "adjugate-matrix", "matrix-inverse", "laplace-expansion", "linear-algebra", "matrix-theory"]
related_concepts: ["Determinant", "Cofactor", "Adjugate Matrix", "Matrix Inverse", "Laplace Expansion", "Field"]
---

# Minor

## Definition
For a square matrix $A = (a_{ij}) \in M_{n,n}(\mathbb{F})$, the $(i,j)$-minor, denoted by $\mu_{ij}(A)$, is the determinant of the submatrix obtained by deleting the $i$-th row and the $j$-th column of $A$. Formally:

$$\mu_{ij}(A) = \det(m_{ij}(A))$$

where $m_{ij}(A) \in M_{n-1,n-1}(\mathbb{F})$ is the submatrix obtained by deleting row $i$ and column $j$ from $A$.

## Properties
1. **Size Relation**: If $A$ is an $n \times n$ matrix, then each minor is the determinant of an $(n-1) \times (n-1)$ matrix.

2. **Base Case**: For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
   - $\mu_{11}(A) = d$
   - $\mu_{12}(A) = c$
   - $\mu_{21}(A) = b$
   - $\mu_{22}(A) = a$

3. **Relation to Cofactors**: The $(i,j)$-cofactor of $A$ is defined as $(-1)^{i+j}\mu_{ij}(A)$.

4. **Recursive Computation**: Minors can be computed recursively by further expanding minors of smaller matrices.

## Applications
1. **Determinant Calculation**: Minors are used in the Laplace expansion (cofactor expansion) for calculating determinants:
   $$\det(A) = \sum_{i=1}^{n} (-1)^{i+j} a_{ij} \mu_{ij}(A)$$
   for any fixed column $j$, or
   $$\det(A) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} \mu_{ij}(A)$$
   for any fixed row $i$.

2. **Matrix Inversion**: Minors are used to compute the adjugate matrix, which is used to find the inverse of a matrix.

3. **Cramer's Rule**: Minors are used in Cramer's rule for solving systems of linear equations.

4. **Characteristic Polynomial**: Used to compute coefficients of the characteristic polynomial of a matrix.

## Examples
### Example 1: Minor of a 3×3 Matrix
Consider the matrix:
$$A = \begin{pmatrix} 3 & 1 & 2 \\ 1 & 0 & -1 \\ 0 & 1 & 2 \end{pmatrix}$$

The minor $\mu_{11}(A)$ is found by deleting row 1 and column 1:
$$\mu_{11}(A) = \det\begin{pmatrix} 0 & -1 \\ 1 & 2 \end{pmatrix} = 0 \cdot 2 - (-1) \cdot 1 = 1$$

The minor $\mu_{23}(A)$ is found by deleting row 2 and column 3:
$$\mu_{23}(A) = \det\begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix} = 3 \cdot 1 - 1 \cdot 0 = 3$$

### Example 2: Using Minors to Calculate Determinant
For the same matrix $A$, we can expand along the first row to find the determinant:
$$\det(A) = 3 \cdot \mu_{11}(A) - 1 \cdot \mu_{12}(A) + 2 \cdot \mu_{13}(A)$$

where:
- $\mu_{11}(A) = 1$ as calculated above
- $\mu_{12}(A) = \det\begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix} = 2$
- $\mu_{13}(A) = \det\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = 1$

So, $\det(A) = 3 \cdot 1 - 1 \cdot 2 + 2 \cdot 1 = 3 - 2 + 2 = 3$

## Related Theorems
1. **Laplace Expansion Theorem**: For any fixed row $i$ or column $j$:
   $$\det(A) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} \mu_{ij}(A)$$
   $$\det(A) = \sum_{i=1}^{n} (-1)^{i+j} a_{ij} \mu_{ij}(A)$$

2. **Adjugate Relation**: The adjugate matrix is defined using cofactors, which are based on minors.

## Related Concepts
- [[Determinant]]: Minors are used to recursively calculate determinants
- [[Cofactor]]: Defined as signed minors
- [[Adjugate]]: Constructed using cofactors
- [[Matrix Inverse]]: Can be computed using the adjugate
- [[Laplace Expansion]]: Uses minors to compute determinants
