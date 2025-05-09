---
title: "Vector Space"
aliases: ["Vector Spaces", "Linear Space"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "field", "subspace", "linear-combination", "linear-map", "basis", "dimension", "algebraic-structure", "linear-algebra"]
related_concepts: ["Field", "Subspace", "Linear Combination", "Linear Map", "Basis", "Dimension", "Scalar", "Additive Group"]
---

# Vector Space

## Definition
A vector space over a field $\mathbb{F}$ is an additive group $(V, +, 0)$ equipped with scalar multiplication:
$$\mathbb{F} \times V \rightarrow V, \quad (\lambda, v) \mapsto \lambda v$$

such that for all $\lambda, \mu \in \mathbb{F}$ and $v, w \in V$, the following axioms are satisfied:

1. **V1** (Distributivity of scalar multiplication over vector addition): $\lambda(v+w) = \lambda v + \lambda w$
2. **V2** (Distributivity of scalar addition over scalar multiplication): $(\lambda + \mu)v = \lambda v + \mu v$
3. **V3** (Compatibility of scalar multiplication): $(\lambda\mu)v = \lambda(\mu v)$
4. **V4** (Identity of scalar multiplication): $1v = v$

## Properties
- If $(V, +, 0)$ is an additive group, it already satisfies the following properties:
  - + is associative: $(u + v) + w = u + (v + w)$ for all $u, v, w \in V$
  - There exists an additive identity 0 such that $v + 0 = v = 0 + v$ for all $v \in V$
  - Every element $v \in V$ has an additive inverse $-v$ such that $v + (-v) = 0 = (-v) + v$
  - + is commutative: $v + w = w + v$ for all $v, w \in V$

- Additional properties derived from the vector space axioms:
  - $\lambda 0 = 0$ for any $\lambda \in \mathbb{F}$
  - $0v = 0$ for any $v \in V$
  - $\lambda(-v) = -(\lambda v) = (-\lambda)v$ for any $\lambda \in \mathbb{F}$, $v \in V$
  - If $\lambda v = 0$, then either $\lambda = 0$ or $v = 0$

## Examples
1. The space $\mathbb{F}^n$ of ordered $n$-tuples of elements from $\mathbb{F}$ with component-wise addition and scalar multiplication:
   - $(a_1, \ldots, a_n) + (b_1, \ldots, b_n) = (a_1 + b_1, \ldots, a_n + b_n)$
   - $\lambda(a_1, \ldots, a_n) = (\lambda a_1, \ldots, \lambda a_n)$

2. The space $\mathbb{F}^0 = \{0\}$ consisting of only the zero vector.

3. The space $M_{m,n}(\mathbb{F})$ of $m \times n$ matrices with entries from $\mathbb{F}$ with matrix addition and scalar multiplication.

4. The space $\mathbb{F}[X]$ of polynomials with coefficients in $\mathbb{F}$ with polynomial addition and scalar multiplication.

5. The space $\mathbb{R}^S$ of all functions $f: S \rightarrow \mathbb{R}$ from a set $S$ to $\mathbb{R}$ with pointwise operations:
   - $(f + g)(x) = f(x) + g(x)$ for all $x \in S$
   - $(\lambda f)(x) = \lambda f(x)$ for all $x \in S$

6. Various function spaces including:
   - $C^0(\mathbb{R})$: continuous functions from $\mathbb{R}$ to $\mathbb{R}$
   - $C^k(\mathbb{R})$: $k$ times differentiable functions from $\mathbb{R}$ to $\mathbb{R}$
   - $C^{\infty}(\mathbb{R})$: infinitely differentiable functions from $\mathbb{R}$ to $\mathbb{R}$

## Important Theorems/Results
- **Lemma 1.2.5**: For any $\lambda \in \mathbb{F}$, $v \in V$:
  1. $\lambda 0 = 0$ and $\lambda(-v) = -(\lambda v)$
  2. $0v = 0$ and $(-\lambda)v = -(\lambda v)$
  3. If $\lambda v = 0$ then either $\lambda = 0$ or $v = 0$

- Every vector space has a basis (requires an advanced proof using Zorn's Lemma for infinite-dimensional spaces).
- Any two bases of a vector space have the same cardinality.

## Connections to Other Concepts
- Vector spaces are built on the concept of a [[Field]] which provides the scalars.
- A [[Subspace]] is a subset of a vector space that is itself a vector space.
- [[Linear Combination]]s of vectors form the fundamental operations in a vector space.
- [[Linear Map]]s preserve the vector space structure.
- Every vector space has a [[Basis]] that allows for unique representation of vectors.
- The [[Dimension]] of a vector space is determined by the number of vectors in any basis.

## Related Problems
- [[PS01-Q05]] - Determining if unions and sums of subspaces are subspaces.
- [[PS01-Q08]] - Identifying which sets of functions form vector spaces.

## Notes
- The notation for the zero element can be ambiguous. We use $0$ for both the zero vector in $V$ and the zero scalar in $\mathbb{F}$, though they are elements of different sets.
- Vector spaces are one of the most fundamental concepts in linear algebra. They provide the algebraic structure needed to generalize the notions of vectors beyond just arrows in 2D or 3D space.
- The axioms of a vector space ensure that the operations of vector addition and scalar multiplication behave consistently with our intuitive understanding of these operations.
- Vector spaces can be finite-dimensional (having a finite basis) or infinite-dimensional (requiring an infinite basis).
