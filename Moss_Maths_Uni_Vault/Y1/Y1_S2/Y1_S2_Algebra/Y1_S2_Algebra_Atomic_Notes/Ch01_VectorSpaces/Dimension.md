---
title: "Dimension"
aliases: ["Dimensionality", "dim"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "basis", "vector-space", "linear-independence", "spanning-set", "rank-nullity-theorem", "subspace", "isomorphism", "linear-map", "linear-algebra"]
related_concepts: ["Vector Space", "Basis", "Linear Independence", "Spanning Set", "Rank-Nullity Theorem", "Subspace", "Isomorphism", "Linear Map", "Field"]
---

# Dimension

## Definition
The **dimension** of a vector space $V$ over a field $\mathbb{F}$, denoted by $\dim V$, is the number of vectors in any basis of $V$. 

A vector space is called **finite-dimensional** if it has a finite basis, and **infinite-dimensional** otherwise. For infinite-dimensional spaces, we write $\dim V = \infty$.

## Properties
- The dimension is well-defined: any two bases of a vector space have the same number of elements (Theorem 1.5.1).
- A vector space with no non-zero vectors (the trivial space $\{0\}$) has dimension 0.
- If $W$ is a subspace of a finite-dimensional vector space $V$, then $W$ is also finite-dimensional and $\dim W \leq \dim V$.
- If $W$ is a subspace of $V$ with $\dim W = \dim V$, then $W = V$.
- In a vector space of dimension $n$:
  - Any set of more than $n$ vectors is linearly dependent.
  - Any set of fewer than $n$ vectors cannot span the space.
  - Any set of exactly $n$ vectors is a basis if and only if it is linearly independent (or equivalently, if and only if it spans the space).
- If $U$ and $W$ are finite-dimensional subspaces of $V$, then:
  - $\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$
- If $V$ and $W$ are finite-dimensional vector spaces, then:
  - $\dim(V \oplus W) = \dim V + \dim W$

## Examples
1. $\dim \mathbb{F}^n = n$. For instance, $\dim \mathbb{R}^3 = 3$ since the standard basis $\{(1,0,0), (0,1,0), (0,0,1)\}$ has 3 vectors.

2. $\dim \{0\} = 0$ since the empty set $\emptyset$ is a basis for the trivial vector space.

3. $\dim M_{m,n}(\mathbb{F}) = mn$, as we can use the $mn$ standard basis matrices each with a single 1 and all other entries 0.

4. $\dim \mathbb{R}[X]_{\leq n} = n+1$, since the set $\{1, X, X^2, \ldots, X^n\}$ is a basis.

5. $\dim \mathbb{R}[X] = \infty$, as any basis would need to include polynomials of arbitrarily high degree.

6. For a line through the origin in $\mathbb{R}^3$, the dimension is 1.

7. For a plane through the origin in $\mathbb{R}^3$, the dimension is 2.

## Important Theorems/Results
- **Theorem 1.5.1**: 
  1. If $v_1, \ldots, v_n$ in $V$ are independent and $w_1, \ldots, w_m$ span $V$, then $n \leq m$.
  2. If $v_1, \ldots, v_n$ and $w_1, \ldots, w_m$ are bases of $V$, then $n = m$.

- **Corollary 1.5.6**: Let $W$ be a subspace of a finite-dimensional vector space $V$. Then:
  1. $W$ is finite-dimensional and $\dim W \leq \dim V$.
  2. If $\dim W = \dim V$, then $W = V$.

- **Corollary 1.5.7**:
  1. Any finite spanning list in $V$ contains a basis.
  2. If $V$ is finite-dimensional, then any linearly independent list can be extended to a basis.

- **Proposition 1.9.5**: If $U$ and $W$ are finite-dimensional subspaces of $V$, then:
  $\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$

- **Rank-Nullity Theorem**: If $V$ is finite-dimensional and $\phi: V \rightarrow W$ is a linear map, then:
  $\dim V = \dim(\ker \phi) + \dim(\text{Im } \phi)$

## Connections to Other Concepts
- The dimension of a vector space is determined by the number of vectors in any [[Basis]].
- [[Linear Independence]] and [[Spanning Set]]s are directly related to dimension through their role in defining bases.
- The concept of dimension is central to the [[Rank-Nullity Theorem]], which relates the dimensions of the domain, kernel, and image of a linear map.
- The dimension of a [[Subspace]] is always less than or equal to the dimension of the containing vector space.
- For [[Isomorphism|isomorphic]] vector spaces, the dimensions must be equal.

## Related Problems
- Problems involving determining the dimension of specific vector spaces.
- Problems using the dimension formula for sums and intersections of subspaces.
- Applications of the Rank-Nullity Theorem.

## Notes
- The concept of dimension formalizes our intuitive understanding of how "big" a vector space is or how many "degrees of freedom" it has.
- In applications, the dimension of a vector space often corresponds to the number of parameters needed to specify a vector in the space.
- For infinite-dimensional spaces, more advanced tools from functional analysis are needed to characterize and work with them.
- The dimension theorem for sums and intersections of subspaces ($\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$) is analogous to the inclusion-exclusion principle in set theory.
- In physics and engineering, the dimension of a space often relates to the number of independent variables or constraints in a system.
