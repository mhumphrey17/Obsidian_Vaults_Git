---
title: "PS08-Q07-Solution: Characteristic Polynomial from a Cyclic Vector"
aliases: ["Solution to PS8 Q7"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-08", "difficulty-advanced", "characteristic-polynomial", "companion-matrix"]
related_problem: [[PS08-Q07]]
---

# PS08-Q07-Solution: Characteristic Polynomial from a Cyclic Vector

## Original Problem
Let $\phi: V \rightarrow V$ be a linear operator, and suppose that there is some $v \in V$ such that $v, \phi(v), \ldots, \phi^{n-1}(v)$ is a basis of $V$. Let $\mathbf{a} = (a_i) \in \mathbb{F}^n$ be the coordinate vector that represents $-\phi^n(v)$ with respect to this basis, i.e.

$$-\phi^n(v) = a_1 v + a_2 \phi(v) + \cdots + a_n \phi^{n-1}(v)$$

Show that the characteristic polynomial of $\phi$ is

$$(-1)^n(t^n + a_n t^{n-1} + \cdots + a_1)$$

## Solution Process

### Step 1: Find the matrix representation
With respect to the basis $\mathcal{B} = \{v, \phi(v), \phi^2(v), \ldots, \phi^{n-1}(v)\}$, we compute the matrix representation of $\phi$:

- $\phi(v) = \phi(v)$ → coordinate vector $(0, 1, 0, \ldots, 0)$
- $\phi(\phi(v)) = \phi^2(v)$ → coordinate vector $(0, 0, 1, 0, \ldots, 0)$
- $\vdots$
- $\phi(\phi^{n-2}(v)) = \phi^{n-1}(v)$ → coordinate vector $(0, 0, \ldots, 0, 1)$
- $\phi(\phi^{n-1}(v)) = \phi^n(v) = -a_1 v - a_2 \phi(v) - \cdots - a_n \phi^{n-1}(v)$

Therefore, the matrix of $\phi$ with respect to $\mathcal{B}$ is:

$$A = \begin{pmatrix}
0 & 0 & \cdots & 0 & -a_1 \\
1 & 0 & \cdots & 0 & -a_2 \\
0 & 1 & \cdots & 0 & -a_3 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & \cdots & 1 & -a_n
\end{pmatrix}$$

This is known as the companion matrix of the polynomial $p(t) = t^n + a_n t^{n-1} + \cdots + a_1$.

### Step 2: Compute the characteristic polynomial
We need to compute $\det(A - tI_n)$:

$$A - tI_n = \begin{pmatrix}
-t & 0 & \cdots & 0 & -a_1 \\
1 & -t & \cdots & 0 & -a_2 \\
0 & 1 & \cdots & 0 & -a_3 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & \cdots & 1 & -a_n - t
\end{pmatrix}$$

### Step 3: Use induction to compute determinant
**Claim**: $\det(A - tI_n) = (-1)^n(t^n + a_n t^{n-1} + \cdots + a_1)$

**Proof by induction**:

Base case: For $n = 1$, $A - tI_1 = (-a_1 - t)$, so $\det(A - tI_1) = -a_1 - t = -(t + a_1) = (-1)^1(t + a_1)$. ✓

Inductive step: Assume the claim holds for $n-1$. We expand $\det(A - tI_n)$ along the first row:

$$\det(A - tI_n) = (-t) \det(A' - tI_{n-1}) + (-1)^{n+1}(-a_1) \mu_{1n}$$

where $A'$ is the $(n-1) \times (n-1)$ submatrix obtained by removing the first row and first column, and $\mu_{1n}$ is the $(1,n)$-minor.

Note that $A'$ has the same companion matrix form for $t^{n-1} + a_n t^{n-2} + \cdots + a_2$.

By induction hypothesis: $\det(A' - tI_{n-1}) = (-1)^{n-1}(t^{n-1} + a_n t^{n-2} + \cdots + a_2)$

For the minor $\mu_{1n}$: It's the determinant of an upper triangular matrix with ones on the diagonal, so $\mu_{1n} = 1$.

Therefore:
$$\det(A - tI_n) = (-t)(-1)^{n-1}(t^{n-1} + a_n t^{n-2} + \cdots + a_2) + (-1)^{n+1}(-a_1)(1)$$
$$= (-1)^n t(t^{n-1} + a_n t^{n-2} + \cdots + a_2) + (-1)^n a_1$$
$$= (-1)^n(t^n + a_n t^{n-1} + \cdots + a_2 t + a_1)$$

## Key Insights
- The cyclic vector creates a natural basis that reveals the companion matrix structure
- The companion matrix directly encodes the characteristic polynomial
- This construction provides a canonical form for linear operators with cyclic vectors
- The sign pattern $(-1)^n$ comes from the determinant computation

## Alternative Approaches
1. Direct computation using cofactor expansion along the last column
2. Use the fact that the characteristic polynomial of the companion matrix is known
3. Apply Cayley-Hamilton theorem in reverse

## Common Mistakes
- Incorrect sign handling during determinant computation
- Misunderstanding the structure of the companion matrix
- Confusing the order of coefficients in the polynomial representation
- Incorrect application of induction

## Notes
- This result connects linear algebra to polynomial theory
- Every operator with a cyclic vector has companion matrix form in some basis
- The construction is fundamental in control theory and system identification
- The cyclic vector generalizes the concept of eigenvector
