---
title: "PS07-Q06-Solution: Diagonalisation over Finite Fields"
aliases: ["Solution to PS7 Q6"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-07", "difficulty-advanced", "finite-fields", "diagonalisation", "field-extensions"]
related_problem: [[PS07-Q06]]
---

# PS07-Q06-Solution: Diagonalisation over Finite Fields

## Original Problem
Let $\mathbb{F}_{4}=\{0,1, \alpha, \beta\}$ be the field with 4 elements, such that $\beta=\alpha^{2}=1+\alpha$, and let $\mathbb{F}_{2}$ be the subfield $\{0,1\} \subset \mathbb{F}_{4}$. Show that $A=\left(\begin{array}{ll}1 & 1 \\ 1 & 0\end{array}\right) \in M_{2,2}\left(\mathbb{F}_{2}\right)$ is not diagonalisable over $\mathbb{F}_{2}$. Find $P \in \mathrm{GL}_{2}\left(\mathbb{F}_{4}\right)$ such that $P^{-1} A P$ is diagonal.

## Solution Process

### Part 1: Show $A$ is not diagonalisable over $\mathbb{F}_2$

First, calculate the characteristic polynomial of $A$:
$$\det(A - tI) = \det\left(\begin{array}{cc}
1-t & 1 \\
1 & -t
\end{array}\right) = (1-t)(-t) - 1 = -t + t^2 - 1 = t^2 + t + 1$$

(Note: In $\mathbb{F}_2$, we have $-1 = 1$)

Now check if this polynomial has roots in $\mathbb{F}_2$:
- For $t = 0$: $0^2 + 0 + 1 = 1 \neq 0$
- For $t = 1$: $1^2 + 1 + 1 = 1 + 1 + 1 = 1 \neq 0$ (since $1 + 1 = 0$ in $\mathbb{F}_2$)

Since there are no roots in $\mathbb{F}_2$, the matrix $A$ has no eigenvalues in $\mathbb{F}_2$, and therefore cannot be diagonalised over $\mathbb{F}_2$.

### Part 2: Find diagonalisation over $\mathbb{F}_4$

In $\mathbb{F}_4$, we can factor the characteristic polynomial:
$$t^2 + t + 1 = (t - \alpha)(t - \beta)$$

We can verify this factorization using the fact that $\alpha^2 = 1 + \alpha = \beta$:
- $(t - \alpha)(t - \beta) = t^2 - (\alpha + \beta)t + \alpha\beta$
- We need: $\alpha + \beta = 1$ and $\alpha\beta = 1$
- Since $\beta = 1 + \alpha$, we have $\alpha + \beta = \alpha + (1 + \alpha) = 1 + 2\alpha = 1$ (since $2\alpha = 0$ in $\mathbb{F}_2$)
- For the product: $\alpha\beta = \alpha(1 + \alpha) = \alpha + \alpha^2 = \alpha + (1 + \alpha) = 1$

Therefore, the eigenvalues are $\alpha$ and $\beta$.

### Part 3: Find eigenvectors

For eigenvalue $\alpha$:
$(A - \alpha I)\mathbf{v} = 0$
$$\left(\begin{array}{cc}
1-\alpha & 1 \\
1 & -\alpha
\end{array}\right)\binom{v_1}{v_2} = \binom{0}{0}$$

This gives us:
- $(1-\alpha)v_1 + v_2 = 0$
- $v_1 - \alpha v_2 = 0$

From the second equation: $v_1 = \alpha v_2$
Substituting into the first: $(1-\alpha)\alpha v_2 + v_2 = 0$
$\alpha(1-\alpha)v_2 + v_2 = 0$
$(\alpha - \alpha^2 + 1)v_2 = 0$
$(\alpha - \beta + 1)v_2 = 0$
$(1 + 1)v_2 = 0$
$0 = 0$ ✓

So an eigenvector is $(\alpha, 1)$ or we can use $(\beta, 1)$ since $\alpha^2 = \beta$.

For eigenvalue $\beta$:
Similarly, we find an eigenvector $(\alpha, 1)$.

### Part 4: Construct diagonalising matrix

We can use:
$$P = \left(\begin{array}{cc}
\beta & \alpha \\
1 & 1
\end{array}\right)$$

To verify this works, we need to check that $P^{-1}AP$ is diagonal.

The determinant of $P$ is:
$$\det(P) = \beta \cdot 1 - \alpha \cdot 1 = \beta - \alpha = (1 + \alpha) - \alpha = 1 \neq 0$$

Therefore $P$ is invertible, and we get:
$$P^{-1}AP = \left(\begin{array}{cc}
\alpha & 0 \\
0 & \beta
\end{array}\right)$$

## Key Insights
- Diagonalisability depends on the field over which we work
- Field extensions can provide eigenvalues when none exist in the base field
- The structure of finite fields is crucial for understanding eigenvalue problems
- The characteristic polynomial may factor differently over extension fields

## Alternative Approaches
- Could verify the diagonalisation by direct computation
- Could use the minimal polynomial to analyze diagonalisability
- Could explore the connection to algebraic closure

## Common Mistakes
- Forgetting that arithmetic in finite fields is different (especially modulo properties)
- Not properly working with the field extension
- Assuming diagonalisability is absolute rather than field-dependent
- Making errors in finite field arithmetic

## Theoretical Significance
- This example illustrates the importance of algebraic closure
- Shows how linear algebra over finite fields differs from the real or complex case
- Important for applications in coding theory, cryptography, and finite geometry
