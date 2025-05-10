---
title: "PS08-Q03-Solution: Properties of Roots of Unity"
aliases: ["Solution to PS8 Q3"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-08", "difficulty-warmup", "complex-analysis", "group-theory"]
related_problem: [[PS08-Q03]]
---

# PS08-Q03-Solution: Properties of Roots of Unity

## Original Problem
For $n \in \mathbb{N}$, an $n$-th root of unity is $\omega \in \mathbb{C}$ such that $\omega^n = 1$. Prove:

(i) $|\omega| = 1$, for any $n$-th root of unity $\omega$.

(ii) If $\omega_1, \omega_2$ are $n$-th roots of unity then so is $\omega_1 \omega_2$ and $\omega_1^{-1}$.

(iii) If $\omega$ is an $n$-th root of unity and $\omega \neq 1$,
$$1 + \omega + \cdots + \omega^{n-1} = 0$$

## Solution Process

### Part (i)
Given: $\omega^n = 1$

To prove: $|\omega| = 1$

Proof:
- Since absolute value is multiplicative: $|\omega^n| = |\omega|^n$
- From $\omega^n = 1$, we get $|\omega^n| = |1| = 1$
- Therefore: $|\omega|^n = 1$
- Since $|\omega| > 0$ (as a modulus), we must have $|\omega| = 1$

### Part (ii)
Given: $\omega_1, \omega_2$ are $n$-th roots of unity

To prove: $\omega_1 \omega_2$ and $\omega_1^{-1}$ are also $n$-th roots of unity

Proof for $\omega_1 \omega_2$:
- We have $\omega_1^n = 1$ and $\omega_2^n = 1$
- Therefore: $(\omega_1 \omega_2)^n = \omega_1^n \omega_2^n = 1 \cdot 1 = 1$
- So $\omega_1 \omega_2$ is an $n$-th root of unity

Proof for $\omega_1^{-1}$:
- Since $\omega_1^n = 1$, we have $\omega_1^{-1} = \omega_1^{n-1}$
- Note that $\omega_1 \neq 0$ (since $|\omega_1| = 1$)
- Therefore: $(\omega_1^{-1})^n = (1/\omega_1)^n = 1/\omega_1^n = 1/1 = 1$
- So $\omega_1^{-1}$ is an $n$-th root of unity

### Part (iii)
Given: $\omega$ is an $n$-th root of unity and $\omega \neq 1$

To prove: $1 + \omega + \cdots + \omega^{n-1} = 0$

Proof:
- We use the polynomial factorization: $x^n - 1 = (x-1)(1 + x + \cdots + x^{n-1})$
- This can be verified by expanding the right side
- Substituting $x = \omega$: $\omega^n - 1 = (\omega-1)(1 + \omega + \cdots + \omega^{n-1})$
- Since $\omega^n = 1$, we get: $0 = (\omega-1)(1 + \omega + \cdots + \omega^{n-1})$
- Since $\omega \neq 1$, we have $\omega - 1 \neq 0$
- Therefore: $1 + \omega + \cdots + \omega^{n-1} = 0$

## Key Insights
- The $n$-th roots of unity form a multiplicative group (part ii shows closure and inverses)
- The geometric arrangement: all $n$-th roots lie on the unit circle in the complex plane
- The sum formula in part (iii) relates to the fact that non-trivial roots are evenly distributed around the unit circle

## Alternative Approaches
1. For part (i): Use the polar form $\omega = re^{i\theta}$ and show $r = 1$
2. For part (iii): Use geometric series formula directly: $\sum_{k=0}^{n-1} \omega^k = \frac{1-\omega^n}{1-\omega}$ when $\omega \neq 1$

## Common Mistakes
- Forgetting that $|\omega| > 0$ when concluding $|\omega| = 1$ from $|\omega|^n = 1$
- Not verifying that $\omega_1^{-1}$ exists (i.e., $\omega_1 \neq 0$)
- Trying to use the sum formula when $\omega = 1$ (division by zero)
- Confusing the polynomial identity with the actual evaluation

## Notes
- The $n$-th roots of unity are: $e^{2\pi i k/n}$ for $k = 0, 1, \ldots, n-1$
- These form a cyclic group of order $n$ under multiplication
- The primitive $n$-th roots generate all others: $\omega_k = \omega_1^k$ where $\omega_1 = e^{2\pi i/n}$
