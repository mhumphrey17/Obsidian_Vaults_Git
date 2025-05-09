---
title: "Isomorphism"
aliases: ["Linear Isomorphism", "Vector Space Isomorphism"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "linear-map", "kernel", "image", "dimension", "basis", "bijective", "injective", "surjective", "coordinate-vector", "linear-algebra", "vector-space"]
related_concepts: ["Linear Map", "Kernel", "Image", "Dimension", "Basis", "Vector Space", "Coordinate Vector", "Injective Map", "Surjective Map"]
---

# Isomorphism

## Definition
An **isomorphism** between vector spaces $V$ and $W$ over the same field $\mathbb{F}$ is a linear map $\phi: V \rightarrow W$ that is bijective (both injective and surjective). We say that $V$ is **isomorphic** to $W$ and write $V \cong W$ if such an isomorphism exists.

More explicitly, a linear map $\phi: V \rightarrow W$ is an isomorphism if:
1. It is linear: $\phi(\lambda v + \mu w) = \lambda \phi(v) + \mu \phi(w)$ for all $v, w \in V$ and $\lambda, \mu \in \mathbb{F}$
2. It is injective: if $\phi(v) = \phi(w)$, then $v = w$
3. It is surjective: for every $w \in W$, there exists $v \in V$ such that $\phi(v) = w$

## Properties
- If $\phi: V \rightarrow W$ is an isomorphism, then its inverse $\phi^{-1}: W \rightarrow V$ is also an isomorphism.
- If $V \cong W$ and $W \cong U$, then $V \cong U$ (isomorphism is a transitive relation).
- Every vector space is isomorphic to itself via the identity map.
- Isomorphic vector spaces have the same dimension.
- Every $n$-dimensional vector space over a field $\mathbb{F}$ is isomorphic to $\mathbb{F}^n$.
- A linear map $\phi: V \rightarrow W$ is an isomorphism if and only if $\ker \phi = \{0_V\}$ and $\text{Im } \phi = W$.
- If $\dim V = \dim W < \infty$, then any injective or surjective linear map $\phi: V \rightarrow W$ is an isomorphism.

## Examples
1. The map $\phi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ that rotates vectors by a fixed angle $\theta \neq 0$ is an isomorphism.

2. The map $\phi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ defined by $\phi(x, y) = (x + y, x - y)$ is an isomorphism. Its inverse is $\phi^{-1}(u, v) = \left(\frac{u + v}{2}, \frac{u - v}{2}\right)$.

3. For any basis $\alpha: v_1, \ldots, v_n$ of a vector space $V$, the coordinate map $\phi_\alpha: \mathbb{F}^n \rightarrow V$ defined by $\phi_\alpha(x_1, \ldots, x_n) = \sum_{i=1}^n x_i v_i$ is an isomorphism.

4. The map $\phi: \mathbb{R}[X]_{\leq n} \rightarrow \mathbb{R}^{n+1}$ that sends a polynomial $p(X) = a_0 + a_1 X + \cdots + a_n X^n$ to its coefficient vector $(a_0, a_1, \ldots, a_n)$ is an isomorphism.

5. The map $\phi: M_{m,n}(\mathbb{F}) \rightarrow \mathbb{F}^{mn}$ that flattens a matrix into a vector by stacking its columns is an isomorphism.

6. The derivative map $D: \mathbb{R}[X]_{\leq n} \rightarrow \mathbb{R}[X]_{\leq n-1}$ is not an isomorphism because it is not injective (all constant polynomials map to zero).

## Important Theorems/Results
- **Proposition 1.3.9**: A linear map $\phi: V \rightarrow W$ is injective if and only if $\ker \phi = \{0_V\}$. Consequently, $\phi$ is an isomorphism if and only if $\ker \phi = \{0_V\}$ and $\text{Im } \phi = W$.

- **Corollary 1.4.5**: If $\alpha: v_1, \ldots, v_n$ is a basis of $V$, then $V \cong \mathbb{F}^n$.

- **Remark 1.7.2**: The relation $\cong$ is an equivalence relation on vector spaces (it is reflexive, symmetric, and transitive).

- **Isomorphism Theorem**: Two finite-dimensional vector spaces over the same field are isomorphic if and only if they have the same dimension.

## Connections to Other Concepts
- Isomorphisms are special types of [[Linear Map]]s that preserve all vector space structure.
- The concept of isomorphism is related to the [[Kernel]] and [[Image]] of a linear map: a linear map is an isomorphism if and only if its kernel is trivial and its image is the entire codomain.
- The existence of a [[Basis]] in any vector space allows us to establish isomorphisms with coordinate spaces.
- The [[Dimension]] of a vector space is an isomorphism invariant: isomorphic vector spaces must have the same dimension.
- [[Coordinate Vector]]s allow us to translate between abstract vector spaces and concrete coordinate spaces via isomorphisms.

## Related Problems
- [[PS01-Q01]] - Understanding invertibility of matrices relates to isomorphisms.
- [[PS01-Q06]] - The map from $\mathbb{F}^n$ to $V$ is an isomorphism when the vectors form a basis.

## Notes
- Isomorphic vector spaces are essentially "the same" from the perspective of linear algebra, differing only in how their elements are represented.
- The concept of isomorphism in linear algebra is analogous to the concept of bijection in set theory, but with the additional requirement of preserving linear structure.
- Finding an explicit isomorphism between vector spaces often involves choosing bases and constructing the corresponding coordinate maps.
- In applications, isomorphisms allow us to translate problems from abstract vector spaces to concrete coordinate spaces where computational methods can be applied.
- The existence of isomorphisms between any two finite-dimensional vector spaces of the same dimension over the same field means that, up to isomorphism, the only invariant of a finite-dimensional vector space is its dimension.
