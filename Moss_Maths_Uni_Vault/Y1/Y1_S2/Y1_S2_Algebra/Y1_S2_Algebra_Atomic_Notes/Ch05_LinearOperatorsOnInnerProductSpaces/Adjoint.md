---
title: "Adjoint"
aliases: ["Adjoint Operator", "Adjoint Map", "Hermitian Adjoint"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "concept", "inner-product-space", "linear-operator", "adjoint", "conjugate-transpose", "complex-analysis"]
related_concepts: ["Inner Product", "Linear Operator", "Self-adjoint", "Skew-adjoint", "Hermitian", "Unitary Transformation"]
---

# Adjoint

## Definition
Let $V$ be an inner product space and $\phi \in L(V)$ a linear operator. An **adjoint** to $\phi$ is a linear operator $\phi^{*} \in L(V)$ such that, for all $v, w \in V$:

$$\langle\phi^{*}(v), w\rangle = \langle v, \phi(w)\rangle$$

Equivalently, by conjugate symmetry:

$$\langle w, \phi^{*}(v)\rangle = \langle\phi(w), v\rangle$$

## Properties
1. **Uniqueness**: Every linear operator has a unique adjoint
2. **Existence**: In finite-dimensional inner product spaces, every linear operator has an adjoint  
3. **Matrix representation**: If $\phi$ is represented by matrix $A$ with respect to an orthonormal basis, then $\phi^{*}$ is represented by $A^{\dagger} = \bar{A}^T$ (conjugate transpose)
4. **Involution**: $(\phi^{*})^{*} = \phi$
5. **Linearity**: $(\lambda\phi + \mu\psi)^{*} = \bar{\lambda}\phi^{*} + \bar{\mu}\psi^{*}$
6. **Product rule**: $(\phi \circ \psi)^{*} = \psi^{*} \circ \phi^{*}$ (note the reversal of order)

## Examples

### Example 1: Matrix Adjoint
For the complex matrix:
$$A = \begin{pmatrix} 1 & i \\ 2 & 3+i \end{pmatrix}$$

The adjoint is:
$$A^{\dagger} = \begin{pmatrix} 1 & 2 \\ -i & 3-i \end{pmatrix}$$

### Example 2: Differential Operator
On $C^{\infty}[a,b]$ with inner product $\langle f,g \rangle = \int_a^b f(x)\overline{g(x)}dx$, the adjoint of $\frac{d}{dx}$ is $-\frac{d}{dx}$.

## Related Theorems
- **Proposition 5.1.3**: The adjoint exists and is unique for every linear operator on a finite-dimensional inner product space
- **Corollary 5.1.4**: For matrices, $(\phi_A)^{*} = \phi_{A^{\dagger}}$ over $\mathbb{C}$ and $(\phi_A)^{*} = \phi_{A^T}$ over $\mathbb{R}$

## Construction
For a linear operator $\phi$ on a finite-dimensional inner product space with orthonormal basis $u_1, \ldots, u_n$, the adjoint is given by:

$$\phi^{*}(v) = \sum_{i=1}^{n} \langle\phi(u_i), v\rangle u_i$$

## Applications
- Essential in quantum mechanics where observables are self-adjoint operators
- Key tool in proving the spectral theorem
- Fundamental in the study of normal operators
- Used in optimization and variational problems

## Related Concepts
- [[Self-adjoint]]: Operators where $\phi^{*} = \phi$
- [[Skew-adjoint]]: Operators where $\phi^{*} = -\phi$  
- [[Unitary Transformation]]: Operators where $\phi^{*} = \phi^{-1}$
- [[Hermitian]]: Square matrices equal to their adjoints ($A = A^{\dagger}$)
- [[Orthogonal Transformation]]: Real versions of unitary transformations

## Notes
- The adjoint generalizes the concept of matrix transpose to abstract linear operators
- In quantum mechanics, the adjoint represents the "Hermitian conjugate" of an operator
- The definition depends crucially on the inner product structure
- Over real inner product spaces, the adjoint coincides with the transpose in matrix representation