---
title: "Change of Basis Matrix"
aliases: ["Change of Basis", "Basis Transformation", "Transition Matrix"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "basis", "coordinate-vector", "matrix-representation", "linear-map", "similar-matrices", "linear-algebra", "vector-space"]
related_concepts: ["Basis", "Coordinate Vector", "Matrix Representation", "Linear Map", "Similar Matrices", "Vector Space", "Field"]
---

# Change of Basis Matrix

## Definition
A **change of basis matrix** is a matrix that converts the coordinate representation of vectors between different bases in a vector space. Given two bases $\alpha: v_1, \ldots, v_n$ and $\alpha': v'_1, \ldots, v'_n$ of a vector space $V$ over a field $\mathbb{F}$, the change of basis matrix from $\alpha$ to $\alpha'$, denoted $P_{\alpha \to \alpha'}$, is the matrix $P \in M_{n,n}(\mathbb{F})$ such that:

$$v'_j = \sum_{i=1}^n p_{ij} v_i \quad \text{for } j = 1, 2, \ldots, n$$

In other words, the $j$-th column of $P$ contains the coefficients of $v'_j$ when expressed as a linear combination of the vectors in $\alpha$.

## Properties
- The change of basis matrix $P_{\alpha \to \alpha'}$ is always invertible (since both $\alpha$ and $\alpha'$ are bases).
- If $P$ is the change of basis matrix from $\alpha$ to $\alpha'$, then $P^{-1}$ is the change of basis matrix from $\alpha'$ to $\alpha$.
- For a vector $v \in V$ with coordinate vectors $[v]_\alpha$ and $[v]_{\alpha'}$ with respect to the bases $\alpha$ and $\alpha'$, respectively, we have:
  $$[v]_\alpha = P [v]_{\alpha'}$$
  or equivalently:
  $$[v]_{\alpha'} = P^{-1} [v]_\alpha$$
- If $A$ and $A'$ are the matrix representations of a linear map $\psi: V \rightarrow W$ with respect to different bases related by change of basis matrices $P$ and $Q$, then:
  $$A' = Q^{-1} A P$$
- For linear operators on the same vector space, if the same basis change is applied to both domain and codomain, then:
  $$B' = P^{-1} B P$$
  This is the similarity relation between matrices.
- The columns of $P_{\alpha \to \alpha'}$ are the coordinate vectors of the new basis elements $v'_j$ with respect to the old basis $\alpha$.

## Examples
1. Let $\alpha: \mathbf{e}_1, \mathbf{e}_2$ be the standard basis for $\mathbb{R}^2$ and $\alpha': (1, 1), (1, -1)$ be another basis. To find the change of basis matrix from $\alpha$ to $\alpha'$, we express each vector in $\alpha'$ in terms of the standard basis:
   $$(1, 1) = 1 \cdot (1, 0) + 1 \cdot (0, 1)$$
   $$(1, -1) = 1 \cdot (1, 0) + (-1) \cdot (0, 1)$$
   So the change of basis matrix is:
   $$P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$
   
   For a vector $v = (2, 0)$, its coordinate vector with respect to $\alpha$ is $[v]_\alpha = (2, 0)$. Using the formula $[v]_{\alpha'} = P^{-1}[v]_\alpha$, we get:
   $$[v]_{\alpha'} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix} \begin{pmatrix} 2 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$$
   
   This means $v = 1 \cdot (1, 1) + 1 \cdot (1, -1)$, which we can verify: $(1, 1) + (1, -1) = (2, 0)$.

2. Let $\alpha: \mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ be the standard basis for $\mathbb{R}^3$ and $\alpha': \mathbf{e}_2, \mathbf{e}_3, \mathbf{e}_1$ be a permutation of this basis. The change of basis matrix is:
   $$P = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$$
   
   This is a permutation matrix, and in this case $P^{-1} = P^T$.

3. Consider the basis $\{1, X, X^2\}$ for the vector space of polynomials of degree at most 2, and another basis $\{1, X-1, (X-1)^2\}$ obtained by the substitution $Y = X-1$. The change of basis matrix involves expressing each element of the second basis in terms of the first:
   $$1 = 1$$
   $$X-1 = X - 1$$
   $$(X-1)^2 = X^2 - 2X + 1$$
   
   So the change of basis matrix is:
   $$P = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{pmatrix}$$

## Important Theorems/Results
- **Definition 1.7.1**: The change of basis matrix from $\alpha$ to $\alpha'$ is $P \in M_{n,n}(\mathbb{F})$ such that $v'_j = \sum_{i} p_{ij} v_i$.

- **Remark 1.7.2**: Following the definition, the map $\phi_{\alpha'} = \phi_{\alpha} \circ \phi_P$, where $\phi_P$ is the linear map defined by the matrix $P$. This gives an alternative characterization of the change of basis matrix: $\phi_P = \phi_{\alpha}^{-1} \circ \phi_{\alpha'}$.

- **Proposition 1.7.5**: For a vector $v \in V$ with coordinate representations $[v]_\alpha$ and $[v]_{\alpha'}$, we have $[v]_\alpha = P[v]_{\alpha'}$.

- **Proposition 1.7.7**: If a linear map $\psi: V \rightarrow W$ is represented by matrices $A$ and $A'$ with respect to different bases related by change of basis matrices $P$ and $Q$, then $A' = Q^{-1}AP$.

- **Corollary 1.7.8**: If a linear operator $\psi: V \rightarrow V$ is represented by matrices $B$ and $B'$ with respect to bases related by a change of basis matrix $P$, then $B' = P^{-1}BP$.

## Connections to Other Concepts
- Change of basis matrices facilitate the transition between different [[Basis|bases]] of a vector space.
- They are used to convert [[Coordinate Vector]]s between different coordinate systems.
- The concept is central to understanding how [[Matrix Representation]]s of [[Linear Map|linear maps]] transform under changes of basis.
- The similarity relation $B' = P^{-1}BP$ for matrices representing the same [[Linear Operator]] but with respect to different bases is a key application.
- Change of basis matrices are related to [[Similar Matrices]] in matrix theory.

## Related Problems
- [[PS01-Q09]] - Finding the change of basis matrix for projection onto specific lines.
- Problems involving computing the matrix representation of a linear map with respect to different bases.

## Notes
- The change of basis matrix provides a concrete way to move between different coordinate systems in a vector space.
- In computational linear algebra, choosing an appropriate basis can often simplify problems by transforming complicated matrices into simpler forms (e.g., diagonal or triangular).
- The concept of change of basis underlies many important matrix decompositions in linear algebra, such as diagonalization and Jordan normal form.
- In applications, a change of basis can be interpreted geometrically as a change of coordinate system, which is useful in computer graphics, physics, and engineering.
- The invertibility of change of basis matrices is a direct consequence of the fact that bases consist of linearly independent vectors.
