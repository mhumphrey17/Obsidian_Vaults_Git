---
title: "Self-adjoint"
aliases: ["Self-adjoint Operator", "Hermitian Operator", "Symmetric Operator"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "concept", "inner-product-space", "linear-operator", "self-adjoint", "hermitian", "symmetric", "spectral-theorem"]
related_concepts: ["Adjoint", "Inner Product", "Hermitian", "Symmetric", "Normal", "Spectral Theorem", "Eigenvalue"]
---

# Self-adjoint

## Definition
Let $V$ be an inner product space and $\phi \in L(V)$ a linear operator. We say $\phi$ is **self-adjoint** if $\phi^{*} = \phi$.

Equivalently, for all $v, w \in V$:
$$\langle\phi(v), w\rangle = \langle v, \phi(w)\rangle$$

## Properties
1. **Real eigenvalues**: All eigenvalues of a self-adjoint operator are real
2. **Orthogonal eigenvectors**: Eigenvectors corresponding to distinct eigenvalues are orthogonal
3. **Normal**: Every self-adjoint operator is normal ($\phi^{*}\phi = \phi\phi^{*}$)
4. **Spectral theorem**: Self-adjoint operators are orthogonally diagonalizable

## Examples

### Example 1: Identity Operator
The identity operator $\text{id}_V$ is self-adjoint since $\text{id}_V^{*} = \text{id}_V$.

### Example 2: Symmetric Matrix
The real matrix:
$$A = \begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}$$
represents a self-adjoint operator since $A = A^T$.

### Example 3: Hermitian Matrix  
The complex matrix:
$$A = \begin{pmatrix} 2 & 1+i \\ 1-i & 3 \end{pmatrix}$$
represents a self-adjoint operator since $A = A^{\dagger}$.

### Example 4: Composition Example
For any linear operator $\phi$, both $\phi^{*}\phi$ and $\phi\phi^{*}$ are self-adjoint.

## Matrix Characterization
- **Over $\mathbb{R}$**: $\phi$ is self-adjoint if and only if its matrix representation is symmetric: $A = A^T$
- **Over $\mathbb{C}$**: $\phi$ is self-adjoint if and only if its matrix representation is Hermitian: $A = A^{\dagger}$

## Key Theorems
- **Lemma 5.2.12**: Eigenvalues of self-adjoint operators are real; eigenvectors for distinct eigenvalues are orthogonal
- **Spectral Theorem (5.2.11)**: Over $\mathbb{R}$, a linear operator is orthogonally diagonalizable if and only if it is self-adjoint

## Applications
- **Quantum Mechanics**: Observable quantities are represented by self-adjoint operators
- **Statistics**: Covariance matrices are self-adjoint
- **Geometry**: Self-adjoint operators preserve angles between vectors
- **Optimization**: Quadratic forms with self-adjoint operators

## Related Concepts
- [[Adjoint]]: The general concept from which self-adjoint is derived
- [[Skew-adjoint]]: Operators where $\phi^{*} = -\phi$
- [[Normal]]: Operators where $\phi^{*}\phi = \phi\phi^{*}$ (includes self-adjoint as special case)
- [[Spectral Theorem]]: Main result about orthogonal diagonalizability
- [[Hermitian]]: Matrix version when field is $\mathbb{C}$
- [[Symmetric]]: Matrix version when field is $\mathbb{R}$

## Notes
- Self-adjoint operators are the most important class of normal operators
- They arise naturally in many physical and mathematical contexts
- The condition $\phi^{*} = \phi$ might seem simple, but has profound consequences
- Self-adjoint operators always have real spectra, even over $\mathbb{C}$