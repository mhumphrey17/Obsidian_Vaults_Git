---
title: "PS03-Q01-Solution: Spanning Sum of Subspaces"
aliases: ["Solution to PS03 Q01"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-03", "difficulty-warmup", "sum-of-subspaces", "spanning"]
related_problem: [[PS03-Q01]]
---

# PS03-Q01-Solution: Spanning Sum of Subspaces

## Original Problem

Suppose that $U$ and $W$ are subspaces of $V$ and that $u_1, \ldots, u_m$ spans $U$ and $w_1, \ldots, w_n$ spans $W$. Show that the combined list $u_1, \ldots, u_m, w_1, \ldots, w_n$ spans the subspace $U + W$.

## Solution Process

**To show:** The combined list $u_1, \ldots, u_m, w_1, \ldots, w_n$ spans $U + W$.

**Proof:**
Let $v \in U + W$ be arbitrary. By the definition of sum of subspaces, we can write:
$$v = u + w$$
where $u \in U$ and $w \in W$.

Since $u_1, \ldots, u_m$ spans $U$, we can express $u$ as:
$$u = \lambda_1 u_1 + \lambda_2 u_2 + \cdots + \lambda_m u_m$$
for some scalars $\lambda_1, \ldots, \lambda_m$.

Similarly, since $w_1, \ldots, w_n$ spans $W$, we can express $w$ as:
$$w = \mu_1 w_1 + \mu_2 w_2 + \cdots + \mu_n w_n$$
for some scalars $\mu_1, \ldots, \mu_n$.

Substituting these expressions into our original equation:
$$v = u + w = (\lambda_1 u_1 + \cdots + \lambda_m u_m) + (\mu_1 w_1 + \cdots + \mu_n w_n)$$

Regrouping terms:
$$v = \lambda_1 u_1 + \cdots + \lambda_m u_m + \mu_1 w_1 + \cdots + \mu_n w_n$$

This shows that $v$ can be written as a linear combination of the vectors in the combined list $u_1, \ldots, u_m, w_1, \ldots, w_n$.

Since $v$ was an arbitrary element of $U + W$, we have proven that every element of $U + W$ is in the span of the combined list.

Therefore, the combined list spans $U + W$. ∎

## Key Insights

1. **Constructive Proof**: We explicitly construct a linear combination for any vector in U + W
2. **Separate Representations**: We use the spanning properties of U and W separately before combining
3. **Definition of Sum**: The proof directly uses the definition of sum of subspaces

## Alternative Perspective

**Set Inclusion Approach:**
- We need to show: $\text{span}\{u_1, \ldots, u_m, w_1, \ldots, w_n\} \supseteq U + W$
- Since the span contains all $u_i$ and $w_j$, it contains $U$ and $W$
- Since the span is closed under addition, it contains $U + W$

## Common Mistakes

1. Trying to show equality instead of just spanning (the combined list might contain more than U + W)
2. Not using the definition of sum of subspaces correctly
3. Forgetting that spanning means "can be written as a linear combination"

## Extensions

- This result generalizes to the sum of any finite number of subspaces
- The combined list need not be linearly independent (it often won't be)
- The dimension formula: $\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$
