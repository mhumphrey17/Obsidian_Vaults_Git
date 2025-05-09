---
title: "Permutation Matrix"
aliases: ["permutation matrix", "permutation matrices"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "matrix", "permutation", "determinant", "sign-map", "elementary-row-operation", "elementary-column-operation", "orthogonal-matrix", "linear-algebra", "matrix-theory"]
related_concepts: ["Permutation", "Determinant", "Sign Map", "Elementary Row Operation", "Elementary Column Operation", "Orthogonal Matrix", "Field"]
---

# Permutation Matrix

## Definition
A permutation matrix $P(\sigma)$ is a square matrix that represents a permutation $\sigma \in S_n$ of the standard basis vectors. It is defined as:

$$P(\sigma)_{ij} = \begin{cases}
1 & \text{if } i = \sigma(j) \\
0 & \text{if } i \neq \sigma(j)
\end{cases}$$

In other words, a permutation matrix has exactly one 1 in each row and each column, with all other elements being 0.

## Properties
1. Every permutation matrix is a binary matrix (contains only 0s and 1s)
2. Every permutation matrix has exactly one 1 in each row and each column
3. The determinant of a permutation matrix equals the sign of the corresponding permutation:
   $$\det(P(\sigma)) = \operatorname{sgn}(\sigma)$$
4. Permutation matrices are orthogonal: $P^T P = P P^T = I$
5. The inverse of a permutation matrix is its transpose: $P(\sigma)^{-1} = P(\sigma)^T = P(\sigma^{-1})$
6. The set of all $n \times n$ permutation matrices forms a group under matrix multiplication

## Examples
### Example 1: Identity Permutation
The identity permutation $\sigma = (1)(2)\ldots(n)$ corresponds to the identity matrix:
$$P(\operatorname{id}) = I_n = \begin{pmatrix}
1 & 0 & \cdots & 0 \\
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{pmatrix}$$

### Example 2: Transposition
The permutation matrix for the transposition $(1 \, 2)$ in $S_3$ is:
$$P((1 \, 2)) = \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{pmatrix}$$

Its determinant is $-1$, which equals $\operatorname{sgn}((1 \, 2))$.

## Related Theorems
1. **Matrix Multiplication Interpretation**: 
   - Multiplying $A$ on the left by $P(\sigma)$ permutes the rows of $A$ according to $\sigma$
   - Multiplying $A$ on the right by $P(\sigma)$ permutes the columns of $A$ according to $\sigma$

2. **Composition Representation**: For permutations $\sigma, \tau \in S_n$:
   $$P(\sigma \circ \tau) = P(\sigma) \cdot P(\tau)$$

3. **Relationship to Elementary Operations**:
   - A permutation matrix can be obtained from the identity matrix by a sequence of row or column swaps (Type III elementary operations)

## Applications
1. Representing permutations in matrix form
2. Row and column rearrangements in matrices
3. Network routing and assignment problems
4. Graph isomorphism testing
5. Understanding symmetry groups in linear algebra

## Related Concepts
- [[Permutation]]: The underlying mathematical concept represented by permutation matrices
- [[Sign Map]]: Determines the determinant of a permutation matrix
- [[Determinant]]: For a permutation matrix equals the sign of the permutation
- [[Elementary Row Operation]]: Type III EROs correspond to left multiplication by permutation matrices
- [[Elementary Column Operation]]: Type III ECOs correspond to right multiplication by permutation matrices
