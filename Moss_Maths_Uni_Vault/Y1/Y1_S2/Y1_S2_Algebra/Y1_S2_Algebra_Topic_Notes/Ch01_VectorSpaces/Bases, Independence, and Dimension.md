---
title: "Bases, Independence, and Dimension"
aliases: ["Topic: Bases", "Chapter 1.4-1.5 Summary"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "topic", "basis", "linear-independence", "dimension", "spanning-set", "coordinate-vector", "vector-space", "linear-algebra"]
related_concepts: ["Linear Independence", "Spanning Set", "Basis", "Dimension", "Coordinate Vector", "Minimal Spanning List", "Maximal Linearly Independent List", "Vector Space", "Field"]
---

# Bases, Independence, and Dimension

## Overview
This topic explores how vector spaces can be characterized through special sets of vectors. Linear independence provides a way to identify vectors that contribute unique "directions" to a space. Spanning sets generate the entire space through linear combinations. Bases - sets that are both linearly independent and spanning - provide a minimal way to represent a vector space. The dimension of a space, determined by the size of any basis, gives a fundamental invariant that helps classify vector spaces.

## Key Concepts
- **[[Linear Independence]]**: A property where no vector in a set can be expressed as a linear combination of the others. Formally, vectors $v_1, \ldots, v_n$ are linearly independent if $\sum_{i=1}^{n} \lambda_i v_i = 0$ implies all $\lambda_i = 0$.

- **[[Spanning Set]]**: A set of vectors whose linear combinations generate the entire vector space. A set $S$ spans $V$ if every vector in $V$ can be written as a linear combination of vectors in $S$.

- **[[Basis]]**: A linearly independent spanning set for a vector space. A basis provides a minimal spanning set or, equivalently, a maximal linearly independent set.

- **[[Dimension]]**: The number of vectors in any basis of a vector space, providing a fundamental classification invariant for vector spaces.

- **[[Coordinate Vector]]**: The unique representation of a vector in terms of a given basis, expressing the vector as a list of coefficients.

- **[[Minimal Spanning List]]**: A spanning list from which no vector can be removed without losing the spanning property. Equivalent to a basis.

- **[[Maximal Linearly Independent List]]**: A linearly independent list to which no vector can be added without creating dependence. Equivalent to a basis.

## Core Results
- **Lemma 1.4.9**: 
  1. A single vector is linearly independent if and only if it is non-zero.
  2. Two vectors are linearly dependent if and only if one is a scalar multiple of the other.

- **Proposition 1.4.4**: A list of vectors is a basis if and only if every vector in the space can be uniquely expressed as a linear combination of these vectors.

- **Theorem 1.5.1**:
  1. If a set of vectors is linearly independent and another set spans the space, then the independent set cannot have more vectors than the spanning set.
  2. Any two bases of a vector space have the same number of elements.

- **Theorem 1.5.5**: A list of vectors is a basis if and only if it is a minimal spanning list, or equivalently, if and only if it is a maximal linearly independent list.

- **Corollary 1.5.7**:
  1. Any finite spanning list contains a basis (which can be obtained by removing redundant vectors).
  2. Any linearly independent list in a finite-dimensional space can be extended to a basis.

## Applications
- **Solving Linear Systems**: Understanding bases helps solve and characterize solutions to systems of linear equations.

- **Coordinate Systems**: Bases provide natural coordinate systems for vector spaces.

- **Transformations**: Choosing appropriate bases can simplify the representation of linear transformations.

- **Computer Graphics**: Bases are used to define and transform coordinate systems in graphics applications.

- **Quantum Mechanics**: Basis states form the foundation for describing quantum systems.

## Common Problems and Approaches
### Testing Linear Independence
1. Set up the equation $\sum_{i=1}^{n} \lambda_i v_i = 0$.
2. Solve for the coefficients $\lambda_i$.
3. The vectors are linearly independent if and only if all $\lambda_i = 0$ is the only solution.
4. For vectors in $\mathbb{R}^n$, use Gaussian elimination on the matrix whose columns are the vectors.

### Finding a Basis from a Spanning Set
1. Start with the spanning set.
2. Remove vectors one by one, checking if the remaining vectors still span.
3. Continue until removing any vector would result in a set that no longer spans.
4. The resulting minimal spanning set is a basis.

### Extending a Linearly Independent Set to a Basis
1. Start with the linearly independent set.
2. Add vectors from a known basis one by one.
3. After each addition, check if the new vector is in the span of the current set.
4. If not, include it; otherwise, move on to the next vector.
5. Continue until you have a basis (i.e., until the set spans the space).

### Finding Coordinate Vectors
1. Express the given vector as a linear combination of basis vectors.
2. Set up and solve a system of linear equations.
3. The coefficients in the linear combination form the coordinate vector.

## Practice Problems
1. **Linear Independence**: Determine whether specific sets of vectors are linearly independent or dependent.
2. **Finding Bases**: Find a basis for a given subspace defined by equations or spanned by a set of vectors.
3. **Coordinate Vectors**: Given a non-standard basis, find the coordinate vector of a given vector with respect to that basis.
4. **Dimension Calculations**: Find the dimension of a subspace defined by equations or as the span of a set of vectors.

## Summary
Bases, linear independence, and dimension are fundamental concepts that help us understand the structure of vector spaces. A basis provides a minimal set of "building blocks" that can generate the entire space, with each vector in the space having a unique representation as a linear combination of basis vectors. 

The dimension of a vector space, defined as the number of vectors in any basis, serves as a fundamental invariant that characterizes the space. Two finite-dimensional vector spaces are isomorphic if and only if they have the same dimension.

The concepts of linear independence (no redundancy) and spanning (completeness) come together in the definition of a basis. Understanding these concepts is essential for analyzing vector spaces, solving systems of linear equations, and representing linear transformations efficiently.
