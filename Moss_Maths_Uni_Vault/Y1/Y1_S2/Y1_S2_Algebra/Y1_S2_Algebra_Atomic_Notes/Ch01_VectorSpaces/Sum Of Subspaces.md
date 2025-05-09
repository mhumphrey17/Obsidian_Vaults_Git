---
title: "Sum of Subspaces"
aliases: ["Subspace Sum"]
tags: [concept, algebra-s2, ch-1, sec-1-9]
related_concepts: ["Subspace", "Direct Sum", "Vector Space", "Linear Combination", "Dimension"]
formula: "U + W = \\{u + w : u \\in U, w \\in W\\}"
date_created: 2025-05-09
---

# Sum of Subspaces

## Definition
The **sum** of two subspaces $U$ and $W$ of a vector space $V$ over a field $\mathbb{F}$ is the set of all vectors that can be written as a sum of a vector from $U$ and a vector from $W$. It is denoted by $U + W$ and defined as:

$$U + W = \{u + w : u \in U, w \in W\}$$

More generally, the sum of multiple subspaces $U_1, U_2, \ldots, U_k$ is defined as:

$$U_1 + U_2 + \cdots + U_k = \{u_1 + u_2 + \cdots + u_k : u_i \in U_i \text{ for } i = 1, 2, \ldots, k\}$$

## Properties
- The sum of subspaces is always a subspace of the vector space.
- $U + W$ is the smallest subspace of $V$ that contains both $U$ and $W$.
- If $U \cap W = \{0\}$, then the sum is called a direct sum, denoted $U \oplus W$.
- For finite-dimensional subspaces $U$ and $W$, the dimension formula holds:
  $$\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$$
- $U + W = V$ if and only if $V$ is spanned by the union of bases for $U$ and $W$.
- $U + W = U$ if and only if $W \subseteq U$.
- $U + W = W$ if and only if $U \subseteq W$.
- The sum operation is commutative: $U + W = W + U$.
- The sum operation is associative: $(U + W) + Z = U + (W + Z)$.
- The sum is idempotent: $U + U = U$.

## Examples
1. In $\mathbb{R}^3$, let $U$ be the $xy$-plane (vectors of the form $(x, y, 0)$) and $W$ be the $z$-axis (vectors of the form $(0, 0, z)$). Then $U + W = \mathbb{R}^3$ since any vector $(x, y, z) \in \mathbb{R}^3$ can be written as $(x, y, 0) + (0, 0, z)$.

2. In $\mathbb{R}^3$, let $U$ be the $x$-axis and $W$ be the $y$-axis. Then $U + W$ is the $xy$-plane.

3. In $\mathbb{R}^3$, let $U$ be the $xy$-plane and $W$ be the $yz$-plane. Then $U + W = \mathbb{R}^3$, and $U \cap W$ is the $y$-axis. The dimension formula confirms: $3 + 1 = 2 + 2$.

4. Let $P_n$ be the vector space of polynomials of degree at most $n$. Let $U$ be the subspace of even polynomials in $P_n$ and $W$ be the subspace of odd polynomials in $P_n$. Then $U + W = P_n$.

5. In the space of $2 \times 2$ matrices, let $U$ be the subspace of diagonal matrices and $W$ be the subspace of matrices with zeros on the diagonal. Then $U + W$ is the entire space of $2 \times 2$ matrices, and $U \cap W = \{0\}$.

## Important Theorems/Results
- **Proposition 1.9.5**: If $U$ and $W$ are finite-dimensional subspaces of a vector space $V$, then:
  $$\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$$
  
- The sum $U + W$ equals the span of the union of bases for $U$ and $W$. If $\{u_1, \ldots, u_r\}$ is a basis for $U$ and $\{w_1, \ldots, w_s\}$ is a basis for $W$, then:
  $$U + W = \langle u_1, \ldots, u_r, w_1, \ldots, w_s \rangle$$
  
- A sum $U + W$ is a direct sum $U \oplus W$ if and only if $\dim(U + W) = \dim U + \dim W$, which is equivalent to $U \cap W = \{0\}$.

## Connections to Other Concepts
- The sum of [[Subspace]]s is itself a subspace.
- When the intersection of subspaces is trivial, the sum becomes a [[Direct Sum]].
- The sum of subspaces is related to the concept of [[Linear Combination]]s.
- The [[Dimension]] formula for sums of subspaces is analogous to the inclusion-exclusion principle in set theory and is related to the [[Rank-Nullity Theorem]].
- The span of a union of sets is the sum of their spans: $\langle S_1 \cup S_2 \rangle = \langle S_1 \rangle + \langle S_2 \rangle$.

## Related Problems
- [[PS01-Q05]] - Determining whether the union and sum of subspaces are subspaces.
- Problems involving decomposing a vector space into the sum of simpler subspaces.

## Notes
- The sum of subspaces is a fundamental construction in linear algebra, allowing complex spaces to be built from simpler components.
- The dimension formula $\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$ has an intuitive interpretation: we count the dimensions of $U$ and $W$, but subtract the dimensions counted twice (those in the intersection).
- In applications, decomposing a vector space into a sum of subspaces often simplifies analysis, especially when the subspaces have desirable properties.
- The difference between a general sum and a direct sum is the uniqueness of representation: in a direct sum, each vector has a unique representation as a sum of components from the constituent subspaces.
- The concept of sum of subspaces generalizes to other algebraic structures, such as modules over rings.
