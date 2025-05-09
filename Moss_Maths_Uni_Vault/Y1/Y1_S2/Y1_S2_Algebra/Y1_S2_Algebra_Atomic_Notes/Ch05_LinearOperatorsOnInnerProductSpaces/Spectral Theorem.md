---
title: "Spectral Theorem"
aliases: ["Spectral Theorem", "Spectral Decomposition Theorem", "Diagonalization Theorem"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "theorem", "inner-product-space", "linear-operator", "normal", "self-adjoint", "orthogonal-diagonalization", "hermitian", "symmetric", "unitary", "eigenspace"]
related_concepts: ["Normal", "Self-adjoint", "Orthogonally Diagonalizable", "Unitary Transformation", "Orthogonal Transformation", "Eigenspace", "Invariant Subspace"]
---

# Spectral Theorem

## Statement (Theorem 5.2.11)
Let $V$ be an inner product space of dimension $n$ and $\phi \in L(V)$.

1. **Complex case** ($\mathbb{F} = \mathbb{C}$): $\phi$ is orthogonally diagonalizable if and only if $\phi$ is normal.

2. **Real case** ($\mathbb{F} = \mathbb{R}$): $\phi$ is orthogonally diagonalizable if and only if $\phi$ is self-adjoint.

Consequently:

3. If $A \in M_{n,n}(\mathbb{C})$ is Hermitian, then there exists a unitary matrix $P$ such that $P^{-1}AP$ is diagonal.

4. If $A \in M_{n,n}(\mathbb{R})$ is symmetric, then there exists an orthogonal matrix $P$ such that $P^{-1}AP$ is diagonal.

## Interpretation
The spectral theorem completely characterizes which operators can be diagonalized using an orthonormal basis:
- **Complex case**: Normal operators (those commuting with their adjoint)
- **Real case**: Self-adjoint operators (symmetric matrices)

## Proof Strategy

### Complex Case (Theorem 5.2.11(1))
The proof uses induction on dimension:

1. **Base case**: Dimension 1 - trivially true
2. **Inductive step**: For normal $\phi$ on $n$-dimensional space:
   - Find an eigenvalue $\lambda$ (exists since $\mathbb{F} = \mathbb{C}$)
   - Take eigenspace $U = E_\phi(\lambda)$
   - Show $U^{\perp}$ is $\phi$-invariant (using normality)
   - Restriction $\phi|_{U^{\perp}}$ is normal
   - Apply inductive hypothesis to get orthonormal eigenbasis of $U^{\perp}$
   - Combine with orthonormal basis of $U$ to get orthonormal eigenbasis of $V$

### Real Case (Theorem 5.2.11(2))
Similar proof, but requires:
- **Key insight**: Self-adjoint operators on real spaces have real eigenvalues (Lemma 5.2.12)
- Uses complexification to find eigenvalues, then shows they must be real

## Key Lemmas

### Lemma 5.2.12 (Self-adjoint Properties)
Let $\phi$ be self-adjoint:
1. Any eigenvalue of $\phi$ is real
2. Eigenvectors with distinct eigenvalues are orthogonal

### Proposition 5.2.7 (Normal Operator Property)
If $\phi$ is normal and $U$ is an eigenspace of $\phi$, then $U^{\perp}$ is $\phi$-invariant.

## Applications of the Spectral Theorem

### Quantum Mechanics
- Physical observables are self-adjoint operators
- Eigenvalues represent possible measurement outcomes
- Eigenvectors form orthonormal basis of states

### Principal Component Analysis
- Data covariance matrices are symmetric
- Spectral decomposition gives principal components
- Eigenvalues represent variance explained

### Vibration Problems
- Mass-spring systems lead to symmetric matrices
- Normal modes are orthogonal eigenvectors
- Frequencies related to eigenvalues

### Image Processing
- Image transformations often involve symmetric kernels
- Spectral decomposition enables efficient processing
- Applications in compression and denoising

## Spectral Decomposition Formula
If $\phi$ is orthogonally diagonalizable with distinct eigenvalues $\lambda_1, \ldots, \lambda_k$:

$$\phi = \lambda_1 P_{E_1} + \lambda_2 P_{E_2} + \cdots + \lambda_k P_{E_k}$$

where $P_{E_i}$ is the orthogonal projection onto eigenspace $E_i$.

## Matrix Version
For a Hermitian matrix $A$:
$$A = PDP^{-1} = PDP^{\dagger}$$
where:
- $P$ is unitary with eigenvectors as columns
- $D$ is diagonal with eigenvalues
- $P^{\dagger}$ is the conjugate transpose

## Computational Implications
The spectral theorem guarantees:
1. Numerical stability in eigenvalue computation
2. Well-conditioned similarity transformations
3. Real eigenvalues for self-adjoint operators
4. Orthogonal eigenvectors simplify many calculations

## Extensions

### Infinite Dimensions
- Extends to compact self-adjoint operators on Hilbert spaces
- Central to functional analysis and quantum mechanics
- Spectral measure theory for unbounded operators

### Simultaneous Diagonalization
- Commuting normal operators can be simultaneously diagonalized
- Important in quantum mechanics (commuting observables)
- Applications to solving systems of differential equations

## Historical Context
- Developed by David Hilbert in early 20th century
- Originally for integral equations
- Foundational for quantum mechanics
- Central to modern functional analysis

## Related Theorems
- **Finite-dimensional spectral theorem**: Main result discussed here
- **Spectral theorem for compact operators**: Extension to infinite dimensions
- **Spectral measure theorem**: Most general form
- **Riesz decomposition theorem**: Related decomposition result

## Related Concepts
- [[Normal]]: Operators characterized by the spectral theorem
- [[Self-adjoint]]: Real case characterization
- [[Orthogonally Diagonalizable]]: Property guaranteed by the theorem
- [[Unitary Transformation]]: Similarity transformations used in diagonalization
- [[Orthogonal Transformation]]: Real case of unitary transformations
- [[Eigenspace]]: Building blocks of spectral decomposition
- [[Invariant Subspace]]: Key to the proof structure

## Notes
- The spectral theorem is one of the most important results in linear algebra
- It provides both theoretical insight and computational power
- The difference between complex and real cases reflects fundamental algebraic differences
- Normal operators form the "nicest" class of operators on inner product spaces
- The theorem justifies the use of orthonormal eigenbases throughout mathematics and physics