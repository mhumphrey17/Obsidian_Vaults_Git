---
title: "PS07-Q01-Solution: Eigenvalues, Diagonalisation, and Matrix Power (2x2)"
aliases: ["Solution to PS7 Q1"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-07", "difficulty-warmup", "eigenvalues", "diagonalization", "field-extensions"]
related_problem: [[PS07-Q01]]
---

# PS07-Q01-Solution: Eigenvalues, Diagonalisation, and Matrix Power (2x2)

## Original Problem
Let $A=\left(\begin{array}{cc}7 & 8 \\ -4 & -5\end{array}\right), \quad B=\left(\begin{array}{ll}0 & 2 \\ 1 & 0\end{array}\right)$.

(i) Find the eigenvalues of $A$ and $B$.
(ii) Show that $B$ is not diagonalisable over $\mathbb{Q}$. Find some $P \in \mathrm{GL}_{2}(\mathbb{Q})$ and $Q \in \mathrm{GL}_{2}(\mathbb{R})$ such that $P^{-1} A P$ and $Q^{-1} B Q$ are diagonal.
(iii) Find an explicit formula for $A^{n}$.

## Solution Process

### Part (i): Finding Eigenvalues

**For matrix $A$:**
The characteristic polynomial is:
$$\Delta_A(t) = \det(A - tI) = \left|\begin{array}{cc}
7-t & 8 \\
-4 & -5-t
\end{array}\right| = (7-t)(-5-t) - (-4)(8)$$

$$= -35 - 7t + 5t + t^2 + 32 = t^2 - 2t - 3 = (t-3)(t+1)$$

Eigenvalues of $A$: $\lambda_1 = 3$ and $\lambda_2 = -1$

**For matrix $B$:**
The characteristic polynomial is:
$$\Delta_B(t) = \det(B - tI) = \left|\begin{array}{cc}
-t & 2 \\
1 & -t
\end{array}\right| = (-t)(-t) - (1)(2) = t^2 - 2$$

Eigenvalues of $B$: $\lambda_1 = \sqrt{2}$ and $\lambda_2 = -\sqrt{2}$

### Part (ii): Diagonalisation in Different Fields

**Analysis of $B$ over $\mathbb{Q}$:**
Since the eigenvalues $\pm\sqrt{2}$ are irrational, they don't belong to $\mathbb{Q}$. Therefore, $B$ cannot be diagonalized over $\mathbb{Q}$.

**Diagonalizing $A$ over $\mathbb{Q}$:**
Since both eigenvalues (3 and -1) are rational, we can find a diagonalizing matrix with rational entries.

For $\lambda = -1$: Solve $(A - (-1)I)\mathbf{v} = 0$
$$\left(\begin{array}{cc}8 & 8 \\ -4 & -4\end{array}\right)\binom{v_1}{v_2} = \binom{0}{0}$$

This gives $v_1 + v_2 = 0$, so $\mathbf{v} = \binom{-1}{1}$ is an eigenvector.

For $\lambda = 3$: Solve $(A - 3I)\mathbf{v} = 0$
$$\left(\begin{array}{cc}4 & 8 \\ -4 & -8\end{array}\right}\binom{v_1}{v_2} = \binom{0}{0}$$

This gives $v_1 + 2v_2 = 0$, so $\mathbf{v} = \binom{-2}{1}$ is an eigenvector.

Therefore:
$$P = \left(\begin{array}{cc}-1 & -2 \\ 1 & 1\end{array}\right) \in GL_2(\mathbb{Q})$$
$$P^{-1} = \left(\begin{array}{cc}1 & 2 \\ -1 & -1\end{array}\right)$$
$$P^{-1}AP = \left(\begin{array}{cc}-1 & 0 \\ 0 & 3\end{array}\right) = D$$

**Diagonalizing $B$ over $\mathbb{R}$:**
Now we can use the real eigenvalues $\pm\sqrt{2}$.

For $\lambda = \sqrt{2}$: The eigenvector is $\mathbf{v} = \binom{\sqrt{2}}{1}$
For $\lambda = -\sqrt{2}$: The eigenvector is $\mathbf{v} = \binom{-\sqrt{2}}{1}$

Therefore:
$$Q = \left(\begin{array}{cc}\sqrt{2} & -\sqrt{2} \\ 1 & 1\end{array}\right) \in GL_2(\mathbb{R})$$

### Part (iii): Formula for $A^n$

Since $A = PDP^{-1}$:
$$A^n = PD^nP^{-1} = \left(\begin{array}{cc}-1 & -2 \\ 1 & 1\end{array}\right)\left(\begin{array}{cc}(-1)^n & 0 \\ 0 & 3^n\end{array}\right)\left(\begin{array}{cc}1 & 2 \\ -1 & -1\end{array}\right)$$

Let's compute this step by step:

First, multiply the left two matrices:
$$\left(\begin{array}{cc}-1 & -2 \\ 1 & 1\end{array}\right)\left(\begin{array}{cc}(-1)^n & 0 \\ 0 & 3^n\end{array}\right) = \left(\begin{array}{cc}(-1)^{n+1} & -2(3^n) \\ (-1)^n & 3^n\end{array}\right)$$

Then multiply by $P^{-1}$:
$$A^n = \left(\begin{array}{cc}(-1)^{n+1} & -2(3^n) \\ (-1)^n & 3^n\end{array}\right)\left(\begin{array}{cc}1 & 2 \\ -1 & -1\end{array}\right)$$

$$= \left(\begin{array}{cc}(-1)^{n+1} + 2(3^n) & 2(-1)^{n+1} + 2(3^n) \\ (-1)^n - 3^n & 2(-1)^n - 3^n\end{array}\right)$$

$$= \left(\begin{array}{cc}(-1)^{n+1} + 2(3^n) & 2(-1)^{n+1} + 2(3^n) \\ (-1)^n - 3^n & 2(-1)^n - 3^n\end{array}\right)$$

## Key Insights
- The field over which we work determines diagonalizability
- Matrices can be diagonalizable over larger fields even if not over smaller ones
- Diagonalization provides an elegant formula for matrix powers
- The pattern $A^n = PD^nP^{-1}$ is fundamental

## Alternative Approaches
- Could use the Jordan normal form for non-diagonalizable cases
- Could verify results by checking $AA^{-1} = I$ for small values of $n$

## Common Mistakes
- Forgetting that eigenvalues must be in the field for diagonalizability
- Arithmetic errors in eigenvector calculations
- Not verifying that the diagonalizing matrix is invertible
- Sign errors in computing powers
