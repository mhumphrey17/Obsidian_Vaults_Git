---
title: "Rank-Nullity Theorem"
aliases: ["Dimension Theorem", "Fundamental Theorem of Linear Maps"]
tags: [concept, algebra-s2, ch-1, sec-1-9]
related_concepts: ["Linear Map", "Rank", "Nullity", "Kernel", "Image", "Dimension"]
formula: "\\operatorname{rank} \\phi + \\operatorname{null} \\phi = \\dim V"
date_created: 2025-05-09
---

# Rank-Nullity Theorem

## Definition
The **Rank-Nullity Theorem** (also known as the Dimension Theorem) states that for any linear map $\phi: V \rightarrow W$ between vector spaces, where $V$ is finite-dimensional, the dimension of $V$ equals the sum of the rank and the nullity of $\phi$:

$$\operatorname{rank} \phi + \operatorname{null} \phi = \dim V$$

In other words:

$$\dim(\operatorname{Im} \phi) + \dim(\operatorname{Ker} \phi) = \dim V$$

## Properties
- The theorem provides a fundamental relationship between the dimensions of the domain, image, and kernel of a linear map.
- For a matrix $A \in M_{m,n}(\mathbb{F})$, the theorem states that:
  $$\operatorname{rank} A + \operatorname{null} A = n$$
  where $n$ is the number of columns of $A$ (i.e., the dimension of the domain).
- The theorem implies that the rank of a linear map is at most the dimension of its domain.
- If $\phi: V \rightarrow W$ is surjective, then $\operatorname{rank} \phi = \dim W$ and so $\operatorname{null} \phi = \dim V - \dim W$.
- If $\phi: V \rightarrow W$ is injective, then $\operatorname{null} \phi = 0$ and so $\operatorname{rank} \phi = \dim V$.
- If $\dim V = \dim W$ and $\phi: V \rightarrow W$ is a linear map, then the following are equivalent:
  - $\phi$ is injective
  - $\phi$ is surjective
  - $\phi$ is an isomorphism

## Examples
1. Consider the linear map $\phi: \mathbb{R}^3 \rightarrow \mathbb{R}^2$ given by $\phi(x, y, z) = (x + y, y + z)$. We previously found that $\operatorname{rank} \phi = 2$ and $\operatorname{null} \phi = 1$. The theorem confirms that $2 + 1 = 3 = \dim \mathbb{R}^3$.

2. For the identity map $\operatorname{id}: V \rightarrow V$, we have $\operatorname{rank}(\operatorname{id}) = \dim V$ and $\operatorname{null}(\operatorname{id}) = 0$, so $\dim V + 0 = \dim V$.

3. For the zero map $0: V \rightarrow W$ defined by $0(v) = 0_W$ for all $v \in V$, we have $\operatorname{rank}(0) = 0$ and $\operatorname{null}(0) = \dim V$, so $0 + \dim V = \dim V$.

4. Consider the matrix 
   $$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$$
   
   We found earlier that $\operatorname{rank} A = 2$ and $\operatorname{null} A = 1$. The theorem confirms that $2 + 1 = 3 = \dim \mathbb{R}^3$.

5. For the derivative operator $D: \mathbb{R}[X]_{\leq n} \rightarrow \mathbb{R}[X]_{\leq n-1}$, we have $\operatorname{rank} D = n$ and $\operatorname{null} D = 1$. The theorem confirms that $n + 1 = n + 1 = \dim \mathbb{R}[X]_{\leq n}$.

6. For the projection $\pi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ onto the $x$-axis, $\operatorname{rank} \pi = 1$ and $\operatorname{null} \pi = 1$. The theorem confirms that $1 + 1 = 2 = \dim \mathbb{R}^2$.

## Important Theorems/Results
- **Theorem 1.9.2 (Rank-Nullity Theorem)**: If $V$ is finite-dimensional and $\phi: V \rightarrow W$ is a linear map, then:
  $$\operatorname{rank} \phi + \operatorname{null} \phi = \dim V$$

- The theorem can be proved by choosing a basis for $\operatorname{Ker} \phi$ and extending it to a basis for $V$. The images of the additional basis vectors form a basis for $\operatorname{Im} \phi$.

- An analogous result for sums of subspaces:
  **Proposition 1.9.5**: If $U$ and $W$ are finite-dimensional subspaces of a vector space $V$, then:
  $$\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$$

- For external direct sums:
  **Lemma 1.9.4**: If $U$ and $W$ are finite-dimensional vector spaces, then:
  $$\dim(U \oplus W) = \dim U + \dim W$$

## Connections to Other Concepts
- The theorem directly relates the [[Rank]] and [[Nullity]] of a [[Linear Map]].
- It involves the [[Dimension]]s of the domain, [[Kernel]], and [[Image]] of a linear map.
- The theorem has implications for the solvability and uniqueness of solutions to systems of linear equations.
- It provides a criterion for determining when a linear map is an [[Isomorphism]].
- The theorem is related to the [[Dimension]] formula for sums and intersections of subspaces.

## Related Problems
- [[PS01-Q01]] - Understanding the relationship between solvability, uniqueness, and the rank-nullity theorem.
- [[PS01-Q04]] - Analyzing parametric linear systems through the lens of the rank-nullity theorem.

## Notes
- The Rank-Nullity Theorem is one of the most fundamental results in linear algebra, capturing the essential relationship between the key dimensions associated with a linear map.
- In applications, the theorem helps understand the structure of systems of linear equations: the rank provides information about the number of independent equations, while the nullity tells us about the degrees of freedom in the solution space.
- The theorem can be interpreted geometrically: the dimension of the domain equals the sum of the dimension of the "flattened directions" (nullity) and the dimension of the "effective image" (rank).
- When thinking about matrices, the theorem tells us that the number of linearly independent columns (rank) plus the number of free variables in the general solution to the homogeneous system (nullity) equals the total number of columns.
- The theorem is a special case of more general results in category theory, specifically the first isomorphism theorem for vector spaces.
