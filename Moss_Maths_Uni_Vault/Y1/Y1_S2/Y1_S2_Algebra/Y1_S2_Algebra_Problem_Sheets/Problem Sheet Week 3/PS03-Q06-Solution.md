---
title: "PS03-Q06-Solution: Basis and Coordinates in Polynomial Space"
aliases: ["Solution to PS03 Q06"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-03", "difficulty-advanced", "polynomial-space", "lagrange-interpolation", "basis"]
related_problem: [[PS03-Q06]]
---

# PS03-Q06-Solution: Basis and Coordinates in Polynomial Space

## Original Problem

Let $V = \{f \in \mathbb{Q}[x] : \deg f \leq 2\}$ and consider:
$$f_1 = (x-2)(x-3), \quad f_2 = (x-1)(x-3), \quad f_3 = (x-1)(x-2)$$

(i) What is the dimension of $V$? Why?
(ii) Show that $f_1, f_2, f_3$ are independent and form a basis of $V$.
(iii) Find $g \in V$ with $g(1) = 5$, $g(2) = 7$, $g(3) = 1$.

## Solution Process

### Part (i): Dimension of V

The standard basis for $V$ is $\{1, x, x^2\}$.

Since $V$ consists of all polynomials of degree at most 2, and we have 3 linearly independent standard basis vectors, we conclude:

$$\dim V = 3$$

### Part (ii): Proving Linear Independence

To show $f_1, f_2, f_3$ are linearly independent, assume:
$$\lambda_1 f_1 + \lambda_2 f_2 + \lambda_3 f_3 = 0$$

**Key Insight:** Notice the special properties of these polynomials:
- $f_1(1) = (1-2)(1-3) = (-1)(-2) = 2$
- $f_1(2) = (2-2)(2-3) = 0$
- $f_1(3) = (3-2)(3-3) = 0$

- $f_2(1) = (1-1)(1-3) = 0$
- $f_2(2) = (2-1)(2-3) = (1)(-1) = -1$
- $f_2(3) = (3-1)(3-3) = 0$

- $f_3(1) = (1-1)(1-2) = 0$
- $f_3(2) = (2-1)(2-2) = 0$
- $f_3(3) = (3-1)(3-2) = (2)(1) = 2$

Evaluating the dependence equation at specific points:

**At $x = 1$:**
$$\lambda_1 f_1(1) + \lambda_2 f_2(1) + \lambda_3 f_3(1) = 0$$
$$2\lambda_1 + 0 + 0 = 0$$
$$\lambda_1 = 0$$

**At $x = 2$:**
$$\lambda_1 f_1(2) + \lambda_2 f_2(2) + \lambda_3 f_3(2) = 0$$
$$0 + (-1)\lambda_2 + 0 = 0$$
$$\lambda_2 = 0$$

**At $x = 3$:**
$$\lambda_1 f_1(3) + \lambda_2 f_2(3) + \lambda_3 f_3(3) = 0$$
$$0 + 0 + 2\lambda_3 = 0$$
$$\lambda_3 = 0$$

Therefore, $\lambda_1 = \lambda_2 = \lambda_3 = 0$, proving linear independence.

Since we have 3 linearly independent vectors in a 3-dimensional space, they form a basis of $V$. ✓

### Part (iii): Finding the Interpolating Polynomial

We want to find $g = \lambda_1 f_1 + \lambda_2 f_2 + \lambda_3 f_3$ such that:
- $g(1) = 5$
- $g(2) = 7$
- $g(3) = 1$

Using the evaluations from part (ii):

**At $x = 1$:**
$$g(1) = \lambda_1 f_1(1) + \lambda_2 f_2(1) + \lambda_3 f_3(1) = 2\lambda_1 = 5$$
$$\lambda_1 = \frac{5}{2}$$

**At $x = 2$:**
$$g(2) = \lambda_1 f_1(2) + \lambda_2 f_2(2) + \lambda_3 f_3(2) = -\lambda_2 = 7$$
$$\lambda_2 = -7$$

**At $x = 3$:**
$$g(3) = \lambda_1 f_1(3) + \lambda_2 f_2(3) + \lambda_3 f_3(3) = 2\lambda_3 = 1$$
$$\lambda_3 = \frac{1}{2}$$

Therefore:
$$g = \frac{5}{2}f_1 - 7f_2 + \frac{1}{2}f_3$$

**Expanding this:**
$$g = \frac{5}{2}(x^2-5x+6) - 7(x^2-4x+3) + \frac{1}{2}(x^2-3x+2)$$

$$= \frac{5}{2}x^2 - \frac{25}{2}x + 15 - 7x^2 + 28x - 21 + \frac{1}{2}x^2 - \frac{3}{2}x + 1$$

$$= \left(\frac{5}{2} - 7 + \frac{1}{2}\right)x^2 + \left(-\frac{25}{2} + 28 - \frac{3}{2}\right)x + (15 - 21 + 1)$$

$$= -4x^2 + 14x - 5$$

**Verification:**
- $g(1) = -4(1) + 14(1) - 5 = 5$ ✓
- $g(2) = -4(4) + 14(2) - 5 = -16 + 28 - 5 = 7$ ✓
- $g(3) = -4(9) + 14(3) - 5 = -36 + 42 - 5 = 1$ ✓

## Key Insights

1. **Lagrange Basis**: The polynomials $f_1, f_2, f_3$ form a Lagrange interpolation basis
2. **Strategic Choice**: Each polynomial vanishes at two of the three points, making evaluation trivial
3. **Orthogonality**: The basis has an orthogonality property under point evaluation
4. **Efficient Interpolation**: The basis makes interpolation calculations very straightforward

## Alternative Approach

We could solve this using the standard basis:
1. Set up $g(x) = ax^2 + bx + c$
2. Use the three conditions to get a 3×3 system
3. Solve for $a$, $b$, $c$

However, the Lagrange basis approach is more elegant and computationally simpler.

## General Pattern

This problem demonstrates the power of choosing the right basis. The Lagrange interpolation basis:
- $L_i(x_j) = \delta_{ij}$ (Kronecker delta)
- Makes interpolation problems trivial
- Generalizes to any set of distinct points

## Common Mistakes

1. Not recognizing the special evaluation properties of the polynomials
2. Making arithmetic errors in the polynomial expansion
3. Forgetting to verify the final answer
4. Not simplifying the final polynomial expression
