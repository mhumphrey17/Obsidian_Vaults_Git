---
title: "2019-Q02-Solution: Parametric Linear Systems Analysis"
aliases: ["Solution to 2019 Q2"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2019", "difficulty-standard", "linear-systems", "parametric", "gaussian-elimination"]
related_question: [[2019-Q02]]
---

# 2019-Q02-Solution: Parametric Linear Systems Analysis

## Original Question
For each fixed $t \in \mathbb{R}$, consider the linear system:
$$
\begin{aligned}
x-y+3 z & =2 \\
-3 x+5 y-5 z & =-6 \\
2 x+3 y+t^{2} z & =t
\end{aligned}
$$

Find values of $t$ for which the system has:
(a) no solution
(b) a unique solution
(c) infinitely many solutions

## Solution Process

### Setting up the augmented matrix
We start with the augmented matrix:
$$\begin{pmatrix} 1 & -1 & 3 & | & 2 \\ -3 & 5 & -5 & | & -6 \\ 2 & 3 & t^2 & | & t \end{pmatrix}$$

### Row reduction
Perform the following row operations:
- $R_2 \rightarrow R_2 + 3R_1$
- $R_3 \rightarrow R_3 - 2R_1$

$$\begin{pmatrix} 1 & -1 & 3 & | & 2 \\ 0 & 2 & 4 & | & 0 \\ 0 & 5 & t^2-6 & | & t-4 \end{pmatrix}$$

Scale $R_2$ by $\frac{1}{2}$:
$$\begin{pmatrix} 1 & -1 & 3 & | & 2 \\ 0 & 1 & 2 & | & 0 \\ 0 & 5 & t^2-6 & | & t-4 \end{pmatrix}$$

Perform $R_3 \rightarrow R_3 - 5R_2$:
$$\begin{pmatrix} 1 & -1 & 3 & | & 2 \\ 0 & 1 & 2 & | & 0 \\ 0 & 0 & t^2-16 & | & t-4 \end{pmatrix}$$

### Analysis by cases

**(a) No solution occurs when:**
- The last row is $(0 \quad 0 \quad 0 \quad | \quad c)$ where $c \neq 0$
- This happens when $t^2-16=0$ and $t-4 \neq 0$
- $t^2-16=0 \Rightarrow t=\pm 4$
- $t-4 \neq 0 \Rightarrow t \neq 4$
- Therefore: **no solution when $t=-4$**

**(b) Unique solution occurs when:**
- The coefficient matrix has full rank (rank 3)
- This happens when $t^2-16 \neq 0$
- Therefore: **unique solution when $t \neq \pm 4$**

For $t \neq \pm 4$, we solve the system:
- From row 3: $(t^2-16)z = t-4$
- Since $t \neq 4$, we have: $z = \frac{t-4}{(t-4)(t+4)} = \frac{1}{t+4}$
- From row 2: $y + 2z = 0 \Rightarrow y = -2z = -\frac{2}{t+4}$
- From row 1: $x - y + 3z = 2 \Rightarrow x = 2 + y - 3z = 2 - \frac{5}{t+4}$

**Unique solution:** $(x,y,z) = \left(2-\frac{5}{t+4}, -\frac{2}{t+4}, \frac{1}{t+4}\right)$

**(c) Infinitely many solutions occur when:**
- The last row is $(0 \quad 0 \quad 0 \quad | \quad 0)$
- This happens when $t^2-16=0$ and $t-4=0$
- Both conditions give $t=4$
- Therefore: **infinitely many solutions when $t=4$**

## Key Steps and Justifications
1. Used Gaussian elimination to row-reduce the augmented matrix
2. Applied rank conditions for different solution types
3. Solved the parametric equations systematically
4. Verified cases by checking when the last row becomes trivial

## Alternative Approaches
Could use determinant methods, but row reduction is more systematic for analyzing all cases.

## Common Mistakes
- Forgetting to check both conditions for no solution
- Algebraic errors in solving for variables in terms of $t$
- Misinterpreting the meaning of rank conditions

## Mark Scheme Breakdown
- Part (a): 2-3 marks for correct identification of $t=-4$
- Part (b): 3-4 marks (1-2 for condition, 2 for finding solution)
- Part (c): 1-2 marks for correct identification of $t=4$