---
title: "Linear Combination"
aliases: ["Linear Combinations", "Scalar Combinations"]
tags: [concept, algebra-s2, ch-1, sec-1-2]
related_concepts: ["Vector Space", "Subspace", "Span", "Linear Independence"]
formula: "\\sum_{i=1}^{n} \\lambda_i v_i = \\lambda_1 v_1 + \\lambda_2 v_2 + \\cdots + \\lambda_n v_n"
date_created: 2025-05-09
---

# Linear Combination

## Definition
Given vectors $v_1, v_2, \ldots, v_n$ in a vector space $V$ over a field $\mathbb{F}$, a **linear combination** of these vectors is an expression of the form:

$$\sum_{i=1}^{n} \lambda_i v_i = \lambda_1 v_1 + \lambda_2 v_2 + \cdots + \lambda_n v_n$$

where $\lambda_1, \lambda_2, \ldots, \lambda_n \in \mathbb{F}$ are scalars from the field.

## Properties
- Linear combinations are well-defined because vector addition is associative and commutative, and scalar multiplication distributes over vector addition.
- The zero vector $0$ can be obtained as a linear combination in many ways:
  - $0 = 0v_1 + 0v_2 + \cdots + 0v_n$ (all zero coefficients)
  - If the vectors are linearly dependent, there exist non-zero coefficients that yield $0$
- The set of all possible linear combinations of a set of vectors forms a subspace, called the span of those vectors.
- Every vector in a vector space can be expressed as a linear combination of the basis vectors of that space.
- If $v$ can be expressed as a linear combination of vectors $v_1, v_2, \ldots, v_n$, and each $v_i$ can be expressed as a linear combination of vectors $w_1, w_2, \ldots, w_m$, then $v$ can be expressed as a linear combination of the $w_j$'s.

## Examples
1. In $\mathbb{R}^2$, the vector $(3, 5)$ can be written as a linear combination of the standard basis vectors:
   $$(3, 5) = 3(1, 0) + 5(0, 1) = 3\mathbf{e}_1 + 5\mathbf{e}_2$$

2. In $\mathbb{R}^3$, any vector in the $xy$-plane can be written as a linear combination of $\mathbf{e}_1$ and $\mathbf{e}_2$:
   $$(a, b, 0) = a\mathbf{e}_1 + b\mathbf{e}_2$$

3. In the space of polynomials $\mathbb{R}[X]$ of degree at most 2, the polynomial $2X^2 - 3X + 1$ is a linear combination:
   $$2X^2 - 3X + 1 = 2 \cdot X^2 + (-3) \cdot X + 1 \cdot 1$$

4. In $\mathbb{R}^2$, given $v_1 = (1, 2)$ and $v_2 = (3, 1)$, the vector $v = (0, 5)$ can be expressed as:
   $$v = -3v_1 + v_2 = -3(1, 2) + (3, 1) = (-3, -6) + (3, 1) = (0, -5)$$

## Important Theorems/Results
- **Spanning Set Characterization**: A set of vectors $S$ spans a vector space $V$ if and only if every vector in $V$ can be expressed as a linear combination of vectors in $S$.
- **Linear Independence Characterization**: A set of vectors $\{v_1, v_2, \ldots, v_n\}$ is linearly independent if and only if the only linear combination that equals the zero vector is the one where all coefficients are zero.
- **Basis Characterization**: A set of vectors forms a basis for a vector space if and only if every vector in the space can be uniquely expressed as a linear combination of those vectors.

## Connections to Other Concepts
- The concept of [[Span]] is defined in terms of linear combinations: the span of a set of vectors is the set of all their linear combinations.
- [[Linear Independence]] is defined by studying when linear combinations equal the zero vector.
- A [[Basis]] is a set of vectors where every vector in the space has a unique expression as a linear combination of basis vectors.
- [[Subspace]]s are characterized by their closure under linear combinations.
- [[Linear Map]]s preserve linear combinations: $L(\lambda_1 v_1 + \lambda_2 v_2) = \lambda_1 L(v_1) + \lambda_2 L(v_2)$.

## Related Problems
- [[PS01-Q06]] - Understanding how linear combinations relate to linear maps.
- [[PS01-Q01]] - Linear system solvability involves finding specific linear combinations.

## Notes
- Linear combinations are at the heart of linear algebra. The "linear" in linear algebra refers precisely to the property that we study spaces and maps that respect linear combinations.
- The scalars in a linear combination can be zero, so a linear combination doesn't necessarily need to involve all of the vectors listed.
- Finding the coefficients of a linear combination that represents a given vector is essentially solving a system of linear equations.
- The distributive property of scalar multiplication over vector addition is crucial for defining linear combinations.
