---
title: "Inner Product"
aliases: ["Inner Product Map", "Bilinear Form", "Sesquilinear Form"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "inner-product-space", "bilinear-form", "sesquilinear-form", "norm", "orthogonality", "vector-space", "field", "linear-algebra"]
related_concepts: ["Inner Product Space", "Norm", "Orthogonality", "Vector Space", "Field"]
---

# Inner Product

## Definition
Let $V$ be a vector space over $\mathbb{F}$ (where $\mathbb{F}$ is either $\mathbb{R}$ or $\mathbb{C}$). An inner product on $V$ is a map:
$$\langle \cdot, \cdot \rangle: V \times V \rightarrow \mathbb{F}: (v,w) \mapsto \langle v,w \rangle$$

satisfying the following axioms:

1. **Conjugate Symmetry**: $\langle w,v \rangle = \overline{\langle v,w \rangle}$ for all $v,w \in V$
   - In particular, $\langle v,v \rangle = \overline{\langle v,v \rangle}$, so $\langle v,v \rangle$ is real

2. **Linearity in Second Argument**:
   - $\langle u, v+w \rangle = \langle u,v \rangle + \langle u,w \rangle$ for all $u,v,w \in V$
   - $\langle u, \lambda v \rangle = \lambda \langle u,v \rangle$ for all $u,v \in V$ and $\lambda \in \mathbb{F}$

3. **Positive Definiteness**: $\langle v,v \rangle \geq 0$ for all $v \in V$, with equality if and only if $v = 0$

## Properties

### Real vs Complex Case
- **Real case** ($\mathbb{F} = \mathbb{R}$): The inner product is symmetric and bilinear (linear in both arguments)
- **Complex case** ($\mathbb{F} = \mathbb{C}$): The inner product is sesquilinear (conjugate linear in first argument, linear in second)

### First Argument Properties (Complex Case)
For a complex inner product:
$$\langle v+w, u \rangle = \langle v,u \rangle + \langle w,u \rangle$$
$$\langle \lambda v, u \rangle = \bar{\lambda} \langle v,u \rangle$$

## Examples

### Example 1: Standard Dot Product on $\mathbb{R}^n$
For $x = (x_1, \ldots, x_n), y = (y_1, \ldots, y_n) \in \mathbb{R}^n$:
$$x \cdot y = x_1y_1 + \cdots + x_ny_n$$

### Example 2: Standard Inner Product on $\mathbb{C}^n$
For $x, y \in \mathbb{C}^n$:
$$\langle x,y \rangle = \bar{x}_1y_1 + \cdots + \bar{x}_ny_n$$

### Example 3: Weighted Inner Product on $\mathbb{C}^n$
For positive real numbers $a_1, \ldots, a_n$ and $v = (v_i), w = (w_i) \in \mathbb{C}^n$:
$$\langle v,w \rangle = \sum_{i=1}^n a_i \bar{v}_i w_i$$

### Example 4: Inner Product on Polynomial Space
Let $V = \{f \in \mathbb{R}[X] : \deg f \leq n-1\}$ and $x_1, \ldots, x_n$ be distinct real numbers. For $p,q \in V$:
$$\langle p,q \rangle = \sum_{i=1}^n p(x_i)q(x_i)$$

## Related Theorems
- Any subspace $U$ of an inner product space $V$ inherits the inner product structure
- The existence of an inner product allows us to define [[Norm]] and [[Orthogonality]]

## Applications
- Provides a way to measure "angles" and "lengths" in abstract vector spaces
- Generalizes the geometric properties of Euclidean space to arbitrary vector spaces
- Essential for Fourier analysis and quantum mechanics

## Related Concepts
- [[Inner Product Space]]: A vector space equipped with an inner product
- [[Norm]]: The length of a vector, defined as $\|v\| = \sqrt{\langle v,v \rangle}$
- [[Orthogonality]]: Two vectors are orthogonal if their inner product is zero
- [[Vector Space]]: The underlying structure on which inner products are defined
- [[Field]]: The scalar field over which the vector space is defined

## Notes
- There are different conventions: some texts use linearity in the first argument and conjugate linearity in the second
- Inner products provide the foundation for studying angles, lengths, and orthogonality in vector spaces
- The positive definiteness condition ensures that $\langle v,v \rangle = 0$ only when $v = 0$
