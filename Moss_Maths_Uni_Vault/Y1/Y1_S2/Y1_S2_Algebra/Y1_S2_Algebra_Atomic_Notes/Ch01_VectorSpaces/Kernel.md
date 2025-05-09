---
title: "Kernel"
aliases: ["Null Space", "Kernel of a Linear Map"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "linear-map", "image", "subspace", "nullity", "rank-nullity-theorem", "null-space", "injective", "linear-system", "linear-algebra", "vector-space"]
related_concepts: ["Linear Map", "Image", "Subspace", "Nullity", "Rank-Nullity Theorem", "Vector Space", "Injective Map", "Linear System"]
---

# Kernel

## Definition
The **kernel** (or **null space**) of a linear map $\phi: V \rightarrow W$ between vector spaces $V$ and $W$ is the set of all vectors in $V$ that $\phi$ maps to the zero vector in $W$. It is denoted by $\ker \phi$ and defined as:

$$\ker \phi = \{v \in V : \phi(v) = 0_W\}$$

## Properties
- The kernel of a linear map is always a subspace of the domain $V$.
- A linear map $\phi$ is injective (one-to-one) if and only if $\ker \phi = \{0_V\}$.
- If $V$ is finite-dimensional, the dimension of $\ker \phi$ is called the **nullity** of $\phi$.
- The kernel allows us to determine when two vectors map to the same element: $\phi(v) = \phi(w)$ if and only if $v - w \in \ker \phi$.
- If $\phi$ is represented by a matrix $A$, then $\ker \phi$ corresponds to the solution space of the homogeneous system $Ax = 0$.
- If $\phi: V \rightarrow W$ and $\psi: U \rightarrow V$ are linear maps, then $\psi^{-1}(\ker \phi) = \ker(\phi \circ \psi)$.
- The kernel provides information about the injectivity and surjectivity of a linear map through the Rank-Nullity Theorem.

## Examples
1. The kernel of the derivative operator $D: \mathbb{R}[X] \rightarrow \mathbb{R}[X]$ consists of all constant polynomials since $\frac{d}{dX}(c) = 0$ for any constant $c$.

2. The kernel of the linear map $\phi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ that projects vectors onto the $x$-axis is the $y$-axis. Mathematically, if $\phi((x, y)) = (x, 0)$, then $\ker \phi = \{(0, y) : y \in \mathbb{R}\}$.

3. For the rotation linear map $\phi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ that rotates vectors by a non-zero angle, $\ker \phi = \{(0, 0)\}$ since only the zero vector is mapped to itself.

4. For the matrix transformation $\phi_A: \mathbb{R}^3 \rightarrow \mathbb{R}^2$ given by 
   $$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$$
   the kernel consists of all vectors $(x, y, z)$ such that $x + 2y + 3z = 0$ and $4x + 5y + 6z = 0$. This is a one-dimensional subspace (a line through the origin).

5. For the linear map $\phi: \mathbb{R}^3 \rightarrow \mathbb{R}^3$ defined by $\phi(x, y, z) = (x + y, y + z, x + z)$, the kernel consists of vectors of the form $(t, -t, t)$ for $t \in \mathbb{R}$.

6. The kernel of the zero map $\phi: V \rightarrow W$ defined by $\phi(v) = 0_W$ for all $v \in V$ is the entire domain $V$.

7. The kernel of the identity map $\text{id}: V \rightarrow V$ defined by $\text{id}(v) = v$ is just the zero vector $\{0_V\}$.

## Important Theorems/Results
- **Proposition 1.3.7**: The kernel of a linear map $\phi: V \rightarrow W$ is a linear subspace of $V$.

- **Proposition 1.3.9**: A linear map $\phi: V \rightarrow W$ is injective if and only if $\ker \phi = \{0_V\}$.

- **Rank-Nullity Theorem**: If $V$ is finite-dimensional and $\phi: V \rightarrow W$ is a linear map, then:
  $$\dim V = \dim(\ker \phi) + \dim(\text{im } \phi)$$
  
- Computing the kernel of a linear map is equivalent to solving a homogeneous system of linear equations.

## Connections to Other Concepts
- The kernel is a fundamental property of a [[Linear Map]].
- The kernel is always a [[Subspace]] of the domain vector space.
- The [[Image]] of a linear map is complementary to the kernel in the sense of the Rank-Nullity Theorem.
- The dimension of the kernel is the [[Nullity]] of the linear map.
- The [[Rank-Nullity Theorem]] establishes a fundamental relationship between the dimensions of the domain, kernel, and image of a linear map.
- Finding the kernel is closely related to solving [[Linear System|linear systems]] of equations.

## Related Problems
- [[PS01-Q07]] - Computing the kernel of a projection map.
- [[PS01-Q01]] - Understanding when linear systems have unique solutions relates to the kernel.
- [[PS01-Q04]] - Analyzing linear systems with parameters involves understanding kernels.

## Notes
- The term "kernel" comes from the idea that these are the vectors that get "killed" by the linear map (mapped to zero).
- The kernel is sometimes called the "null space" in the context of matrices, reflecting the set of vectors that a matrix maps to zero.
- The kernel gives us important information about how a linear map compresses or distorts the domain vector space.
- A linear map with a non-trivial kernel (kernel contains vectors other than zero) is not injective, meaning it "collapses" some dimensions.
- In many applications, finding the kernel of a linear map is equivalent to finding the solution space of a homogeneous system of linear equations $Ax = 0$.
