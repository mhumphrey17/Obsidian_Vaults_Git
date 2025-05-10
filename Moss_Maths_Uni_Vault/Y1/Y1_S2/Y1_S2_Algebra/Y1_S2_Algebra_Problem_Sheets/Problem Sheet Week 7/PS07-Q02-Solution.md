---
title: "PS07-Q02-Solution: Eigenvalues of Nilpotent Operators"
aliases: ["Solution to PS7 Q2"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-07", "difficulty-warmup", "nilpotent", "eigenvalues", "theoretical"]
related_problem: [[PS07-Q02]]
---

# PS07-Q02-Solution: Eigenvalues of Nilpotent Operators

## Original Problem
An operator $\phi: V \rightarrow V$ is called nilpotent if $\phi^{N}=0$ for some $N \geq 1$. Show that, if $V \neq\{0\}$, then 0 is an eigenvalue of $\phi$ and it is the only eigenvalue.

## Solution Process

### Part 1: Proving 0 is an Eigenvalue

We need to show that $\ker(\phi) \neq \{0\}$, which means there exists a non-zero vector $\mathbf{v}$ such that $\phi(\mathbf{v}) = 0$.

**Case 1: $\phi = 0$ (the zero operator)**
If $\phi$ is the zero operator, then $\phi(\mathbf{v}) = 0$ for all $\mathbf{v} \in V$. Since $V \neq \{0\}$, any non-zero vector is an eigenvector with eigenvalue 0.

**Case 2: $\phi \neq 0$**
Let $N$ be the smallest positive integer such that $\phi^N = 0$. Then $\phi^{N-1} \neq 0$.

Since $\phi^{N-1} \neq 0$, there exists some $\mathbf{w} \in V$ such that $\phi^{N-1}(\mathbf{w}) \neq \mathbf{0}$.

Let $\mathbf{v} = \phi^{N-1}(\mathbf{w})$. Then:
- $\mathbf{v} \neq \mathbf{0}$ (by our choice of $\mathbf{w}$)
- $\phi(\mathbf{v}) = \phi(\phi^{N-1}(\mathbf{w})) = \phi^N(\mathbf{w}) = \mathbf{0}$

Therefore, $\mathbf{v}$ is a non-zero eigenvector with eigenvalue 0, proving that 0 is an eigenvalue.

**Alternative Proof:**
Using the fact that $\phi^N = 0$:
- $\det(\phi^N) = 0$ (since $\phi^N$ is the zero operator)
- By the product formula: $\det(\phi^N) = (\det(\phi))^N$
- Therefore $(\det(\phi))^N = 0$, which implies $\det(\phi) = 0$
- A matrix with zero determinant is not invertible, so $\ker(\phi) \neq \{0\}$

### Part 2: Proving 0 is the Only Eigenvalue

Suppose $\lambda$ is an eigenvalue of $\phi$ with eigenvector $\mathbf{v} \neq \mathbf{0}$.

Then for any positive integer $n$:
$$\phi^n(\mathbf{v}) = \lambda^n\mathbf{v}$$

Since $\phi^N = 0$ for some $N$:
$$\phi^N(\mathbf{v}) = \lambda^N\mathbf{v} = \mathbf{0}$$

Since $\mathbf{v} \neq \mathbf{0}$, we must have $\lambda^N = 0$.

In any field, the only solution to $\lambda^N = 0$ is $\lambda = 0$.

Therefore, 0 is the only eigenvalue of $\phi$.

## Key Insights
- Nilpotent operators always have 0 as an eigenvalue (if the space is non-trivial)
- The nilpotent property forces all eigenvalues to be zero
- This result shows that nilpotent operators are never diagonalizable unless they're the zero operator
- The proof uses both constructive and determinant-based approaches

## Alternative Approaches
1. Could use the characteristic polynomial approach: if $\phi^N = 0$, then the minimal polynomial divides $t^N$
2. Could use induction on the nilpotency index $N$
3. Could use the Jordan normal form theory

## Common Mistakes
- Assuming $\phi$ is diagonalizable (nilpotent operators generally aren't)
- Not considering the case when $\phi = 0$
- Forgetting that "field" requirements affect the solution to $\lambda^N = 0$
- Not properly constructing the eigenvector in the direct proof

## Theoretical Significance
This result is fundamental in understanding the structure of linear operators:
- It characterizes nilpotent operators in terms of their spectrum
- It explains why nilpotent operators can't be diagonalized (except the zero operator)
- It's a key step in proving the Jordan normal form theorem
