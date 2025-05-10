---
title: "PS07-Q04-Solution: Solving Linear Recurrence using Diagonalisation"
aliases: ["Solution to PS7 Q4"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-07", "difficulty-homework", "linear-recurrence", "diagonalisation", "matrix-powers"]
related_problem: [[PS07-Q04]]
---

# PS07-Q04-Solution: Solving Linear Recurrence using Diagonalisation

## Original Problem
Solve the following linear recurrence, with initial conditions $x_{0}=-1, y_{0}=0$.

$$\begin{aligned}
x_{n+1} & =3 x_{n}+6 y_{n} \\
y_{n+1} & =6 x_{n}-2 y_{n}
\end{aligned}$$

## Solution Process

### Step 1: Express as Matrix Equation

We can write this as a matrix recurrence $\mathbf{v}_{n+1} = A\mathbf{v}_n$, where:

$$A = \left(\begin{array}{cc}
3 & 6 \\
6 & -2
\end{array}\right), \quad \mathbf{v}_n = \binom{x_n}{y_n}$$

The solution is $\mathbf{v}_n = A^n\mathbf{v}_0$.

### Step 2: Find Eigenvalues

Calculate the characteristic polynomial of $A$:

$$\det(A - tI) = \left|\begin{array}{cc}
3-t & 6 \\
6 & -2-t
\end{array}\right| = (3-t)(-2-t) - 36 = t^2 - t - 42$$

Factoring: $t^2 - t - 42 = (t-7)(t+6)$

Therefore, the eigenvalues are $\lambda_1 = 7$ and $\lambda_2 = -6$.

### Step 3: Find Eigenvectors

For $\lambda_1 = 7$:
$$\ker(A - 7I) = \ker\left(\begin{array}{cc}
-4 & 6 \\
6 & -9
\end{array}\right) = \left\langle\binom{3}{2}\right\rangle$$

For $\lambda_2 = -6$:
$$\ker(A + 6I) = \ker\left(\begin{array}{cc}
9 & 6 \\
6 & 4
\end{array}\right) = \left\langle\binom{2}{-3}\right\rangle$$

### Step 4: Construct Diagonalisation

We have:
$$P = \left(\begin{array}{cc}
3 & 2 \\
2 & -3
\end{array}\right), \quad D = \left(\begin{array}{cc}
7 & 0 \\
0 & -6
\end{array}\right)$$

To find $P^{-1}$: $\det(P) = 3(-3) - 2(2) = -13$

$$P^{-1} = \frac{1}{-13}\left(\begin{array}{cc}
-3 & -2 \\
-2 & 3
\end{array}\right) = \frac{1}{13}\left(\begin{array}{cc}
3 & 2 \\
2 & -3
\end{array}\right)$$

### Step 5: Compute $A^n$

Since $A = PDP^{-1}$, we have:
$$A^n = PD^nP^{-1} = P\left(\begin{array}{cc}
7^n & 0 \\
0 & (-6)^n
\end{array}\right)P^{-1}$$

### Step 6: Apply Initial Conditions

$$\mathbf{v}_n = A^n\mathbf{v}_0 = PD^nP^{-1}\binom{-1}{0}$$

First compute $P^{-1}\mathbf{v}_0$:
$$P^{-1}\binom{-1}{0} = \frac{1}{13}\left(\begin{array}{cc}
3 & 2 \\
2 & -3
\end{array}\right)\binom{-1}{0} = \frac{1}{13}\binom{-3}{-2} = \binom{-3/13}{-2/13}$$

Now compute $D^nP^{-1}\mathbf{v}_0$:
$$D^n\binom{-3/13}{-2/13} = \binom{-3(7^n)/13}{-2(-6)^n/13}$$

Finally:
$$\mathbf{v}_n = P\binom{-3(7^n)/13}{-2(-6)^n/13} = \frac{1}{13}\left(\begin{array}{cc}
3 & 2 \\
2 & -3
\end{array}\right)\binom{-3(7^n)}{-2(-6)^n}$$

This gives us:

$$\binom{x_n}{y_n} = \frac{1}{13}\binom{-9(7^n) - 4(-6)^n}{-6(7^n) + 6(-6)^n}$$

Therefore:
- $x_n = \frac{-9}{13}(7^n) + \frac{-4}{13}(-6)^n$
- $y_n = \frac{6}{13}((-6)^n - 7^n)$

## Key Insights
- Linear recurrences can be solved systematically using matrix diagonalisation
- The eigenvalues determine the growth rates of the recurrence solutions
- The eigenvectors provide the basis for expressing the general solution
- Initial conditions are used to determine the specific linear combination

## Alternative Approaches
- Could solve the characteristic equation of the recurrence directly
- Could use generating functions
- Could use the Jordan normal form if the matrix weren't diagonalisable

## Common Mistakes
- Forgetting to properly apply initial conditions
- Making arithmetic errors in matrix multiplication
- Confusing the order of matrix multiplication in $PDP^{-1}$
- Not verifying that the matrix is indeed diagonalisable

## Verification
We can verify our solution by checking that:
1. $x_0 = \frac{-9}{13} + \frac{-4}{13} = -\frac{13}{13} = -1$ ✓
2. $y_0 = \frac{6}{13}(1 - 1) = 0$ ✓
3. The recurrence relation is satisfied for small values of $n$
