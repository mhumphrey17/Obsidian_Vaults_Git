---
title: "Matrix Representation and Change of Basis"
aliases: ["Topic: Matrix Representation", "Chapter 1.6-1.7 Summary"]
tags: [topic, algebra-s2, ch-1, sec-1-6, sec-1-7]
concepts: ["Matrix Representation", "Linear Operator", "Change of Basis Matrix", "Coordinate Vector", "Similar Matrices"]
date_created: 2025-05-09
---

# Matrix Representation and Change of Basis

## Overview
This topic explores how linear maps between vector spaces can be represented by matrices once bases are chosen for the domain and codomain. This representation allows abstract linear maps to be studied through concrete matrix computations. When different bases are chosen, the matrix representation changes according to specific rules involving change of basis matrices. This connection between linear maps, matrices, and bases is fundamental to both theoretical and computational aspects of linear algebra.

## Key Concepts
- **[[Matrix Representation]]**: The representation of a linear map $\psi: V \rightarrow W$ as a matrix with respect to chosen bases for $V$ and $W$. If $\alpha$ is a basis for $V$ and $\beta$ is a basis for $W$, the matrix entry $a_{ij}$ represents the $i$-th coefficient when $\psi(v_j)$ is expressed in terms of the basis $\beta$.

- **[[Linear Operator]]**: A linear map from a vector space to itself. Linear operators on finite-dimensional spaces can be represented by square matrices.

- **[[Change Of Basis Matrix]]**: A matrix that converts coordinate vectors between different bases of the same vector space. If $P$ is the change of basis matrix from $\alpha$ to $\alpha'$, then $[v]_\alpha = P[v]_{\alpha'}$ for any vector $v$.

- **[[Coordinate Vector]]**: The representation of a vector in terms of a given basis, consisting of the coefficients in the unique linear combination that expresses the vector in terms of the basis vectors.

- **Similar Matrices**: Two square matrices $A$ and $B$ are similar if there exists an invertible matrix $P$ such that $B = P^{-1}AP$. Similar matrices represent the same linear operator with respect to different bases.

## Core Results
- **Definition 1.6.1**: The matrix $A = (a_{ij})$ represents a linear map $\psi: V \rightarrow W$ with respect to bases $\alpha$ and $\beta$ if $\psi(v_j) = \sum_{i} a_{ij} w_i$ for all basis vectors $v_j$ in $\alpha$.

- **Remark 1.6.2**: The matrix representation satisfies the commutative diagram $\psi = \phi_\beta \circ \phi_A \circ \phi_\alpha^{-1}$, where $\phi_\alpha$ and $\phi_\beta$ are the isomorphisms defined by the bases, and $\phi_A$ is the linear map defined by the matrix $A$.

- **Definition 1.7.1**: The change of basis matrix from $\alpha$ to $\alpha'$ is the matrix $P$ such that $v'_j = \sum_{i} p_{ij} v_i$ for all basis vectors $v'_j$ in $\alpha'$.

- **Proposition 1.7.5**: For a vector $v$ with coordinate vectors $[v]_\alpha$ and $[v]_{\alpha'}$ with respect to bases $\alpha$ and $\alpha'$, we have $[v]_\alpha = P[v]_{\alpha'}$, where $P$ is the change of basis matrix from $\alpha$ to $\alpha'$.

- **Proposition 1.7.7**: If a linear map $\psi: V \rightarrow W$ is represented by matrices $A$ and $A'$ with respect to different bases related by change of basis matrices $P$ and $Q$, then $A' = Q^{-1}AP$.

- **Corollary 1.7.8**: If a linear operator $\psi: V \rightarrow V$ is represented by matrices $B$ and $B'$ with respect to bases related by a change of basis matrix $P$, then $B' = P^{-1}BP$.

## Applications
- **Efficient Computation**: Choosing appropriate bases can simplify the matrix representation of a linear map, making computations more efficient.

- **Eigenvalues and Eigenvectors**: The study of similar matrices leads to methods for diagonalization and the computation of eigenvalues and eigenvectors.

- **Coordinate Transformations**: Change of basis matrices are used in computer graphics and physics to convert between different coordinate systems.

- **Differential Equations**: Matrix representations of differential operators help solve systems of differential equations.

- **Quantum Mechanics**: Change of basis is fundamental in quantum mechanics when switching between different measurement bases.

## Common Problems and Approaches
### Finding the Matrix Representation
1. Determine how the linear map acts on each basis vector of the domain.
2. Express each resulting vector as a linear combination of the basis vectors of the codomain.
3. The coefficients in these linear combinations form the columns of the matrix.

### Finding the Change of Basis Matrix
1. Express each vector of the new basis as a linear combination of the old basis vectors.
2. The coefficients from these expressions form the columns of the change of basis matrix.

### Converting Coordinate Vectors
1. If $[v]_\alpha$ is the coordinate vector with respect to basis $\alpha$ and $P$ is the change of basis matrix from $\alpha$ to $\alpha'$, then $[v]_{\alpha'} = P^{-1}[v]_\alpha$.
2. Alternatively, $[v]_\alpha = P[v]_{\alpha'}$.

### Finding Matrix Representations in Different Bases
1. If $A$ represents a linear map with respect to bases $\alpha$ and $\beta$, and $P$ and $Q$ are the change of basis matrices for the domain and codomain respectively, then the matrix representation with respect to the new bases is $A' = Q^{-1}AP$.
2. For a linear operator, if $B$ is its matrix representation with respect to basis $\alpha$ and $P$ is the change of basis matrix from $\alpha$ to $\alpha'$, then $B' = P^{-1}BP$.

## Practice Problems
1. **[[PS01-Q03]]** - Finding the matrix representation of a projection onto a line.
2. **[[PS01-Q09]]** - Finding the change of basis matrix for projection onto specific lines.
3. Problems involving computing coordinate vectors with respect to different bases.
4. Problems involving similar matrices and matrix representations of linear operators.

## Summary
Matrix representation and change of basis are essential tools in linear algebra, connecting abstract vector spaces and linear maps to concrete matrices that can be used for computation. The matrix representation of a linear map depends on the choice of bases for the domain and codomain, with different choices leading to different but related matrices.

The change of basis matrix allows us to convert between different coordinate systems in a vector space. For linear operators, changing the basis results in similar matrices, which share important properties like eigenvalues, rank, and determinant.

Understanding these concepts is crucial for both theoretical analysis and practical applications of linear algebra in various fields of science and engineering. By choosing appropriate bases, complex problems can often be simplified and solved more efficiently.
