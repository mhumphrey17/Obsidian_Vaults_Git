---
title: "Orthogonal Projection"
aliases: ["Orthogonal Projection Operator", "Projection", "Orthogonal Projection Map"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "linear-operator", "inner-product-space", "projection"]
related_concepts: ["Orthogonal Direct Sum", "Orthogonal Complement", "Linear Operator", "Subspace", "Least Squares"]
---

# Orthogonal Projection

## Definition
Let $V$ be an [[Inner Product Space]] and $U$ a finite-dimensional subspace of $V$. Since $V = U \oplus U^{\perp}$, every vector $v \in V$ can be uniquely written as:
$$v = u + w \text{ where } u \in U \text{ and } w \in U^{\perp}$$

The **orthogonal projection** of $v$ onto $U$, denoted $\text{proj}_U(v)$ or $P_U(v)$, is defined as:
$$\text{proj}_U(v) = u$$

The orthogonal projection operator $P_U: V \rightarrow V$ is given by:
$$P_U(v) = u \text{ where } v = u + w \text{ with } u \in U, w \in U^{\perp}$$

## Properties

### Linear Operator
$P_U$ is a linear operator:
- $P_U(v + w) = P_U(v) + P_U(w)$
- $P_U(\lambda v) = \lambda P_U(v)$

### Idempotent
$P_U^2 = P_U$ (applying the projection twice gives the same result as applying it once)

### Range and Kernel
- $\text{im}(P_U) = U$
- $\ker(P_U) = U^{\perp}$

### Self-Adjoint
$P_U^* = P_U$ (the operator equals its adjoint)

### Norm Properties
- $\|P_U(v)\| \leq \|v\|$ for all $v \in V$
- $\|v - P_U(v)\|^2 = \|v\|^2 - \|P_U(v)\|^2$

## Explicit Formula

If $\{u_1, \ldots, u_k\}$ is an orthonormal basis for $U$, then:
$$P_U(v) = \sum_{i=1}^k \langle u_i, v \rangle u_i$$

This gives the coordinates of the projection in terms of inner products with basis vectors.

## Example: Projection onto a Line

In $\mathbb{R}^3$, project onto the line $L = \text{span}\{(1,1,1)\}$.

First, normalize: $u = \frac{1}{\sqrt{3}}(1,1,1)$

For any $v = (x,y,z)$:
$$P_L(v) = \langle u, v \rangle u = \frac{x+y+z}{3} \cdot \frac{1}{\sqrt{3}}(1,1,1) = \frac{x+y+z}{3}(1,1,1)$$

For example, $P_L((1,2,3)) = \frac{6}{3}(1,1,1) = (2,2,2)$.

## Matrix Representation

If $U = \text{im}(A)$ for some matrix $A$, then:
$$P_U = A(A^*A)^{-1}A^*$$

For $A$ with orthonormal columns, this simplifies to $P_U = AA^*$.

## Geometric Interpretation
- $P_U(v)$ is the point in $U$ closest to $v$
- Minimizes $\|v - u\|$ over all $u \in U$
- The vector $v - P_U(v)$ is orthogonal to all vectors in $U$

## Applications

### Least Squares
The least squares solution to $Ax = b$ is:
$$x^* = A^{\dagger}b = (A^*A)^{-1}A^*b$$
where $A^*b$ represents projecting $b$ onto the column space of $A$.

### Gram-Schmidt Process
Each step projects onto the orthogonal complement of the span of previous vectors.

### Signal Processing
- Noise reduction: project signals onto signal subspaces
- Compression: project onto lower-dimensional subspaces

### Computer Graphics
- Shadow projection
- 2D rendering of 3D objects

## Projection onto Multiple Subspaces

If $V = U_1 \oplus U_2 \oplus \cdots \oplus U_k$ (orthogonal direct sum), then:
$$v = P_{U_1}(v) + P_{U_2}(v) + \cdots + P_{U_k}(v)$$

and $P_{U_1} + P_{U_2} + \cdots + P_{U_k} = I$ (identity operator).

## Related Results

### Projection Theorem
For any $v \in V$ and subspace $U$:
- $P_U(v)$ is the unique vector in $U$ such that $(v - P_U(v)) \perp U$
- $P_U(v)$ minimizes $\|v - u\|$ over all $u \in U$

### Pythagorean Theorem
If $v = P_U(v) + (v - P_U(v))$ with $P_U(v) \in U$ and $(v - P_U(v)) \in U^{\perp}$, then:
$$\|v\|^2 = \|P_U(v)\|^2 + \|v - P_U(v)\|^2$$

## Computational Complexity
- Using orthonormal basis: $O(kn)$ where $k = \dim U$ and $n = \dim V$
- Using general basis: $O(k^2n + k^3)$ due to solving $(A^*A)^{-1}$

## Related Concepts
- [[Orthogonal Direct Sum]]: Provides the decomposition used for projection
- [[Orthogonal Complement]]: The complement where $v - P_U(v)$ lies
- [[Linear Operator]]: Projection is a specific type of linear operator
- [[Subspace]]: The target space for projection
- [[Least Squares]]: Major application of orthogonal projection

## Notes
- Orthogonal projections are the "best approximations" in inner product spaces
- They satisfy an elegant minimization property
- Many algorithms in numerical linear algebra rely on projections
- The projection operator characterizes subspaces completely
