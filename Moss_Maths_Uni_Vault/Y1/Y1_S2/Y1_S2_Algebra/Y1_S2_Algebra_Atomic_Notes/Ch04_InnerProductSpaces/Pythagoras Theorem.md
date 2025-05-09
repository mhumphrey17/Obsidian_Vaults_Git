---
title: "Pythagoras Theorem"
aliases: ["Pythagorean Theorem", "Pythagorean Identity"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "theorem", "inner-product-space", "orthogonality", "geometry", "inner-product", "norm", "right-triangle", "euclidean-geometry", "linear-algebra"]
related_concepts: ["Orthogonality", "Inner Product", "Norm", "Right Triangle", "Euclidean Geometry", "Inner Product Space", "Field"]
---

# Pythagoras Theorem

## Theorem Statement
Let $V$ be an [[Inner Product Space]]. If $v, w \in V$ are [[Orthogonality|orthogonal]] (i.e., $v \perp w$), then:
$$\|v + w\|^2 = \|v\|^2 + \|w\|^2$$

## Proof
Since $v \perp w$, we have $\langle v,w \rangle = 0$. Therefore:
$$\|v + w\|^2 = \langle v + w, v + w \rangle$$
$$= \langle v,v \rangle + \langle v,w \rangle + \langle w,v \rangle + \langle w,w \rangle$$
$$= \|v\|^2 + 0 + 0 + \|w\|^2$$
$$= \|v\|^2 + \|w\|^2$$

## Geometric Interpretation
- In Euclidean space, this states that in a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides
- The orthogonality condition corresponds to the right angle
- Generalizes the classical Pythagorean theorem to arbitrary inner product spaces

## Examples

### Example 1: Euclidean Space
In $\mathbb{R}^2$, vectors $v = (3,0)$ and $w = (0,4)$ are orthogonal:
- $\langle v,w \rangle = 3 \cdot 0 + 0 \cdot 4 = 0$ ✓
- $\|v\|^2 = 9$, $\|w\|^2 = 16$
- $\|v + w\|^2 = \|(3,4)\|^2 = 9 + 16 = 25$ ✓

### Example 2: Function Space
Consider functions $f(x) = \sin(x)$ and $g(x) = \cos(x)$ on $[0,2\pi]$ with inner product:
$$\langle f,g \rangle = \int_0^{2\pi} f(x)g(x)dx = 0$$
They are orthogonal, so:
$$\|f + g\|^2 = \|f\|^2 + \|g\|^2$$

### Example 3: Complex Vectors
In $\mathbb{C}^2$, vectors $v = (1,i)$ and $w = (i,-1)$ are orthogonal:
- $\langle v,w \rangle = 1 \cdot \bar{i} + i \cdot \overline{(-1)} = -i - i = -2i \neq 0$
- Wait, let's check: $\langle v,w \rangle = 1 \cdot \bar{i} + i \cdot \overline{(-1)} = 1 \cdot (-i) + i \cdot (-1) = -i - i = -2i$
- Actually, these are not orthogonal. Let me use $w = (-i,1)$:
- $\langle v,w \rangle = 1 \cdot \overline{(-i)} + i \cdot \bar{1} = 1 \cdot i + i \cdot 1 = i + i = 2i$
- Still not orthogonal. Let's use $w = (i,1)$:
- $\langle v,w \rangle = 1 \cdot \bar{i} + i \cdot \bar{1} = -i + i = 0$ ✓

## Generalizations

### Finite Orthogonal Sets
If $v_1, \ldots, v_n$ are pairwise orthogonal, then:
$$\|v_1 + \cdots + v_n\|^2 = \|v_1\|^2 + \cdots + \|v_n\|^2$$

### Infinite Series
For an infinite orthogonal sequence $(v_n)$ in a Hilbert space:
$$\left\|\sum_{n=1}^{\infty} v_n\right\|^2 = \sum_{n=1}^{\infty} \|v_n\|^2$$
(if the series converges)

## Applications

### Linear Algebra
- Simplifies calculations with orthogonal bases
- Used in Gram-Schmidt orthogonalization
- Essential for QR decomposition

### Analysis
- Fourier series and transforms
- Orthogonal polynomials
- Hilbert space theory

### Physics
- Conservation laws
- Quantum mechanics (orthogonal states)
- Signal processing

### Geometry
- Calculating distances in orthogonal coordinate systems
- 3D graphics and computer vision

## Related Results
- **Generalized Pythagoras**: For pairwise orthogonal vectors
- **Parseval's Identity**: For orthonormal bases
- **Bessel's Inequality**: For non-complete orthogonal sets

## Related Concepts
- [[Orthogonality]]: Essential condition for the theorem
- [[Inner Product]]: Used to define orthogonality
- [[Norm]]: The theorem relates norms of orthogonal vectors
- [[Right Triangle]]: Classical geometric interpretation
- [[Orthonormal Basis]]: Collection of orthogonal unit vectors

## Notes
- One of the most important results in geometry and analysis
- The orthogonality condition is crucial - the theorem fails for non-orthogonal vectors
- Provides the foundation for many results in Fourier analysis
- The classical theorem is a special case in 2D Euclidean space
