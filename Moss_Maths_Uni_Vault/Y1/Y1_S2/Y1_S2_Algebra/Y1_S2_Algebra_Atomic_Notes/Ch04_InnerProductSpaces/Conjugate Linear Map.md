---
title: "Conjugate Linear Map"
aliases: ["Anti-linear Map", "Antilinear Map", "Semilinear Map"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "inner-product-space", "linear-map", "complex-vector-space", "complex-conjugation", "linear-algebra"]
related_concepts: ["Linear Map", "Inner Product", "Complex Vector Space", "Complex Conjugation", "Field"]
---

# Conjugate Linear Map

## Definition
A map $\phi: V \rightarrow W$ between complex vector spaces is called **conjugate linear** (or **anti-linear**) if:

1. **Additive**: $\phi(v + u) = \phi(v) + \phi(u)$ for all $v, u \in V$
2. **Conjugate Homogeneous**: $\phi(\lambda v) = \bar{\lambda} \phi(v)$ for all $v \in V$ and $\lambda \in \mathbb{C}$

## Properties

### Relation to Linear Maps
- If $\phi$ is conjugate linear, then $\bar{\phi}$ (defined by $\bar{\phi}(v) = \overline{\phi(v)}$) is linear
- The composition of two conjugate linear maps is linear
- The composition of a linear and a conjugate linear map (in either order) is conjugate linear

### First Argument of Complex Inner Product
In a complex inner product space, the inner product is conjugate linear in the first argument:
$$\langle \lambda v + \mu w, u \rangle = \bar{\lambda} \langle v,u \rangle + \bar{\mu} \langle w,u \rangle$$

This is derived from conjugate symmetry and linearity in the second argument.

## Examples

### Example 1: Complex Conjugation
The map $\phi: \mathbb{C}^n \rightarrow \mathbb{C}^n$ defined by $\phi(z_1, \ldots, z_n) = (\bar{z}_1, \ldots, \bar{z}_n)$ is conjugate linear.

### Example 2: First Argument of Inner Product
For a fixed $u \in V$, the map $\phi_u: V \rightarrow \mathbb{C}$ defined by $\phi_u(v) = \langle v,u \rangle$ is conjugate linear.

### Example 3: Scalar Multiplication by Imaginary Unit
The map $\phi: \mathbb{C}^n \rightarrow \mathbb{C}^n$ defined by $\phi(v) = iv$ is linear, but $\psi(v) = \bar{i}v = -iv$ would be linear too. However, this is not conjugate linear.

## Contrast with Linear Maps
| Property | Linear Map | Conjugate Linear Map |
|----------|------------|---------------------|
| Additivity | $\phi(v+w) = \phi(v) + \phi(w)$ | $\phi(v+w) = \phi(v) + \phi(w)$ |
| Homogeneity | $\phi(\lambda v) = \lambda \phi(v)$ | $\phi(\lambda v) = \bar{\lambda} \phi(v)$ |
| Matrix Representation | Has standard matrix representation | Requires complex conjugation |

## Applications in Inner Product Theory
- The first argument behavior of complex inner products
- Definition of conjugate transpose (adjoint) operations
- Quantum mechanics: bra-ket notation
- Signal processing: complex-valued signals

## Related Concepts
- [[Linear Map]]: Regular linear maps preserve scalar multiplication
- [[Inner Product]]: Complex inner products are conjugate linear in first argument
- [[Complex Vector Space]]: The domain and codomain of conjugate linear maps
- [[Conjugate Symmetry]]: Property of complex inner products that leads to conjugate linearity

## Notes
- In real vector spaces, conjugate linear and linear maps coincide
- The concept is essential for understanding complex inner products
- Some texts use different terminology; "conjugate linear" is standard in algebra, while "anti-linear" is common in physics
- The conjugate linearity in complex inner products ensures that $\langle v,v \rangle$ is always real and non-negative
