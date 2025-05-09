---
title: "PS01-Q08-Solution: Subspaces of Function Spaces"
aliases: ["Solution to PS1 Q8", "Differential Equations as Subspaces Solution"]
tags: ["solution", "algebra-s2", "ps-01", "difficulty-advanced"]
related_problem: [[PS01-Q08]]
date_created: 2025-05-09
---
# PS01-Q08-Solution: Subspaces of Function Spaces
## Original Problem
Let $V=C^{\infty}(\mathbb{R})$ be the vector space of infinitely differentiable functions $f: \mathbb{R} \rightarrow \mathbb{R}$. Which of the following are linear subspaces of $V$? Give reasons.

(i) the solutions of $\frac{d^{2} f}{d x^{2}}+4 f=0$,
(ii) the solutions of $\frac{d^{2} f}{d x^{2}}+4 x^{2}=0$.

## Solution Process
For a subset of vector space $V$ to be a subspace, it must:
1. Contain the zero vector (zero function in this case)
2. Be closed under addition
3. Be closed under scalar multiplication

### Part (i): Solutions of $\frac{d^{2} f}{d x^{2}}+4 f=0$

**Step 1**: Check if the zero function is a solution.
If $f(x) = 0$ for all $x$, then $\frac{d^{2} f}{d x^{2}} = 0$ and $4f = 0$.
So $\frac{d^{2} f}{d x^{2}}+4 f = 0 + 0 = 0$.
Therefore, the zero function is a solution.

**Step 2**: Check closure under addition and scalar multiplication.
Suppose $f$ and $g$ are both solutions to the equation, and let $h = \lambda f + \mu g$ for some scalars $\lambda, \mu \in \mathbb{R}$.

Then:
$$
\begin{aligned}
\frac{d^{2} h}{d x^{2}}+4 h &= \frac{d^{2}(\lambda f + \mu g)}{d x^{2}}+4(\lambda f + \mu g) \\
&= \lambda \frac{d^{2} f}{d x^{2}}+\mu \frac{d^{2} g}{d x^{2}}+4\lambda f + 4\mu g \\
&= \lambda \left(\frac{d^{2} f}{d x^{2}}+4 f\right)+\mu \left(\frac{d^{2} g}{d x^{2}}+4 g\right) \\
&= \lambda \cdot 0 + \mu \cdot 0 \\
&= 0
\end{aligned}
$$

Since $h$ is also a solution, the set of solutions is closed under linear combinations.

Therefore, the solutions of $\frac{d^{2} f}{d x^{2}}+4 f=0$ form a linear subspace of $V$.

### Part (ii): Solutions of $\frac{d^{2} f}{d x^{2}}+4 x^{2}=0$

**Step 1**: Check if the zero function is a solution.
If $f(x) = 0$ for all $x$, then $\frac{d^{2} f}{d x^{2}} = 0$.
So $\frac{d^{2} f}{d x^{2}}+4 x^{2} = 0 + 4x^{2} = 4x^{2} \neq 0$ for $x \neq 0$.

Since the zero function is not a solution, the set cannot be a subspace of $V$.

## Key Insights
1. Homogeneous linear differential equations (those equal to 0 with no constant terms) generally define subspaces in the space of functions.
2. Non-homogeneous equations (like part ii) do not define subspaces because they fail the zero vector test.
3. The linearity of differential operators ensures that linear combinations of solutions to homogeneous equations remain solutions.

## Alternative Approaches
For part (i), we could also note that this is a homogeneous second-order linear differential equation with constant coefficients. The general solution is of the form $f(x) = A\cos(2x) + B\sin(2x)$ where $A,B \in \mathbb{R}$. This directly shows that the solution space is a 2-dimensional subspace of $V$.

## Common Mistakes
1. Forgetting to check if the zero function satisfies the differential equation
2. Not recognizing that non-homogeneous differential equations never define subspaces
3. Failing to properly verify closure under linear combinations
4. Confusing the conditions for a set to be a subspace with other properties of differential equations
