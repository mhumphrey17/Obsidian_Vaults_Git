---
title: "Alternating Property of Determinants"
aliases: ["alternating property", "skew-symmetry of determinants"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "determinant", "property", "multilinearity", "elementary-row-operation", "elementary-column-operation", "linear-algebra", "matrix-theory"]
related_concepts: ["Determinant", "Multilinearity of Determinants", "Elementary Row Operation", "Elementary Column Operation", "Field"]
---

# Alternating Property of Determinants

## Definition
The alternating property of determinants states that if a matrix has two identical rows or columns, then its determinant equals zero.

Formally, if we view a matrix $A$ as a list of column vectors $\mathbf{c}_1, \ldots, \mathbf{c}_n \in \mathbb{F}^n$, then:

If $\mathbf{c}_i = \mathbf{c}_j$ for some $i \neq j$, then $\det(\mathbf{c}_1, \ldots, \mathbf{c}_n) = 0$.

Similarly, if we view $A$ as a list of row vectors $\mathbf{r}_1, \ldots, \mathbf{r}_n \in \mathbb{F}^n$, then:

If $\mathbf{r}_i = \mathbf{r}_j$ for some $i \neq j$, then $\det(\mathbf{r}_1, \ldots, \mathbf{r}_n) = 0$.

## Properties
1. **Linear Dependence**: If any two rows or columns are identical, the matrix has linearly dependent rows or columns, which causes the determinant to vanish.

2. **Swapping Effect**: If two rows or columns are swapped, the determinant changes sign:
   $$\det(A') = -\det(A)$$
   where $A'$ is obtained from $A$ by swapping two rows or columns.

3. **Consequence for ECO/ERO Type III**: If $\hat{A}$ is obtained from $A$ by exchanging two columns (or rows), then $\det(\hat{A}) = -\det(A)$.

4. **Row/Column Repetition**: The alternating property explains why having two identical rows or columns gives a zero determinant.

## Examples
### Example 1: Matrix with Identical Columns
Consider a matrix with two identical columns:
$$\det\left(\begin{array}{ccc}
1 & 2 & 2 \\
3 & 4 & 4 \\
5 & 6 & 6
\end{array}\right) = 0$$

This determinant is zero because columns 2 and 3 are identical.

### Example 2: Applying the Swapping Property
If $A$ is a matrix with $\det(A) = 5$, and $B$ is obtained by swapping two rows of $A$, then $\det(B) = -5$.

## Proof
To prove the alternating property, we can:

1. Consider a matrix $A$ with identical columns $\mathbf{c}_i = \mathbf{c}_j$.
2. Partition the set of permutations $S_n$ into pairs $(\sigma, \sigma \cdot (i~j))$ where $(i~j)$ is the transposition swapping $i$ and $j$.
3. For each such pair, the corresponding terms in the determinant sum formula will cancel out because:
   - $\operatorname{sgn}(\sigma \cdot (i~j)) = -\operatorname{sgn}(\sigma)$
   - The product of matrix entries remains the same when $\mathbf{c}_i = \mathbf{c}_j$

### For column swapping:
We can show that if two columns are swapped:

$$0 = \det(\mathbf{c}_1, \ldots, \mathbf{c}_i + \mathbf{c}_j, \ldots, \mathbf{c}_i + \mathbf{c}_j, \ldots, \mathbf{c}_n)$$

Expanding by multilinearity and observing that terms with repeated columns vanish:

$$0 = \det(A) + \det(A') + \det(A'') + \det(A''')$$

where $A'$ and $A''$ have repeated columns (so those determinants are zero), and $A'''$ is $A$ with columns $i$ and $j$ swapped.

Therefore: $\det(A) = -\det(A''')$

## Applications
1. **Singular Matrix Detection**: A matrix with linearly dependent rows or columns has determinant zero.
2. **Matrix Transformations**: Understanding how operations like swapping rows/columns affect the determinant.
3. **Eigenvalue Calculations**: The alternating property helps explain why a matrix with an eigenvalue of zero has determinant zero.
4. **Volume Interpretation**: Explains why a parallelepiped with linearly dependent sides has zero volume.

## Related Concepts
- [[Determinant]]: The function that exhibits the alternating property
- [[Multilinearity of Determinants]]: Together with the alternating property, characterizes the determinant
- [[Elementary Row Operation]]: Type III EROs (row swaps) change the sign of the determinant due to the alternating property
- [[Elementary Column Operation]]: Type III ECOs (column swaps) change the sign of the determinant due to the alternating property
- [[Linear Independence]]: Linearly dependent rows or columns result in a zero determinant
