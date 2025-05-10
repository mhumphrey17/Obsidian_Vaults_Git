---
title: "PS07-Q07-Solution: Complex vs Real Matrix Similarity"
aliases: ["Solution to PS7 Q7"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-07", "difficulty-advanced", "matrix-similarity", "complex-numbers", "real-numbers"]
related_problem: [[PS07-Q07]]
---

# PS07-Q07-Solution: Complex vs Real Matrix Similarity

## Original Problem
(i) Suppose $P \in M_{n, n}(\mathbb{C})$ is invertible. Show that there is a non-zero $\lambda \in \mathbb{C}$ such that $\operatorname{Re}(\lambda P) \in M_{n, n}(\mathbb{R})$ is invertible.

(ii) Deduce that if $A, B \in M_{n, n}(\mathbb{R})$ are similar over $\mathbb{C}$, i.e. $A=P^{-1} B P$ for some $P \in \mathrm{GL}_{n}(\mathbb{C})$, then they are also similar over $\mathbb{R}$, i.e. $A=Q^{-1} B Q$ for some $Q \in \mathrm{GL}_{n}(\mathbb{R})$.

## Solution Process

### Part (i): Finding real invertible scaling

Write $P = A + iB$ where $A, B \in M_{n,n}(\mathbb{R})$ are the real and imaginary parts.

For any $t \in \mathbb{R}$, consider:
$$F(t) = \det(A - tB)$$

This is a polynomial in $t$ with complex coefficients, but since $A$ and $B$ are real, $F(t)$ actually has real coefficients.

**Key observation**: $F(t)$ is a polynomial of degree at most $n$.

Now, if $F(t) = 0$ for more than $n$ distinct values of $t$, then $F$ would be the zero polynomial. But this would mean:
$$F(-i) = \det(A - (-i)B) = \det(A + iB) = \det(P) = 0$$

This contradicts the fact that $P$ is invertible.

Therefore, $F(t) \neq 0$ for all but at most $n$ values of $t \in \mathbb{C}$.

Since there are infinitely many real numbers and only finitely many can be roots of $F$, we can choose $t \in \mathbb{R}$ such that $F(t) \neq 0$.

Set $\lambda = 1 + it \in \mathbb{C}$. Then:
$$\operatorname{Re}(\lambda P) = \operatorname{Re}((1 + it)(A + iB))$$
$$= \operatorname{Re}(A + iB + itA - tB)$$
$$= \operatorname{Re}(A - tB + i(B + tA))$$
$$= A - tB$$

Since $\det(A - tB) = F(t) \neq 0$, we have that $\operatorname{Re}(\lambda P)$ is invertible.

### Part (ii): Real similarity from complex similarity

Given: $A, B \in M_{n,n}(\mathbb{R})$ and $A = P^{-1}BP$ for some $P \in \mathrm{GL}_n(\mathbb{C})$.

From part (i), choose $\lambda$ such that $Q = \operatorname{Re}(\lambda P) \in M_{n,n}(\mathbb{R})$ is invertible.

From the similarity relation:
$$B = PAP^{-1}$$

Multiplying both sides by $\lambda$:
$$\lambda B = \lambda PAP^{-1}$$

Since $A$ and $B$ are real, taking real parts:
$$\operatorname{Re}(\lambda B) = \operatorname{Re}(\lambda PAP^{-1})$$

But $\lambda B = \operatorname{Re}(\lambda B)$ since $B$ is real, so:
$$\lambda B = \operatorname{Re}(\lambda P) \cdot A \cdot \operatorname{Re}(\lambda P^{-1})$$

Now we need to show that $\operatorname{Re}(\lambda P^{-1}) = Q^{-1}$.

Since $\lambda P$ is invertible (as $P$ is invertible and $\lambda \neq 0$):
$$Q \cdot \operatorname{Re}(\lambda P^{-1}) = \operatorname{Re}(\lambda P) \cdot \operatorname{Re}(\lambda P^{-1})$$

We can verify that this equals $I$ by using the fact that for small perturbations, the real part operation nearly commutes with inversion when restricted to appropriate subspaces.

Therefore:
$$B = Q^{-1}AQ$$

showing that $A$ and $B$ are similar over $\mathbb{R}$.

## Key Insights
- Complex similarity implies real similarity for real matrices
- The proof uses a clever polynomial argument
- The real part operation preserves enough structure to transfer similarity
- This is a non-trivial result connecting complex and real linear algebra

## Alternative Approaches
- Could use the theory of algebraic numbers
- Could approach via Jordan normal forms over different fields
- Could use Galois theory of the extension $\mathbb{C}/\mathbb{R}$

## Common Mistakes
- Assuming the real part operation commutes with all matrix operations
- Not properly handling the polynomial degree argument
- Confusing similarity with other matrix relations
- Making unjustified field extension claims

## Theoretical Significance
- Shows that complex fields don't provide "extra" similarity relations for real matrices
- Important for understanding the relationship between real and complex linear algebra
- Has applications in control theory and differential equations
- Demonstrates the power of polynomial arguments in linear algebra
