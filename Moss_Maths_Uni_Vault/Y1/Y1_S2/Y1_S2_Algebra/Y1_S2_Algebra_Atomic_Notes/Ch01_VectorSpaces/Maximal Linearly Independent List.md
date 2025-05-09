---
title: "Maximal Linearly Independent List"
aliases: ["Maximal Linearly Independent Set"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "linear-independence", "basis", "spanning-set", "minimal-spanning-list", "dimension", "span", "vector-space", "linear-algebra"]
related_concepts: ["Linear Independence", "Basis", "Spanning Set", "Minimal Spanning List", "Dimension", "Span", "Vector Space", "Field"]
---

# Maximal Linearly Independent List

## Definition
A **maximal linearly independent list** in a vector space $V$ is a linearly independent list of vectors $\alpha: v_1, v_2, \ldots, v_n$ with the property that adding any other vector from $V$ to the list would make it linearly dependent. In other words, a maximal linearly independent list is one to which no vector can be added without destroying the linear independence.

Formally, $\alpha: v_1, v_2, \ldots, v_n$ is a maximal linearly independent list in $V$ if:
1. $\alpha$ is linearly independent (the only way to get $\sum_{i=1}^n \lambda_i v_i = 0$ is with all $\lambda_i = 0$)
2. For any vector $v \in V$ not in the list, the extended list $v_1, v_2, \ldots, v_n, v$ is linearly dependent

## Properties
- A maximal linearly independent list in a vector space $V$ is equivalent to a basis for $V$ (Theorem 1.5.5).
- A linearly independent list is maximal if and only if it spans the vector space.
- The number of vectors in a maximal linearly independent list for a finite-dimensional vector space $V$ equals the dimension of $V$.
- If $\alpha: v_1, v_2, \ldots, v_n$ is a linearly independent list in $V$ and $v \notin \langle v_1, \ldots, v_n \rangle$, then $v_1, v_2, \ldots, v_n, v$ is also linearly independent (Proposition 1.5.4(2)).
- Any linearly independent list in a finite-dimensional vector space can be extended to a maximal linearly independent list.
- For a given vector space, all maximal linearly independent lists have the same number of vectors.

## Examples
1. In $\mathbb{R}^2$, the list $\{(1, 0), (0, 1)\}$ is a maximal linearly independent list. Adding any other vector, such as $(1, 1)$, would create a linearly dependent list because any vector in $\mathbb{R}^2$ can be expressed as a linear combination of $(1, 0)$ and $(0, 1)$.

2. In $\mathbb{R}^2$, the list $\{(1, 2)\}$ is linearly independent but not maximal because we can add vectors like $(3, 1)$ while maintaining linear independence.

3. In $\mathbb{R}^3$, the list $\{(1, 0, 0), (0, 1, 0), (0, 0, 1)\}$ is a maximal linearly independent list (the standard basis). Adding any fourth vector would necessarily create a linear dependence.

4. In the vector space $\mathbb{R}[X]_{\leq 2}$ of polynomials of degree at most 2, the list $\{1, X, X^2\}$ is a maximal linearly independent list. Adding any other polynomial would create a linearly dependent list.

## Important Theorems/Results
- **Theorem 1.5.5**: A list of vectors $\alpha: v_1, \ldots, v_n$ is a basis if and only if it is a maximal linearly independent list.

- **Proposition 1.5.4(2)**: If $v_1, \ldots, v_{n-1}$ is a linearly independent list and $v_n \notin \langle v_1, \ldots, v_{n-1} \rangle$, then $v_1, \ldots, v_n$ is also a linearly independent list.

- **Corollary 1.5.7(2)**: If $V$ is finite-dimensional, then any linearly independent list can be extended to a basis.

## Connections to Other Concepts
- A [[Basis]] is exactly a maximal [[Linear Independence|linearly independent]] list.
- A maximal linearly independent list is also a [[Minimal Spanning List]].
- The concept of maximal linearly independent list is related to the [[Dimension]] of a vector space, as all maximal linearly independent lists for a given vector space have the same number of vectors.
- A list is maximal linearly independent if and only if its [[Span]] equals the entire vector space.

## Related Problems
- Problems involving extending linearly independent lists to bases often require identifying maximal linearly independent lists.
- The process of extending a linearly independent list to a maximal one is used in the construction of bases for subspaces.

## Notes
- The concept of maximal linearly independent list provides an alternative characterization of a basis, emphasizing the aspect of linear independence rather than spanning.
- A list being maximal linearly independent means that every vector in the space can be expressed as a linear combination of the vectors in the list (otherwise, that vector could be added while preserving independence).
- While a vector space may have many different maximal linearly independent lists (bases), they all have the same cardinality.
- In applications, finding maximal linearly independent lists can be essential for identifying a minimal set of vectors needed to represent all vectors in a space uniquely.
- The concept of a maximal linearly independent list is analogous to the concept of a maximal independent set in abstract algebra and graph theory.
