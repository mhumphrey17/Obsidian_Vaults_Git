---
title: "PS08-Q08-Solution: Constructing a Matrix with a Given Characteristic Polynomial"
aliases: ["Solution to PS8 Q8"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-08", "difficulty-advanced", "characteristic-polynomial", "companion-matrix"]
related_problem: [[PS08-Q08]]
---

# PS08-Q08-Solution: Constructing a Matrix with a Given Characteristic Polynomial

## Original Problem
For any degree $n$ polynomial $f(t) \in \mathbb{F}[t]$ with the coefficient of the leading term (i.e. the $t^n$ term) $(-1)^n$, find a matrix $A \in M_{n,n}(\mathbb{F})$ such that

$$\Delta_A(t) = f(t)$$

## Solution Process

### Step 1: Write the polynomial in standard form
Given: $f(t)$ has leading coefficient $(-1)^n$

We can write: $f(t) = (-1)^n(t^n + a_n t^{n-1} + \cdots + a_1)$

for some coefficients $a_1, a_2, \ldots, a_n \in \mathbb{F}$.

### Step 2: Apply the result from Q7
From Problem Q7, we know that if $\phi$ has a cyclic vector $v$ such that 
$$-\phi^n(v) = a_1 v + a_2 \phi(v) + \cdots + a_n \phi^{n-1}(v)$$

then the characteristic polynomial of $\phi$ is $(-1)^n(t^n + a_n t^{n-1} + \cdots + a_1)$.

### Step 3: Construct the companion matrix
By reversing the construction in Q7, we define:

$$A = \begin{pmatrix}
0 & 0 & \cdots & 0 & -a_1 \\
1 & 0 & \cdots & 0 & -a_2 \\
0 & 1 & \cdots & 0 & -a_3 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & \cdots & 1 & -a_n
\end{pmatrix}$$

This is called the companion matrix of the polynomial $t^n + a_n t^{n-1} + \cdots + a_1$.

### Step 4: Verify the characteristic polynomial
By the computation in Q7, the characteristic polynomial of this matrix is:

$$\det(A - tI) = (-1)^n(t^n + a_n t^{n-1} + \cdots + a_1) = f(t)$$

Therefore, the companion matrix $A$ has the desired characteristic polynomial.

## Summary
Given any polynomial $f(t) = (-1)^n(t^n + a_n t^{n-1} + \cdots + a_1)$, the companion matrix

$$A = \begin{pmatrix}
0 & 0 & \cdots & 0 & -a_1 \\
1 & 0 & \cdots & 0 & -a_2 \\
0 & 1 & \cdots & 0 & -a_3 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & \cdots & 1 & -a_n
\end{pmatrix}$$

has characteristic polynomial $\Delta_A(t) = f(t)$.

## Key Insights
- The companion matrix provides a canonical realization of any polynomial as a characteristic polynomial
- This construction is the inverse of the process in Q7
- The companion matrix has a special structure with coefficients in the last column
- This result shows that every polynomial can be realized as the characteristic polynomial of some matrix

## Alternative Approaches
1. We could use the Frobenius form (rational canonical form) more generally
2. The construction can be extended to matrices over any field
3. Block companion matrices can realize polynomials with repeated factors

## Common Mistakes
- Incorrect sign placement in the companion matrix
- Confusing the order of coefficients
- Not understanding that the leading coefficient must be $(-1)^n$
- Failing to recognize this as the inverse construction of Q7

## Notes
- This result is fundamental in control theory where systems are often specified by their transfer functions (polynomials)
- The companion matrix is always similar to its transpose
- The construction works over any field, including finite fields
- This provides an explicit proof that every polynomial is the characteristic polynomial of some matrix
