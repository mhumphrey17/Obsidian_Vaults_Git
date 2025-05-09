---
title: "Minimal Spanning List"
aliases: ["Minimal Spanning Set"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "spanning-set", "basis", "linear-independence", "maximal-linearly-independent-list", "dimension", "linear-combination", "vector-space", "linear-algebra"]
related_concepts: ["Spanning Set", "Basis", "Linear Independence", "Maximal Linearly Independent List", "Dimension", "Linear Combination", "Vector Space", "Field"]
---

# Minimal Spanning List

## Definition
A **minimal spanning list** for a vector space $V$ is a list of vectors $\alpha: v_1, v_2, \ldots, v_n$ that spans $V$ and has the property that no proper sublist spans $V$. In other words, a minimal spanning list is a spanning list from which no vector can be removed without losing the spanning property.

Formally, $\alpha: v_1, v_2, \ldots, v_n$ is a minimal spanning list for $V$ if:
1. $\langle v_1, v_2, \ldots, v_n \rangle = V$ (the list spans $V$)
2. For any $i \in \{1, 2, \ldots, n\}$, $\langle v_1, \ldots, v_{i-1}, v_{i+1}, \ldots, v_n \rangle \neq V$ (removing any vector from the list results in a list that does not span $V$)

## Properties
- A minimal spanning list for a vector space $V$ is equivalent to a basis for $V$ (Theorem 1.5.5).
- A spanning list is minimal if and only if it is linearly independent.
- The number of vectors in a minimal spanning list for a finite-dimensional vector space $V$ equals the dimension of $V$.
- If $\alpha: v_1, v_2, \ldots, v_n$ is a spanning list for $V$ and $v_i \in \langle v_1, \ldots, v_{i-1}, v_{i+1}, \ldots, v_n \rangle$ for some $i$, then $\alpha$ is not a minimal spanning list.
- Any spanning list for $V$ can be reduced to a minimal spanning list by systematically removing redundant vectors.
- For a given vector space, all minimal spanning lists have the same number of vectors.

## Examples
1. In $\mathbb{R}^2$, the list $\{(1, 0), (0, 1)\}$ is a minimal spanning list. Removing either vector would result in a list that spans only a line through the origin, not the entire plane.

2. In $\mathbb{R}^2$, the list $\{(1, 0), (0, 1), (1, 1)\}$ is not a minimal spanning list because $(1, 1) = (1, 0) + (0, 1)$, so removing $(1, 1)$ would still leave a spanning list.

3. In $\mathbb{R}^3$, the list $\{(1, 0, 0), (0, 1, 0), (0, 0, 1)\}$ is a minimal spanning list (the standard basis). Removing any vector would result in a list that spans only a plane through the origin, not the entire space.

4. In the vector space $\mathbb{R}[X]_{\leq 2}$ of polynomials of degree at most 2, the list $\{1, X, X^2\}$ is a minimal spanning list. Removing any of these basis polynomials would result in a list that cannot generate all polynomials of degree at most 2.

## Important Theorems/Results
- **Theorem 1.5.5**: A list of vectors $\alpha: v_1, \ldots, v_n$ is a basis if and only if it is a minimal spanning list.

- **Proposition 1.5.4(1)**: If $v_1, \ldots, v_n$ is a spanning list of $V$ and $v_n \in \langle v_1, \ldots, v_{n-1} \rangle$, then $v_1, \ldots, v_{n-1}$ is also a spanning list of $V$.

- **Corollary 1.5.7(1)**: Any finite spanning list in $V$ contains a basis. This basis can be obtained by systematically removing redundant vectors from the spanning list.

## Connections to Other Concepts
- A [[Basis]] is exactly a minimal [[Spanning Set]].
- A minimal spanning list is also a [[Maximal Linearly Independent List]].
- The concept of minimal spanning list is related to the [[Dimension]] of a vector space, as all minimal spanning lists for a given vector space have the same number of vectors.
- Finding a minimal spanning list involves identifying and removing vectors that can be expressed as [[Linear Combination]]s of other vectors in the list.

## Related Problems
- Problems involving finding bases from spanning sets often require identifying minimal spanning lists.
- The sifting algorithm is used to find minimal spanning lists by systematically removing redundant vectors.

## Notes
- The concept of minimal spanning list formalizes the idea of finding the most economical set of generators for a vector space.
- The process of finding a minimal spanning list from a spanning list is sometimes called the "sifting algorithm" or "reduction to a basis."
- While a vector space may have many different minimal spanning lists (bases), they all have the same cardinality.
- The concept of a minimal spanning list is analogous to the concept of a minimal generating set in abstract algebra.
- In applications, finding minimal spanning lists can lead to more efficient representations and computations with vector spaces.
