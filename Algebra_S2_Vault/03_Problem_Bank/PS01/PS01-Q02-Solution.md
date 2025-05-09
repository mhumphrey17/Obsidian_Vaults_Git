---
title: "PS01-Q02-Solution: Subspace Properties (Complement, Intersection)"
aliases: ["Solution to PS1 Q2", "Subspace Properties Solution"]
tags: [solution, algebra-s2, ps-01, difficulty-warmup]
related_problem: [[PS01-Q02]]
date_created: 2025-05-09
---

# PS01-Q02-Solution: Subspace Properties (Complement, Intersection)

## Original Problem
Let $V$ be a vector space with subspaces $U$ and $W$. Is $W^c = \{v \in V: v \notin W\}$ a subspace of $V$? Is $U \cap W$ a subspace of $V$? Give reasons.

## Solution Process

### Part 1: Is $W^c = \{v \in V: v \notin W\}$ a subspace of $V$?

The answer is **No**, $W^c$ is not a subspace of $V$.

To show this, we need to demonstrate that $W^c$ fails at least one of the subspace properties:

1. **Contains the zero vector**: Since $W$ is a subspace of $V$, it must contain the zero vector $0$. Therefore, $0 \notin W^c$, which means $W^c$ doesn't contain the zero vector.

This is enough to conclude that $W^c$ is not a subspace of $V$, as containing the zero vector is a required property for any subspace.

We could also show that $W^c$ is not closed under addition or scalar multiplication, but the absence of the zero vector is already sufficient.

### Part 2: Is $U \cap W$ a subspace of $V$?

The answer is **Yes**, $U \cap W$ is a subspace of $V$.

To prove this, we need to verify the three subspace properties:

1. **Contains the zero vector**: Since both $U$ and $W$ are subspaces of $V$, both contain the zero vector $0$. Therefore, $0 \in U \cap W$.

2. **Closed under addition**: Let $u, v \in U \cap W$. This means that $u \in U$ and $u \in W$, and similarly, $v \in U$ and $v \in W$. 
   - Since $U$ is a subspace, $u + v \in U$.
   - Since $W$ is a subspace, $u + v \in W$.
   - Therefore, $u + v \in U \cap W$, which shows that $U \cap W$ is closed under addition.

3. **Closed under scalar multiplication**: Let $v \in U \cap W$ and $\lambda \in \mathbb{F}$ (the field).
   - Since $U$ is a subspace, $\lambda v \in U$.
   - Since $W$ is a subspace, $\lambda v \in W$.
   - Therefore, $\lambda v \in U \cap W$, which shows that $U \cap W$ is closed under scalar multiplication.

Since $U \cap W$ satisfies all three properties, it is a subspace of $V$.

## Key Insights
- The complement of a subspace is almost never a subspace (the only exception is when $W = \{0\}$, in which case $W^c = V \setminus \{0\}$, which is still not a subspace).
- The intersection of any collection of subspaces is always a subspace.
- These properties highlight that subspace structure is preserved by intersection but not by complement.

## Alternative Approaches
For $U \cap W$, we could have used the fact that a subset of a vector space is a subspace if and only if it is non-empty and closed under linear combinations. Since both $U$ and $W$ are closed under linear combinations, their intersection inherits this property.

## Common Mistakes
- Forgetting to check whether the zero vector is in the set.
- Assuming that the complement of a subspace might be a subspace in some cases (other than the trivial case).
- Not providing rigorous proof for closure properties.
- Confusing the complement operation with the orthogonal complement (which is a subspace).
