---
title: "Vector Spaces and Subspaces"
aliases: ["Topic: Vector Spaces", "Chapter 1.2 Summary"]
tags: [topic, algebra-s2, ch-1, sec-1-2]
concepts: ["Field", "Vector Space", "Subspace", "Additive Group", "Linear Combination", "Span", "Scalar"]
date_created: 2025-05-09
---

# Vector Spaces and Subspaces

## Overview
Vector spaces are one of the most fundamental structures in linear algebra, generalizing the concept of vectors beyond just arrows in space. This topic covers the axiomatic definition of vector spaces, built on the foundation of fields, and explores subspaces as "vector spaces within vector spaces." Understanding these structures provides the framework for almost all other concepts in linear algebra.

## Key Concepts
- **[[Field]]**: A set with addition and multiplication operations satisfying certain axioms, providing the scalars for vector spaces. Examples include $\mathbb{R}$, $\mathbb{C}$, and $\mathbb{Q}$.

- **[[Vector Space]]**: An additive group equipped with scalar multiplication from a field, satisfying distributivity and compatibility axioms. Classic examples include $\mathbb{R}^n$, polynomial spaces, and function spaces.

- **[[Additive Group]]**: The underlying group structure of a vector space, consisting of a set with an addition operation, zero element, and additive inverses.

- **[[Scalar]]**: An element of the field over which a vector space is defined. Used in scalar multiplication to "scale" vectors.

- **[[Linear Combination]]**: A sum of scalar multiples of vectors, of the form $\sum_{i=1}^{n} \lambda_i v_i$. A fundamental operation in vector spaces.

- **[[Span]]**: The set of all possible linear combinations of a given set of vectors, forming the smallest subspace containing the set.

- **[[Subspace]]**: A subset of a vector space that is itself a vector space under the same operations. Must contain the zero vector and be closed under linear combinations.

## Core Results
- **Lemma 1.2.5 (Properties of Vector Spaces)**: 
  1. $\lambda 0 = 0$ and $\lambda(-v) = -(\lambda v)$ for any scalar $\lambda$ and vector $v$
  2. $0v = 0$ and $(-\lambda)v = -(\lambda v)$ for any scalar $\lambda$ and vector $v$
  3. If $\lambda v = 0$, then either $\lambda = 0$ or $v = 0$ (zero-product property)

- **Intersection of Subspaces**: The intersection of any collection of subspaces is itself a subspace.

- **Sum of Subspaces**: If $U$ and $W$ are subspaces of $V$, then their sum $U + W = \{u + w : u \in U, w \in W\}$ is also a subspace of $V$.

## Applications
- **Linear Systems**: Vector spaces provide the framework for understanding systems of linear equations, with solutions forming subspaces.

- **Function Spaces**: Many applied fields work with spaces of functions (continuous, differentiable, etc.) which are infinite-dimensional vector spaces.

- **Computer Graphics**: Transformations in computer graphics rely on vector space operations.

- **Signal Processing**: Signal spaces are often modeled as vector spaces where filtering operations are linear transformations.

- **Quantum Mechanics**: State spaces in quantum mechanics are complex vector spaces.

## Common Problems and Approaches
### Verifying a Vector Space
1. Check all eight vector space axioms systematically.
2. For subsets of known vector spaces, focus on closure under addition and scalar multiplication.

### Identifying Subspaces
1. Verify that the zero vector is in the set.
2. Check closure under linear combinations: if $u, v$ are in the set and $\alpha, \beta$ are scalars, then $\alpha u + \beta v$ must also be in the set.
3. For equation-defined subspaces, verify that the equations are homogeneous (i.e., they equal zero).

### Determining Spans
1. Express unknown vectors as linear combinations of the spanning vectors.
2. Set up and solve the resulting system of equations.
3. For geometric interpretation, visualize spans as lines, planes, or hyperplanes through the origin.

## Practice Problems
1. **[[PS01-Q02]]** - Determining whether the complement of a subspace and the intersection of subspaces are subspaces.
2. **[[PS01-Q05]]** - Investigating whether unions and sums of subspaces are subspaces.
3. **[[PS01-Q08]]** - Identifying which sets of functions form subspaces of a function space.

## Summary
Vector spaces provide the mathematical framework for linear algebra. They generalize the concept of vectors and operations like addition and scaling. A vector space is built on a field of scalars and must satisfy specific axioms regarding addition and scalar multiplication. Subspaces are subsets of vector spaces that preserve the vector space structure. The span of a set of vectors is the smallest subspace containing those vectors.

Understanding vector spaces and subspaces is crucial for grasping more advanced concepts like linear independence, bases, and linear transformations. These structures have wide-ranging applications across mathematics, physics, engineering, and computer science.
