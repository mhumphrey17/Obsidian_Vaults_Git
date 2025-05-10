---
title: "2020-Q02-Solution: Linear Combinations and Spanning Sets in R³"
aliases: ["Solution to 2020 Q2"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2020", "difficulty-standard", "linear-combinations", "spanning"]
related_question: [[2020-Q02]]
---

# 2020-Q02-Solution: Linear Combinations and Spanning Sets in R³

## Original Question
Let $\mathbf{v}_{1}=\begin{pmatrix} 2 \\ 2 \\ -1 \end{pmatrix}$, $\mathbf{v}_{2}=\begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}$, $\mathbf{v}_{3}=\begin{pmatrix} 4 \\ 5 \\ s \end{pmatrix}$, $\mathbf{b}=\begin{pmatrix} 2 \\ 2 \\ t \end{pmatrix}$ be vectors in $\mathbb{R}^{3}$.

(a) For which values of $s$ is the list $\mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3}$ spanning in $\mathbb{R}^{3}$?
(b) For which values of $t$ can $\mathbf{b}$ be written as a linear combination of $\mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3}$?
(c) For the values of $t$ in (b), find the most general expression for $\mathbf{b}$ as a linear combination of $\mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3}$.

## Solution Process

### Part (a): Finding values of s for spanning

Since $\dim \mathbb{R}^3 = 3$, for 3 vectors to span $\mathbb{R}^3$, they must be linearly independent. We use Gaussian elimination on the augmented matrix:

$$\begin{pmatrix} 2 & 0 & 4 & 2 \\ 2 & 1 & 5 & 2 \\ -1 & 2 & s & t \end{pmatrix}$$

Row operations:
$$\xrightarrow{\frac{1}{2}R_1} \begin{pmatrix} 1 & 0 & 2 & 1 \\ 2 & 1 & 5 & 2 \\ -1 & 2 & s & t \end{pmatrix}$$

$$\xrightarrow{R_2-2R_1, R_3+R_1} \begin{pmatrix} 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 2 & s+2 & t+1 \end{pmatrix}$$

$$\xrightarrow{R_3-2R_2} \begin{pmatrix} 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & s & t+1 \end{pmatrix}$$

For the matrix formed by $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ to have rank 3 (and thus span $\mathbb{R}^3$), we need the last pivot element to be non-zero.

**Answer**: The list spans $\mathbb{R}^3$ when $s \neq 0$.

### Part (b): Values of t for linear combination

Using the row-reduced augmented matrix from part (a):

$$\begin{pmatrix} 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & s & t+1 \end{pmatrix}$$

For the system to be consistent (i.e., $\mathbf{b}$ can be written as a linear combination), we need rank$(A)$ = rank$(A | b)$.

**Case 1**: $s \neq 0$
- Rank of coefficient matrix is 3
- Since $s \neq 0$, the augmented matrix also has rank 3
- System is consistent for all values of $t$

**Case 2**: $s = 0$
- Rank of coefficient matrix is 2
- For consistency, the augmented matrix must also have rank 2
- This requires the last row to be all zeros: $0 \cdot x_3 = t+1$
- This is only possible when $t+1 = 0$, i.e., $t = -1$

**Answer**: $\mathbf{b}$ can be written as a linear combination when:
- $s \neq 0$ (for any value of $t$), or
- $s = 0$ and $t = -1$

### Part (c): General expression for $\mathbf{b}$

**Case 1**: $s \neq 0$
From the row-reduced matrix:
- $x_3 = \frac{t+1}{s}$
- $x_2 + x_3 = 0 \Rightarrow x_2 = -\frac{t+1}{s}$
- $x_1 + 2x_3 = 1 \Rightarrow x_1 = 1 - \frac{2(t+1)}{s}$

The unique expression is:
$$\mathbf{b} = \left(1-\frac{2(t+1)}{s}\right)\mathbf{v}_1 - \frac{t+1}{s}\mathbf{v}_2 + \frac{t+1}{s}\mathbf{v}_3$$

**Case 2**: $s = 0$ and $t = -1$
The row-reduced matrix becomes:
$$\begin{pmatrix} 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

The system is:
- $x_1 + 2x_3 = 1$
- $x_2 + x_3 = 0$

Let $x_3 = \lambda$ (free parameter). Then:
- $x_2 = -\lambda$
- $x_1 = 1 - 2\lambda$

The general expression is:
$$\mathbf{b} = (1-2\lambda)\mathbf{v}_1 - \lambda\mathbf{v}_2 + \lambda\mathbf{v}_3$$
where $\lambda \in \mathbb{R}$ is arbitrary.

## Key Steps and Justifications
1. Used Gaussian elimination to determine rank (**PROP-1.4.10**)
2. Applied the criterion that for 3 vectors to span $\mathbb{R}^3$, they must be linearly independent
3. Used the consistency condition: rank$(A)$ = rank$(A|b)$ for the system to have solutions
4. Found general solution by expressing in terms of free parameters

## Common Mistakes
- Not considering both cases based on the value of $s$
- Forgetting that when $s = 0$, the system might still have solutions for specific values of $t$
- Incorrectly setting up the row reduction
- Not expressing the general solution in terms of free parameters

## Mark Scheme Breakdown
- Part (a): 2 marks for correct row reduction and identification of spanning condition
- Part (b): 3 marks for finding both cases of consistency
- Part (c): 3 marks for finding general expressions in both cases
