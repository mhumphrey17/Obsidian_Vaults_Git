---
title: "Spanning Set"
aliases: ["Spanning Sets", "Spans"]
tags: [concept, algebra-s2, ch-1, sec-1-4]
related_concepts: ["Vector Space", "Linear Combination", "Basis", "Linear Independence", "Span"]
formula: "S \\text{ spans } V \\iff \\langle S \\rangle = V"
date_created: 2025-05-09
---

# Spanning Set

## Definition
A set of vectors $S = \{v_1, v_2, \ldots, v_n\}$ in a vector space $V$ over a field $\mathbb{F}$ is a **spanning set** for $V$ if every vector in $V$ can be expressed as a linear combination of vectors in $S$. Formally, $S$ is a spanning set if:

$$\langle S \rangle = V$$

where $\langle S \rangle$ denotes the span of $S$. This means that for every $v \in V$, there exist scalars $\lambda_1, \lambda_2, \ldots, \lambda_n \in \mathbb{F}$ such that:

$$v = \lambda_1 v_1 + \lambda_2 v_2 + \cdots + \lambda_n v_n$$

We also say that $S$ **spans** $V$ or that the vectors in $S$ **generate** $V$.

## Properties
- Every vector space has a spanning set (at minimum, the entire space itself).
- A spanning set may contain redundant vectors that can be removed while still spanning the space.
- If $S$ spans $V$ and $S \subseteq T$, then $T$ also spans $V$.
- If $S$ spans $V$ and $v_n \in \langle v_1, \ldots, v_{n-1} \rangle$, then $\{v_1, \ldots, v_{n-1}\}$ also spans $V$.
- A finite-dimensional vector space always has a finite spanning set.
- Any spanning set for a vector space can be reduced to a basis by removing redundant vectors.
- The size of a minimal spanning set equals the dimension of the vector space.
- A spanning set contains at least as many vectors as the dimension of the space.

## Examples
1. The standard basis $\{\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n\}$ spans $\mathbb{R}^n$.

2. The set $\{(1, 0), (0, 1), (1, 1)\}$ spans $\mathbb{R}^2$, although it is not a minimal spanning set since $(1, 1) = (1, 0) + (0, 1)$.

3. In $\mathbb{R}^3$, the set $\{(1, 0, 0), (0, 1, 0), (0, 0, 1), (1, 1, 1)\}$ spans the space, but it is not a minimal spanning set.

4. The set $\{1, X, X^2, \ldots, X^n\}$ spans the vector space $\mathbb{R}[X]_{\leq n}$ of polynomials of degree at most $n$.

5. The set of all monomials $\{1, X, X^2, X^3, \ldots\}$ spans the vector space $\mathbb{R}[X]$ of all polynomials.

6. The set $\{\sin x, \cos x\}$ spans the vector space $\{a\sin x + b\cos x : a, b \in \mathbb{R}\}$ of all linear combinations of sine and cosine functions.

## Important Theorems/Results
- **Proposition 1.4.10**: A list of vectors represented as columns of a matrix $A$ spans the column space of $A$ if and only if none of the rows of the row echelon form of $A$ are zero.

- **Proposition 1.5.4**: If $v_1, \ldots, v_n$ is a spanning list of $V$ and $v_n \in \langle v_1, \ldots, v_{n-1} \rangle$, then $v_1, \ldots, v_{n-1}$ is also a spanning list of $V$.

- **Theorem 1.5.5**: A list of vectors is a basis if and only if it is a minimal spanning list.

- **Corollary 1.5.7**: Any finite spanning list in $V$ contains a basis. This basis can be obtained by systematically removing redundant vectors.

## Connections to Other Concepts
- The [[Span]] of a set of vectors is the set of all their linear combinations, and a spanning set is one whose span equals the entire vector space.
- A [[Basis]] is a spanning set that is also [[Linear Independence|linearly independent]].
- [[Linear Combination]]s of vectors in a spanning set can generate any vector in the space.
- The concept of spanning sets is fundamental to understanding the [[Dimension]] of a vector space, which equals the size of a minimal spanning set that is also linearly independent.

## Related Problems
- [[PS01-Q03]] - Understanding whether a set of vectors spans a specific subspace.
- Problems involving finding minimal spanning sets or reducing spanning sets to bases.

## Notes
- Finding a spanning set for a vector space is generally easier than finding a basis, as we only need to ensure that the vectors generate the entire space.
- In applications, spanning sets that are not bases (i.e., that contain redundant vectors) can sometimes be useful for their robustness or symmetry properties.
- A computational approach to determining if a set spans a finite-dimensional vector space involves checking if the matrix with these vectors as columns has full row rank.
- The sifting algorithm can be used to reduce a spanning set to a basis by systematically removing vectors that are in the span of the previously kept vectors.
- The concept of spanning sets is closely tied to the idea of generating sets in abstract algebra.
