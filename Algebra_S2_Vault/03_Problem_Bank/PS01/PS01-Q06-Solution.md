---
title: "PS01-Q06-Solution: Linearity of Map from Fn to V"
aliases: ["Solution to PS1 Q6", "Linearity of Linear Combination Map Solution"]
tags: ["solution", "algebra-s2", "ps-01", "difficulty-homework"]
related_problem: [[PS01-Q06]]
date_created: 2025-05-09
---
# PS01-Q06-Solution: Linearity of Map from Fn to V
## Original Problem
Let $\alpha$ denote a list of vectors $v_{1}, \ldots, v_{n}$ in a vector space $V$ and define a map

$$\phi_{\alpha}: \mathbb{F}^{n} \rightarrow V:\left(x_{1}, \ldots, x_{n}\right) \mapsto \sum_{i=1}^{n} x_{i} v_{i}$$

Show that $\phi_{\alpha}$ is a linear map, stating explicitly where you use a vector space axiom.

## Solution Process
To prove that $\phi_{\alpha}$ is a linear map, we need to show that for any scalars $\lambda, \mu \in \mathbb{F}$ and vectors $\mathbf{x}=\left(x_{1}, \ldots, x_{n}\right), \mathbf{y}=\left(y_{1}, \ldots, y_{n}\right) \in \mathbb{F}^{n}$:

$$\phi_{\alpha}(\lambda \mathbf{x}+\mu \mathbf{y})=\lambda \phi_{\alpha}(\mathbf{x})+\mu \phi_{\alpha}(\mathbf{y})$$

Let's work through this step by step:

1. First, evaluate the left side:
   $$\phi_{\alpha}\left(\lambda\left(x_{1}, \ldots, x_{n}\right)+\mu\left(y_{1}, \ldots, y_{n}\right)\right)=\phi_{\alpha}\left(\left(\lambda x_{1}+\mu y_{1}, \ldots, \lambda x_{n}+\mu y_{n}\right)\right)$$

2. Apply the definition of $\phi_{\alpha}$:
   $$=\sum_{i=1}^{n}\left(\lambda x_{i}+\mu y_{i}\right) v_{i}$$

3. Now, evaluate the right side:
   $$\lambda \phi_{\alpha}\left(\left(x_{1}, \ldots, x_{n}\right)\right)+\mu \phi_{\alpha}\left(\left(y_{1}, \ldots, y_{n}\right)\right)=\lambda \sum_{i=1}^{n} x_{i} v_{i}+\mu \sum_{i=1}^{n} y_{i} v_{i}$$

4. To show that both sides are equal, we need to manipulate the left side further. Using vector space axioms:
   
   Using vector space axioms (2) and (3) (distributivity of scalar multiplication over vector addition and scalar addition):
   $$\left(\lambda x_{i}+\mu y_{i}\right) v_{i}=\left(\lambda x_{i}\right) v_{i}+\left(\mu y_{i}\right) v_{i}=\lambda\left(x_{i} v_{i}\right)+\mu\left(y_{i} v_{i}\right)$$
   
   Then, using associativity (axiom 1) and commutativity (axiom 8) of vector addition:
   $$\sum_{i=1}^{n} \lambda\left(x_{i} v_{i}\right)+\mu\left(y_{i} v_{i}\right)=\sum_{i=1}^{n} \lambda\left(x_{i} v_{i}\right)+\sum_{i=1}^{n} \mu\left(y_{i} v_{i}\right)=\lambda \sum_{i=1}^{n} x_{i} v_{i}+\mu \sum_{i=1}^{n} y_{i} v_{i}$$

This shows that $\phi_{\alpha}(\lambda \mathbf{x}+\mu \mathbf{y})=\lambda \phi_{\alpha}(\mathbf{x})+\mu \phi_{\alpha}(\mathbf{y})$, proving that $\phi_{\alpha}$ is a linear map.

## Key Insights
1. The linearity of $\phi_{\alpha}$ depends critically on the vector space axioms, particularly distributivity, associativity, and commutativity.
2. This map $\phi_{\alpha}$ is fundamental as it encapsulates the concept of linear combinations, which is central to linear algebra.
3. The map can be thought of as "expanding" a vector in $\mathbb{F}^n$ to a vector in $V$ using the specified basis-like vectors $v_1, \ldots, v_n$.

## Alternative Approaches
Another approach would be to verify linearity directly for scalar multiplication and vector addition separately:
1. For scalar multiplication: Show $\phi_{\alpha}(\lambda \mathbf{x}) = \lambda \phi_{\alpha}(\mathbf{x})$
2. For vector addition: Show $\phi_{\alpha}(\mathbf{x} + \mathbf{y}) = \phi_{\alpha}(\mathbf{x}) + \phi_{\alpha}(\mathbf{y})$

## Common Mistakes
1. Forgetting to explicitly state which vector space axioms are being used
2. Not properly handling the indices in the summation when distributing scalars
3. Confusion between the field $\mathbb{F}$ operations and the vector space $V$ operations
4. Failing to recognize that linearity requires both preservation of addition and scalar multiplication
