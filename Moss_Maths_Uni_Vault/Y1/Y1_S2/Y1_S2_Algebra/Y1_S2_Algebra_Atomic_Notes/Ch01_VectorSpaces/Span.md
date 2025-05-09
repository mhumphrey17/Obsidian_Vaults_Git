---
title: "Span"
aliases: ["Linear Span", "Spanning Set"] # Note: "Spanning Set" is also a separate note title, consider if this alias is still needed or if they should be more distinct.
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "vector-space", "subspace", "linear-combination", "basis", "linear-independence", "dimension", "spanning-set", "linear-algebra"]
related_concepts: ["Vector Space", "Subspace", "Linear Combination", "Basis", "Linear Independence", "Dimension", "Spanning Set", "Field"]
---

# Span

## Definition
For a subset $S$ of a vector space $V$ over a field $\mathbb{F}$, the **linear span** (or simply **span**) of $S$, denoted by $\langle S \rangle$, is the smallest subspace of $V$ containing $S$. Equivalently, it is the intersection of all subspaces of $V$ that contain $S$.

For vectors $v_1, \ldots, v_n \in V$, their span is:

$$\langle v_1, \ldots, v_n \rangle = \{\sum_{i=1}^{n} \lambda_i v_i : \lambda_i \in \mathbb{F}\}$$

In other words, the span of a set of vectors is the set of all possible linear combinations of those vectors.

## Properties
- The span of any set of vectors is a subspace of the vector space.
- By convention, the span of the empty set is $\{\mathbf{0}\}$, the trivial subspace containing only the zero vector.
- The span of a set is the smallest subspace containing that set.
- If $S \subseteq T$, then $\langle S \rangle \subseteq \langle T \rangle$.
- $\langle S \rangle = \langle \langle S \rangle \rangle$ (idempotence)
- The span of linearly independent vectors has dimension equal to the number of vectors.
- If a set of vectors spans a vector space $V$, then any vector in $V$ can be written as a linear combination of those vectors.
- A set of vectors is called a spanning set for a vector space $V$ if their span equals $V$.

## Examples
1. In $\mathbb{R}^2$:
   - The span of $\{(1, 0), (0, 1)\}$ is all of $\mathbb{R}^2$.
   - The span of $\{(1, 2)\}$ is the line $\{(t, 2t) : t \in \mathbb{R}\}$ passing through the origin.
   - The span of $\{(1, 2), (2, 4)\}$ is still the same line, as these vectors are linearly dependent.
   - The span of $\{(1, 2), (0, 1)\}$ is all of $\mathbb{R}^2$.

2. In $\mathbb{R}^3$:
   - The span of $\{(1, 0, 0), (0, 1, 0), (0, 0, 1)\}$ is all of $\mathbb{R}^3$.
   - The span of $\{(1, 0, 0), (0, 1, 0)\}$ is the $xy$-plane.
   - The span of $\{(1, 1, 1), (1, 2, 3), (2, 3, 4)\}$ is a plane in $\mathbb{R}^3$, since these three vectors are linearly dependent.

3. In the space of polynomials $\mathbb{R}[X]$ of degree at most 2:
   - The span of $\{1, X, X^2\}$ is the entire space.
   - The span of $\{1, X\}$ is the subspace of polynomials of degree at most 1.

## Important Theorems/Results
- A set of vectors $\{v_1, v_2, \ldots, v_n\}$ spans a vector space $V$ if and only if every vector in $V$ can be expressed as a linear combination of these vectors.
- If $\{v_1, v_2, \ldots, v_n\}$ spans $V$ and $v_n \in \langle v_1, \ldots, v_{n-1}\rangle$, then $\{v_1, v_2, \ldots, v_{n-1}\}$ also spans $V$.
- If a set of vectors spans a vector space, then it contains a basis for that space (possibly the entire set if it's linearly independent).
- The dimension of the span of a set of vectors is at most the number of vectors in the set, with equality if and only if the vectors are linearly independent.

## Connections to Other Concepts
- The span uses [[Linear Combination]]s to generate all possible vectors in a subspace.
- A [[Subspace]] is precisely the span of some set of vectors.
- A [[Basis]] of a vector space is a minimal spanning set, i.e., a linearly independent set that spans the space.
- [[Linear Independence]] is closely related to spans: if a vector is in the span of others, then the set is linearly dependent.
- The [[Dimension]] of a vector space can be defined as the minimum size of a spanning set that is also linearly independent.

## Related Problems
- [[PS01-Q05]] - Working with subspaces involves understanding spans.
- [[PS01-Q06]] - Understanding how linear maps interact with spans.

## Notes
- The notation $\langle S \rangle$ or $\text{span}(S)$ is commonly used for the span of a set $S$.
- As the span of vectors is the smallest subspace containing them, it consists precisely of all their linear combinations.
- The span of a set is independent of the order of the vectors in the set, due to the commutativity of vector addition.
- Finding a minimal spanning set (one with the fewest number of vectors) for a subspace is equivalent to finding a basis for that subspace.
- Determining whether a vector is in the span of others often involves solving a system of linear equations.
