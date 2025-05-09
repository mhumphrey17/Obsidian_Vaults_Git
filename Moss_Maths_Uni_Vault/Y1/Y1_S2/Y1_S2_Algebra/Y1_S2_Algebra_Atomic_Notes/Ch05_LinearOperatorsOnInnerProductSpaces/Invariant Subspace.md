---
title: "Invariant Subspace"
aliases: ["Invariant Subspace", "Stable Subspace", "Fixed Subspace"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "concept", "linear-operator", "subspace", "invariant", "eigenspace", "normal-operator", "spectral-theorem"]
related_concepts: ["Subspace", "Linear Operator", "Eigenspace", "Normal", "Adjoint", "Restriction", "Direct Sum"]
---

# Invariant Subspace

## Definition
Let $V$ be a vector space and $\phi \in L(V)$ a linear operator. A subspace $U \leq V$ is **$\phi$-invariant** if $\phi(U) \subseteq U$.

Equivalently, $U$ is $\phi$-invariant if for every $u \in U$, we have $\phi(u) \in U$.

When $U$ is $\phi$-invariant, $\phi$ restricts to a linear operator on $U$, denoted $\phi|_U \in L(U)$.

## Properties
1. **Closure under operations**: The set of $\phi$-invariant subspaces is closed under intersection and sum
2. **Trivial examples**: $\{0\}$ and $V$ are always $\phi$-invariant
3. **Image and kernel**: Both $\text{im}(\phi)$ and $\ker(\phi)$ are $\phi$-invariant
4. **Restriction**: If $U$ is $\phi$-invariant, then $\phi|_U$ is a well-defined linear operator on $U$

## Examples

### Example 1: Eigenspaces
Every eigenspace of $\phi$ is $\phi$-invariant. If $v \in E_\phi(\lambda)$, then $\phi(v) = \lambda v \in E_\phi(\lambda)$.

### Example 2: Kernel and Image
- $\ker(\phi) = \{v \in V : \phi(v) = 0\}$ is $\phi$-invariant
- $\text{im}(\phi) = \{\phi(v) : v \in V\}$ is $\phi$-invariant

### Example 3: Rotation in $\mathbb{R}^3$
For rotation about the $z$-axis, the $xy$-plane and the $z$-axis (span of $(0,0,1)$) are invariant subspaces.

## Key Results

### Lemma 5.2.3: Commuting Operators
If $\phi$ and $\psi$ commute ($\phi \circ \psi = \psi \circ \phi$) and $U = E_\phi(\lambda)$ is an eigenspace of $\phi$, then $U$ is $\psi$-invariant.

### Lemma 5.2.4: Orthogonal Complements
Let $V$ be a finite-dimensional inner product space and $\phi \in L(V)$. If $U \leq V$ is $\phi$-invariant, then $U^{\perp}$ is $\phi^*$-invariant.

### Proposition 5.2.7: Normal Operators
If $\phi$ is normal and $U$ is an eigenspace of $\phi$, then $U^{\perp}$ is $\phi$-invariant.

## Significance for Spectral Theory
Invariant subspaces are crucial for:
- Understanding the structure of linear operators
- Building blocks for spectral decompositions
- Proving diagonalizability results
- Constructing invariant measures and algorithms

## Applications

### Spectral Theorem
The spectral theorem characterizes when operators can be decomposed into orthogonal invariant subspaces (their eigenspaces).

### Reducing Operators
By restricting to invariant subspaces, complex operators can be studied in pieces.

### Physics
- **Quantum Mechanics**: Energy eigenspaces are invariant under time evolution
- **Classical Mechanics**: Conservation laws create invariant subspaces

## Related Concepts
- [[Subspace]]: The underlying algebraic structure
- [[Linear Operator]]: The map that preserves the subspace
- [[Eigenspace]]: Special invariant subspaces corresponding to eigenvalues
- [[Normal]]: Operators whose eigenspaces satisfy special invariance properties
- [[Adjoint]]: Used in the orthogonal complement results
- [[Spectral Theorem]]: Decomposes operators using invariant subspaces

## Notes
- The study of invariant subspaces is central to understanding linear operators
- For normal operators, invariant subspaces have particularly nice properties
- The existence of "enough" invariant subspaces characterizes diagonalizability
- In infinite-dimensional spaces, invariant subspace theory becomes much more complex