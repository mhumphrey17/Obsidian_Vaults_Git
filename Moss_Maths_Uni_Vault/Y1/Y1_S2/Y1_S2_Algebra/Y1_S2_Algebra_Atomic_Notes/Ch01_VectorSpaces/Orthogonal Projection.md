---
title: "Orthogonal Projection"
aliases: ["Orthogonal Projector", "Normal Projection"]
tags: ["concept", "algebra-s2", "linear-transformation"]
related_concepts: ["Projection", "Linear Map", "Inner Product", "Orthogonality"]
date_created: 2025-05-09
---

# Orthogonal Projection

## Definition
An orthogonal projection is a specific type of [[Projection|projection]] where vectors are mapped onto a subspace along the direction that is perpendicular (orthogonal) to that subspace. Mathematically, if $P$ is an orthogonal projection onto a subspace $W$, then for any vector $v$, the vector $v - P(v)$ is orthogonal to every vector in $W$.

## Properties
1. Idempotence: $P^2 = P$ (applying the projection twice has the same effect as applying it once)
2. Self-adjointness: $P$ is self-adjoint with respect to the inner product, meaning $\langle P(u), v \rangle = \langle u, P(v) \rangle$ for all vectors $u$ and $v$
3. For an orthogonal projection $P$ onto subspace $W$, the kernel of $P$ is the orthogonal complement of $W$
4. Orthogonal projections minimize the distance between the original vector and its projection

## Matrix Representation
For the orthogonal projection onto a subspace $W$ with an orthonormal basis $\{w_1, w_2, \ldots, w_k\}$, the projection matrix is:

$$P = \sum_{i=1}^{k} w_i w_i^T$$

In $\mathbb{R}^n$ with the standard inner product, if $A$ is a matrix whose columns form an orthonormal basis for $W$, then:

$$P = AA^T$$

## Examples
1. Projection onto a line in $\mathbb{R}^2$:
   - For a line through the origin with direction vector $\vec{u}$ (unit vector), the orthogonal projection is:
     $$P = \vec{u}\vec{u}^T$$
   - For the line $y = mx$ with $m \neq 0$, using the unit vector $\vec{u} = \frac{1}{\sqrt{1+m^2}}(1,m)$, the projection matrix is:
     $$P = \frac{1}{1+m^2}\begin{pmatrix} 1 & m \\ m & m^2 \end{pmatrix}$$

2. Projection onto a plane in $\mathbb{R}^3$:
   - For a plane with normal vector $\vec{n}$ (unit vector), the orthogonal projection is:
     $$P = I - \vec{n}\vec{n}^T$$

## Applications
1. Least squares approximation in statistics and data fitting
2. Gram-Schmidt orthogonalization process
3. Fourier series representations
4. QR decomposition in numerical linear algebra
5. Signal processing and noise reduction

## Related Concepts
- [[Projection]]: The general concept of projections, which includes both orthogonal and oblique projections
- [[Linear Map]]: Orthogonal projections are special cases of linear maps
- [[Inner Product]]: The concept of orthogonality depends on an inner product
- [[Orthogonality]]: The key property defining orthogonal projections

## Further Reading
- Linear Algebra and Its Applications by Gilbert Strang, Chapter 4
- Linear Algebra Done Right by Sheldon Axler, Section 6.3
