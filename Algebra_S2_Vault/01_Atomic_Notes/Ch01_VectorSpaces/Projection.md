---
title: "Projection"
aliases: ["Projection Mapping", "Orthogonal Projection", "Linear Projection"]
tags: ["concept", "algebra-s2", "linear-transformation"]
related_concepts: ["Linear Map", "Subspace", "Kernel", "Image"]
date_created: 2025-05-09
---

# Projection

## Definition
A projection is a linear transformation $P: V \rightarrow V$ from a vector space to itself such that $P^2 = P$ (applying the projection twice has the same effect as applying it once). In other words, once a vector has been projected, projecting it again does not change it.

## Properties
1. Idempotence: $P^2 = P$
2. For any projection $P$, the vector space $V$ can be decomposed as $V = \text{Im}(P) \oplus \text{Ker}(P)$
3. If $P$ is an orthogonal projection, then it projects vectors onto a subspace along the orthogonal complement of that subspace
4. The matrix representation of a projection $P$ is also idempotent: $P^2 = P$

## Types of Projections
### Orthogonal Projection
An orthogonal projection maps vectors onto a subspace along the perpendicular (orthogonal) direction to that subspace.

### Oblique Projection
An oblique projection maps vectors onto a subspace along a direction that is not perpendicular to the subspace.

## Matrix Representation
For the orthogonal projection onto a subspace spanned by an orthonormal basis $\{u_1, u_2, \ldots, u_k\}$, the projection matrix is:

$$P = \sum_{i=1}^{k} u_i u_i^T$$

## Examples
1. Projection onto a line in $\mathbb{R}^2$: 
   - For the line $y = mx$ passing through the origin, the orthogonal projection is given by:
     $$P = \frac{1}{1+m^2}\begin{pmatrix} 1 & m \\ m & m^2 \end{pmatrix}$$

2. Projection onto a plane in $\mathbb{R}^3$:
   - For a plane with normal vector $\vec{n}$, the orthogonal projection is:
     $$P = I - \frac{\vec{n}\vec{n}^T}{\|\vec{n}\|^2}$$

## Applications
1. Least squares approximation in statistics
2. Dimensionality reduction in data analysis
3. Solving systems of linear equations 
4. Computer graphics for rendering objects in 3D spaces

## Related Concepts
- [[Linear Map]]: Projections are special cases of linear maps
- [[Subspace]]: Projections map vectors onto subspaces
- [[Kernel]]: The kernel of a projection is the set of vectors that map to zero
- [[Image]]: The image of a projection is the subspace onto which vectors are projected

## Further Reading
- Linear Algebra and Its Applications by Gilbert Strang, Chapter 4
- Linear Algebra Done Right by Sheldon Axler, Section 6.2
