---
title: "PS01-Q05-Solution: Subspace Properties (Union, Sum)"
aliases: ["Solution to PS1 Q5", "Union and Sum of Subspaces Solution"]
tags: [solution, algebra-s2, ps-01, difficulty-homework]
related_problem: [[PS01-Q05]]
date_created: 2025-05-09
---

# PS01-Q05-Solution: Subspace Properties (Union, Sum)

## Original Problem
Let $V$ be a vector space with subspaces $U$ and $W$. Is $U \cup W$ a subspace of $V$? Is $U + W = \{v \in V: v = u + w \text{ for some } u \in U, w \in W\}$ a subspace of $V$? Give reasons.

## Solution Process

### Part 1: Is $U \cup W$ a subspace of $V$?

The answer is: **Not in general**, but there is a special case.

First, let's consider the special case: If $U \subseteq W$ or $W \subseteq U$ (i.e., one subspace is contained in the other), then $U \cup W$ will be the larger of the two subspaces, which is indeed a subspace of $V$.

However, in the general case where neither subspace contains the other, $U \cup W$ is not a subspace of $V$. We can show this by checking whether it satisfies the requirements for a subspace:

1. **Contains the zero vector**: Yes, since both $U$ and $W$ are subspaces, both contain the zero vector, so $0 \in U \cup W$.

2. **Closed under scalar multiplication**: Yes, since if $v \in U \cup W$, then either $v \in U$ or $v \in W$. If $v \in U$, then for any scalar $\lambda$, $\lambda v \in U$ because $U$ is a subspace. Similarly, if $v \in W$, then $\lambda v \in W$. Either way, $\lambda v \in U \cup W$.

3. **Closed under addition**: This is where the problem arises. Let's consider vectors $u \in U \setminus W$ (i.e., $u$ is in $U$ but not in $W$) and $w \in W \setminus U$ (i.e., $w$ is in $W$ but not in $U$). Both $u$ and $w$ are in $U \cup W$. However, $u + w$ may not be in either $U$ or $W$, in which case $u + w \notin U \cup W$.

To provide a concrete counterexample, consider $V = \mathbb{R}^2$ with:
- $U = \{(x, y) \in \mathbb{R}^2 : y = x\}$ (the line $y = x$)
- $W = \{(x, y) \in \mathbb{R}^2 : y = -x\}$ (the line $y = -x$)

Take $u = (1, 1) \in U$ and $w = (1, -1) \in W$. Then $u + w = (2, 0)$, which is not on either line, so $(2, 0) \notin U \cup W$. This shows that $U \cup W$ is not closed under addition, and therefore not a subspace.

### Part 2: Is $U + W = \{v \in V: v = u + w \text{ for some } u \in U, w \in W\}$ a subspace of $V$?

The answer is: **Yes**, $U + W$ is always a subspace of $V$.

Let's verify the three properties required for a subspace:

1. **Contains the zero vector**: Since $U$ and $W$ are subspaces, both contain the zero vector. Thus, $0 = 0_U + 0_W \in U + W$.

2. **Closed under scalar multiplication**: Let $v \in U + W$. Then $v = u + w$ for some $u \in U$ and $w \in W$. For any scalar $\lambda$:
   $$\lambda v = \lambda(u + w) = \lambda u + \lambda w$$
   Since $U$ is a subspace, $\lambda u \in U$. Similarly, $\lambda w \in W$. Therefore, $\lambda v \in U + W$.

3. **Closed under addition**: Let $v_1, v_2 \in U + W$. Then $v_1 = u_1 + w_1$ and $v_2 = u_2 + w_2$ for some $u_1, u_2 \in U$ and $w_1, w_2 \in W$. The sum is:
   $$v_1 + v_2 = (u_1 + w_1) + (u_2 + w_2) = (u_1 + u_2) + (w_1 + w_2)$$
   Since $U$ is a subspace, $u_1 + u_2 \in U$. Similarly, $w_1 + w_2 \in W$. Therefore, $v_1 + v_2 \in U + W$.

Since all three properties are satisfied, $U + W$ is indeed a subspace of $V$.

## Key Insights
- The union of subspaces is generally not a subspace because it fails to be closed under addition. This happens when we add vectors from different subspaces.
- The sum of subspaces is always a subspace and represents the set of all possible linear combinations of elements from the subspaces.
- The sum $U + W$ is the smallest subspace containing both $U$ and $W$, while the union $U \cup W$ is generally not a subspace.
- If one subspace is contained in the other (e.g., $U \subseteq W$), then the union $U \cup W$ equals the larger subspace and is therefore a subspace.

## Alternative Approaches
For the sum of subspaces, we could have also argued that $U + W$ is the span of the union of bases for $U$ and $W$. Since the span of any set of vectors is a subspace, this immediately shows that $U + W$ is a subspace.

## Common Mistakes
- Assuming that the union of subspaces is always or never a subspace, without recognizing the special case where one subspace contains the other.
- Confusing the union operation with the sum operation.
- Not providing a concrete counterexample when claiming that a set is not a subspace.
- Forgetting to check all three properties required for a set to be a subspace.
