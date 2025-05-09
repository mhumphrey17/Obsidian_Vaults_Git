---
title: "Orthogonal Direct Sum"
aliases: ["Orthogonal Sum", "Internal Direct Sum", "Orthogonal Decomposition"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "inner-product-space", "subspace", "direct-sum", "orthogonal-complement", "orthogonality", "orthogonal-projection", "linear-algebra"]
related_concepts: ["Direct Sum", "Orthogonal Complement", "Orthogonality", "Subspace", "Orthogonal Projection", "Inner Product Space", "Field"]
---

# Orthogonal Direct Sum

## Definition
Let $V$ be an [[Inner Product Space]] and $U, W$ be subspaces of $V$. We say $V$ is the **orthogonal direct sum** of $U$ and $W$, written $V = U \oplus W$, if:

1. $V = U + W$ (every vector in $V$ can be written as a sum of vectors from $U$ and $W$)
2. $U \cap W = \{0\}$ (the intersection is trivial)
3. $U \perp W$ (every vector in $U$ is orthogonal to every vector in $W$)

Equivalently, $V = U \oplus U^{\perp}$ where $U^{\perp}$ is the [[Orthogonal Complement]] of $U$.

## Properties

### Unique Decomposition
If $V = U \oplus W$, then every $v \in V$ has a unique representation:
$$v = u + w \text{ where } u \in U \text{ and } w \in W$$

### Pythagorean Property
If $V = U \oplus W$ and $v = u + w$ with $u \in U, w \in W$, then:
$$\|v\|^2 = \|u\|^2 + \|w\|^2$$

### Dimension Formula
$$\dim V = \dim U + \dim W$$

## Fundamental Theorem
**Theorem**: Let $U$ be a finite-dimensional subspace of an inner product space $V$. Then:
$$V = U \oplus U^{\perp}$$

This is the most important orthogonal direct sum decomposition.

## Examples

### Example 1: $\mathbb{R}^3$
- $\mathbb{R}^3 = \text{span}\{(1,0,0)\} \oplus \text{span}\{(0,1,0), (0,0,1)\}$
- The x-axis and the yz-plane

### Example 2: Polynomial Space
In $\mathbb{R}[x]$ with inner product $\langle p,q \rangle = \int_{-1}^1 p(x)q(x)dx$:
- $\mathbb{R}[x] = \text{span}\{1, x^2, x^4, \ldots\} \oplus \text{span}\{x, x^3, x^5, \ldots\}$
- Even and odd polynomials

### Example 3: Function Space
$L^2[0,2\pi] = \text{span}\{\cos(nx), \sin(nx) : n \geq 1\} \oplus \text{span}\{1\}$

## Construction Methods

### Using Orthonormal Bases
If $\{u_1, \ldots, u_k\}$ is an orthonormal basis for $U$ and $\{w_1, \ldots, w_l\}$ is an orthonormal basis for $W$, then $\{u_1, \ldots, u_k, w_1, \ldots, w_l\}$ is an orthonormal basis for $U \oplus W$.

### Gram-Schmidt Extension
Start with a basis for $U$, apply Gram-Schmidt, then extend to a basis for $V$ and apply Gram-Schmidt again. The result gives orthonormal bases for both $U$ and $U^{\perp}$.

## Orthogonal Projections
The orthogonal direct sum decomposition $V = U \oplus W$ defines two projection operators:
- $P_U: V \rightarrow U$ where $P_U(u + w) = u$
- $P_W: V \rightarrow W$ where $P_W(u + w) = w$

These satisfy:
- $P_U + P_W = I$ (identity operator)
- $P_U \circ P_W = P_W \circ P_U = 0$
- $P_U^2 = P_U$ and $P_W^2 = P_W$ (idempotent)

## Applications

### Fourier Series
Functions can be decomposed into orthogonal components corresponding to different frequencies.

### Signal Processing
Signals are decomposed into orthogonal basis functions (wavelets, Fourier modes).

### Quantum Mechanics
Quantum states can be decomposed into orthogonal components representing different physical properties.

### Optimization
Many optimization problems use orthogonal decompositions to separate constraints from objectives.

## Related Results

### Multiple Subspaces
$V$ can be decomposed into multiple orthogonal subspaces:
$$V = U_1 \oplus U_2 \oplus \cdots \oplus U_k$$
if the $U_i$ are pairwise orthogonal and their direct sum covers $V$.

### Spectral Theorem
Normal operators on finite-dimensional inner product spaces can be diagonalized using orthogonal direct sum decompositions of eigenspaces.

## Comparison with General Direct Sum

| Property | General Direct Sum | Orthogonal Direct Sum |
|----------|-------------------|----------------------|
| Decomposition | $v = u + w$ | $v = u + w$ |
| Uniqueness | Unique | Unique |
| Orthogonality | Not required | $u \perp w$ |
| Norm | $\|v\|^2 \leq \|u\|^2 + \|w\|^2$ | $\|v\|^2 = \|u\|^2 + \|w\|^2$ |
| Projections | General linear | Orthogonal |

## Related Concepts
- [[Direct Sum]]: General construction without orthogonality requirement
- [[Orthogonal Complement]]: Natural partner in orthogonal direct sums
- [[Orthogonality]]: The distinguishing feature
- [[Subspace]]: Component spaces of the decomposition
- [[Orthogonal Projection]]: Maps associated with the decomposition

## Notes
- Orthogonal direct sums preserve norms in a particularly nice way
- They provide the cleanest decompositions in inner product spaces
- Many advanced results (spectral theory, Fourier analysis) depend on orthogonal direct sum decompositions
- The notation $\oplus$ is sometimes used for both general and orthogonal direct sums - context determines which is meant
