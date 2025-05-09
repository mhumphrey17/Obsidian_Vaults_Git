---
title: "Subspace"
aliases: ["Linear Subspace", "Vector Subspace"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "vector-space", "linear-combination", "span", "kernel", "image", "dimension", "sum-of-subspaces", "intersection-of-subspaces", "linear-algebra"]
related_concepts: ["Vector Space", "Linear Combination", "Span", "Kernel", "Image", "Dimension", "Sum of Subspaces", "Field"]
---

# Subspace

## Definition
Let $V$ be a vector space over a field $\mathbb{F}$. A subset $U \subseteq V$ is a **linear subspace** (or simply a **subspace**), and we write $U \leq V$, if:

1. $0 \in U$ (the zero vector is in $U$)
2. $U$ is closed under linear combinations: $\forall \lambda, \mu \in \mathbb{F}$ and $\forall v, w \in U$, we have $\lambda v + \mu w \in U$

This second condition is sometimes separated into:
- Closure under addition: $\forall v, w \in U$, we have $v + w \in U$
- Closure under scalar multiplication: $\forall \lambda \in \mathbb{F}$ and $\forall v \in U$, we have $\lambda v \in U$

## Properties
- A subspace is itself a vector space under the same operations as the parent vector space.
- If $U \neq \emptyset$ and $U$ is closed under linear combinations, then $0 \in U$. This is because for any $v \in U$, we have $0v = 0 \in U$.
- The intersection of any collection of subspaces of $V$ is also a subspace of $V$.
- The union of subspaces is generally not a subspace, unless one is contained in the other.
- If $U$ and $W$ are subspaces of $V$, then their sum $U + W = \{u + w : u \in U, w \in W\}$ is also a subspace of $V$.
- Every vector space $V$ has at least two subspaces: the trivial subspace $\{0\}$ and $V$ itself.
- A subspace $U \neq V$ is called a proper subspace of $V$.
- If $V$ is finite-dimensional, then every subspace $U \leq V$ is also finite-dimensional, and $\dim U \leq \dim V$.
- If $\dim U = \dim V$, then $U = V$.

## Examples
1. The trivial subspace $\{0\}$ consisting of only the zero vector is a subspace of any vector space.

2. In $\mathbb{R}^2$, any line passing through the origin is a subspace.

3. In $\mathbb{R}^3$, any plane passing through the origin is a subspace.

4. The set of all polynomials of degree at most $n$ is a subspace of $\mathbb{F}[X]$, the vector space of all polynomials.

5. Notable subspaces of the space of real-valued functions $\mathbb{R}^{\mathbb{R}}$:
   - $C^0(\mathbb{R})$: the space of continuous functions $\mathbb{R} \rightarrow \mathbb{R}$
   - $C^k(\mathbb{R})$: the space of $k$ times differentiable functions $\mathbb{R} \rightarrow \mathbb{R}$
   - $C^{\infty}(\mathbb{R})$: the space of infinitely differentiable functions $\mathbb{R} \rightarrow \mathbb{R}$

6. The null space (kernel) of a linear map is a subspace of the domain.

7. The image of a linear map is a subspace of the codomain.

## Important Theorems/Results
- If $U$ and $W$ are subspaces of $V$, then $U \cap W$ is also a subspace of $V$.
- If $U$ and $W$ are subspaces of $V$, then $U + W = \{u + w : u \in U, w \in W\}$ is also a subspace of $V$.
- **Dimension Formula**: If $U$ and $W$ are finite-dimensional subspaces of $V$, then:
  $$\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$$
- The complement of a subspace is not a subspace (except in the trivial case where the subspace is $\{0\}$ or $V$).

## Connections to Other Concepts
- Every subspace of a [[Vector Space]] is itself a vector space.
- The [[Span]] of a set of vectors is the smallest subspace containing that set.
- The [[Kernel]] of a linear map is a subspace of the domain.
- The [[Image]] of a linear map is a subspace of the codomain.
- The concepts of [[Linear Independence]] and [[Basis]] are used to analyze and characterize subspaces.
- The [[Dimension]] of a subspace is always less than or equal to the dimension of the containing vector space.

## Related Problems
- [[PS01-Q02]] - Determining whether the complement of a subspace and the intersection of subspaces are subspaces.
- [[PS01-Q05]] - Investigating whether unions and sums of subspaces are subspaces.
- [[PS01-Q08]] - Determining which sets of functions form subspaces of a function space.

## Notes
- Testing if a subset is a subspace only requires checking closure under addition and scalar multiplication (if the subset is non-empty).
- The trivial subspace $\{0\}$ is the smallest possible subspace of any vector space.
- The structure of subspaces of a vector space reveals important information about the underlying space and often has geometric interpretations.
- In applications, subspaces often represent solution sets to homogeneous systems of linear equations.
