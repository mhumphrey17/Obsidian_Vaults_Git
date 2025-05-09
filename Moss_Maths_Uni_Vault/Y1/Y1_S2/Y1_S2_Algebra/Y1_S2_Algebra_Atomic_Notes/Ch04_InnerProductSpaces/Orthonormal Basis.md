---
title: "Orthonormal Basis"
aliases: ["ONB", "Orthonormal Frame"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "inner-product-space", "basis", "orthogonality", "orthonormal-list", "inner-product", "gram-schmidt", "coordinate-vector", "linear-algebra"]
related_concepts: ["Orthonormal List", "Basis", "Inner Product", "Orthogonality", "Gram-Schmidt Orthogonalization", "Coordinate Vector", "Inner Product Space", "Field"]
---

# Orthonormal Basis

## Definition
An **orthonormal basis** of an [[Inner Product Space]] $V$ is an [[Orthonormal List]] $u_1, \ldots, u_n$ that also spans $V$.

Equivalently, it's a basis where:
1. All vectors have unit norm: $\|u_i\| = 1$
2. Different vectors are orthogonal: $\langle u_i, u_j \rangle = 0$ for $i \neq j$
3. The vectors span the entire space: $\text{span}\{u_1, \ldots, u_n\} = V$

## Existence
**Theorem**: Every finite-dimensional inner product space has an orthonormal basis.

**Proof**: 
1. Start with any basis of $V$
2. Apply the [[Gram-Schmidt Orthogonalization]] procedure
3. The result is an orthonormal basis

## Properties

### Unique Representation
Every vector $v \in V$ has a unique representation:
$$v = \sum_{i=1}^n \langle u_i, v \rangle u_i$$

The coefficients $\langle u_i, v \rangle$ are called the **Fourier coefficients** of $v$.

### Simple Inner Products
If $v = \sum_{i=1}^n x_i u_i$ and $w = \sum_{i=1}^n y_i u_i$, then:
$$\langle v, w \rangle = \sum_{i=1}^n \bar{x}_i y_i$$

### Parseval's Identity
For any $v \in V$:
$$\|v\|^2 = \sum_{i=1}^n |\langle u_i, v \rangle|^2$$

## Examples

### Example 1: Standard Basis in $\mathbb{R}^n$
The standard basis vectors $e_1, \ldots, e_n$ form an orthonormal basis for $\mathbb{R}^n$.

### Example 2: Fourier Basis in $L^2[0, 2\pi]$
The functions:
$$\left\{\frac{1}{\sqrt{2\pi}}, \frac{\cos(nx)}{\sqrt{\pi}}, \frac{\sin(nx)}{\sqrt{\pi}} : n = 1,2,3,\ldots\right\}$$
form an orthonormal basis for $L^2[0, 2\pi]$.

### Example 3: Constructed Example in $\mathbb{R}^3$
Starting with $v_1 = (1,1,1)$, $v_2 = (1,1,0)$, $v_3 = (1,0,0)$:

Using Gram-Schmidt:
- $u_1 = \frac{1}{\sqrt{3}}(1,1,1)$
- $u_2 = \frac{1}{\sqrt{6}}(1,1,-2)$
- $u_3 = \frac{1}{\sqrt{2}}(1,-1,0)$

These form an orthonormal basis for $\mathbb{R}^3$.

## Computational Advantages

### Matrix Representation
If $T: V \rightarrow V$ is a linear operator and $\{u_1, \ldots, u_n\}$ is an orthonormal basis, then:
$$[T]_{ij} = \langle u_i, T(u_j) \rangle$$

### Change of Basis
If $\{u_1, \ldots, u_n\}$ and $\{v_1, \ldots, v_n\}$ are orthonormal bases, the change of basis matrix has entries:
$$P_{ij} = \langle u_i, v_j \rangle$$

Moreover, $P$ is unitary (orthogonal in the real case): $P^*P = I$.

## Applications

### Quantum Mechanics
- Quantum states are represented in orthonormal bases
- Measurement probabilities are given by Fourier coefficients

### Signal Processing
- Fourier transforms use orthonormal bases
- Wavelet analysis relies on orthonormal systems

### Numerical Analysis
- QR decomposition produces orthonormal bases
- Efficient algorithms for least squares problems

### Differential Equations
- Eigenfunctions often form orthonormal bases
- Separation of variables techniques

## Related Results

### Riesz Representation Theorem
In a Hilbert space with orthonormal basis, every linear functional has a unique representation using the basis.

### Spectral Theorem
Normal operators on finite-dimensional inner product spaces have orthonormal eigenbases.

## Related Concepts
- [[Orthonormal List]]: An orthonormal basis is a spanning orthonormal list
- [[Basis]]: An orthonormal basis is a special type of basis
- [[Inner Product]]: Used to define orthonormality
- [[Gram-Schmidt Orthogonalization]]: Method to construct orthonormal bases
- [[Change of Basis]]: Simplified by orthonormal bases

## Advantages Over General Bases
1. **Simple coordinates**: $\langle u_i, v \rangle$ instead of solving linear systems
2. **Easy inner products**: Dot product of coordinate vectors
3. **Geometric clarity**: Basis vectors are perpendicular unit vectors
4. **Numerical stability**: Condition number is 1

## Notes
- Orthonormal bases are the "gold standard" for numerical computations
- They provide both algebraic convenience and geometric insight
- Every inner product space has orthonormal bases, making them universal tools
- In infinite dimensions, completeness becomes an additional concern
