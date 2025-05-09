---
title: "Linear Maps, Kernels, and Images"
aliases: ["Topic: Linear Maps", "Chapter 1.3 Summary"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "topic", "linear-map", "kernel", "image", "isomorphism", "vector-space", "linear-algebra"]
related_concepts: ["Linear Map", "Kernel", "Image", "Isomorphism", "Linear Operator", "Vector Space", "Field", "Injective Map", "Surjective Map"]
---

# Linear Maps, Kernels, and Images

## Overview
Linear maps are functions between vector spaces that preserve the operations of vector addition and scalar multiplication. They are the "structure-preserving maps" of linear algebra. This topic explores linear maps and their fundamental properties, including the kernel (the set of vectors mapped to zero) and the image (the set of all outputs). Understanding linear maps is essential for connecting different vector spaces and analyzing transformations.

## Key Concepts
- **[[Linear Map]]**: A function $\phi: V \rightarrow W$ between vector spaces that preserves linear combinations: $\phi(\lambda v + \mu w) = \lambda \phi(v) + \mu \phi(w)$. Examples include matrix transformations, projections, rotations, and derivatives.

- **[[Kernel]]**: The set of all vectors that a linear map sends to zero: $\ker \phi = \{v \in V : \phi(v) = 0\}$. The kernel is always a subspace of the domain.

- **[[Image]]**: The set of all possible outputs of a linear map: $\text{Im } \phi = \{\phi(v) : v \in V\}$. The image is always a subspace of the codomain.

- **[[Isomorphism]]**: A bijective linear map that establishes that two vector spaces have the same structure. Two vector spaces are isomorphic if and only if they have the same dimension.

- **[[Linear Operator]]**: A linear map from a vector space to itself. Examples include rotations, projections, and the derivative operator on polynomial spaces.

## Core Results
- **Lemma 1.3.3 (Properties of Linear Maps)**:
  1. The identity map is a linear map.
  2. For any linear map $\phi$, $\phi(0) = 0$ and $\phi(-v) = -\phi(v)$.
  3. The composition of linear maps is a linear map.
  4. If $\phi$ is a linear bijection, then $\phi^{-1}$ is also a linear map.

- **Proposition 1.3.7**: The kernel and image of a linear map are subspaces of the domain and codomain, respectively.

- **Proposition 1.3.9**: A linear map is injective if and only if its kernel is trivial (contains only the zero vector).

## Applications
- **Matrix Transformations**: Linear maps between finite-dimensional spaces can be represented by matrices, connecting abstract theory to computational methods.

- **Computer Graphics**: Linear maps model transformations like rotations, reflections, and projections used in graphics rendering.

- **Differential Equations**: Linear differential operators are important examples of linear maps in analysis.

- **Data Compression**: Linear maps can reduce dimensionality while preserving essential structure.

- **Cryptography**: Some encryption schemes use linear maps over finite fields.

## Common Problems and Approaches
### Verifying a Linear Map
1. Check the two conditions: $\phi(v + w) = \phi(v) + \phi(w)$ and $\phi(\lambda v) = \lambda \phi(v)$.
2. Alternatively, show that $\phi(\lambda v + \mu w) = \lambda \phi(v) + \mu \phi(w)$ for all vectors and scalars.

### Finding the Kernel
1. Set up the equation $\phi(v) = 0$.
2. Solve for the vectors $v$ that satisfy this equation.
3. Verify that the resulting set is a subspace (this should always be true for linear maps).

### Finding the Image
1. Apply the linear map to each basis vector of the domain.
2. The span of these images is the image of the entire space.
3. Find a basis for this span to determine the dimension of the image.

### Determining Injectivity and Surjectivity
1. Injectivity: Check if $\ker \phi = \{0\}$.
2. Surjectivity: Check if $\text{Im } \phi = W$.
3. For matrices, use rank to determine both properties.

## Practice Problems
1. **[[PS01-Q03]]** - Showing that projection onto a line is a linear map.
2. **[[PS01-Q06]]** - Understanding linearity of the map from $\mathbb{F}^n$ to $V$.
3. **[[PS01-Q07]]** - Computing the kernel and image of a projection map.

## Summary
Linear maps are the fundamental transformations between vector spaces, preserving the operations of vector addition and scalar multiplication. Every linear map has two key associated subspaces: the kernel (vectors mapped to zero) and the image (all possible outputs).

Linear maps can be classified based on their injectivity (one-to-one property) and surjectivity (onto property). A map is injective if and only if its kernel is trivial, and it's surjective if and only if its image is the entire codomain. An isomorphism is a linear map that is both injective and surjective, establishing that two vector spaces have essentially the same structure.

Understanding linear maps is crucial for many areas of mathematics and its applications, from solving systems of linear equations to analyzing transformations in geometry, physics, and engineering. The properties of the kernel and image provide deep insights into the behavior of linear maps and the structure of vector spaces.
