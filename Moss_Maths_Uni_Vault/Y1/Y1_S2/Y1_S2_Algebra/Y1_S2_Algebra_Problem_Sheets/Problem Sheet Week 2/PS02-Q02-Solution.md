---
title: "PS02-Q02-Solution: Linear Independence and Coordinates in Function Space"
aliases: ["Solution to PS02 Q02"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-02", "difficulty-warmup", "function-space", "linear-independence", "coordinate-vector", "exponential-functions"]
related_problem: [[PS02-Q02]]
---

# PS02-Q02-Solution: Linear Independence and Coordinates in Function Space

## Original Problem

Let $V$ be the subspace of $\mathbb{R}^{\mathbb{R}}$ spanned by $e^x$ and $e^{-x}$. 

(a) Show that $e^x$ and $e^{-x}$ are linearly independent.

(b) Compute the coordinate vector representing $h = \cosh(x)$ with respect to the basis $e^x, e^{-x}$.

## Solution Process

### Part (a): Proving Linear Independence

To show $e^x$ and $e^{-x}$ are linearly independent, we need to prove that if:
$$\lambda e^x + \mu e^{-x} = 0 \text{ (as functions)}$$

then $\lambda = \mu = 0$.

The zero function satisfies $f(x) = 0$ for all $x \in \mathbb{R}$. Let's evaluate our equation at two different values of $x$:

At $x = 0$:
$$\lambda e^0 + \mu e^{-0} = 0$$
$$\lambda(1) + \mu(1) = 0$$
$$\lambda + \mu = 0 \quad \text{...(1)}$$

At $x = 1$:
$$\lambda e^1 + \mu e^{-1} = 0$$
$$e\lambda + e^{-1}\mu = 0 \quad \text{...(2)}$$

From equation (1): $\mu = -\lambda$

Substituting into equation (2):
$$e\lambda + e^{-1}(-\lambda) = 0$$
$$e\lambda - e^{-1}\lambda = 0$$
$$\lambda(e - e^{-1}) = 0$$

Since $e - e^{-1} = e - \frac{1}{e} = \frac{e^2 - 1}{e} > 0$, we must have $\lambda = 0$.

From equation (1), if $\lambda = 0$, then $\mu = 0$.

Therefore, $e^x$ and $e^{-x}$ are linearly independent.

### Part (b): Finding the Coordinate Vector

We know that:
$$\cosh(x) = \frac{e^x + e^{-x}}{2}$$

Rewriting this:
$$\cosh(x) = \frac{1}{2}e^x + \frac{1}{2}e^{-x}$$

Since we want to express $\cosh(x)$ as a linear combination of the basis $\{e^x, e^{-x}\}$:
$$\cosh(x) = \lambda_1 e^x + \lambda_2 e^{-x}$$

Comparing with our expression above:
- $\lambda_1 = \frac{1}{2}$
- $\lambda_2 = \frac{1}{2}$

Therefore, the coordinate vector of $\cosh(x)$ with respect to the basis $\{e^x, e^{-x}\}$ is:
$$[\cosh(x)]_{\{e^x, e^{-x}\}} = \left(\frac{1}{2}, \frac{1}{2}\right)$$

## Key Insights

1. **Function Space as Vector Space**: Functions can be treated as vectors, with pointwise addition and scalar multiplication
2. **Point Evaluation for Independence**: Testing linear independence in function spaces often involves evaluating at specific points
3. **Coordinate Vectors**: Once we have a basis, any vector can be uniquely represented by its coordinate vector
4. **Basis Choice Matters**: The coordinate vector depends on the order of the basis vectors

## Alternative Approaches

1. For linear independence, we could use the [[Fundamental Lemma]] and show that the system has only the trivial solution
2. We could verify that the Wronskian determinant is non-zero at some point
3. For coordinates, we could solve the general system $\lambda_1 e^x + \lambda_2 e^{-x} = \cosh(x)$

## Common Mistakes

1. Forgetting that functions must be equal **for all** values of $x$ to be considered equal
2. Only testing one point for linear independence (need at least $n$ points for $n$ functions)
3. Confusing the hyperbolic cosine formula with its inverse
4. Writing coordinate vectors in the wrong order relative to the basis
