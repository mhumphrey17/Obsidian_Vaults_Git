---
title: "Multiplicities and Diagonalisation Criteria"
aliases: ["Topic: Multiplicities", "Section 3.4 Summary"]
tags: ["topic", "algebra-s2", "ch-3", "sec-3-4"]
concepts: ["Algebraic Multiplicity", "Geometric Multiplicity", "Eigenvalue Independence", "Diagonalisation Criteria"]
---

# Multiplicities and Diagonalisation Criteria

## Overview
This section provides the complete theory for determining when a matrix or linear operator is diagonalisable. It introduces the crucial concepts of algebraic and geometric multiplicities, establishes the independence of eigenvectors with distinct eigenvalues, and gives necessary and sufficient conditions for diagonalisability.

## Key Concepts
- **[[Algebraic Multiplicity]]**: The multiplicity of $\lambda$ as a root of the characteristic polynomial
- **[[Geometric Multiplicity]]**: The dimension of the $\lambda$-eigenspace
- **[[Eigenvalue Independence]]**: Eigenvectors with distinct eigenvalues are linearly independent
- **Diagonalisation Criteria**: Complete characterization using multiplicities

## Fundamental Results
### 1. Independence of Eigenvectors (Theorem 3.4.2)
If $v_1, v_2, \ldots, v_m$ are eigenvectors with distinct eigenvalues $\lambda_1, \lambda_2, \ldots, \lambda_m$, then they are linearly independent.

**Proof Technique**: Contradiction using the "shortest dependence" argument, exploiting how different eigenvalues respond to the operator.

### 2. Multiplicity Relationship (Proposition 3.4.6)
For any eigenvalue $\lambda$:
$$\text{a.m.}(\lambda) \geq \text{g.m.}(\lambda)$$

**Proof Strategy**: Construct a basis extending the eigenspace basis, leading to block-triangular form.

### 3. Complete Diagonalisation Criterion (Theorem 3.4.7)
A linear operator $\phi: V \rightarrow V$ is diagonalisable if and only if:
1. The characteristic polynomial factors completely into linear factors, and
2. For each eigenvalue $\lambda$: $\text{a.m.}(\lambda) = \text{g.m.}(\lambda)$

## Core Examples
### Example 1: Diagonalisable Matrix
$A = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 5 \end{pmatrix}$:
- Eigenvalues: $\lambda_1 = 3$, $\lambda_2 = 5$
- Algebraic multiplicities: $\text{a.m.}(3) = 1$, $\text{a.m.}(5) = 2$
- Geometric multiplicities: $\text{g.m.}(3) = 1$, $\text{g.m.}(5) = 2$
- Since $\text{a.m.} = \text{g.m.}$ for all eigenvalues, $A$ is diagonalisable

### Example 2: Non-Diagonalisable Matrix
$B = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$:
- Eigenvalue: $\lambda = 3$
- $\text{a.m.}(3) = 2$ (from $(t-3)^2$)
- $\text{g.m.}(3) = 1$ (eigenspace is 1-dimensional)
- Since $\text{a.m.}(3) > \text{g.m.}(3)$, $B$ is not diagonalisable

### Example 3: Distinct Eigenvalues
Any matrix with $n$ distinct eigenvalues in an $n$-dimensional space:
- By Theorem 3.4.2, the eigenvectors are independent
- By Corollary 3.4.3, the matrix is automatically diagonalisable
- Example: Diagonal matrices clearly satisfy this

## Understanding Multiplicities
### Algebraic Multiplicity
- Counts how many times $\lambda$ appears as a root of $\Delta(t)$
- Represents the "theoretical capacity" for eigenvectors
- Always a positive integer for eigenvalues
- Sum of all algebraic multiplicities = $\dim V$

### Geometric Multiplicity
- Counts the actual number of linearly independent eigenvectors
- Measures the dimension of the eigenspace
- Always satisfies $1 \leq \text{g.m.}(\lambda) \leq \text{a.m.}(\lambda)$
- Determines how many basis vectors come from each eigenspace

