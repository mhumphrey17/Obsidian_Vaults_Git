---
title: "Orthogonally Diagonalizable"
aliases: ["Orthogonally Diagonalizable", "Orthogonally Diagonalisable", "Unitarily Diagonalizable"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "concept", "inner-product-space", "linear-operator", "orthogonal", "diagonalization", "spectral-theorem", "normal", "eigenspace", "unitary"]
related_concepts: ["Normal", "Eigenspace", "Orthonormal Basis", "Unitary Transformation", "Spectral Theorem", "Diagonalisable Linear Operator", "Self-adjoint", "Inner Product Space"]
---

# Orthogonally Diagonalizable

## Definition
Let $V$ be a finite-dimensional inner product space. A linear operator $\phi \in L(V)$ is **orthogonally diagonalizable** if $V$ has an orthonormal basis of eigenvectors of $\phi$.

Equivalently, $\phi$ is orthogonally diagonalizable if there exists an orthonormal basis $u_1, \ldots, u_n$ of $V$ and scalars $\lambda_1, \ldots, \lambda_n \in \mathbb{F}$ such that:
$$\phi(u_i) = \lambda_i u_i$$
for all $i = 1, \ldots, n$.

## Matrix Characterization
A matrix $A$ represents an orthogonally diagonalizable operator if and only if:
- There exists an orthogonal matrix $P$ (when $\mathbb{F} = \mathbb{R}$) or a unitary matrix $P$ (when $\mathbb{F} = \mathbb{C}$) such that $P^{-1}AP$ is diagonal
- $A$ is similar to a diagonal matrix via an orthogonal/unitary similarity

## Properties
1. **Normal characterization**: An operator is orthogonally diagonalizable if and only if it is normal
2. **Real case**: When $\mathbb{F} = \mathbb{R}$, an operator is orthogonally diagonalizable if and only if it is self-adjoint
3. **Orthogonal eigenspaces**: Eigenspaces corresponding to distinct eigenvalues are orthogonal
4. **Spectral decomposition**: $V$ can be written as an orthogonal direct sum of eigenspaces

## Examples

### Example 1: Real Symmetric Matrix
The matrix $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ is symmetric, hence orthogonally diagonalizable.
Eigenvalues: $\lambda_1 = 3$, $\lambda_2 = 1$
Orthonormal eigenvectors: $u_1 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$, $u_2 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \end{pmatrix}$

### Example 2: Complex Hermitian Matrix
The matrix $A = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$ is Hermitian, hence orthogonally diagonalizable.
Eigenvalues: $\lambda_1 = 0$, $\lambda_2 = 2$

### Example 3: Orthogonal Projection
Any orthogonal projection is self-adjoint and hence orthogonally diagonalizable with eigenvalues 0 and 1.

## Spectral Decomposition
If $\phi$ is orthogonally diagonalizable with distinct eigenvalues $\lambda_1, \ldots, \lambda_k$ and corresponding eigenspaces $E_1, \ldots, E_k$, then:

1. **Direct sum decomposition**: $V = E_1 \oplus E_2 \oplus \cdots \oplus E_k$
2. **Orthogonal decomposition**: The eigenspaces are pairwise orthogonal
3. **Projection formula**: For any $v \in V$:
   $$v = P_{E_1}(v) + P_{E_2}(v) + \cdots + P_{E_k}(v)$$
   where $P_{E_i}$ is the orthogonal projection onto $E_i$

## Spectral Theorem Connection
The spectral theorem characterizes exactly which operators are orthogonally diagonalizable:

- **Complex case**: $\phi$ is orthogonally diagonalizable ⟺ $\phi$ is normal
- **Real case**: $\phi$ is orthogonally diagonalizable ⟺ $\phi$ is self-adjoint

## Computational Aspects
For an orthogonally diagonalizable operator:
1. Finding eigenvectors automatically gives an orthogonal set (for distinct eigenvalues)
2. The Gram-Schmidt process may be needed within eigenspaces
3. The unitary/orthogonal matrix $P$ has eigenvectors as columns

## Applications

### Quantum Mechanics
- Observable operators are self-adjoint, hence orthogonally diagonalizable
- Eigenstates provide an orthonormal basis for measurement outcomes
- Time evolution preserves orthogonality due to unitary transformations

### Principal Component Analysis
- Covariance matrices are symmetric, hence orthogonally diagonalizable
- Principal components are orthogonal eigenvectors
- Eigenvalues represent variance explained

### Vibration Analysis
- Mass-spring systems lead to symmetric matrices
- Normal modes are orthogonal eigenvectors
- Frequencies are related to eigenvalues

## Related Theorems

### Theorem 5.2.11 (Spectral Theorem)
An operator on a finite-dimensional inner product space is orthogonally diagonalizable if and only if:
- It is normal (complex case), or
- It is self-adjoint (real case)

### Lemma 5.2.12
For a self-adjoint operator:
- All eigenvalues are real
- Eigenvectors with distinct eigenvalues are orthogonal

## Related Concepts
- [[Normal]]: Operators that commute with their adjoint; characterized by orthogonal diagonalizability
- [[Eigenspace]]: Building blocks for spectral decomposition
- [[Orthonormal Basis]]: Preferred coordinate system for orthogonally diagonalizable operators
- [[Unitary Transformation]]: Similarity transformations preserving orthogonality
- [[Spectral Theorem]]: Main theorem characterizing orthogonally diagonalizable operators
- [[Diagonalisable Linear Operator]]: More general concept not requiring orthogonality
- [[Self-adjoint]]: Real case characterization for orthogonal diagonalizability
- [[Inner Product Space]]: Structure required for notion of orthogonality

## Notes
- Orthogonal diagonalizability is a stronger condition than regular diagonalizability
- The orthogonality constraint leads to beautiful geometric and numerical properties
- In physics, orthogonal diagonalizability often corresponds to the existence of a complete set of commuting observables
- Numerical algorithms for finding orthogonal decompositions are generally more stable than for general diagonalizations