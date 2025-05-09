---
title: "Unitary Transformation"
aliases: ["Unitary Operator", "Unitary Linear Map", "Complex Orthogonal Transformation"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "concept", "complex-inner-product", "linear-operator", "unitary", "isometry", "complex-rotation", "length-preserving", "normal", "quantum-mechanics"]
related_concepts: ["Orthogonal Transformation", "Adjoint", "Unitary Matrix", "Inner Product", "Norm", "Isometry", "Normal", "Quantum Mechanics"]
---

# Unitary Transformation

## Definition
Let $V$ be an inner product space over $\mathbb{C}$. A linear operator $\phi \in L(V)$ is a **unitary transformation** if it is an isomorphism with $\phi^{-1} = \phi^{*}$.

Equivalently, $\phi$ is unitary if $\phi^{*}\phi = \phi\phi^{*} = \text{id}_V$.

## Properties
1. **Norm preservation**: $\|\phi(v)\| = \|v\|$ for all $v \in V$
2. **Inner product preservation**: $\langle\phi(v), \phi(w)\rangle = \langle v, w\rangle$ for all $v, w \in V$
3. **Determinant**: $|\det(\phi)| = 1$
4. **Normal**: Unitary transformations are normal
5. **Group property**: Composition of unitary transformations is unitary
6. **Eigenvalues**: All eigenvalues have modulus 1

## Examples

### Example 1: Complex Rotation
Multiplication by $e^{i\theta}$ on $\mathbb{C}$:
$$\phi(z) = e^{i\theta}z$$
This represents a rotation by angle $\theta$ in the complex plane.

### Example 2: Quantum Gates
In quantum computing, common unitary operators include:
- **Hadamard gate**: Creates superpositions
- **Pauli gates**: Rotations around coordinate axes
- **Controlled gates**: Conditional operations

### Example 3: Fourier Transform
The discrete Fourier transform (properly normalized) is a unitary transformation.

## Matrix Characterization
A complex matrix $A$ represents a unitary transformation if and only if $A^{\dagger}A = I$ (i.e., $A$ is a unitary matrix).

## Spectral Properties
- All eigenvalues lie on the unit circle in $\mathbb{C}$
- Can be diagonalized with an orthonormal basis of eigenvectors
- The matrix representation is diagonal with respect to an orthonormal basis

## Group Structure
The set of unitary transformations on $\mathbb{C}^n$ forms a group:
- **Unitary group**: $U(n) = \{A \in M_{n,n}(\mathbb{C}) : A^{\dagger}A = I\}$
- **Special unitary group**: $SU(n) = \{A \in U(n) : \det(A) = 1\}$

## Relationship to Skew-adjoint
Unitary operators can be generated by exponentiating skew-adjoint operators:
$$\phi = e^{i\psi}$$
where $\psi$ is skew-adjoint.

## Important Special Cases
1. **Real unitary matrices**: These are orthogonal matrices
2. **$U(1)$**: Complex numbers of modulus 1 (circle group)
3. **$SU(2)$**: Fundamental in quantum mechanics (spin rotations)

## Applications
- **Quantum Mechanics**: Evolution operators are unitary (Schrödinger equation)
- **Signal Processing**: Unitary transforms preserve energy
- **Fourier Analysis**: Fourier and wavelet transforms
- **Physics**: Gauge theories, Standard Model ($U(1) \times SU(2) \times SU(3)$)

## Parameterization
An $n \times n$ unitary matrix has $n^2$ degrees of freedom (real parameters), making $U(n)$ an $n^2$-dimensional manifold.

## Related Theorems
- Every linear operator on a finite-dimensional complex inner product space can be written as a product of a unitary operator and a positive semi-definite self-adjoint operator (polar decomposition)
- Unitary operators form a compact Lie group

## Related Concepts
- [[Orthogonal Transformation]]: Real analogue
- [[Unitary Matrix]]: Matrix representation
- [[Adjoint]]: The operation used in the defining equation $\phi^{*} = \phi^{-1}$
- [[Normal]]: General class that includes unitary transformations
- [[Skew-adjoint]]: Generators of unitary transformations
- [[Quantum Mechanics]]: Primary application domain

## Notes
- Unitary transformations are the complex generalization of orthogonal transformations
- They preserve all geometric properties in complex inner product spaces
- Fundamental in quantum mechanics where time evolution is described by unitary operators
- The determinant condition $|\det(\phi)| = 1$ means unitary transformations preserve "volume" in the complex vector space