---
title: "Similar Matrices and Determinants"
aliases: ["similarity and determinants", "determinant invariance under similarity"]
tags: ["Y1_Alg", "Y1_Alg_s2_ch02_03", "concept", "determinant", "similarity"]
related_concepts: ["Similar Matrices", "Determinant", "Product Formula for Determinants", "Determinant of a Linear Operator", "Eigenvalues"]
date_created: 2025-05-09
---

# Similar Matrices and Determinants

## Definition
Two matrices $A$ and $B$ in $M_{n,n}(\mathbb{F})$ are similar if there exists an invertible matrix $P$ such that:

$$B = P^{-1}AP$$

The key property regarding determinants is:

> Similar matrices have equal determinants: if $A$ and $B$ are similar, then $\det(A) = \det(B)$.

## Proof
If $B = P^{-1}AP$, then using the product formula for determinants:

$$\det(B) = \det(P^{-1}AP) = \det(P^{-1}) \cdot \det(A) \cdot \det(P)$$

Since $\det(P^{-1}) = \frac{1}{\det(P)}$, we have:

$$\det(B) = \frac{1}{\det(P)} \cdot \det(A) \cdot \det(P) = \det(A)$$

## Implications
1. **Basis Independence**: The determinant of a linear operator is well-defined, regardless of the basis chosen for its matrix representation.

2. **Invariant Property**: The determinant is a similarity invariant, meaning it remains unchanged under similarity transformations.

3. **Trace Relation**: Similar matrices also have the same trace (sum of diagonal elements), and more generally, the same characteristic polynomial.

4. **Eigenvalue Preservation**: Similar matrices have the same eigenvalues (including multiplicities), which is consistent with having the same determinant, since the determinant equals the product of eigenvalues.

## Examples
### Example 1: Diagonal and Jordan Forms
If $A$ is diagonalizable, then $A$ is similar to a diagonal matrix $D$ with the eigenvalues of $A$ on the diagonal:

$$D = P^{-1}AP$$

Therefore:
$$\det(A) = \det(D) = \lambda_1 \cdot \lambda_2 \cdot \ldots \cdot \lambda_n$$

where $\lambda_1, \lambda_2, \ldots, \lambda_n$ are the eigenvalues of $A$.

### Example 2: Rotation Matrices
Consider the standard 2D rotation matrix and its representation in a different basis:

$$A = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

$$P = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$$

$$B = P^{-1}AP = \begin{pmatrix} \cos\theta & -\frac{\sin\theta}{3} \cdot 2 \\ \frac{\sin\theta}{2} \cdot 3 & \cos\theta \end{pmatrix}$$

Although $A$ and $B$ look different, both have determinant 1.

## Applications
1. **Change of Basis**: When changing the basis of a vector space, the determinant of the linear transformation remains invariant.

2. **Classification of Operators**: Helps classify linear operators by their invariant properties.

3. **Computational Simplification**: Sometimes it's easier to compute the determinant of a similar matrix that has a simpler form.

4. **Canonical Forms**: In finding canonical forms (like Jordan or diagonal) of matrices, the invariance of determinant serves as a verification tool.

5. **Spectral Theory**: The relationship between determinant, eigenvalues, and similarity is fundamental in spectral theory.

## Related Concepts
- [[Similar Matrices]]: The matrices that have the same determinant due to similarity
- [[Determinant]]: The invariant scalar value under similarity
- [[Product Formula for Determinants]]: Used to prove invariance under similarity
- [[Determinant of a Linear Operator]]: Well-defined because of determinant invariance under similarity
- [[Eigenvalues]]: Another set of invariants under similarity, related to determinants
- [[Change Of Basis Matrix]]: Generates similar matrices when changing basis
