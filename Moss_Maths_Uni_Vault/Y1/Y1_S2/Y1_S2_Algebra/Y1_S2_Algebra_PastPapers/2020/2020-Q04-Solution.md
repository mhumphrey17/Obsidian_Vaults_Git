---
title: "2020-Q04-Solution: Determinant of Linear Operator and Isomorphism"
aliases: ["Solution to 2020 Q4"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2020", "difficulty-challenging", "determinant", "isomorphism", "linear-operator"]
related_question: [[2020-Q04]]
---

# 2020-Q04-Solution: Determinant of Linear Operator and Isomorphism

## Original Question
Let $\alpha: v_{1}, v_{2}, v_{3}, v_{4}$ be a basis of the vector space $V$ over $\mathbb{C}$ and let $\phi: V \rightarrow V$ be the linear operator such that for any $1 \leq i \leq 4$,
$$\phi\left(v_{i}\right)=a v_{i}+b \sum_{j=1}^{4} v_{j}$$
where $a$ and $b$ are two complex numbers.

(a) Compute the determinant of $\phi$.
(b) For what values of $a$ and $b$ is $\phi$ an isomorphism?

## Solution Process

### Part (a): Computing the determinant

First, we need to find the matrix representation of $\phi$ with respect to the basis $\alpha$.

For each basis vector $v_i$:
$$\phi(v_i) = av_i + b\sum_{j=1}^{4}v_j = av_i + b(v_1 + v_2 + v_3 + v_4)$$

For $i = 1$:
$$\phi(v_1) = av_1 + b(v_1 + v_2 + v_3 + v_4) = (a+b)v_1 + bv_2 + bv_3 + bv_4$$

For $i = 2$:
$$\phi(v_2) = av_2 + b(v_1 + v_2 + v_3 + v_4) = bv_1 + (a+b)v_2 + bv_3 + bv_4$$

For $i = 3$:
$$\phi(v_3) = av_3 + b(v_1 + v_2 + v_3 + v_4) = bv_1 + bv_2 + (a+b)v_3 + bv_4$$

For $i = 4$:
$$\phi(v_4) = av_4 + b(v_1 + v_2 + v_3 + v_4) = bv_1 + bv_2 + bv_3 + (a+b)v_4$$

The matrix representation is:
$$A = \begin{pmatrix}
a+b & b & b & b \\
b & a+b & b & b \\
b & b & a+b & b \\
b & b & b & a+b
\end{pmatrix}$$

To compute the determinant, we use row operations:

Add rows 2, 3, and 4 to row 1:
$$\det A = \begin{vmatrix}
a+4b & a+4b & a+4b & a+4b \\
b & a+b & b & b \\
b & b & a+b & b \\
b & b & b & a+b
\end{vmatrix}$$

Factor out $(a+4b)$ from row 1:
$$\det A = (a+4b) \begin{vmatrix}
1 & 1 & 1 & 1 \\
b & a+b & b & b \\
b & b & a+b & b \\
b & b & b & a+b
\end{vmatrix}$$

Subtract $b$ times row 1 from rows 2, 3, and 4:
$$\det A = (a+4b) \begin{vmatrix}
1 & 1 & 1 & 1 \\
0 & a & 0 & 0 \\
0 & 0 & a & 0 \\
0 & 0 & 0 & a
\end{vmatrix}$$

Since this is an upper triangular matrix, the determinant is the product of diagonal entries:
$$\det A = (a+4b) \cdot a^3 = a^3(a+4b)$$

Therefore, **$\det \phi = a^3(a+4b)$**.

### Part (b): Isomorphism condition

A linear operator $\phi$ is an isomorphism if and only if it is invertible (**DEF-1.3.5**).
A linear operator is invertible if and only if its determinant is non-zero (**COR-2.2.4**).

Therefore, $\phi$ is an isomorphism if and only if:
$$\det \phi \neq 0$$
$$a^3(a+4b) \neq 0$$

This requires both factors to be non-zero:
- $a^3 \neq 0 \Rightarrow a \neq 0$
- $a+4b \neq 0 \Rightarrow a \neq -4b$

**Answer**: $\phi$ is an isomorphism if and only if $a \neq 0$ and $a \neq -4b$.

## Key Steps and Justifications
1. Found the matrix representation by computing $\phi(v_i)$ for each basis vector (**DEF-1.6.1**)
2. Used row operations to compute the determinant (**PROP-2.2.3**)
3. Applied the property that upper triangular matrices have determinant equal to the product of diagonal entries
4. Used the equivalence between isomorphism and invertibility (**DEF-1.3.5**)
5. Applied the criterion that a matrix is invertible iff its determinant is non-zero (**COR-2.2.4**)

## Alternative Approaches
- Could compute eigenvalues and use the fact that determinant equals product of eigenvalues
- The eigenvalues are $a$ (with multiplicity 3) and $a+4b$ (with multiplicity 1)
- This gives $\det \phi = a^3(a+4b)$, confirming our result

## Common Mistakes
- Errors in setting up the matrix representation
- Computational errors in row operations
- Forgetting to check both conditions for the determinant to be non-zero
- Not recognizing the block structure that can simplify the determinant calculation

## Mark Scheme Breakdown
- Part (a): 4 marks
  - Correct matrix representation: 2 marks
  - Correct determinant calculation: 2 marks
- Part (b): 2 marks
  - Connecting isomorphism to invertibility: 0.5 marks
  - Applying determinant criterion: 0.5 marks
  - Finding correct conditions on $a$ and $b$: 1 mark
