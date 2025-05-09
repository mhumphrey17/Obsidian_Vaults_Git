---
title: "PS01-Q01-Solution: Linear System Solvability and Invertibility"
aliases: ["Solution to PS1 Q1", "Linear System Solvability Solution"]
tags: [solution, algebra-s2, ps-01, difficulty-warmup]
related_problem: [[PS01-Q01]]
date_created: 2025-05-09
---

# PS01-Q01-Solution: Linear System Solvability and Invertibility

## Original Problem
True or False? The linear system $A \cdot x = b$ has a solution for every $b$ if and only if $A$ is invertible.

## Solution Process
The statement is **false**. Let's analyze why:

1. First, let's understand what the two conditions mean:
   - The system $A \cdot x = b$ has a solution for every $b$ means that the linear map $\phi_A: \mathbb{F}^n \rightarrow \mathbb{F}^m$ is **surjective** (the image of $\phi_A$ is the entire codomain $\mathbb{F}^m$).
   - $A$ is invertible means that the linear map $\phi_A$ is **bijective** (both injective and surjective).

2. For a linear map to be bijective, it must be both:
   - Injective: $\ker \phi_A = \{0\}$ (the kernel contains only the zero vector)
   - Surjective: $\text{Im } \phi_A = \mathbb{F}^m$ (the image is the entire codomain)

3. For a matrix $A$ to be invertible, it must be square ($n = m$) and have full rank.

4. The statement would be true if it said "unique solution" instead of just "solution," because:
   - Having a unique solution for every $b$ implies both existence (surjectivity) and uniqueness (injectivity).
   - Invertibility implies both injectivity and surjectivity.

5. However, the statement only mentions "a solution" (existence), which only guarantees surjectivity.

6. A non-square matrix can have a solution for every $b$ (be surjective) without being invertible. For example, a $2 \times 3$ matrix $A$ of rank 2 maps $\mathbb{R}^3$ onto $\mathbb{R}^2$, so $Ax = b$ has a solution for every $b \in \mathbb{R}^2$, but $A$ is not invertible.

## Key Insights
- A linear system $Ax = b$ has a solution for every $b$ if and only if the linear map $\phi_A$ is surjective.
- Surjectivity alone doesn't imply invertibility; we also need injectivity.
- For an $m \times n$ matrix:
  - If $m < n$: The system can be surjective (solution for every $b$) but can't be injective (always has infinite solutions).
  - If $m > n$: The system can be injective (at most one solution) but can't be surjective (not every $b$ has a solution).
  - If $m = n$: Surjectivity is equivalent to injectivity, both are equivalent to invertibility.

## Alternative Approaches
We could also approach this from the rank-nullity perspective:
- For a matrix $A$ of size $m \times n$, the system $Ax = b$ has a solution for every $b$ if and only if $\text{rank}(A) = m$.
- For $A$ to be invertible, we need $\text{rank}(A) = m = n$.
- Therefore, the original statement is only true when $A$ is square.

## Common Mistakes
- Confusing existence of solutions with uniqueness of solutions.
- Assuming all matrices in the problem are square.
- Not considering the relationship between the dimensions of the domain and codomain.
- Failing to recognize that surjectivity alone is not sufficient for invertibility.
