---
title: "Gram-Schmidt Orthogonalization"
aliases: ["Gram-Schmidt Process", "Gram-Schmidt Algorithm", "Orthogonalization"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-4", "concept", "algorithm", "inner-product-space", "orthonormal-basis", "orthonormal-list", "linear-independence", "inner-product", "qr-decomposition", "linear-algebra"]
related_concepts: ["Orthonormal Basis", "Orthonormal List", "Linear Independence", "Inner Product", "QR Decomposition", "Inner Product Space", "Field"]
---

# Gram-Schmidt Orthogonalization

## Theorem Statement
Let $v_1, \ldots, v_m$ be linearly independent vectors in an [[Inner Product Space]] $V$. The Gram-Schmidt process produces an orthonormal list $u_1, \ldots, u_m$ such that:
$$\text{span}\{u_1, \ldots, u_k\} = \text{span}\{v_1, \ldots, v_k\}$$
for all $1 \leq k \leq m$.

## Algorithm

The process works inductively:

1. **Step 1**: $w_1 = v_1$, $u_1 = \frac{w_1}{\|w_1\|}$

2. **Step k** (for $k > 1$):
   - $w_k = v_k - \sum_{j=1}^{k-1} \langle u_j, v_k \rangle u_j$
   - $u_k = \frac{w_k}{\|w_k\|}$

Alternatively, we can write the algorithm entirely in terms of the $w_k$:
$$w_k = v_k - \sum_{j=1}^{k-1} \frac{\langle w_j, v_k \rangle}{\|w_j\|^2} w_j$$

## How It Works

The key insight is **orthogonal projection**:
- At step $k$, we remove from $v_k$ its projection onto the space spanned by $u_1, \ldots, u_{k-1}$
- What remains ($w_k$) is orthogonal to all previous vectors
- Normalizing gives us $u_k$

## Example: Orthogonalizing in $\mathbb{R}^3$

Start with $v_1 = (1,1,1)$, $v_2 = (1,1,0)$, $v_3 = (1,0,0)$.

**Step 1**: 
- $w_1 = (1,1,1)$
- $u_1 = \frac{1}{\sqrt{3}}(1,1,1)$

**Step 2**:
- $\langle u_1, v_2 \rangle = \frac{1}{\sqrt{3}}(1+1+0) = \frac{2}{\sqrt{3}}$
- $w_2 = (1,1,0) - \frac{2}{\sqrt{3}} \cdot \frac{1}{\sqrt{3}}(1,1,1) = (1,1,0) - \frac{2}{3}(1,1,1) = (\frac{1}{3}, \frac{1}{3}, -\frac{2}{3})$
- $\|w_2\| = \sqrt{\frac{1}{9} + \frac{1}{9} + \frac{4}{9}} = \sqrt{\frac{6}{9}} = \frac{\sqrt{6}}{3}$
- $u_2 = \frac{1}{\sqrt{6}}(1,1,-2)$

**Step 3**:
- $\langle u_1, v_3 \rangle = \frac{1}{\sqrt{3}}$, $\langle u_2, v_3 \rangle = \frac{1}{\sqrt{6}}(1-2) = -\frac{1}{\sqrt{6}}$
- $w_3 = (1,0,0) - \frac{1}{\sqrt{3}} \cdot \frac{1}{\sqrt{3}}(1,1,1) - (-\frac{1}{\sqrt{6}}) \cdot \frac{1}{\sqrt{6}}(1,1,-2)$
- After calculation: $u_3 = \frac{1}{\sqrt{2}}(1,-1,0)$

## Properties

### Span Preservation
At each step, the span of the first $k$ orthonormal vectors equals the span of the first $k$ original vectors.

### Minimality
$w_k$ is the unique vector in $v_k + \text{span}\{u_1, \ldots, u_{k-1}\}^{\perp}$.

### Numerical Stability
The algorithm can be numerically unstable when vectors are nearly linearly dependent. Modified Gram-Schmidt provides better numerical properties.

## Modified Gram-Schmidt

Instead of computing $w_k$ all at once, we orthogonalize iteratively:

```
w_k = v_k
for j = 1 to k-1:
    w_k = w_k - ⟨u_j, w_k⟩ u_j
u_k = w_k / ‖w_k‖
```

This gives the same result theoretically but is more numerically stable.

## Applications

### QR Decomposition
The Gram-Schmidt process provides a constructive proof of QR decomposition: any matrix $A$ can be written as $A = QR$ where $Q$ has orthonormal columns and $R$ is upper triangular.

### Orthonormal Bases
The most direct method for constructing orthonormal bases from arbitrary bases.

### Least Squares
Used in numerical solutions of overdetermined linear systems.

### Function Spaces
Orthogonalizing functions in $L^2$ spaces, leading to classical orthogonal polynomials.

## Related Results

### Existence of Orthonormal Bases
The Gram-Schmidt process proves that every finite-dimensional inner product space has an orthonormal basis.

### QR Factorization
Given a matrix $A$, Gram-Schmidt on its columns produces $A = QR$.

## Related Concepts
- [[Orthonormal Basis]]: The Gram-Schmidt process constructs these
- [[Orthonormal List]]: Intermediate result of the process
- [[Inner Product]]: Used to compute projections
- [[Linear Independence]]: Required for the input vectors
- [[QR Decomposition]]: Direct application of Gram-Schmidt

## Computational Complexity
For an $n \times n$ matrix:
- Time complexity: $O(n^3)$
- Space complexity: $O(n^2)$

## Variants and Improvements
1. **Modified Gram-Schmidt**: Better numerical stability
2. **Householder Reflections**: Alternative with $O(n^3)$ complexity but superior stability
3. **Givens Rotations**: For sparse matrices

## Notes
- Essential algorithm in numerical linear algebra
- Forms the basis for many advanced algorithms
- While simple in theory, numerical implementation requires care
- The process can be applied in any inner product space, not just finite-dimensional ones
