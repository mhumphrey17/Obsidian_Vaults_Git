---
title: "Orthogonal Complement"
aliases: ["Orthogonal Subspace", "Perp", "Perpendicular Complement"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "inner-product-space", "subspace", "orthogonality", "direct-sum", "orthogonal-projection", "linear-algebra"]
related_concepts: ["Orthogonality", "Subspace", "Inner Product", "Direct Sum", "Orthogonal Projection", "Inner Product Space", "Field"]
---

# Orthogonal Complement

## Definition
Let $V$ be an [[Inner Product Space]] and $U$ a subspace of $V$. The **orthogonal complement** of $U$ in $V$, denoted $U^{\perp}$, is:
$$U^{\perp} = \{v \in V : \langle u, v \rangle = 0 \text{ for all } u \in U\}$$

In other words, $U^{\perp}$ consists of all vectors in $V$ that are orthogonal to every vector in $U$.

## Properties

### Basic Properties
1. **Subspace**: $U^{\perp}$ is always a subspace of $V$
2. **Trivial Intersection**: $U \cap U^{\perp} = \{0\}$
3. **Inclusion**: $U \subseteq (U^{\perp})^{\perp}$

**Proof of (1)**: 
- $0 \in U^{\perp}$ since $\langle u, 0 \rangle = 0$ for all $u \in U$
- If $v, w \in U^{\perp}$ and $\lambda \in \mathbb{F}$, then for any $u \in U$:
  $$\langle u, v + \lambda w \rangle = \langle u, v \rangle + \lambda \langle u, w \rangle = 0 + \lambda \cdot 0 = 0$$

### Fundamental Theorem
**Theorem**: If $U$ is a finite-dimensional subspace of an inner product space $V$, then:
$$V = U \oplus U^{\perp}$$

This means every $v \in V$ can be uniquely written as $v = u + w$ where $u \in U$ and $w \in U^{\perp}$.

### Dimension Formula
If $V$ is finite-dimensional, then:
$$\dim U^{\perp} = \dim V - \dim U$$

### Double Complement
If $U$ is finite-dimensional, then:
$$U = (U^{\perp})^{\perp}$$

## Examples

### Example 1: Line in $\mathbb{R}^3$
Let $U = \text{span}\{(1,0,0)\}$ (the x-axis). Then:
$$U^{\perp} = \{(x,y,z) : x = 0\}$$
This is the yz-plane.

### Example 2: Plane in $\mathbb{R}^3$
Let $U$ be the plane $x + y + z = 0$. Then:
$$U^{\perp} = \text{span}\{(1,1,1)\}$$
The normal vector to the plane.

### Example 3: Zero and Full Space
- $\{0\}^{\perp} = V$
- $V^{\perp} = \{0\}$

### Example 4: Function Space
In $L^2[0,2\pi]$, let $U = \text{span}\{\cos(x), \sin(x)\}$. Then $U^{\perp}$ contains all functions orthogonal to both sine and cosine, including $\cos(2x)$, $\sin(2x)$, etc.

## Computation Methods

### Using Orthonormal Basis
If $\{u_1, \ldots, u_k\}$ is an orthonormal basis for $U$, then:
$$v \in U^{\perp} \iff \langle u_i, v \rangle = 0 \text{ for all } i = 1, \ldots, k$$

### Matrix Representation
If $U = \text{im}(A)$ for some matrix $A$, then:
$$U^{\perp} = \ker(A^*)$$
where $A^*$ is the conjugate transpose of $A$.

## Applications

### Least Squares
The least squares solution to $Ax = b$ is characterized by:
$$(b - Ax) \in (\text{im}(A))^{\perp} = \ker(A^*)$$

### Optimization
Many optimization problems involve finding projections onto constraint surfaces, using orthogonal complements.

### Quantum Mechanics
Orthogonal subspaces represent independent quantum states.

### Signal Processing
Noise reduction often involves projecting signals onto signal subspaces and away from noise subspaces.

## Related Results

### Projection Formula
For any $v \in V$:
$$v = \text{proj}_U(v) + \text{proj}_{U^{\perp}}(v)$$
where $\text{proj}_U(v) \in U$ and $\text{proj}_{U^{\perp}}(v) \in U^{\perp}$.

### Gram-Schmidt Extension
Any orthonormal basis of $U$ can be extended to an orthonormal basis of $V$ by adding an orthonormal basis of $U^{\perp}$.

## Related Concepts
- [[Orthogonality]]: The definition depends on orthogonality
- [[Subspace]]: $U^{\perp}$ is always a subspace
- [[Inner Product]]: Used to define orthogonality
- [[Direct Sum]]: $V = U \oplus U^{\perp}$ when $U$ is finite-dimensional
- [[Orthogonal Projection]]: Projects onto $U$ or $U^{\perp}$

## Geometric Interpretation
- In $\mathbb{R}^3$, the orthogonal complement of a line is a plane
- The orthogonal complement of a plane is a line
- Generally, $U$ and $U^{\perp}$ are "perpendicular" subspaces that together span the entire space

## Notes
- The orthogonal complement provides a natural decomposition of vector spaces
- It's fundamental to understanding projections and least squares
- The double complement property only holds for finite-dimensional subspaces
- In infinite dimensions, $U$ may be a proper subset of $(U^{\perp})^{\perp}$
