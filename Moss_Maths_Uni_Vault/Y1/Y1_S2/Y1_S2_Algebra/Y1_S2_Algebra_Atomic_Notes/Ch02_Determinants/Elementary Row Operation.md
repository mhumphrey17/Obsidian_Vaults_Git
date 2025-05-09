---
title: "Elementary Row Operation"
aliases: ["ERO", "elementary row operation"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "matrix", "determinant", "elementary-column-operation", "gaussian-elimination", "elementary-matrix", "linear-algebra", "matrix-theory"]
related_concepts: ["Elementary Column Operation", "Determinant", "Matrix", "Gaussian Elimination", "Elementary Matrix", "Field"]
---

# Elementary Row Operation

## Definition
Elementary Row Operations (EROs) are basic operations performed on the rows of a matrix. There are three types of EROs:

1. **Type I**: Multiply a row by a non-zero scalar $\lambda$
   $$\operatorname{row}_{i} \mapsto \lambda \operatorname{row}_{i}, \quad \lambda \neq 0$$

2. **Type II**: Add a multiple of one row to another
   $$\operatorname{row}_{i} \mapsto \operatorname{row}_{i} + \lambda \operatorname{row}_{j}, \quad i \neq j$$

3. **Type III**: Swap two rows
   $$\operatorname{row}_{i} \leftrightarrow \operatorname{row}_{j}, \quad i \neq j$$

## Properties
1. EROs preserve the column space of a matrix
2. EROs preserve the solution set of a system of linear equations
3. EROs may change the determinant of a matrix in a predictable way:
   - Type I ERO multiplies the determinant by the scalar $\lambda$
   - Type II ERO does not change the determinant
   - Type III ERO changes the sign of the determinant

4. The matrix of an ERO, denoted by $P$, is the matrix obtained by applying the ERO to the identity matrix

## Examples
### Example 1: Type I ERO (Scaling)
If we scale the second row of the identity matrix by 3:
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \mapsto \begin{pmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

The determinant changes from 1 to 3.

### Example 2: Computing Determinant Using EROs
Consider the matrix:
$$A = \begin{pmatrix} 5 & 4 & 0 \\ -1 & 2 & 1 \\ 1 & -5 & 0 \end{pmatrix}$$

We can use EROs to transform it to an upper triangular matrix and compute its determinant:
1. Swap rows 2 and 3: $\det(A') = -\det(A)$
2. Multiply row 2 by $-\frac{1}{5}$: $\det(A'') = -\frac{1}{5}\det(A)$
3. Subtract 4 times row 2 from row 1: $\det(A''') = -\frac{1}{5}\det(A)$

The resulting upper triangular matrix has determinant $\frac{29}{5} \cdot 1 \cdot 1$, so $\det(A) = 29$.

## Related Theorems
1. **Determinant Effect**: If matrix $B$ is obtained from matrix $A$ by an ERO, then:
   - Type I (multiply row $i$ by $\lambda$): $\det(B) = \lambda \cdot \det(A)$
   - Type II (add $\lambda$ times row $j$ to row $i$): $\det(B) = \det(A)$
   - Type III (swap rows $i$ and $j$): $\det(B) = -\det(A)$

2. **Matrix Representation**: Each ERO can be represented as multiplication by an elementary matrix:
   - If $P$ is the matrix of an ERO, then applying the ERO to matrix $A$ is equivalent to computing $PA$

## Applications
1. Gaussian elimination to solve systems of linear equations
2. Row reduction to find the rank of a matrix
3. Matrix inversion
4. Computing determinants efficiently

## Related Concepts
- [[Elementary Column Operation]]: Similar operations performed on columns instead of rows
- [[Determinant]]: EROs affect determinants in predictable ways
- [[Matrix]]: EROs are operations on matrices
- [[Gaussian Elimination]]: Uses EROs to solve linear systems
- [[Elementary Matrix]]: A matrix that represents an elementary operation
