---
title: "Image"
aliases: ["Range", "Image of a Linear Map", "Column Space"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "linear-map", "kernel", "subspace", "rank", "rank-nullity-theorem", "column-space", "surjective", "linear-algebra"]
related_concepts: ["Linear Map", "Kernel", "Subspace", "Rank", "Rank-Nullity Theorem", "Column Space", "Surjective Map"]
---

# Image

## Definition
The **image** (also called the **range**) of a linear map $\phi: V \rightarrow W$ between vector spaces $V$ and $W$ is the set of all vectors in $W$ that are obtained by applying $\phi$ to vectors in $V$. It is denoted by $\text{Im } \phi$ (or sometimes $\phi(V)$) and defined as:

$$\text{Im } \phi = \{w \in W : w = \phi(v) \text{ for some } v \in V\} = \{\phi(v) : v \in V\}$$

## Properties
- The image of a linear map is always a subspace of the codomain $W$.
- A linear map $\phi$ is surjective (onto) if and only if $\text{Im } \phi = W$.
- If $V$ is finite-dimensional, the dimension of $\text{Im } \phi$ is called the **rank** of $\phi$.
- If $\phi$ is represented by a matrix $A$, then $\text{Im } \phi$ corresponds to the span of the columns of $A$, which is why it's also called the column space in this context.
- The image of a subspace under a linear map is also a subspace.
- The pre-image of a subspace under a linear map is also a subspace.
- If $\phi: V \rightarrow W$ and $\psi: W \rightarrow U$ are linear maps, then $\psi(\text{Im } \phi) = \text{Im}(\psi \circ \phi)$.

## Examples
1. The image of the linear map $\phi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ that projects vectors onto the $x$-axis is the $x$-axis. Mathematically, if $\phi((x, y)) = (x, 0)$, then $\text{Im } \phi = \{(x, 0) : x \in \mathbb{R}\}$.

2. The image of the derivative operator $D: \mathbb{R}[X] \rightarrow \mathbb{R}[X]$ is all of $\mathbb{R}[X]$, since for any polynomial $p(X)$, we can find another polynomial $q(X)$ such that $D(q(X)) = p(X)$ (by taking the antiderivative).

3. The image of the linear map $\phi: \mathbb{R}^3 \rightarrow \mathbb{R}^2$ given by $\phi(x, y, z) = (x + y, y + z)$ is all of $\mathbb{R}^2$, making $\phi$ surjective.

4. For the matrix transformation $\phi_A: \mathbb{R}^2 \rightarrow \mathbb{R}^3$ given by 
   $$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}$$
   the image is the span of the two columns of $A$: $\text{Im } \phi_A = \text{span}\{(1, 3, 5), (2, 4, 6)\}$, which is a two-dimensional subspace (a plane through the origin) in $\mathbb{R}^3$.

5. The image of the zero map $\phi: V \rightarrow W$ defined by $\phi(v) = 0_W$ for all $v \in V$ is just the zero vector $\{0_W\}$.

6. The image of the identity map $\text{id}: V \rightarrow V$ defined by $\text{id}(v) = v$ is the entire space $V$.

7. For a rotation in $\mathbb{R}^2$, the image is all of $\mathbb{R}^2$ since every vector can be obtained by rotating some other vector.

## Important Theorems/Results
- **Proposition 1.3.7**: The image of a linear map $\phi: V \rightarrow W$ is a linear subspace of $W$.

- **Rank-Nullity Theorem**: If $V$ is finite-dimensional and $\phi: V \rightarrow W$ is a linear map, then:
  $$\dim V = \dim(\ker \phi) + \dim(\text{Im } \phi)$$
  
- A linear map $\phi: V \rightarrow W$ is an isomorphism if and only if $\ker \phi = \{0_V\}$ and $\text{Im } \phi = W$.

- For matrix transformations, the image is spanned by the columns of the matrix.

## Connections to Other Concepts
- The image is a fundamental property of a [[Linear Map]].
- The image is always a [[Subspace]] of the codomain vector space.
- The [[Kernel]] of a linear map is complementary to the image in the sense of the Rank-Nullity Theorem.
- The dimension of the image is the [[Rank]] of the linear map.
- The [[Rank-Nullity Theorem]] establishes a fundamental relationship between the dimensions of the domain, kernel, and image of a linear map.
- For matrix transformations, the image is related to the [[Column Space]] of the matrix.

## Related Problems
- [[PS01-Q07]] - Computing the image of a projection map.
- [[PS01-Q01]] - Understanding when linear systems have solutions relates to the image.
- [[PS01-Q03]] - Analyzing the image of a projection onto a line.

## Notes
- The image of a linear map tells us the "reach" of the map within the codomain.
- A linear map with a small image (relative to the codomain) is not surjective, meaning it doesn't "fill" all of the codomain.
- In many applications, determining whether a linear system $Ax = b$ has a solution is equivalent to determining whether $b$ is in the image of the linear map represented by $A$.
- The column space interpretation of the image is particularly useful in computational contexts, where we can use techniques like Gaussian elimination to find a basis for the image.
- The fact that a linear map is completely determined by its action on a basis means that the image is the span of the images of the basis vectors.
