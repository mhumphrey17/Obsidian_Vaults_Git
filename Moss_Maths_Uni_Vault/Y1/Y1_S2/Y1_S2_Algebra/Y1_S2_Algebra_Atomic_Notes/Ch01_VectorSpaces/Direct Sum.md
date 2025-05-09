---
title: "Direct Sum"
aliases: ["External Direct Sum", "Internal Direct Sum"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "vector-space", "subspace", "dimension", "linear-combination", "sum-of-subspaces", "rank-nullity-theorem", "field", "linear-algebra"]
related_concepts: ["Vector Space", "Subspace", "Dimension", "Linear Combination", "Sum of Subspaces", "Rank-Nullity Theorem", "Field"]
---

# Direct Sum

## Definition
A **direct sum** is a construction that combines vector spaces or subspaces in two primary ways:

1. **External Direct Sum**: For vector spaces $U$ and $W$ over the same field $\mathbb{F}$, the external direct sum $U \oplus W$ is the cartesian product $U \times W$ equipped with component-wise operations:
   - Addition: $(u_1, w_1) + (u_2, w_2) = (u_1 + u_2, w_1 + w_2)$
   - Scalar multiplication: $\lambda(u, w) = (\lambda u, \lambda w)$

2. **Internal Direct Sum**: For subspaces $U$ and $W$ of a vector space $V$, their sum $U + W$ is an internal direct sum, denoted $U \oplus W$, if $U \cap W = \{0\}$. In this case, every element in $U + W$ can be uniquely written as $u + w$ where $u \in U$ and $w \in W$.

## Properties
- For an external direct sum $U \oplus W$, the dimension is the sum of the dimensions: $\dim(U \oplus W) = \dim U + \dim W$.
- For an internal direct sum, if $V = U \oplus W$, then every vector $v \in V$ can be uniquely written as $v = u + w$ where $u \in U$ and $w \in W$.
- In an internal direct sum $U \oplus W$, the only vector that belongs to both $U$ and $W$ is the zero vector.
- The external direct sum can be generalized to any finite number of vector spaces: $V_1 \oplus V_2 \oplus \cdots \oplus V_n$.
- The internal direct sum can also be generalized: subspaces $U_1, U_2, \ldots, U_n$ form an internal direct sum if their sum is $V$ and any vector in $V$ can be uniquely written as $u_1 + u_2 + \cdots + u_n$ with $u_i \in U_i$.
- If $V = U \oplus W$ (internal direct sum), then $\dim V = \dim U + \dim W$.
- For the sum of subspaces $U$ and $W$ (not necessarily a direct sum), we have the dimension formula: $\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$.

## Examples
1. **External Direct Sum**: $\mathbb{R}^2 \oplus \mathbb{R}^3 = \mathbb{R}^5$ as vector spaces. The elements are ordered pairs $((a, b), (c, d, e))$ which can be identified with 5-tuples $(a, b, c, d, e)$.

2. **Internal Direct Sum**: In $\mathbb{R}^3$, let $U$ be the $xy$-plane (vectors of the form $(x, y, 0)$) and $W$ be the $z$-axis (vectors of the form $(0, 0, z)$). Then $\mathbb{R}^3 = U \oplus W$ is an internal direct sum since $U \cap W = \{(0, 0, 0)\}$ and every vector $(x, y, z) \in \mathbb{R}^3$ can be uniquely written as $(x, y, 0) + (0, 0, z)$.

3. **Not a Direct Sum**: In $\mathbb{R}^3$, let $U$ be the $xy$-plane and $W$ be the $yz$-plane. Then $U + W = \mathbb{R}^3$, but this is not a direct sum since $U \cap W = \{(0, y, 0) | y \in \mathbb{R}\}$ is the $y$-axis, not just the zero vector.

4. In the vector space of polynomials $\mathbb{R}[X]$, let $U$ be the subspace of even polynomials and $W$ be the subspace of odd polynomials. Then $\mathbb{R}[X] = U \oplus W$ is an internal direct sum.

5. The vector space $M_{n,n}(\mathbb{F})$ of $n \times n$ matrices can be written as the direct sum of the subspace of symmetric matrices and the subspace of skew-symmetric matrices.

## Important Theorems/Results
- **Definition 1.9.3**: The external direct sum $U \oplus W$ is $U \times W$ with component-wise operations.

- **Lemma 1.9.4**: If $U$ and $W$ have finite dimension, then $\dim(U \oplus W) = \dim U + \dim W$.

- **Proposition 1.9.5**: If $U$ and $W$ are finite-dimensional subspaces of $V$, then:
  $$\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$$
  This is a generalization that applies whether or not the sum is direct.

- A sum $U + W$ is a direct sum $U \oplus W$ if and only if $\dim(U + W) = \dim U + \dim W$.

## Connections to Other Concepts
- The direct sum is a way to construct new [[Vector Space]]s from existing ones.
- For [[Subspace]]s of a vector space, the direct sum requires that their intersection is the zero space.
- The [[Dimension]] of a direct sum equals the sum of the dimensions of the component spaces.
- The direct sum is related to the concept of [[Linear Combination]]s and the general [[Sum Of Subspaces]].
- The dimension formula for sums of subspaces is related to the [[Rank-Nullity Theorem]].

## Related Problems
- [[PS01-Q05]] - Understanding when a sum of subspaces is a direct sum.
- Problems involving decomposing a vector space into direct sums of simpler subspaces.

## Notes
- The distinction between external and internal direct sums is important. External direct sums combine separate vector spaces, while internal direct sums decompose a vector space into subspaces.
- The direct sum construction is analogous to the cartesian product of sets, but with additional vector space structure.
- In applications, direct sums allow complex vector spaces to be decomposed into simpler components that can be analyzed separately.
- The condition $U \cap W = \{0\}$ for an internal direct sum ensures that the decomposition of each vector is unique.
- The concept of direct sum generalizes to other algebraic structures besides vector spaces, such as modules over rings.
