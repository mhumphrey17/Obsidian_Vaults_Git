---
title: "Rank"
aliases: ["Rank of a Linear Map", "Rank of a Matrix"]
tags: [concept, algebra-s2, ch-1, sec-1-8]
related_concepts: ["Linear Map", "Image", "Matrix", "Nullity", "Rank-Nullity Theorem"]
formula: "\\operatorname{rank} \\phi = \\dim(\\operatorname{Im} \\phi)"
date_created: 2025-05-09
---

# Rank

## Definition
The **rank** of a linear map $\phi: V \rightarrow W$ between vector spaces $V$ and $W$ over a field $\mathbb{F}$ is the dimension of the image of $\phi$:

$$\operatorname{rank} \phi = \dim(\operatorname{Im} \phi)$$

For a matrix $A \in M_{m,n}(\mathbb{F})$, the rank of $A$, denoted $\operatorname{rank} A$, is the rank of the associated linear map $\phi_A: \mathbb{F}^n \rightarrow \mathbb{F}^m$ defined by $\phi_A(x) = Ax$.

## Properties
- For a matrix $A$, $\operatorname{rank} A$ equals the number of linearly independent rows or columns of $A$.
- The rank of a matrix $A$ equals the number of pivots in any row echelon form of $A$.
- $0 \leq \operatorname{rank} A \leq \min(m, n)$ for an $m \times n$ matrix $A$.
- A matrix or linear map has full rank if its rank equals the smaller of the dimensions of its domain and codomain.
- For any matrix $A$, $\operatorname{rank} A = \operatorname{rank} A^T$, where $A^T$ is the transpose of $A$.
- If $A$ and $B$ are equivalent matrices (i.e., $B = PAQ$ for invertible matrices $P$ and $Q$), then $\operatorname{rank} A = \operatorname{rank} B$.
- If $A$ and $B$ are similar matrices (i.e., $B = P^{-1}AP$ for an invertible matrix $P$), then $\operatorname{rank} A = \operatorname{rank} B$.
- For any matrices $A$ and $B$ of compatible sizes, $\operatorname{rank}(AB) \leq \min(\operatorname{rank} A, \operatorname{rank} B)$.
- For a linear map $\phi: V \rightarrow W$ with $\dim V < \infty$, the Rank-Nullity Theorem states that $\operatorname{rank} \phi + \operatorname{null} \phi = \dim V$.

## Examples
1. Consider the linear map $\phi: \mathbb{R}^3 \rightarrow \mathbb{R}^2$ given by $\phi(x, y, z) = (x + y, y + z)$. The image of $\phi$ is all of $\mathbb{R}^2$, so $\operatorname{rank} \phi = 2$.

2. The identity matrix $I_n$ has rank $n$ because its image is the entire space $\mathbb{R}^n$.

3. The zero matrix $0_{m,n}$ has rank 0 because its image is just the zero vector.

4. Consider the matrix 
   $$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$$
   
   The third row is the sum of the first two rows, so the rows are not linearly independent. Converting to row echelon form:
   
   $$A \sim \begin{pmatrix} 1 & 2 & 3 \\ 0 & -3 & -6 \\ 0 & 0 & 0 \end{pmatrix}$$
   
   There are 2 pivot positions, so $\operatorname{rank} A = 2$.

5. For the projection matrix 
   $$P = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$$
   onto the line $y = x$ in $\mathbb{R}^2$, the image is a one-dimensional subspace (a line), so $\operatorname{rank} P = 1$.

6. For the derivative operator $D: \mathbb{R}[X]_{\leq n} \rightarrow \mathbb{R}[X]_{\leq n-1}$, $\operatorname{rank} D = n$ because the image consists of all polynomials of degree at most $n-1$.

## Important Theorems/Results
- **Proposition 1.8.4**: For a matrix $A \in M_{m,n}(\mathbb{F})$, $\operatorname{rank} A = \operatorname{rank} \phi_A$.

- **Corollary 1.8.5**:
  1. If a matrix $A$ represents a linear map $\phi: V \rightarrow W$ with respect to any bases, then $\operatorname{rank} A = \operatorname{rank} \phi$.
  2. If matrices $A$ and $B$ are equivalent, then $\operatorname{rank} A = \operatorname{rank} B$.

- **Proposition 1.8.7**: For a matrix $A \in M_{m,n}(\mathbb{F})$, the following are equal:
  1. $\operatorname{rank} A$ (the rank of the linear map $\phi_A$)
  2. The dimension of the column space of $A$ (the column rank)
  3. The dimension of the row space of $A$ (the row rank)
  4. The smallest $r$ such that $A = BC$ for some $B \in M_{m,r}(\mathbb{F})$ and $C \in M_{r,n}(\mathbb{F})$

- **Corollary 1.8.8**: $\operatorname{rank}(A) = \operatorname{rank}(A^T)$

## Connections to Other Concepts
- The rank of a [[Linear Map]] is the dimension of its [[Image]].
- For matrices, rank is connected to the concept of linear independence of rows and columns.
- The [[Nullity]] of a linear map is complementary to its rank through the [[Rank-Nullity Theorem]].
- Rank is preserved under operations that correspond to changes of [[Basis]].
- A [[Matrix]] is invertible if and only if its rank equals its size (for square matrices).

## Related Problems
- [[PS01-Q01]] - Understanding rank in the context of solvability of linear systems.
- [[PS01-Q04]] - Analyzing how rank affects the number of solutions of a linear system.

## Notes
- The concept of rank is fundamental in linear algebra, providing a measure of the "effective dimensionality" of a linear map or matrix.
- The equality of row rank and column rank (Proposition 1.8.7) is a deep result connecting the algebraic and geometric perspectives of linear maps.
- In applications, the rank of a matrix or linear map often corresponds to the number of independent variables or constraints in a system.
- Rank deficiency (when the rank is less than the maximum possible) indicates redundancy or dependency in the system represented by the linear map or matrix.
- Matrices of rank 1 have special structure: they can always be written as the outer product of two vectors.
