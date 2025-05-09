---
title: "Determinant Properties Under Elementary Operations"
aliases: ["effect of elementary operations on determinants", "determinant transformation rules"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "determinant", "property", "elementary-row-operation", "elementary-column-operation", "multilinearity", "alternating-property", "linear-algebra", "matrix-theory"]
related_concepts: ["Determinant", "Elementary Row Operation", "Elementary Column Operation", "Multilinearity of Determinants", "Alternating Property of Determinants", "Field"]
---

# Determinant Properties Under Elementary Operations

## Definition
This concept describes how the determinant of a matrix changes when elementary row operations (EROs) or elementary column operations (ECOs) are applied to the matrix.

Let $A$ be a square matrix and $\hat{A}$ be the matrix obtained by applying an elementary operation to $A$. The relationship between $\det(A)$ and $\det(\hat{A})$ depends on the type of operation performed.

## Properties
1. **Type I (Scaling)**:
   - If $\hat{A}$ is obtained from $A$ by multiplying a row or column by a non-zero scalar $\lambda$, then:
     $$\det(\hat{A}) = \lambda \cdot \det(A)$$

2. **Type II (Addition)**:
   - If $\hat{A}$ is obtained from $A$ by adding a multiple of one row/column to another row/column, then:
     $$\det(\hat{A}) = \det(A)$$

3. **Type III (Swapping)**:
   - If $\hat{A}$ is obtained from $A$ by swapping two rows or columns, then:
     $$\det(\hat{A}) = -\det(A)$$

4. **Invariance Property**:
   - If $\hat{A}$ is obtained from $A$ by a sequence of elementary operations, then:
     $$\det(\hat{A}) \neq 0 \Leftrightarrow \det(A) \neq 0$$
   - This means EROs and ECOs preserve the property of being invertible.

## Examples
### Example 1: Scaling Operation
Consider the matrix and apply a Type I operation to scale row 1 by factor 3:
$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad \det(A) = 4 - 6 = -2$$

After scaling:
$$\hat{A} = \begin{pmatrix} 3 & 6 \\ 3 & 4 \end{pmatrix}, \quad \det(\hat{A}) = 12 - 18 = -6 = 3 \cdot (-2) = 3 \cdot \det(A)$$

### Example 2: Row Addition
Consider the matrix and apply a Type II operation to add row 1 to row 2:
$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad \det(A) = 4 - 6 = -2$$

After addition:
$$\hat{A} = \begin{pmatrix} 1 & 2 \\ 4 & 6 \end{pmatrix}, \quad \det(\hat{A}) = 6 - 8 = -2 = \det(A)$$

### Example 3: Row Swapping
Consider the matrix and apply a Type III operation to swap rows 1 and 2:
$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad \det(A) = 4 - 6 = -2$$

After swapping:
$$\hat{A} = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}, \quad \det(\hat{A}) = 6 - 4 = 2 = -\det(A)$$

### Example 4: Computing Determinant Using EROs
Consider the matrix:
$$A = \begin{pmatrix} 5 & 4 & 0 \\ -1 & 2 & 1 \\ 1 & -5 & 0 \end{pmatrix}$$

We can compute its determinant using EROs to transform it into an upper triangular matrix:
1. Swap rows 2 and 3: $\det(A') = -\det(A)$
2. Multiply row 2 by $-\frac{1}{5}$: $\det(A'') = -\frac{1}{5}\det(A)$
3. Subtract 4 times row 2 from row 1: $\det(A''') = -\frac{1}{5}\det(A)$ (Type II doesn't change det)

The resulting upper triangular matrix has determinant $\frac{29}{5} \cdot 1 \cdot 1$, so $\det(A) = 29$.

## Proof
These properties follow directly from the multilinearity and alternating property of the determinant:

1. **Type I**: Follows from the multilinearity property.
2. **Type II**: Follows from the multilinearity property and the fact that adding a column to another creates a determinant with two identical columns, which is zero.
3. **Type III**: Follows from the alternating property.

## Applications
1. **Efficient Determinant Calculation**: Using elementary operations to transform a matrix into triangular form where the determinant is the product of diagonal entries.
2. **Invertibility Testing**: Preserving non-zero determinant status under row operations allows determining invertibility through Gaussian elimination.
3. **Solving Systems**: Understanding how determinants change helps in applications like Cramer's rule.
4. **Matrix Factorization**: Understanding the determinant properties assists in LU decomposition and other factorization methods.

## Related Concepts
- [[Elementary Row Operation]]: Basic operations on matrix rows affecting determinants
- [[Elementary Column Operation]]: Basic operations on matrix columns affecting determinants
- [[Multilinearity of Determinants]]: Explains Type I and II effects
- [[Alternating Property of Determinants]]: Explains Type III effect
- [[Determinant]]: The function being transformed by elementary operations
- [[Triangular Matrix]]: Target form when using elementary operations to compute determinants
