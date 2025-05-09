---
title: "Basis"
aliases: ["Bases", "Vector Space Basis"]
tags: [concept, algebra-s2, ch-1, sec-1-4]
related_concepts: ["Vector Space", "Linear Independence", "Spanning Set", "Dimension", "Coordinate Vector"]
formula: "\\text{Basis is a linearly independent spanning set}"
date_created: 2025-05-09
---

# Basis

## Definition
A **basis** of a vector space $V$ over a field $\mathbb{F}$ is a list of vectors $v_1, v_2, \ldots, v_n$ in $V$ that satisfies both of the following conditions:

1. The vectors are **linearly independent**: The only solution to $\lambda_1 v_1 + \lambda_2 v_2 + \cdots + \lambda_n v_n = 0$ is $\lambda_1 = \lambda_2 = \cdots = \lambda_n = 0$.

2. The vectors are **spanning**: Every vector $v \in V$ can be expressed as a linear combination of the basis vectors, i.e., $v = \alpha_1 v_1 + \alpha_2 v_2 + \cdots + \alpha_n v_n$ for some scalars $\alpha_1, \alpha_2, \ldots, \alpha_n \in \mathbb{F}$.

The plural form of basis is **bases**.

## Properties
- A basis provides a unique way to represent any vector in the space as a linear combination of basis vectors.
- The number of vectors in any basis of a vector space $V$ is the same, and it defines the dimension of $V$.
- Every vector space has a basis (for infinite-dimensional spaces, this requires the Axiom of Choice).
- A basis can be characterized as a minimal spanning set or a maximal linearly independent set.
- Adding any vector not in the span of a basis would create linear dependence.
- Removing any vector from a basis would result in a set that no longer spans the space.
- A list of $n$ vectors in an $n$-dimensional vector space is a basis if and only if it is linearly independent (or equivalently, if and only if it spans the space).

## Examples
1. The standard basis for $\mathbb{R}^n$ is $\{\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n\}$, where $\mathbf{e}_i$ has a 1 in the $i$-th position and 0s elsewhere.

2. In $\mathbb{R}^2$, the vectors $(1, 1)$ and $(1, -1)$ form a basis, as do the vectors $(1, 0)$ and $(0, 1)$.

3. In $\mathbb{R}^3$, the vectors $(1, 0, 0)$, $(0, 1, 0)$, and $(0, 0, 1)$ form the standard basis, but alternative bases include $\{(1, 1, 1), (1, 1, 0), (1, 0, 0)\}$ and many others.

4. In the vector space of polynomials $\mathbb{R}[X]_{\leq n}$ of degree at most $n$, the set $\{1, X, X^2, \ldots, X^n\}$ forms a basis.

5. In the vector space $\{a\cos x + b\sin x : a, b \in \mathbb{R}\}$ of functions, the functions $\sin x$ and $\cos x$ form a basis.

6. The vector space $\mathbb{R}^0 = \{0\}$ has as its basis the empty set $\emptyset$, which is both linearly independent and spanning by convention.

## Important Theorems/Results
- **Proposition 1.4.4**: A list $\alpha: v_1, \ldots, v_n$ is a basis of $V$ if and only if every vector $v \in V$ can be uniquely written as a linear combination $v = \sum_{i=1}^{n} \lambda_i v_i$.

- **Corollary 1.4.5**: If $\alpha: v_1, \ldots, v_n$ is a basis of $V$, then $V \cong \mathbb{F}^n$.

- **Theorem 1.5.1**: If $v_1, \ldots, v_n$ and $w_1, \ldots, w_m$ are bases of $V$, then $n = m$.

- **Theorem 1.5.5**: A list of vectors $\alpha: v_1, \ldots, v_n$ is a basis if and only if it is a minimal spanning list, or equivalently, if and only if it is a maximal linearly independent list.

- **Corollary 1.5.7**:
  1. Any finite spanning list in $V$ contains a basis.
  2. If $V$ is finite-dimensional, then any linearly independent list can be extended to a basis.

## Connections to Other Concepts
- A basis combines the properties of [[Linear Independence]] and a [[Spanning Set]].
- The number of vectors in a basis determines the [[Dimension]] of a vector space.
- For any vector in the space, the coefficients in its linear combination with respect to a basis form its [[Coordinate Vector]].
- The concept of basis is fundamental to understanding [[Linear Map]]s and their matrix representations.
- The change of basis procedure is used to find different [[Matrix Representation|matrix representations]] of the same linear map.

## Related Problems
- Problems involving finding bases for specific vector spaces.
- Problems requiring the extension of a linearly independent set to a basis.
- Problems asking to find the coordinate vector of a given vector with respect to a specific basis.

## Notes
- The concept of a basis is analogous to a coordinate system in geometry, providing a reference frame for the vector space.
- Different choices of basis can make certain problems in linear algebra easier to solve.
- The standard basis is often the most convenient to work with, but alternative bases can be more appropriate for specific applications.
- While the definition of a basis requires both linear independence and spanning, in an $n$-dimensional space, a list of exactly $n$ vectors is a basis if and only if it satisfies just one of these conditions.
- For infinite-dimensional spaces, the concept of a basis still exists, but finding an explicit basis can be challenging. For example, a basis for the space of all real-valued continuous functions would be infinite.
