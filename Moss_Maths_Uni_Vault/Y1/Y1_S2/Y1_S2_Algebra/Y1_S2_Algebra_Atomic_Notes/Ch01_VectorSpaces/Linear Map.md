---
title: "Linear Map"
aliases: ["Linear Maps", "Linear Transformation", "Linear Function"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "vector-space", "kernel", "image", "matrix", "isomorphism", "rank", "nullity", "linear-combination", "span", "linear-algebra", "homomorphism"]
related_concepts: ["Vector Space", "Kernel", "Image", "Matrix Representation", "Isomorphism", "Rank", "Nullity", "Linear Combination", "Span", "Field"]
---

# Linear Map

## Definition
A **linear map** (also called a linear transformation or linear function) is a function $\phi: V \rightarrow W$ between two vector spaces $V$ and $W$ over the same field $\mathbb{F}$ that preserves the operations of vector addition and scalar multiplication. 

Specifically, for all vectors $v, w \in V$ and all scalars $\lambda, \mu \in \mathbb{F}$:

$$\phi(\lambda v + \mu w) = \lambda \phi(v) + \mu \phi(w)$$

## Properties
- Every linear map preserves the zero vector: $\phi(0_V) = 0_W$.
- Every linear map preserves additive inverses: $\phi(-v) = -\phi(v)$.
- More generally, for any vectors $v_1, v_2, \ldots, v_n \in V$ and scalars $\lambda_1, \lambda_2, \ldots, \lambda_n \in \mathbb{F}$:
  $$\phi\left(\sum_{i=1}^{n} \lambda_i v_i\right) = \sum_{i=1}^{n} \lambda_i \phi(v_i)$$
- The composition of two linear maps is a linear map.
- The identity map $\text{id}: V \rightarrow V$ defined by $\text{id}(v) = v$ is a linear map.
- If $\phi: V \rightarrow W$ is a linear bijection, then its inverse $\phi^{-1}: W \rightarrow V$ is also a linear map.
- A linear map is completely determined by its action on a basis of the domain.

## Examples
1. **Matrix Transformations**: Every matrix $A \in M_{m,n}(\mathbb{F})$ defines a linear map $\phi_A: \mathbb{F}^n \rightarrow \mathbb{F}^m$ by $\phi_A(\mathbf{x}) = A\mathbf{x}$. This maps a column vector to the result of the matrix multiplication.

2. **Rotations and Reflections**: In $\mathbb{R}^2$, rotations about the origin and reflections across lines through the origin are linear maps.

3. **Projection**: The projection onto a subspace is a linear map. For example, the projection onto the $x$-axis in $\mathbb{R}^2$ is the map $(x, y) \mapsto (x, 0)$.

4. **Derivative**: The derivative operator $D: \mathbb{F}[X] \rightarrow \mathbb{F}[X]$ defined by $D(\sum_{i=0}^{n} a_i X^i) = \sum_{i=1}^{n} i a_i X^{i-1}$ is a linear map.

5. **Integral**: The definite integral operator $I: C[a, b] \rightarrow \mathbb{R}$ defined by $I(f) = \int_{a}^{b} f(t) dt$ is a linear map.

6. **Zero Map**: The map $\phi: V \rightarrow W$ defined by $\phi(v) = 0_W$ for all $v \in V$ is a linear map.

7. **Coordinate Map**: Given a basis $\alpha: v_1, \ldots, v_n$ of a vector space $V$, the map $\phi_\alpha: \mathbb{F}^n \rightarrow V$ defined by $\phi_\alpha(\mathbf{x}) = \sum_{i=1}^{n} x_i v_i$ is a linear map.

## Important Theorems/Results
- **Lemma 1.3.3**: Properties of linear maps:
  1. The identity map $\text{id}: V \rightarrow V$ is a linear map.
  2. For any linear map $\phi$, $\phi(0) = 0$ and $\phi(-v) = -\phi(v)$.
  3. If $\phi: V \rightarrow W$ and $\psi: W \rightarrow U$ are linear maps, then so is $\psi \circ \phi: V \rightarrow U$.
  4. If $\phi: V \rightarrow W$ is a linear bijection, then $\phi^{-1}: W \rightarrow V$ is a linear map.

- **Proposition 1.3.9**: A linear map $\phi: V \rightarrow W$ is injective if and only if $\ker \phi = \{0\}$.

- **Rank-Nullity Theorem**: For a linear map $\phi: V \rightarrow W$ where $V$ is finite-dimensional, $\dim V = \dim(\ker \phi) + \dim(\text{im } \phi)$.

## Connections to Other Concepts
- The [[Kernel]] of a linear map is the set of vectors mapped to zero: $\ker \phi = \{v \in V : \phi(v) = 0_W\}$.
- The [[Image]] of a linear map is the set of all possible outputs: $\text{im } \phi = \{\phi(v) : v \in V\}$.
- An [[Isomorphism]] is a bijective linear map, indicating that two vector spaces have the same structure.
- Every linear map between finite-dimensional vector spaces can be represented by a [[Matrix]] once bases are chosen.
- The [[Rank]] of a linear map is the dimension of its image.
- The [[Nullity]] of a linear map is the dimension of its kernel.
- Linear maps preserve [[Linear Combination]]s and [[Span]]s.

## Related Problems
- [[PS01-Q03]] - Showing that projection onto a line is a linear map.
- [[PS01-Q06]] - Understanding linearity of the map from $\mathbb{F}^n$ to $V$.
- [[PS01-Q07]] - Computing the kernel and image of a projection map.

## Notes
- The defining property of a linear map is often split into two separate conditions:
  1. $\phi(v + w) = \phi(v) + \phi(w)$ (additivity or homomorphism of addition)
  2. $\phi(\lambda v) = \lambda \phi(v)$ (homogeneity of degree 1)
  
- Linear maps are the "structure-preserving maps" between vector spaces, analogous to homomorphisms in group theory.
- The study of linear maps is central to linear algebra, as they formalize how vector spaces relate to each other.
- Non-linear functions like $f(x) = x + 1$ or $g(x,y) = xy$ fail to satisfy the linearity conditions.
- In physics and engineering, linear maps are important because many physical systems are approximately linear over certain ranges.
