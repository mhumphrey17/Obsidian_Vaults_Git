---
title: "Norm"
aliases: ["Vector Norm", "Length", "Magnitude"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "inner-product-space", "metric", "inner-product", "orthogonality", "distance", "triangle-inequality", "linear-algebra"]
related_concepts: ["Inner Product", "Inner Product Space", "Orthogonality", "Distance", "Triangle Inequality", "Metric Space", "Field"]
---

# Norm

## Definition
Let $V$ be an [[Inner Product Space]] with inner product $\langle \cdot, \cdot \rangle$. The norm of a vector $v \in V$ is defined as:
$$\|v\| := \sqrt{\langle v,v \rangle} \geq 0$$

The norm represents the "length" or "magnitude" of a vector in the inner product space.

## Properties

### Basic Properties
1. **Non-negativity**: $\|v\| \geq 0$ for all $v \in V$
2. **Definiteness**: $\|v\| = 0$ if and only if $v = 0$
3. **Positive Homogeneity**: $\|\lambda v\| = |\lambda| \|v\|$ for all $\lambda \in \mathbb{F}$, $v \in V$
4. **Triangle Inequality**: $\|v + w\| \leq \|v\| + \|w\|$ for all $v,w \in V$

### Distance Function
The norm induces a distance function (metric) on $V$:
$$d(v,w) = \|v - w\|$$

This makes every inner product space a metric space.

## Examples

### Example 1: Euclidean Norm in $\mathbb{R}^n$
For $x = (x_1, \ldots, x_n) \in \mathbb{R}^n$:
$$\|x\| = \sqrt{x_1^2 + \cdots + x_n^2}$$

### Example 2: Complex Norm in $\mathbb{C}^n$
For $z = (z_1, \ldots, z_n) \in \mathbb{C}^n$:
$$\|z\| = \sqrt{|z_1|^2 + \cdots + |z_n|^2}$$

### Example 3: Function Norm (L² norm)
For functions $f \in L^2[a,b]$:
$$\|f\| = \sqrt{\int_a^b |f(x)|^2 dx}$$

## Related Theorems

### Theorem: Cauchy-Schwarz Inequality
For any inner product space, the Cauchy-Schwarz inequality states:
$$|\langle v,w \rangle| \leq \|v\| \|w\|$$

### Theorem: Parallelogram Law
In any inner product space:
$$\|v + w\|^2 + \|v - w\|^2 = 2(\|v\|^2 + \|w\|^2)$$

### Theorem: Pythagorean Theorem
If $v \perp w$ (i.e., $\langle v,w \rangle = 0$), then:
$$\|v + w\|^2 = \|v\|^2 + \|w\|^2$$

## Applications
- **Geometry**: Measuring distances and angles in vector spaces
- **Analysis**: Defining convergence and continuity
- **Optimization**: Measuring error and finding minimal solutions
- **Physics**: Representing magnitudes of physical quantities
- **Signal Processing**: Measuring signal strength and energy

## Related Concepts
- [[Inner Product]]: The norm is derived from the inner product
- [[Inner Product Space]]: The space where norms are defined
- [[Orthogonality]]: Vectors with zero inner product satisfy the Pythagorean theorem
- [[Triangle Inequality]]: One of the fundamental properties of norms
- [[Distance]]: The norm induces a distance function on the space

## Notes
- Not every norm comes from an inner product (parallelogram law test)
- The norm provides a way to do analysis on vector spaces
- Unit vectors have norm 1: $\|v\| = 1$
- Normalization: For $v \neq 0$, the vector $\frac{v}{\|v\|}$ has norm 1
