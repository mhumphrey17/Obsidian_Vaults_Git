---
title: "Hermitian"
aliases: ["Hermitian Matrix", "Complex Symmetric", "Self-adjoint Matrix"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "concept", "complex-matrix", "self-adjoint", "conjugate-transpose", "spectral-theorem", "eigenvalue", "diagonalization"]
related_concepts: ["Adjoint", "Self-adjoint", "Symmetric", "Normal", "Spectral Theorem", "Conjugate Transpose", "Eigenvalue"]
---

# Hermitian

## Definition
A complex matrix $A \in M_{n,n}(\mathbb{C})$ is **Hermitian** if $A^{\dagger} = A$, where $A^{\dagger} = \bar{A}^T$ is the conjugate transpose.

This means $a_{ij} = \overline{a_{ji}}$ for all $i,j$.

## Properties
1. **Real diagonal entries**: $a_{ii} \in \mathbb{R}$ for all $i$
2. **Real eigenvalues**: All eigenvalues are real
3. **Orthogonal eigenvectors**: Eigenvectors for distinct eigenvalues are orthogonal
4. **Always diagonalizable**: Every Hermitian matrix is unitarily diagonalizable
5. **Normal**: Every Hermitian matrix is normal ($A^{\dagger}A = AA^{\dagger}$)

## Examples

### Example 1: Basic Hermitian Matrix
$$A = \begin{pmatrix} 2 & 1+i \\ 1-i & 3 \end{pmatrix}$$
Note: $a_{11} = 2$, $a_{22} = 3$ are real, and $a_{12} = 1+i = \overline{a_{21}}$.

### Example 2: Pauli Matrices
The Pauli matrices in quantum mechanics:
$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

### Example 3: Hermitian Not Symmetric
$$A = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$$
This is Hermitian but not symmetric (since $A \neq A^T$).

## Spectral Theorem Result
For any Hermitian matrix $A$, there exists a unitary matrix $P$ such that:
$$P^{-1}AP = D$$
where $D$ is diagonal with real entries (the eigenvalues).

## Identification with Self-adjoint
A matrix $A$ is Hermitian if and only if the linear operator $\phi_A: \mathbb{C}^n \rightarrow \mathbb{C}^n$ defined by $\phi_A(x) = Ax$ is self-adjoint with respect to the standard inner product on $\mathbb{C}^n$.

## Construction Properties
- **Sum**: If $A$ and $B$ are Hermitian, so is $A + B$
- **Scalar multiplication**: If $A$ is Hermitian and $\lambda \in \mathbb{R}$, then $\lambda A$ is Hermitian
- **Product**: If $A$ and $B$ are Hermitian, $AB$ is Hermitian if and only if $A$ and $B$ commute
- **Powers**: If $A$ is Hermitian, $A^k$ is Hermitian for any positive integer $k$

## Applications
- **Quantum Mechanics**: Observables are represented by Hermitian operators
- **Statistics**: Covariance matrices are Hermitian
- **Signal Processing**: Hermitian matrices appear in various transforms
- **Optimization**: Quadratic forms with Hermitian matrices

## Related Concepts
- [[Symmetric]]: Real analogue where $A = A^T$
- [[Self-adjoint]]: Abstract operator concept that Hermitian matrices represent
- [[Normal]]: General class that includes Hermitian matrices
- [[Spectral Theorem]]: Main result about diagonalizability
- [[Unitary Transformation]]: Used to diagonalize Hermitian matrices
- [[Adjoint]]: The conjugate transpose operation

## Notes
- The term "Hermitian" honors Charles Hermite, who studied these matrices in the 19th century
- Every real symmetric matrix is also Hermitian
- Hermitian matrices are the matrix representation of self-adjoint operators on complex inner product spaces
- They form a real vector space (despite being complex matrices) since scalar multiplication is by real numbers