---
title: "Parallelogram Identity"
aliases: ["Parallelogram Law", "Parallelogram Equality"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "theorem", "identity", "inner-product-space", "geometry", "inner-product", "norm", "euclidean-geometry", "parallelogram", "inner-product-characterization", "linear-algebra"]
related_concepts: ["Inner Product", "Norm", "Euclidean Geometry", "Parallelogram", "Inner Product Characterization", "Inner Product Space", "Field"]
---

# Parallelogram Identity

## Theorem Statement
Let $V$ be an [[Inner Product Space]]. For any vectors $v, w \in V$:
$$\|v + w\|^2 + \|v - w\|^2 = 2(\|v\|^2 + \|w\|^2)$$

## Proof
Using the definition of norm and properties of inner products:
$$\|v + w\|^2 = \langle v + w, v + w \rangle = \|v\|^2 + 2\langle v,w \rangle + \|w\|^2$$
$$\|v - w\|^2 = \langle v - w, v - w \rangle = \|v\|^2 - 2\langle v,w \rangle + \|w\|^2$$

Adding these equations:
$$\|v + w\|^2 + \|v - w\|^2 = 2\|v\|^2 + 2\|w\|^2 = 2(\|v\|^2 + \|w\|^2)$$

## Geometric Interpretation
- In Euclidean space, this states that the sum of squares of the diagonals of a parallelogram equals twice the sum of squares of its sides
- If we have a parallelogram with sides $v$ and $w$, the diagonals are $v + w$ and $v - w$
- The identity provides a relationship between the lengths of sides and diagonals

## Examples

### Example 1: Euclidean Space
In $\mathbb{R}^2$, let $v = (3,0)$ and $w = (0,4)$:
- $\|v\|^2 = 9$, $\|w\|^2 = 16$
- $\|v + w\|^2 = \|(3,4)\|^2 = 25$
- $\|v - w\|^2 = \|(3,-4)\|^2 = 25$
- Left side: $25 + 25 = 50$
- Right side: $2(9 + 16) = 50$ ✓

### Example 2: Complex Vector Space
In $\mathbb{C}^2$, let $v = (1,i)$ and $w = (1,-i)$:
- $\|v\|^2 = |1|^2 + |i|^2 = 2$
- $\|w\|^2 = |1|^2 + |-i|^2 = 2$
- $v + w = (2,0)$, so $\|v + w\|^2 = 4$
- $v - w = (0,2i)$, so $\|v - w\|^2 = 4$
- Left side: $4 + 4 = 8$
- Right side: $2(2 + 2) = 8$ ✓

### Example 3: Function Space
For continuous functions on $[0,1]$ with $L^2$ inner product:
$$\|f + g\|^2 + \|f - g\|^2 = 2(\|f\|^2 + \|g\|^2)$$
where $\|f\|^2 = \int_0^1 |f(x)|^2 dx$

## Characterization of Inner Product Spaces
The parallelogram identity is crucial for characterizing inner product spaces:

**Theorem (Jordan and von Neumann)**: A normed space $(V, \|\cdot\|)$ is an inner product space if and only if its norm satisfies the parallelogram identity.

If the parallelogram identity holds, the inner product can be recovered by:
- **Real case**: $\langle v,w \rangle = \frac{1}{4}(\|v+w\|^2 - \|v-w\|^2)$
- **Complex case**: $\langle v,w \rangle = \frac{1}{4}\sum_{k=0}^{3} i^k \|v + i^k w\|^2$

## Applications

### Distinguishing Inner Product Spaces
- Not all norms come from inner products
- The parallelogram identity provides a test
- Examples of norms that don't satisfy it: $L^1$, $L^{\infty}$, many $L^p$ norms with $p \neq 2$

### Optimization Theory
- Used in proving convexity results
- Variational problems in Hilbert spaces
- Gradient methods in inner product spaces

### Geometry
- Properties of parallelograms in abstract spaces
- Metric geometry and Banach spaces
- Differential geometry

## Related Identities
- **Polarization Identity**: Recovers inner product from norm
- **Apollonius's Identity**: For midpoints in triangles
- **British Flag Theorem**: Generalization to higher dimensions

## Examples of Spaces Where It Fails
1. **$\ell^1$ space**: $\|(1,0)\|_1 = \|(0,1)\|_1 = 1$, but the parallelogram identity fails
2. **$L^{\infty}$ space**: Similar failure for the supremum norm
3. **General $L^p$ spaces**: Only $L^2$ satisfies the parallelogram identity

## Related Concepts
- [[Inner Product]]: The identity characterizes inner product spaces
- [[Norm]]: Related to norms induced by inner products
- [[Euclidean Geometry]]: Classical parallelogram properties
- [[Hilbert Space]]: Complete inner product spaces satisfy this identity
- [[Polarization Identity]]: Uses this to recover inner products

## Notes
- Fundamental for distinguishing inner product spaces from general normed spaces
- Provides a criterion for when a norm comes from an inner product
- Essential in functional analysis and geometry
- The proof is remarkably simple but the consequences are profound
