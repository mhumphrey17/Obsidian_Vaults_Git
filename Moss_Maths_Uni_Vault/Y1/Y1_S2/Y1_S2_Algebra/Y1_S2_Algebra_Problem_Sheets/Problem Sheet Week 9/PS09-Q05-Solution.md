---
title: "PS09-Q05-Solution: Orthogonal Complement of Sum of Subspaces"
aliases: ["Solution to PS9 Q5"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-09", "difficulty-homework", "orthogonal-complement", "subspaces"]
related_problem: [[PS09-Q05]]
---

# PS09-Q05-Solution: Orthogonal Complement of Sum of Subspaces

## Original Problem
Let $U, W \leq V$ an inner product space. Show that $(U + W)^{\perp} = U^{\perp} \cap W^{\perp}$, where $U^{\perp} := \{u \in V \mid \langle u, v \rangle = 0$ for all $v \in U\}$.

## Solution Process

To prove set equality, we show both directions of inclusion.

### Part 1: Show $(U + W)^{\perp} \subseteq U^{\perp} \cap W^{\perp}$

Let $v \in (U + W)^{\perp}$. By definition, this means:
$$\langle v, x \rangle = 0 \text{ for all } x \in U + W$$

Since $U, W \subseteq U + W$, we have:
- For all $u \in U$: $u \in U + W$, so $\langle v, u \rangle = 0$
- For all $w \in W$: $w \in U + W$, so $\langle v, w \rangle = 0$

Therefore:
- $v \in U^{\perp}$ (since $\langle v, u \rangle = 0$ for all $u \in U$)
- $v \in W^{\perp}$ (since $\langle v, w \rangle = 0$ for all $w \in W$)

Thus, $v \in U^{\perp} \cap W^{\perp}$.

### Part 2: Show $U^{\perp} \cap W^{\perp} \subseteq (U + W)^{\perp}$

Let $v \in U^{\perp} \cap W^{\perp}$. This means:
- $v \in U^{\perp}$: $\langle v, u \rangle = 0$ for all $u \in U$
- $v \in W^{\perp}$: $\langle v, w \rangle = 0$ for all $w \in W$

Now, let $x \in U + W$. By definition of sum of subspaces, we can write:
$$x = u + w \text{ for some } u \in U \text{ and } w \in W$$

Using linearity of the inner product:
$$\langle v, x \rangle = \langle v, u + w \rangle = \langle v, u \rangle + \langle v, w \rangle$$

Since $v \in U^{\perp}$ and $v \in W^{\perp}$:
$$\langle v, x \rangle = 0 + 0 = 0$$

Since this holds for all $x \in U + W$, we have $v \in (U + W)^{\perp}$.

### Conclusion
Since we've shown both directions of inclusion:
- $(U + W)^{\perp} \subseteq U^{\perp} \cap W^{\perp}$
- $U^{\perp} \cap W^{\perp} \subseteq (U + W)^{\perp}$

We conclude that $(U + W)^{\perp} = U^{\perp} \cap W^{\perp}$.

## Key Insights
- The orthogonal complement "distributes" over intersection, not union
- The proof relies on the linearity of inner products
- This is a fundamental property of orthogonal complements in inner product spaces
- The result shows a duality between sum and intersection operations

## Alternative Approaches
1. Could use the fact that $(S^{\perp})^{\perp} = \overline{\text{span}(S)}$ in Hilbert spaces
2. Could use dimension counting if working in finite dimensions
3. Could generalize to arbitrary collections of subspaces

## Common Mistakes
- Confusing $(U + W)^{\perp}$ with $U^{\perp} + W^{\perp}$ (these are different!)
- Not carefully handling the definition of sum of subspaces
- Forgetting to use linearity of inner products
- Attempting to prove $(U \cap W)^{\perp} = U^{\perp} + W^{\perp}$ instead

## Notes
- The dual formula is $(U \cap W)^{\perp} = U^{\perp} + W^{\perp}$ (closure may be needed)
- These formulas are analogous to De Morgan's laws in set theory
- The result generalizes to any collection of subspaces
- In finite dimensions, dimensions satisfy: $\dim((U + W)^{\perp}) = \dim(V) - \dim(U + W)$

## Geometric Interpretation
In $\mathbb{R}^3$:
- If $U$ and $W$ are planes through the origin, $U + W = \mathbb{R}^3$ (generically)
- Then $(U + W)^{\perp} = \{0\}$
- Also, $U^{\perp}$ and $W^{\perp}$ are lines, and their intersection is typically $\{0\}$
- This matches our theorem: $\{0\} = \{0\} \cap \{0\}$
