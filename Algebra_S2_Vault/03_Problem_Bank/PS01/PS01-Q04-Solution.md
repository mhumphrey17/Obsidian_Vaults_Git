---
title: "PS01-Q04-Solution: Solving Linear Systems with Parameters"
aliases: ["Solution to PS1 Q4", "Parametric Linear Systems Solution"]
tags: [solution, algebra-s2, ps-01, difficulty-homework]
related_problem: [[PS01-Q04]]
date_created: 2025-05-09
---

# PS01-Q04-Solution: Solving Linear Systems with Parameters

## Original Problem
For $A=\left(\begin{array}{ccc}2 & 2 & 6 \\ 4 & 5 & 9 \\ -1 & 2 & s\end{array}\right), b=\left(\begin{array}{l}2 \\ 5 \\ t\end{array}\right)$, find the values of $s, t \in \mathbb{R}$ for which the linear system $A \cdot x = b$ has (i) a unique solution, (ii) no solution, (iii) infinitely many solutions. In case (iii), find the general solution.

## Solution Process

We need to analyze the system $A \cdot x = b$ by performing Gaussian elimination on the augmented matrix $[A|b]$.

### Step 1: Set up the augmented matrix and perform row operations

$$\begin{pmatrix}
2 & 2 & 6 & | & 2 \\
4 & 5 & 9 & | & 5 \\
-1 & 2 & s & | & t
\end{pmatrix}$$

Let's apply row operations to reduce this to row echelon form:

First, we perform $R_2 - 2R_1$ to eliminate the entry in the second row, first column:

$$\begin{pmatrix}
2 & 2 & 6 & | & 2 \\
0 & 1 & -3 & | & 1 \\
-1 & 2 & s & | & t
\end{pmatrix}$$

Next, we multiply $R_1$ by $\frac{1}{2}$ to get a leading 1:

$$\begin{pmatrix}
1 & 1 & 3 & | & 1 \\
0 & 1 & -3 & | & 1 \\
-1 & 2 & s & | & t
\end{pmatrix}$$

Now we perform $R_3 + R_1$ to eliminate the entry in the third row, first column:

$$\begin{pmatrix}
1 & 1 & 3 & | & 1 \\
0 & 1 & -3 & | & 1 \\
0 & 3 & s+3 & | & t+1
\end{pmatrix}$$

Finally, we perform $R_3 - 3R_2$ to eliminate the entry in the third row, second column:

$$\begin{pmatrix}
1 & 1 & 3 & | & 1 \\
0 & 1 & -3 & | & 1 \\
0 & 0 & s+12 & | & t-2
\end{pmatrix}$$

### Step 2: Analyze the cases based on the value of $s+12$

Case 1: $s+12 \neq 0$ (i.e., $s \neq -12$)
- The coefficient matrix has rank 3 (full rank)
- We can divide the third row by $s+12$ to get a pivot in the third column
- The system has a unique solution (case (i))

Case 2: $s+12 = 0$ (i.e., $s = -12$) and $t-2 \neq 0$ (i.e., $t \neq 2$)
- The coefficient matrix has rank 2
- The augmented matrix has rank 3 (due to the non-zero entry in the right-hand side)
- The system is inconsistent and has no solution (case (ii))

Case 3: $s+12 = 0$ (i.e., $s = -12$) and $t-2 = 0$ (i.e., $t = 2$)
- Both the coefficient matrix and the augmented matrix have rank 2
- The system is consistent but underdetermined, leading to infinitely many solutions (case (iii))

### Step 3: Find the general solution for case (iii)

When $s = -12$ and $t = 2$, the augmented matrix becomes:

$$\begin{pmatrix}
1 & 1 & 3 & | & 1 \\
0 & 1 & -3 & | & 1 \\
0 & 0 & 0 & | & 0
\end{pmatrix}$$

From the first two rows, we get:
- $x_1 + x_2 + 3x_3 = 1$
- $x_2 - 3x_3 = 1$

From the second equation, we get $x_2 = 1 + 3x_3$.
Substituting this into the first equation:
$x_1 + (1 + 3x_3) + 3x_3 = 1$
$x_1 + 1 + 6x_3 = 1$
$x_1 = -6x_3$

So the general solution is:
$x_1 = -6x_3$
$x_2 = 1 + 3x_3$
$x_3$ is a free parameter

We can write this in vector form as:
$$\mathbf{x} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + \lambda \begin{pmatrix} -6 \\ 3 \\ 1 \end{pmatrix}$$

where $\lambda \in \mathbb{R}$ is an arbitrary parameter.

### Summary of Results:
(i) Unique solution: when $s \neq -12$
(ii) No solution: when $s = -12$ and $t \neq 2$
(iii) Infinitely many solutions: when $s = -12$ and $t = 2$, with general solution $\mathbf{x} = (0, 1, 0) + \lambda(-6, 3, 1)$ where $\lambda \in \mathbb{R}$.

## Key Insights
- The behavior of a linear system with parameters depends on how those parameters affect the rank of the coefficient and augmented matrices.
- A system has a unique solution when the coefficient matrix has full rank.
- A system has no solution when the rank of the augmented matrix exceeds the rank of the coefficient matrix.
- A system has infinitely many solutions when the ranks are equal but less than the number of variables.
- The number of free parameters in the general solution equals the nullity of the coefficient matrix.

## Alternative Approaches
- We could have determined the ranks by looking at the determinants of various submatrices.
- For case (iii), we could have directly parameterized the solution using the null space of the coefficient matrix.

## Common Mistakes
- Not considering all possible cases based on the parameter values.
- Arithmetic errors during row operations.
- Incorrectly determining the rank of the matrix.
- Errors in back-substitution when finding the general solution.
- Not verifying the solution by substituting back into the original system.
