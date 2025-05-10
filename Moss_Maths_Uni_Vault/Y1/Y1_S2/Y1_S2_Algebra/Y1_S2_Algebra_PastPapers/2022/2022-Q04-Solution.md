---
title: "2022-Q04-Solution: Diagonalization and Matrix Powers"
aliases: ["Solution to Past Paper 2022 Q4"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2022-exam", "section-A", "q04"]
related_question: [[2022-Q04]]
solution_approach: "Eigenvalue/eigenvector calculation and diagonalization"
key_techniques: ["Characteristic polynomial", "Eigenvector calculation", "Matrix powers", "Limit evaluation"]
common_mistakes: ["Eigenvalue calculation errors", "Wrong eigenvector order", "Sign errors in limits"]
---

# 2022-Q04-Solution: Diagonalization and Matrix Powers

## Original Question

Let 
$$A = \begin{pmatrix}
-1 & 2 & 0 \\
1 & -1 & 2 \\
0 & 1 & -1
\end{pmatrix} \in M_{3,3}(\mathbb{R})$$

### Part (a)
Find an invertible matrix $P$ such that
$$P^{-1}AP = \begin{pmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & -3
\end{pmatrix}$$

### Part (b)
Compute $\lim_{n \to \infty} \left(\frac{A}{5}\right)^n$.

## Solution Process

### Part (a)

**Step 1**: Find the characteristic polynomial

$\det(A - tI) = \det\begin{pmatrix}
-1-t & 2 & 0 \\
1 & -1-t & 2 \\
0 & 1 & -1-t
\end{pmatrix}$

Expanding along the first row:
$= (-1-t)\det\begin{pmatrix} -1-t & 2 \\ 1 & -1-t \end{pmatrix} - 2\det\begin{pmatrix} 1 & 2 \\ 0 & -1-t \end{pmatrix}$

$= (-1-t)[(1+t)^2 - 2] - 2[-(1+t)]$

$= (-1-t)[(1+t)^2 - 2] + 2(1+t)$

$= (-1-t)[(1+t)^2 - 2] + 2(1+t)$

$= (-1-t)[(1+t)^2 - 4]$

$= (-1-t)(1+t-2)(1+t+2)$

$= (-1-t)(t-1)(t+3)$

$= -(1+t)(t-1)(t+3)$

Therefore, the eigenvalues are: $\lambda = 1, -1, -3$

These match the diagonal entries of the target matrix.

**Step 2**: Find eigenvectors

For $\lambda = 1$: Solve $(A - I)x = 0$

$(A - I) = \begin{pmatrix}
-2 & 2 & 0 \\
1 & -2 & 2 \\
0 & 1 & -2
\end{pmatrix}$

Row reduction:
$\begin{pmatrix}
-2 & 2 & 0 \\
1 & -2 & 2 \\
0 & 1 & -2
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & -1 & 0 \\
0 & -1 & 2 \\
0 & 1 & -2
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & -1 & 0 \\
0 & 1 & -2 \\
0 & 0 & 0
\end{pmatrix}$

From the reduced form: $x_1 = x_2$ and $x_2 = 2x_3$
So $v_1 = \begin{pmatrix} 2 \\ 2 \\ 1 \end{pmatrix}$

For $\lambda = -1$: Solve $(A + I)x = 0$

$(A + I) = \begin{pmatrix}
0 & 2 & 0 \\
1 & 0 & 2 \\
0 & 1 & 0
\end{pmatrix}$

Row reduction leads to: $v_2 = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$

For $\lambda = -3$: Solve $(A + 3I)x = 0$

$(A + 3I) = \begin{pmatrix}
2 & 2 & 0 \\
1 & 2 & 2 \\
0 & 1 & 2
\end{pmatrix}$

Row reduction leads to: $v_3 = \begin{pmatrix} 0 \\ 2 \\ 1 \end{pmatrix}$

**Step 3**: Construct matrix $P$

$P = \begin{pmatrix}
2 & 2 & 0 \\
2 & 0 & 2 \\
1 & 1 & 1
\end{pmatrix}$

The columns are the eigenvectors in the order corresponding to the eigenvalues 1, -1, -3.

### Part (b)

**Step 1**: Express $A$ using diagonalization

$A = P\begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & -3 \end{pmatrix}P^{-1}$

**Step 2**: Compute $(A/5)^n$

$\left(\frac{A}{5}\right)^n = P\left(\frac{1}{5}\begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & -3 \end{pmatrix}\right)^nP^{-1}$

$= P\begin{pmatrix} (1/5)^n & 0 & 0 \\ 0 & (-1/5)^n & 0 \\ 0 & 0 & (-3/5)^n \end{pmatrix}P^{-1}$

**Step 3**: Evaluate the limit

As $n \to \infty$:
- $(1/5)^n \to 0$ since $|1/5| < 1$
- $(-1/5)^n \to 0$ since $|-1/5| < 1$
- $(-3/5)^n \to 0$ since $|-3/5| < 1$

Therefore:
$\lim_{n \to \infty} \left(\frac{A}{5}\right)^n = P\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}P^{-1} = 0$

## Key Insights

1. The target diagonal matrix immediately tells us the eigenvalues
2. Eigenvector order in $P$ must match eigenvalue order
3. For matrix powers, diagonalization dramatically simplifies calculation
4. Limits of powers depend on whether eigenvalues have absolute value less than 1

## Common Errors

1. Calculating characteristic polynomial incorrectly
2. Finding eigenvectors but placing them in wrong order in $P$
3. Forgetting to divide by 5 in the matrix power calculation
4. Misunderstanding the convergence condition for limits
