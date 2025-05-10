---
title: "PS08-Q05-Solution: Orthonormality of Roots of Unity Vectors"
aliases: ["Solution to PS8 Q5"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-08", "difficulty-homework", "complex-analysis", "inner-product", "orthonormal"]
related_problem: [[PS08-Q05]]
---

# PS08-Q05-Solution: Orthonormality of Roots of Unity Vectors

## Original Problem
Let $\omega_k := e^{2\pi i k/n}$, $0 \leq k \leq n-1$, be the $n$-th roots of unity and define $v_k \in \mathbb{C}^n$ by

$$v_k = \left(1, \omega_k, \ldots, \omega_k^{n-1}\right) / \sqrt{n}$$

for $0 \leq k \leq n-1$.

Prove that $v_0, \ldots, v_{n-1}$ are orthonormal for the dot product.

## Solution Process

### Step 1: Show each vector has unit norm
We need to prove $\langle v_k, v_k \rangle = 1$ for all $k$.

By definition:
$$v_k = \frac{1}{\sqrt{n}} \left(1, \omega_k, \omega_k^2, \ldots, \omega_k^{n-1}\right)$$

Computing the inner product:
$$\langle v_k, v_k \rangle = \frac{1}{n} \sum_{j=0}^{n-1} |\omega_k^j|^2$$

Since $\omega_k$ is an $n$-th root of unity, by Problem Q3(i), we have $|\omega_k| = 1$.
Therefore: $|\omega_k^j| = |\omega_k|^j = 1^j = 1$ for all $j$.

Thus:
$$\langle v_k, v_k \rangle = \frac{1}{n} \sum_{j=0}^{n-1} 1 = \frac{n}{n} = 1$$

### Step 2: Show distinct vectors are orthogonal
We need to prove $\langle v_h, v_k \rangle = 0$ for $h \neq k$.

For $h \neq k$, we have:
$$\langle v_h, v_k \rangle = \frac{1}{n} \sum_{j=0}^{n-1} \overline{(\omega_h^j)} \cdot \omega_k^j$$
$$= \frac{1}{n} \sum_{j=0}^{n-1} \omega_h^{-j} \cdot \omega_k^j$$
$$= \frac{1}{n} \sum_{j=0}^{n-1} \left(\frac{\omega_k}{\omega_h}\right)^j$$

Let $\omega = \frac{\omega_k}{\omega_h} = \frac{e^{2\pi i k/n}}{e^{2\pi i h/n}} = e^{2\pi i (k-h)/n}$.

Since $h \neq k$ and $0 \leq h, k \leq n-1$, we have $k-h \not\equiv 0 \pmod{n}$.
Therefore, $\omega$ is an $n$-th root of unity with $\omega \neq 1$.

By Problem Q3(iii), we have:
$$\sum_{j=0}^{n-1} \omega^j = 0$$

Therefore:
$$\langle v_h, v_k \rangle = \frac{1}{n} \cdot 0 = 0$$

## Key Insights
- The orthonormality comes from the uniform distribution of roots of unity on the unit circle
- The normalization factor $1/\sqrt{n}$ ensures unit length
- The orthogonality follows from the sum property of roots of unity
- This construction gives a natural orthonormal basis for $\mathbb{C}^n$

## Alternative Approaches
1. Matrix interpretation: The matrix with rows $v_0, \ldots, v_{n-1}$ is the DFT (Discrete Fourier Transform) matrix divided by $\sqrt{n}$
2. Group theory: The roots of unity form a cyclic group, and the orthogonality reflects character orthogonality relations

## Common Mistakes
- Forgetting to conjugate in the complex inner product: $\langle v, w \rangle = \sum \overline{v_i} w_i$
- Incorrect computation of $|\omega_k^j| = 1$
- Misapplying the sum formula for roots of unity
- Not recognizing that $\omega_k/\omega_h$ is also a root of unity

## Notes
- This construction is fundamental in Fourier analysis and signal processing
- The vectors $v_k$ form an orthonormal eigenbasis for cyclic permutation operators
- This is an example of a unitary matrix (columns form an orthonormal set)
- The result generalizes to abstract finite groups (character theory)