## Diagonalisation Algorithm
1. **Find characteristic polynomial**: Compute $\Delta(t) = \det(A - tI)$
2. **Find eigenvalues**: Solve $\Delta(t) = 0$ for roots $\lambda_i$
3. **Compute multiplicities**: Record $\text{a.m.}(\lambda_i)$ for each eigenvalue
4. **Find eigenvectors**: For each $\lambda_i$, solve $(A - \lambda_i I)v = 0$
5. **Check condition**: Verify $\text{g.m.}(\lambda_i) = \text{a.m.}(\lambda_i)$ for all $i$
6. **Construct eigenbasis**: If diagonalisable, combine eigenvector bases

## Theoretical Significance
### When Diagonalisation Works:
- Every eigenspace contributes its "full share" of basis vectors
- The vector space decomposes as a direct sum of eigenspaces
- The transformation has maximally simple structure

### When Diagonalisation Fails:
- Some eigenspace is "deficient" (g.m. < a.m.)
- Missing eigenvectors prevent complete basis construction
- More sophisticated normal forms (Jordan) are needed

## Advanced Applications
### 1. Spectral Decomposition
When diagonalisable: $A = \sum_{i=1}^k \lambda_i P_i$ where $P_i$ are projection operators onto eigenspaces.

### 2. Matrix Functions
For diagonalisable $A = PDP^{-1}$:
- $f(A) = Pf(D)P^{-1}$ for any function $f$
- $e^{tA} = Pe^{tD}P^{-1}$ for matrix exponentials

### 3. Dynamical Systems
Long-term behavior determined by:
- Dominant eigenvalue magnitude
- Eigenspace dimensions
- Initial condition projections

## Computational Considerations
### Practical Challenges:
1. **Numerical Precision**: Determining equality of multiplicities
2. **Polynomial Factoring**: Finding exact eigenvalues
3. **Kernel Computation**: Accurately computing eigenspace dimensions
4. **Basis Selection**: Choosing well-conditioned eigenvector bases

### Implementations:
- Symbolic computation for exact results
- Numerical algorithms with tolerance settings
- Specialized methods for structured matrices

## Extensions and Generalizations
### Beyond Diagonalisation:
1. **Jordan Normal Form**: Handles all matrices
2. **Schur Decomposition**: Upper triangular form
3. **Spectral Theorem**: Orthogonal diagonalisation for special classes
4. **Functional Calculus**: Infinite-dimensional generalizations

### Special Cases:
- **Symmetric Matrices**: Always diagonalisable over $\mathbb{R}$
- **Normal Matrices**: Orthogonally diagonalisable
- **Compact Operators**: Spectral theorem in infinite dimensions

## Key Insights
1. **Multiplicity Gap**: The difference $\text{a.m.}(\lambda) - \text{g.m.}(\lambda)$ measures diagonalisation "deficiency"
2. **Independence Theorem**: Distinct eigenvalues guarantee independent eigenvectors
3. **Complete Characterization**: Provides definitive test for diagonalisability
4. **Geometric Intuition**: Diagonalisation requires "enough" invariant directions

## Practice Problems
1. Compute both multiplicities for various matrices
2. Verify the independence theorem with specific examples
3. Determine diagonalisability before computing full diagonalisation
4. Explore the boundary cases where g.m. = a.m. - 1

## Summary
The theory of multiplicities provides the complete framework for understanding diagonalisation. The fundamental insight is that diagonalisation requires each eigenvalue to have the maximum possible number of eigenvectors - when algebraic and geometric multiplicities match. This elegant criterion, combined with the independence of eigenvectors with distinct eigenvalues, gives us both theoretical understanding and practical tools for determining when a linear transformation can be reduced to its simplest form.

The relationship between multiplicities reveals deep connections between algebraic properties (polynomial roots) and geometric properties (subspace dimensions), epitomizing the power of linear algebra to unify different mathematical perspectives.
