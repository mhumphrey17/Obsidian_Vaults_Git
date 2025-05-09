---
title: "Normal"
aliases: ["Normal Operator", "Normal Linear Operator", "Normal Transformation"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "concept", "inner-product-space", "linear-operator", "normal", "commuting-with-adjoint", "spectral-theorem", "diagonalization", "unitary", "hermitian"]
related_concepts: ["Adjoint", "Self-adjoint", "Unitary Transformation", "Skew-adjoint", "Spectral Theorem", "Eigenspace", "Orthogonal Diagonalization"]
---

# Normal

## Definition
Let $V$ be a finite-dimensional inner product space. A linear operator $\phi \in L(V)$ is **normal** if it commutes with its adjoint:

$$\phi^* \circ \phi = \phi \circ \phi^*$$

## Properties
1. **Eigenspace orthogonality**: If $\phi$ is normal and $U$ is an eigenspace of $\phi$, then $U^{\perp}$ is $\phi$-invariant
2. **Equal norms**: For normal $\phi$, $\|\phi^*(v)\| = \|\phi(v)\|$ for all $v \in V$
3. **Spectral theorem**: Normal operators are exactly those that are orthogonally diagonalizable
4. **Closed under operations**: Products and linear combinations of commuting normal operators are normal

## Examples

### Example 1: Self-adjoint Operators
If $\phi$ is self-adjoint ($\phi^* = \phi$), then:
$$\phi^* \circ \phi = \phi \circ \phi = \phi \circ \phi^*$$
So all self-adjoint operators are normal.

### Example 2: Skew-adjoint Operators  
If $\phi$ is skew-adjoint ($\phi^* = -\phi$), then:
$$\phi^* \circ \phi = (-\phi) \circ \phi = -\phi^2 = \phi \circ (-\phi) = \phi \circ \phi^*$$
So all skew-adjoint operators are normal.

### Example 3: Unitary/Orthogonal Transformations
If $\phi$ is unitary/orthogonal ($\phi^* = \phi^{-1}$), then:
$$\phi^* \circ \phi = \phi^{-1} \circ \phi = \text{id}_V = \phi \circ \phi^{-1} = \phi \circ \phi^*$$
So all unitary/orthogonal transformations are normal.

### Example 4: Complex Rotation and Scaling
The operator $\phi(z) = \lambda z$ on $\mathbb{C}$ is normal for any $\lambda \in \mathbb{C}$.

## Spectral Properties
For a normal operator $\phi$:
- $\phi$ can be diagonalized with an orthonormal basis of eigenvectors
- Eigenvectors corresponding to distinct eigenvalues are orthogonal
- The eigenspaces provide an orthogonal decomposition of $V$

## Matrix Characterization
A matrix $A$ represents a normal operator if and only if:
- **Complex case**: $A^{\dagger}A = AA^{\dagger}$
- **Real case**: $A^TA = AA^T$

## Classification
Normal operators include all:
1. **Self-adjoint** operators (Hermitian/symmetric matrices)
2. **Skew-adjoint** operators (skew-Hermitian/skew-symmetric matrices)
3. **Unitary/Orthogonal** transformations
4. More generally, any operator of the form $\phi = \alpha I + \beta U$ where $U$ is unitary and $\alpha, \beta$ are commuting with $U$

## Spectral Theorem Connection
The spectral theorem states that an operator is normal if and only if it is orthogonally diagonalizable:
- **Complex case**: $\phi$ normal ↔ $\phi$ orthogonally diagonalizable
- **Real case**: $\phi$ self-adjoint ↔ $\phi$ orthogonally diagonalizable

## Applications
- **Quantum Mechanics**: Physical observables are self-adjoint (hence normal)
- **Signal Processing**: Normal operators have especially nice spectral properties
- **Numerical Analysis**: Normal matrices are well-conditioned for eigenvalue computation
- **Differential Equations**: Normal operators lead to simpler solutions

## Related Theorems
- **Proposition 5.2.7**: If $\phi$ is normal and $U$ is an eigenspace, then $U^{\perp}$ is $\phi$-invariant
- **Theorem 5.2.11**: The spectral theorem characterizes normal operators

## Related Concepts
- [[Adjoint]]: The operation used in the defining condition
- [[Self-adjoint]]: Special case where $\phi^* = \phi$
- [[Unitary Transformation]]: Special case where $\phi^* = \phi^{-1}$
- [[Skew-adjoint]]: Special case where $\phi^* = -\phi$
- [[Spectral Theorem]]: Main result characterizing normal operators
- [[Eigenspace]]: Building blocks for spectral decomposition
- [[Orthogonal Diagonalization]]: The key property of normal operators

## Notes
- The condition $\phi^*\phi = \phi\phi^*$ might seem technical, but it has profound geometric consequences
- Normal operators are the "nicest" operators in inner product spaces
- The class of normal operators is closed under many natural operations
- Non-normal operators can have badly behaved eigenspaces that are not orthogonal