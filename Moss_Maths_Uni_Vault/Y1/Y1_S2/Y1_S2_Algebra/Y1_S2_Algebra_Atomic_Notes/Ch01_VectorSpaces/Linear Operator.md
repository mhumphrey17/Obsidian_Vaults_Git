---
title: "Linear Operator"
aliases: ["Linear Operators", "Linear Endomorphism"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "linear-map", "matrix-representation", "eigenvalue", "eigenvector", "diagonalization", "kernel", "image", "vector-space", "endomorphism", "linear-algebra"]
related_concepts: ["Linear Map", "Matrix Representation", "Eigenvalue", "Eigenvector", "Diagonalization", "Kernel", "Image", "Vector Space", "Field"]
---

# Linear Operator

## Definition
A **linear operator** is a linear map $\phi: V \rightarrow V$ from a vector space $V$ to itself. In other words, it is a function $\phi: V \rightarrow V$ that satisfies:

$$\phi(\lambda v + \mu w) = \lambda \phi(v) + \mu \phi(w)$$

for all vectors $v, w \in V$ and all scalars $\lambda, \mu \in \mathbb{F}$.

## Properties
- Linear operators on a finite-dimensional vector space can be represented by square matrices.
- The composition of linear operators is also a linear operator.
- The identity map $I: V \rightarrow V$ defined by $I(v) = v$ is a linear operator.
- The kernel and image of a linear operator are both subspaces of the same vector space $V$.
- A linear operator $\phi$ is invertible if and only if its kernel is trivial ($\ker \phi = \{0\}$) and its image is the entire space ($\text{Im } \phi = V$).
- Linear operators can be classified based on their eigenvalues and eigenvectors.
- The set of all linear operators on a vector space forms a vector space itself, with dimension $(\dim V)^2$.
- Linear operators can be added and scaled: $(\phi + \psi)(v) = \phi(v) + \psi(v)$ and $(\lambda \phi)(v) = \lambda \phi(v)$.

## Examples
1. **Identity Operator**: The map $I: V \rightarrow V$ defined by $I(v) = v$ for all $v \in V$.

2. **Zero Operator**: The map $0: V \rightarrow V$ defined by $0(v) = 0$ for all $v \in V$.

3. **Rotation**: In $\mathbb{R}^2$, the operator that rotates vectors by a fixed angle $\theta$ counterclockwise about the origin.

4. **Projection**: In $\mathbb{R}^3$, the operator that projects vectors onto a fixed plane through the origin.

5. **Differential Operator**: The derivative operator $D: \mathbb{R}[X]_{\leq n} \rightarrow \mathbb{R}[X]_{\leq n}$ defined by $D(p(X)) = p'(X)$.

6. **Scaling Operator**: For any scalar $c \in \mathbb{F}$, the map $S_c: V \rightarrow V$ defined by $S_c(v) = cv$.

7. **Reflection**: In $\mathbb{R}^n$, the operator that reflects vectors across a hyperplane through the origin.

## Important Theorems/Results
- **Definition 1.6.3**: A matrix $A \in M_{n,n}(\mathbb{F})$ represents a linear operator $\psi: V \rightarrow V$ with respect to a basis $\alpha$ if:
  $$\psi(v_j) = \sum_{i} a_{ij} v_i$$

- **Corollary 1.7.8**: If a linear operator $\psi: V \rightarrow V$ is represented by matrices $B$ and $B'$ with respect to bases related by a change of basis matrix $P$, then:
  $$B' = P^{-1}BP$$
  This is the similarity relation between matrices.

- In a suitable basis, many linear operators can be represented by matrices in special forms (diagonal, triangular, Jordan normal form, etc.).

## Connections to Other Concepts
- Linear operators are a specific type of [[Linear Map]] where the domain and codomain are the same vector space.
- The [[Matrix Representation]] of a linear operator with respect to a basis is always a square matrix.
- Linear operators can have [[Eigenvalue]]s and [[Eigenvector]]s, which are fundamental in understanding their behavior.
- The concepts of [[Kernel]] and [[Image]] apply to linear operators just as they do to general linear maps.
- Linear operators can sometimes be [[Diagonalization|diagonalized]], meaning they can be represented by diagonal matrices in suitable bases.

## Related Problems
- [[PS01-Q03]] - Analyzing a projection operator on $\mathbb{R}^2$.
- [[PS01-Q07]] - Finding the kernel and image of a linear operator.
- Problems involving eigenvalues, eigenvectors, and diagonalization.

## Notes
- Linear operators are often studied in terms of how they transform a vector space, such as rotations, reflections, projections, or scaling.
- The eigenvalues and eigenvectors of a linear operator provide insight into its geometric and algebraic properties.
- In physics and engineering, linear operators model various transformations and phenomena, such as rotations in mechanics or Hamiltonians in quantum mechanics.
- The study of linear operators extends into functional analysis, where operators on infinite-dimensional spaces are considered.
- Linear operators can be classified based on properties such as being self-adjoint, normal, unitary, or nilpotent, each with specific characteristics and applications.
