---
title: "Orthogonal Transformation"
aliases: ["Orthogonal Linear Map", "Orthogonal Operator", "Real Unitary Transformation"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "concept", "real-inner-product", "linear-operator", "orthogonal", "isometry", "rotation", "reflection", "length-preserving", "normal"]
related_concepts: ["Unitary Transformation", "Adjoint", "Orthogonal Matrix", "Inner Product", "Norm", "Isometry", "Normal"]
---

# Orthogonal Transformation

## Definition
Let $V$ be an inner product space over $\mathbb{R}$. A linear operator $\phi \in L(V)$ is an **orthogonal transformation** if it is an isomorphism with $\phi^{-1} = \phi^{*}$.

Equivalently, $\phi$ is orthogonal if $\phi^{*}\phi = \phi\phi^{*} = \text{id}_V$.

## Properties
1. **Norm preservation**: $\|\phi(v)\| = \|v\|$ for all $v \in V$
2. **Inner product preservation**: $\langle\phi(v), \phi(w)\rangle = \langle v, w\rangle$ for all $v, w \in V$
3. **Angle preservation**: Preserves angles between vectors
4. **Determinant**: $\det(\phi) = \pm 1$
5. **Normal**: Orthogonal transformations are normal
6. **Group property**: Composition of orthogonal transformations is orthogonal

## Examples

### Example 1: Rotations in $\mathbb{R}^2$
The rotation by angle $\theta$ counterclockwise:
$$\phi(x,y) = (x\cos\theta - y\sin\theta, x\sin\theta + y\cos\theta)$$
represented by matrix:
$$R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

### Example 2: Reflection
Reflection across the $x$-axis in $\mathbb{R}^2$:
$$\phi(x,y) = (x,-y)$$
represented by matrix:
$$\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

### Example 3: Identity
The identity transformation is always orthogonal.

## Matrix Characterization
A real matrix $A$ represents an orthogonal transformation if and only if $A^TA = I$ (i.e., $A$ is an orthogonal matrix).

## Geometric Interpretation
Orthogonal transformations are exactly the linear transformations that preserve:
- Lengths of vectors
- Angles between vectors
- The standard inner product

They include rotations, reflections, and their compositions.

## Classification
Every orthogonal transformation on $\mathbb{R}^n$ can be written as a composition of:
- Rotations (determinant +1)
- Reflections (determinant -1)

## Group Structure
The set of orthogonal transformations on $\mathbb{R}^n$ forms a group:
- **Orthogonal group**: $O(n) = \{A \in M_{n,n}(\mathbb{R}) : A^TA = I\}$
- **Special orthogonal group**: $SO(n) = \{A \in O(n) : \det(A) = 1\}$

## Spectral Properties
- Eigenvalues have modulus 1 (are of the form $\pm 1$ for real eigenvalues)
- Can be expressed in block diagonal form with $2 \times 2$ rotation blocks and $\pm 1$ entries

## Related Theorems
- Orthogonal transformations form the isometry group of Euclidean space
- Every finite subgroup of $O(n)$ is conjugate to a subgroup of the group of permutation matrices

## Applications
- **Computer Graphics**: 3D rotations and transformations
- **Physics**: Coordinate transformations, conservation of angular momentum
- **Signal Processing**: Orthogonal transforms (Fourier, wavelet)
- **Statistics**: Principal component analysis rotations

## Related Concepts
- [[Unitary Transformation]]: Complex analogue
- [[Orthogonal Matrix]]: Matrix representation
- [[Isometry]]: Distance-preserving maps (of which orthogonal transformations are linear examples)
- [[Normal]]: General class that includes orthogonal transformations
- [[Adjoint]]: The operation used in the defining equation $\phi^{*} = \phi^{-1}$

## Notes
- Orthogonal transformations are the natural symmetries of Euclidean geometry
- They preserve all metric properties of vectors
- Every orthogonal transformation has a unique decomposition into simple rotations and reflections
- They form a compact Lie group, fundamental in differential geometry and physics