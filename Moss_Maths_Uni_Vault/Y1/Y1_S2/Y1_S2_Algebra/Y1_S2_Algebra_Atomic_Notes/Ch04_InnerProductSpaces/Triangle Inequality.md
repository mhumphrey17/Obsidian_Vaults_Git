---
title: "Triangle Inequality"
aliases: ["Triangle Rule", "Minkowski Inequality"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "theorem", "inner-product-space", "metric", "norm", "inner-product", "cauchy-schwarz-inequality", "metric-space", "distance", "linear-algebra"]
related_concepts: ["Norm", "Inner Product", "Cauchy-Schwarz Inequality", "Metric Space", "Distance", "Inner Product Space", "Field"]
---

# Triangle Inequality

## Theorem Statement
Let $V$ be an [[Inner Product Space]]. For any vectors $v, w \in V$:
$$\|v + w\| \leq \|v\| + \|w\|$$

with equality if and only if $v = 0$ or $w = \lambda v$ for some $\lambda \geq 0$.

## Proof
The proof uses the [[Cauchy-Schwarz Inequality]]:

1. Start with: $\|v + w\|^2 = \langle v + w, v + w \rangle$
2. Expand: $\|v + w\|^2 = \|v\|^2 + 2\text{Re}\langle v,w \rangle + \|w\|^2$
3. Since $\text{Re}\langle v,w \rangle \leq |\langle v,w \rangle|$:
   $$\|v + w\|^2 \leq \|v\|^2 + 2|\langle v,w \rangle| + \|w\|^2$$
4. By Cauchy-Schwarz: $|\langle v,w \rangle| \leq \|v\|\|w\|$
5. Therefore: $\|v + w\|^2 \leq \|v\|^2 + 2\|v\|\|w\| + \|w\|^2 = (\|v\| + \|w\|)^2$
6. Taking square roots: $\|v + w\| \leq \|v\| + \|w\|$

## Geometric Interpretation
- In Euclidean space, this states that the length of one side of a triangle is at most the sum of the lengths of the other two sides
- Equality occurs when vectors point in the same direction
- The inequality fails if we reverse the direction of one vector

## Examples

### Example 1: Euclidean Space
In $\mathbb{R}^2$, for vectors $v = (3,4)$ and $w = (1,0)$:
- $\|v\| = 5$, $\|w\| = 1$
- $\|v + w\| = \|(4,4)\| = 4\sqrt{2} \approx 5.66$
- Indeed: $5.66 \leq 5 + 1 = 6$ ✓

### Example 2: Function Space
For continuous functions $f,g$ on $[0,1]$ with $L^2$ norm:
$$\|f + g\|_{L^2} \leq \|f\|_{L^2} + \|g\|_{L^2}$$

### Example 3: Complex Vectors
In $\mathbb{C}^2$, for $v = (1,i)$ and $w = (i,1)$:
- $\|v\| = \sqrt{2}$, $\|w\| = \sqrt{2}$
- $\|v + w\| = \|(1+i, i+1)\| = 2$
- Indeed: $2 \leq \sqrt{2} + \sqrt{2} = 2\sqrt{2} \approx 2.83$ ✓

## Equality Condition
Equality in the triangle inequality holds if and only if:
1. $v = 0$, or
2. $w = \lambda v$ for some $\lambda \geq 0$

This means the vectors point in the same direction (are linearly dependent with non-negative coefficient).

## Applications

### Metric Spaces
The triangle inequality is one of the axioms for a metric:
$$d(x,z) \leq d(x,y) + d(y,z)$$

### Analysis
- Convergence of sequences
- Continuity of functions
- Approximation theory

### Optimization
- Bounding errors in iterative methods
- Gradient descent algorithms

### Physics
- Path lengths in spacetime
- Wave propagation

## Related Inequalities
- **Reverse Triangle Inequality**: $|\|v\| - \|w\|| \leq \|v - w\|$
- **Generalized Triangle Inequality**: $\|v_1 + \cdots + v_n\| \leq \|v_1\| + \cdots + \|v_n\|$
- **Minkowski Inequality**: Generalization to $L^p$ spaces

## Related Concepts
- [[Norm]]: The triangle inequality is a fundamental property of norms
- [[Inner Product]]: Induced norm satisfies the triangle inequality
- [[Cauchy-Schwarz Inequality]]: Used in the proof
- [[Metric Space]]: Triangle inequality is an axiom for metrics
- [[Distance]]: Related to the distance function $d(v,w) = \|v-w\|$

## Notes
- Essential property of any norm
- Generalizes the familiar triangle inequality from Euclidean geometry
- Fundamental to the theory of metric spaces
- The proof technique demonstrates the power of the Cauchy-Schwarz inequality
