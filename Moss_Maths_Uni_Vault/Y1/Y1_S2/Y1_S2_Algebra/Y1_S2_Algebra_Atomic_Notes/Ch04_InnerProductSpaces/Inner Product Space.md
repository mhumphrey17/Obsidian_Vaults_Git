---
title: "Inner Product Space"
aliases: ["Pre-Hilbert Space", "IPS"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "inner-product-space", "vector-space", "inner-product", "norm", "orthogonality", "metric-space", "linear-algebra"]
related_concepts: ["Inner Product", "Vector Space", "Norm", "Orthogonality", "Metric Space", "Field", "Hilbert Space"]
---

# Inner Product Space

## Definition
An inner product space is a vector space $V$ over a field $\mathbb{F}$ (either $\mathbb{R}$ or $\mathbb{C}$) that is equipped with an [[Inner Product]] $\langle \cdot, \cdot \rangle: V \times V \rightarrow \mathbb{F}$.

A pair $(V, \langle \cdot, \cdot \rangle)$ is called an inner product space if:
1. $V$ is a vector space over $\mathbb{F}$
2. $\langle \cdot, \cdot \rangle$ is an inner product on $V$

## Properties

### Basic Properties
- Any subspace $U$ of an inner product space $V$ is itself an inner product space with the restricted inner product
- Every inner product space naturally becomes a [[Metric Space]] with distance function $d(v,w) = \|v-w\|$
- The inner product allows us to define [[Norm]], which in turn enables us to do analysis on $V$

### Induced Norm and Distance
From the inner product, we can define:
- **Norm**: $\|v\| = \sqrt{\langle v,v \rangle}$
- **Distance**: $d(v,w) = \|v-w\|$

## Examples

### Example 1: Euclidean Space
$\mathbb{R}^n$ with the standard dot product:
$$\langle x,y \rangle = \sum_{i=1}^n x_i y_i$$

### Example 2: Complex Space
$\mathbb{C}^n$ with the standard inner product:
$$\langle x,y \rangle = \sum_{i=1}^n \bar{x}_i y_i$$

### Example 3: Polynomial Space
$V = \{f \in \mathbb{R}[X] : \deg f \leq n-1\}$ with:
$$\langle p,q \rangle = \sum_{i=1}^n p(x_i)q(x_i)$$
where $x_1, \ldots, x_n$ are distinct real numbers.

### Example 4: Function Spaces
Various function spaces with appropriate inner products:
- $L^2[a,b]$: Square-integrable functions on $[a,b]$
- $C[a,b]$: Continuous functions on $[a,b]$

## Key Results
- **Cauchy-Schwarz Inequality**: For any $v,w \in V$:
  $$|\langle v,w \rangle| \leq \|v\| \|w\|$$
- The inner product is continuous with respect to the induced norm

## Applications
- **Geometry**: Provides a framework for generalizing Euclidean geometry to abstract spaces
- **Analysis**: Foundation for functional analysis and Hilbert spaces
- **Physics**: Essential for quantum mechanics and signal processing
- **Engineering**: Used in signal processing, image analysis, and control theory

## Related Concepts
- [[Inner Product]]: The bilinear/sesquilinear map that defines the space
- [[Vector Space]]: The underlying algebraic structure
- [[Norm]]: Induced measure of vector length
- [[Orthogonality]]: Vectors with zero inner product
- [[Metric Space]]: Inner product spaces are automatically metric spaces
- [[Hilbert Space]]: Complete inner product spaces (infinite-dimensional case)

## Notes
- Inner product spaces provide the foundation for understanding geometry in vector spaces
- The inner product allows us to define angles, lengths, and orthogonality
- Every inner product space is a normed vector space, but not every normed space has an inner product
- Finite-dimensional inner product spaces are automatically complete (Hilbert spaces)
