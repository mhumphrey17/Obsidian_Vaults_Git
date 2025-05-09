---
title: "Cauchy-Schwarz Inequality"
aliases: ["Cauchy Schwarz", "Schwarz Inequality", "CSI"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "theorem", "inner-product-space", "fundamental-inequality", "norm", "linear-independence", "triangle-inequality", "angle", "linear-algebra"]
related_concepts: ["Inner Product", "Norm", "Linear Independence", "Triangle Inequality", "Angle", "Inner Product Space", "Field"]
---

# Cauchy-Schwarz Inequality

## Theorem Statement
Let $V$ be an [[Inner Product Space]]. For any vectors $v, w \in V$:
$$|\langle v,w \rangle| \leq \|v\| \|w\|$$

with equality if and only if $v$ and $w$ are linearly dependent (i.e., either $v = 0$ or $w = \lambda v$ for some $\lambda \in \mathbb{F}$).

## Proof Sketch
The proof uses a clever geometric construction:

1. If $v = 0$, both sides equal 0, so the inequality holds
2. Assume $v \neq 0$ and write $w = \lambda v + u$ where $u \perp v$
3. To make $u \perp v$, we need: $\lambda = \frac{\langle v,w \rangle}{\|v\|^2}$
4. Then: $0 \leq \|u\|^2 = \|w\|^2 - \frac{|\langle v,w \rangle|^2}{\|v\|^2}$
5. Rearranging gives the Cauchy-Schwarz inequality
6. Equality holds when $u = 0$, i.e., when $w = \lambda v$

## Geometric Interpretation
- In Euclidean space, the Cauchy-Schwarz inequality states that:
  $$|v \cdot w| \leq \|v\| \|w\|$$
- This allows us to define the angle $\theta$ between vectors:
  $$\cos \theta = \frac{\langle v,w \rangle}{\|v\| \|w\|}$$
- The inequality ensures $|\cos \theta| \leq 1$, which is necessary for a valid angle

## Specific Cases

### Real Vector Spaces
For $v, w \in \mathbb{R}^n$:
$$\left|\sum_{i=1}^n v_i w_i\right| \leq \sqrt{\sum_{i=1}^n v_i^2} \sqrt{\sum_{i=1}^n w_i^2}$$

### Complex Vector Spaces
For $v, w \in \mathbb{C}^n$:
$$\left|\sum_{i=1}^n \bar{v}_i w_i\right| \leq \sqrt{\sum_{i=1}^n |v_i|^2} \sqrt{\sum_{i=1}^n |w_i|^2}$$

### Function Spaces
For continuous functions $f, g$ on $[a,b]$:
$$\left|\int_a^b f(x)g(x)dx\right| \leq \sqrt{\int_a^b |f(x)|^2 dx} \sqrt{\int_a^b |g(x)|^2 dx}$$

## Applications

### Triangle Inequality
The Cauchy-Schwarz inequality is used to prove the [[Triangle Inequality]]:
$$\|v + w\|^2 = \|v\|^2 + 2\text{Re}\langle v,w \rangle + \|w\|^2 \leq \|v\|^2 + 2|\langle v,w \rangle| + \|w\|^2$$
$$\leq \|v\|^2 + 2\|v\|\|w\| + \|w\|^2 = (\|v\| + \|w\|)^2$$

### Statistics
- Correlation coefficient: $|\text{corr}(X,Y)| \leq 1$
- The inequality ensures valid statistical measures

### Physics
- Uncertainty principle in quantum mechanics
- Wave interference and signal processing

## Related Results
- **Hölder's Inequality**: Generalizes Cauchy-Schwarz to $L^p$ spaces
- **Minkowski Inequality**: Another fundamental inequality in analysis
- **Bessel's Inequality**: For orthogonal projections

## Related Concepts
- [[Inner Product]]: The inequality is stated using inner products
- [[Norm]]: Uses the norm induced by the inner product
- [[Linear Independence]]: Equality condition characterizes linear dependence
- [[Triangle Inequality]]: Derived using Cauchy-Schwarz
- [[Angle]]: Allows definition of angles in inner product spaces

## Historical Note
Named after Augustin-Louis Cauchy and Hermann Amandus Schwarz, though variants were known earlier. The inequality appears in many contexts and is fundamental to analysis, geometry, and physics.

## Notes
- One of the most important inequalities in mathematics
- Essential for defining angles and proving other fundamental results
- The proof technique (orthogonal decomposition) is widely used
- Has countless applications across mathematics and science
