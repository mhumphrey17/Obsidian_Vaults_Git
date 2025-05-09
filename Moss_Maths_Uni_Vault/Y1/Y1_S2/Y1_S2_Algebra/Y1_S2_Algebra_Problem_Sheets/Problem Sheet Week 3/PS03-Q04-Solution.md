---
title: "PS03-Q04-Solution: Basis for Column Space"
aliases: ["Solution to PS03 Q04"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-03", "difficulty-homework", "column-space", "basis", "sifting-algorithm"]
related_problem: [[PS03-Q04]]
---

# PS03-Q04-Solution: Basis for Column Space

## Original Problem

Find a basis for the column space of each matrix working over $\mathbb{Q}$:

(i) $A = \begin{pmatrix}
0 & 1 & 2 & 1 & 0 \\
0 & 2 & 1 & 1 & 1 \\
0 & 1 & 2 & 1 & 0
\end{pmatrix}$

(ii) $B = \begin{pmatrix}
1 & 0 & 1 & 2 & 0 \\
1 & 1 & 0 & 1 & 1 \\
0 & 1 & 2 & 1 & 0
\end{pmatrix}$

## Solution Process

### Part (i): Matrix A

Let's denote the columns of $A$ as $v_1, v_2, v_3, v_4, v_5$.

$$v_1 = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}, \quad v_2 = \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}, \quad v_3 = \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}, \quad v_4 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}, \quad v_5 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$$

**Sifting Algorithm:**

1. $v_1 = \mathbf{0}$, so delete it (zero vectors are always dependent)

2. $v_2 \neq \mathbf{0}$, so keep it

3. Check if $v_3$ is a multiple of $v_2$: Is $v_3 = \lambda v_2$ for some $\lambda$?
   This would require $\begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix} = \lambda \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$
   
   From the first coordinate: $\lambda = 2$
   From the second coordinate: $\lambda = \frac{1}{2}$
   
   Since these are inconsistent, $v_3$ is not a multiple of $v_2$. Keep $v_3$.

4. Check if $v_4$ is a linear combination of $v_2$ and $v_3$:
   We need to solve: $v_4 = \alpha v_2 + \beta v_3$
   
   $$\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \alpha \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix} + \beta \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$$
   
   This gives us the system:
   - $\alpha + 2\beta = 1$
   - $2\alpha + \beta = 1$
   - $\alpha + 2\beta = 1$
   
   Solving: From equations 1 and 2:
   - $\alpha + 2\beta = 1$
   - $2\alpha + \beta = 1$
   
   Multiply first by 2: $2\alpha + 4\beta = 2$
   Subtract second: $3\beta = 1$, so $\beta = \frac{1}{3}$
   
   Substituting back: $\alpha = 1 - 2(\frac{1}{3}) = \frac{1}{3}$
   
   Verification: $v_4 = \frac{1}{3}v_2 + \frac{1}{3}v_3$. Delete $v_4$.

5. Check if $v_5$ is a linear combination of $v_2$ and $v_3$:
   We need to solve: $v_5 = \alpha v_2 + \beta v_3$
   
   $$\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \alpha \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix} + \beta \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$$
   
   This gives us:
   - $\alpha + 2\beta = 0$
   - $2\alpha + \beta = 1$
   - $\alpha + 2\beta = 0$
   
   From the first equation: $\alpha = -2\beta$
   Substituting into the second: $2(-2\beta) + \beta = 1$
   $-4\beta + \beta = 1$
   $-3\beta = 1$
   $\beta = -\frac{1}{3}$
   
   Therefore: $\alpha = -2(-\frac{1}{3}) = \frac{2}{3}$
   
   Verification: $v_5 = \frac{2}{3}v_2 - \frac{1}{3}v_3$. Delete $v_5$.

**Result for part (i):** The basis is $\{v_2, v_3\}$, which is:
$$\left\{\begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}, \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}\right\}$$

### Part (ii): Matrix B

Let's denote the columns of $B$ as $v_1, v_2, v_3, v_4, v_5$.

$$v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \quad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \quad v_3 = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}, \quad v_4 = \begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}, \quad v_5 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$$

**Sifting Algorithm:**

1. $v_1 \neq \mathbf{0}$, keep it

2. $v_2$ is not a multiple of $v_1$ (different patterns), keep it

3. Check if $v_3$ is a linear combination of $v_1$ and $v_2$:
   Could $v_3 = v_1 + 2v_2$?
   
   $v_1 + 2v_2 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + 2\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 3 \\ 2 \end{pmatrix} \neq v_3$
   
   By examining the patterns, $v_3$ cannot be written as a combination of $v_1$ and $v_2$. Keep $v_3$.

4. Check if $v_4$ is a linear combination of $v_1, v_2, v_3$:
   We need: $v_4 = \alpha v_1 + \beta v_2 + \gamma v_3$
   
   $$\begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix} = \alpha \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + \beta \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} + \gamma \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}$$
   
   This gives us:
   - $\alpha + \gamma = 2$
   - $\alpha + \beta = 1$
   - $\beta + 2\gamma = 1$
   
   From equations 1 and 2: $\gamma - \beta = 1$
   From equation 3: $\beta + 2\gamma = 1$
   
   Adding these: $3\gamma = 2$, so $\gamma = \frac{2}{3}$
   Then: $\beta = \gamma - 1 = -\frac{1}{3}$
   And: $\alpha = 1 - \beta = \frac{4}{3}$
   
   Verification: $v_4 = \frac{4}{3}v_1 - \frac{1}{3}v_2 + \frac{2}{3}v_3$. Delete $v_4$.

5. Check if $v_5$ is a linear combination of $v_1, v_2, v_3$:
   We need: $v_5 = \alpha v_1 + \beta v_2 + \gamma v_3$
   
   Solving the system shows: $v_5 = -\frac{1}{3}v_1 + \frac{1}{3}v_3 - \frac{1}{3}v_2$. Delete $v_5$.

**Result for part (ii):** The basis is $\{v_1, v_2, v_3\}$, which is:
$$\left\{\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}\right\}$$

## Key Insights

1. **Systematic Approach**: The sifting algorithm provides a reliable method to find bases
2. **Dimension Information**: Matrix A has column space dimension 2, Matrix B has dimension 3
3. **Independence Testing**: Each step requires checking linear dependence relationships
4. **Fractions in Rational Field**: Working over $\mathbb{Q}$ means we can have fractional coefficients

## Alternative Methods

- Row reduction on the matrix could also identify pivot columns
- Gram-Schmidt could be used to orthogonalize the basis (though not required here)

## Common Mistakes

1. Not systematically checking each column
2. Making arithmetic errors in linear combination equations
3. Forgetting to verify the linear dependence relationships
4. Keeping dependent vectors in the final basis
