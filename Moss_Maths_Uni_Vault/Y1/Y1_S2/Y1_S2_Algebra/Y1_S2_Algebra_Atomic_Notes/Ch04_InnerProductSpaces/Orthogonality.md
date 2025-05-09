---
title: "Orthogonality"
aliases: ["Orthogonal Vectors", "Perpendicular", "Perpendicular Vectors"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "inner-product", "inner-product-space", "norm", "orthogonal-complement", "orthonormal-basis", "linear-independence", "gram-schmidt", "pythagorean-theorem", "field", "geometry", "linear-algebra"]
related_concepts: ["Inner Product", "Inner Product Space", "Norm", "Orthogonal Complement", "Orthonormal Basis", "Linear Independence", "Gram-Schmidt Orthogonalization", "Pythagoras Theorem", "Field"]
---

# Orthogonality

## Definition
Let $V$ be an [[Inner Product Space]]. Two vectors $v, w \in V$ are said to be **orthogonal** (or **perpendicular**) if:
$$\langle v, w \rangle = 0$$

When vectors are orthogonal, we write $v \perp w$.

## Properties

### Basic Properties
1. **Symmetry**: If $v \perp w$, then $w \perp v$
2. **Zero Vector**: The zero vector is orthogonal to every vector
3. **Scalar Multiplication**: If $v \perp w$, then $\lambda v \perp \mu w$ for any scalars $\lambda, \mu$
4. **Linearity**: If $v \perp w_1$ and $v \perp w_2$, then $v \perp (w_1 + w_2)$

### Pythagorean Theorem
If $v \perp w$, then:
$$\|v + w\|^2 = \|v\|^2 + \|w\|^2$$

**Proof**: 
$$\|v + w\|^2 = \langle v + w, v + w \rangle = \|v\|^2 + 2\langle v,w \rangle + \|w\|^2$$
Since $\langle v,w \rangle = 0$, we get $\|v + w\|^2 = \|v\|^2 + \|w\|^2$.

## Examples

### Example 1: Standard Orthogonal Vectors in $\mathbb{R}^3$
The vectors $e_1 = (1,0,0)$, $e_2 = (0,1,0)$, and $e_3 = (0,0,1)$ are pairwise orthogonal.

### Example 2: Orthogonal Functions
In the space of continuous functions on $[-\pi, \pi]$ with inner product:
$$\langle f,g \rangle = \int_{-\pi}^{\pi} f(x)g(x) dx$$
The functions $\sin(nx)$ and $\cos(mx)$ are orthogonal for any integers $n,m$.

### Example 3: Complex Vectors
In $\mathbb{C}^2$, the vectors $(1,i)$ and $(i,1)$ are orthogonal:
$$\langle (1,i), (i,1) \rangle = 1 \cdot \bar{i} + i \cdot \bar{1} = -i + i = 0$$

## Geometric Interpretation
- In Euclidean space, orthogonal vectors meet at right angles (90°)
- The angle $\theta$ between vectors $v$ and $w$ is given by:
  $$\cos \theta = \frac{\langle v,w \rangle}{\|v\| \|w\|}$$
- When $\langle v,w \rangle = 0$, we have $\cos \theta = 0$, so $\theta = 90°$

## Applications
- **Decomposition**: Vectors can be decomposed into orthogonal components
- **Linear Independence**: Orthogonal vectors are automatically linearly independent (if non-zero)
- **Basis Construction**: Orthogonal (and orthonormal) bases simplify calculations
- **Physics**: Force components, wave decomposition
- **Engineering**: Signal processing, data compression

## Related Concepts
- [[Inner Product]]: Orthogonality is defined using the inner product
- [[Inner Product Space]]: The space where orthogonality is defined
- [[Norm]]: Orthogonal vectors satisfy the Pythagorean theorem
- [[Orthogonal Complement]]: The set of all vectors orthogonal to a given subspace
- [[Orthonormal Basis]]: A basis consisting of orthogonal unit vectors

## Key Results
- **Linear Independence**: Any set of non-zero orthogonal vectors is linearly independent
- **Gram-Schmidt Process**: Any linearly independent set can be converted to an orthogonal set
- **Orthogonal Decomposition**: Every vector can be written as a sum of orthogonal components

## Notes
- Orthogonality generalizes the notion of "perpendicular" from Euclidean geometry
- Orthogonal vectors simplify many calculations in linear algebra
- The concept of orthogonality is fundamental to Fourier analysis and quantum mechanics
