---
title: "Elementary Column Operation"
aliases: ["ECO", "elementary column operation"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "matrix", "determinant", "elementary-row-operation", "elementary-matrix", "linear-algebra", "matrix-theory"]
related_concepts: ["Elementary Row Operation", "Determinant", "Matrix", "Elementary Matrix", "Field"]
---

# Elementary Column Operation

## Definition
Elementary Column Operations (ECOs) are basic operations performed on the columns of a matrix. There are three types of ECOs:

1. **Type I**: Multiply a column by a non-zero scalar $\lambda$
   $$\operatorname{col}_{j} \mapsto \lambda \operatorname{col}_{j}, \quad \lambda \neq 0$$

2. **Type II**: Add a multiple of one column to another
   $$\operatorname{col}_{j} \mapsto \operatorname{col}_{j} + \lambda \operatorname{col}_{i}, \quad i \neq j$$

3. **Type III**: Swap two columns
   $$\operatorname{col}_{i} \leftrightarrow \operatorname{col}_{j}, \quad i \neq j$$

## Properties
1. ECOs preserve the row space of a matrix
2. ECOs may change the determinant of a matrix in a predictable way:
   - Type I ECO multiplies the determinant by the scalar $\lambda$
   - Type II ECO does not change the determinant
   - Type III ECO changes the sign of the determinant

3. The matrix of an ECO, denoted by $P$, is the matrix obtained by applying the ECO to the identity matrix

## Examples
### Example 1: Type I ECO (Scaling)
If we scale the second column of the identity matrix by 3:
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \mapsto \begin{pmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

The determinant changes from 1 to 3.

### Example 2: Type II ECO (Addition)
Adding 2 times the first column to the third column:
$$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix} \mapsto \begin{pmatrix} 1 & 2 & 5 \\ 4 & 5 & 14 \\ 7 & 8 & 23 \end{pmatrix}$$

The determinant remains unchanged.

## Related Theorems
1. **Determinant Effect**: If matrix $B$ is obtained from matrix $A$ by an ECO, then:
   - Type I (multiply column $j$ by $\lambda$): $\det(B) = \lambda \cdot \det(A)$
   - Type II (add $\lambda$ times column $i$ to column $j$): $\det(B) = \det(A)$
   - Type III (swap columns $i$ and $j$): $\det(B) = -\det(A)$

2. **Matrix Representation**: Each ECO can be represented as multiplication by an elementary matrix:
   - If $P$ is the matrix of an ECO, then applying the ECO to matrix $A$ is equivalent to computing $AP$

## Applications
1. Column reduction to solve systems of linear equations
2. Finding the rank of a matrix
3. Computing determinants efficiently
4. Matrix factorization techniques

## Related Concepts
- [[Elementary Row Operation]]: Similar operations performed on rows instead of columns
- [[Determinant]]: ECOs affect determinants in predictable ways
- [[Matrix]]: ECOs are operations on matrices
- [[Elementary Matrix]]: A matrix that represents an elementary operation
