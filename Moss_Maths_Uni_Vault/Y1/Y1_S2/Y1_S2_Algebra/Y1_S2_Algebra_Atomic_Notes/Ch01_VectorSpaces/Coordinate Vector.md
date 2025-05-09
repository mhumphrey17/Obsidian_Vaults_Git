---
title: "Coordinate Vector"
aliases: ["Coordinates", "Component Vector"]
tags: [concept, algebra-s2, ch-1, sec-1-4]
related_concepts: ["Basis", "Vector Space", "Linear Combination", "Isomorphism"]
formula: "v = \\sum_{i=1}^{n} \\lambda_i v_i \\implies [v]_\\alpha = (\\lambda_1, \\lambda_2, \\ldots, \\lambda_n)"
date_created: 2025-05-09
---

# Coordinate Vector

## Definition
Given a basis $\alpha: v_1, v_2, \ldots, v_n$ of a vector space $V$ over a field $\mathbb{F}$, the **coordinate vector** (or **component vector**) of a vector $v \in V$ with respect to the basis $\alpha$ is the ordered tuple of coefficients $(\lambda_1, \lambda_2, \ldots, \lambda_n) \in \mathbb{F}^n$ such that:

$$v = \lambda_1 v_1 + \lambda_2 v_2 + \cdots + \lambda_n v_n$$

This is often denoted by $[v]_\alpha$ or simply $[v]$ when the basis is clear from context.

## Properties
- The coordinate vector is uniquely determined because a basis provides a unique representation of each vector as a linear combination of the basis vectors.
- The coordinate vector depends on the chosen basis. The same vector will generally have different coordinate vectors with respect to different bases.
- The coordinate vector also depends on the ordering of the basis vectors. Changing the order changes the coordinates.
- The coordinate mapping $\phi_\alpha^{-1}: V \rightarrow \mathbb{F}^n$ defined by $\phi_\alpha^{-1}(v) = [v]_\alpha$ is an isomorphism of vector spaces.
- If $v, w \in V$ and $\lambda \in \mathbb{F}$, then:
  - $[v + w]_\alpha = [v]_\alpha + [w]_\alpha$
  - $[\lambda v]_\alpha = \lambda [v]_\alpha$
- For any basis vector $v_i$ in the basis $\alpha$, its coordinate vector is the standard basis vector $\mathbf{e}_i$ in $\mathbb{F}^n$.

## Examples
1. In $\mathbb{R}^2$ with the standard basis $\mathbf{e}_1 = (1, 0)$ and $\mathbf{e}_2 = (0, 1)$, the coordinate vector of $v = (3, 4)$ is $[v]_{\text{std}} = (3, 4)$.

2. In $\mathbb{R}^2$ with the basis $\alpha: (1, 1), (1, -1)$, the vector $v = (3, 1)$ can be written as $v = 2 \cdot (1, 1) + 1 \cdot (1, -1)$, so its coordinate vector is $[v]_\alpha = (2, 1)$.

3. In $\mathbb{R}^3$ with the standard basis, the coordinate vector of $(a, b, c)$ is simply $(a, b, c)$.

4. In the polynomial space $\mathbb{R}[X]_{\leq 2}$ with basis $\{1, X, X^2\}$, the coordinate vector of $p(X) = 3X^2 - 2X + 1$ is $[p]_\alpha = (1, -2, 3)$.

5. If we consider Example 1.4.8 from the textbook, in the vector space $V = \{a\cos x + b\sin x : a, b \in \mathbb{R}\}$ with basis $\alpha: \sin x, \cos x$, the coordinate vector of $\sin(x + \frac{\pi}{3})$ is $[\sin(x + \frac{\pi}{3})]_\alpha = (\frac{1}{2}, \frac{\sqrt{3}}{2})$.

## Important Theorems/Results
- **Proposition 1.4.4**: A list $\alpha: v_1, \ldots, v_n$ is a basis of $V$ if and only if every vector $v \in V$ can be uniquely written as a linear combination of the basis vectors, which is equivalent to saying that every vector has a unique coordinate vector with respect to $\alpha$.

- **Corollary 1.4.5**: If $\alpha: v_1, \ldots, v_n$ is a basis of $V$, then the map $\phi_\alpha: \mathbb{F}^n \rightarrow V$ defined by $\phi_\alpha(x_1, \ldots, x_n) = \sum_{i=1}^n x_i v_i$ is an isomorphism. The inverse of this map gives the coordinate vector.

- **Proposition 1.7.5**: If $\alpha$ and $\alpha'$ are two bases of $V$, and $P$ is the change of basis matrix from $\alpha$ to $\alpha'$, then the coordinate vectors of a vector $v \in V$ with respect to these bases are related by $[v]_\alpha = P[v]_{\alpha'}$.

## Connections to Other Concepts
- A coordinate vector exists only with respect to a chosen [[Basis]].
- The concept of a coordinate vector allows us to translate problems in abstract [[Vector Space]]s to problems in the concrete space $\mathbb{F}^n$.
- The coefficients in a coordinate vector come from expressing a vector as a [[Linear Combination]] of basis vectors.
- Coordinate vectors are central to the concept of [[Change of Basis]] and the matrix representation of [[Linear Map]]s.
- An [[Isomorphism]] between a vector space $V$ and $\mathbb{F}^n$ is established through coordinate vectors.

## Related Problems
- Finding the coordinate vector of a specific vector with respect to a given basis.
- Changing coordinates between different bases.
- Expressing linear maps in terms of matrices using coordinate vectors.

## Notes
- The coordinate vector provides a bridge between abstract vector spaces and the concrete space $\mathbb{F}^n$, allowing us to perform computations more easily.
- In practical applications, the choice of basis often reflects the structure of the problem being solved.
- The standard basis in $\mathbb{F}^n$ is the basis where each vector has a 1 in one position and 0s elsewhere. In this case, the coordinate vector of a vector is the vector itself.
- For basis vectors, the coordinate vectors are particularly simple: the coordinate vector of $v_i$ is $(0, \ldots, 0, 1, 0, \ldots, 0)$ with the 1 in the $i$-th position.
- Changing the order of basis vectors changes the coordinate vectors, which is why working with ordered bases is important.
