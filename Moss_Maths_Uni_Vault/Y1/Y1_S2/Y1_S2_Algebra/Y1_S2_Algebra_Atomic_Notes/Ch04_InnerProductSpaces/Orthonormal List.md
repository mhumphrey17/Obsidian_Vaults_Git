---
title: "Orthonormal List"
aliases: ["Orthonormal Set", "Orthonormal System"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "inner-product-space", "orthogonality", "linear-independence", "inner-product", "orthonormal-basis", "gram-schmidt", "linear-algebra"]
related_concepts: ["Orthogonality", "Inner Product", "Linear Independence", "Orthonormal Basis", "Gram-Schmidt Orthogonalization", "Inner Product Space", "Field"]
---

# Orthonormal List

## Definition
A list of vectors $u_1, \ldots, u_k$ in an [[Inner Product Space]] $V$ is called **orthonormal** if:
$$\langle u_i, u_j \rangle = \delta_{ij} := \begin{cases}
1 & \text{if } i = j \\
0 & \text{if } i \neq j
\end{cases}$$

for all $1 \leq i, j \leq k$.

This means:
1. Each vector has unit norm: $\|u_i\| = 1$
2. Different vectors are orthogonal: $u_i \perp u_j$ when $i \neq j$

## Properties

### Linear Independence
Any orthonormal list is automatically linearly independent.

**Proof**: If $\lambda_1 u_1 + \cdots + \lambda_k u_k = 0$, then taking the inner product with $u_i$:
$$\left\langle u_i, \sum_{j=1}^k \lambda_j u_j \right\rangle = \sum_{j=1}^k \lambda_j \langle u_i, u_j \rangle = \lambda_i = 0$$

Thus all coefficients are zero.

### Coordinates in Orthonormal Lists
If $v \in \text{span}\{u_1, \ldots, u_k\}$, then:
$$v = \sum_{i=1}^k \langle u_i, v \rangle u_i$$

This formula makes finding coordinates trivial compared to general bases.

### Inner Products via Coordinates
If $v = \sum_{i=1}^k x_i u_i$ and $w = \sum_{i=1}^k y_i u_i$, then:
$$\langle v, w \rangle = \sum_{i=1}^k \bar{x}_i y_i = x \cdot y$$

The inner product reduces to the standard dot product of coordinates.

## Examples

### Example 1: Standard Basis in $\mathbb{R}^n$
The vectors $e_1 = (1,0,\ldots,0), e_2 = (0,1,0,\ldots,0), \ldots, e_n = (0,\ldots,0,1)$ form an orthonormal list (and basis) for $\mathbb{R}^n$.

### Example 2: Trigonometric Functions
In $L^2[-\pi, \pi]$, the functions:
$$\left\{\frac{1}{\sqrt{2\pi}}, \frac{\cos(nx)}{\sqrt{\pi}}, \frac{\sin(nx)}{\sqrt{\pi}} : n = 1,2,3,\ldots\right\}$$
form an orthonormal list (and complete basis).

### Example 3: Complex Exponentials
In $L^2[0, 2\pi]$, the functions:
$$\left\{\frac{e^{inx}}{\sqrt{2\pi}} : n \in \mathbb{Z}\right\}$$
form an orthonormal list.

## Construction Methods

### Gram-Schmidt Process
Any linearly independent list can be converted to an orthonormal list spanning the same subspace using the [[Gram-Schmidt Orthogonalization]] procedure.

### Normalization
Given an orthogonal list (not necessarily orthonormal), we can normalize each vector:
$$u_i = \frac{v_i}{\|v_i\|}$$

## Applications

### Simplifying Calculations
- Finding coordinates is immediate: $\langle u_i, v \rangle$
- Computing inner products reduces to dot products
- Matrix representations become simpler

### Analysis
- Fourier series expansions
- Wavelet transforms
- Spectral theory

### Numerical Methods
- QR decomposition
- Least squares problems
- Iterative methods

## Related Results

### Bessel's Inequality
For any $v \in V$ and orthonormal list $\{u_1, \ldots, u_k\}$:
$$\sum_{i=1}^k |\langle u_i, v \rangle|^2 \leq \|v\|^2$$

### Parseval's Identity
If $\{u_1, \ldots, u_n\}$ is an orthonormal basis, then:
$$\|v\|^2 = \sum_{i=1}^n |\langle u_i, v \rangle|^2$$

## Related Concepts
- [[Orthogonality]]: Extension of pairwise orthogonality
- [[Inner Product]]: Used to define orthonormality
- [[Linear Independence]]: Automatic consequence of orthonormality
- [[Orthonormal Basis]]: An orthonormal list that spans the space
- [[Gram-Schmidt Orthogonalization]]: Method to construct orthonormal lists

## Notes
- Orthonormal lists are "ideal" for computations
- They generalize the standard coordinate system to abstract spaces
- Every orthonormal list can be extended to an orthonormal basis
- The properties of orthonormal lists make them fundamental in analysis and applications
