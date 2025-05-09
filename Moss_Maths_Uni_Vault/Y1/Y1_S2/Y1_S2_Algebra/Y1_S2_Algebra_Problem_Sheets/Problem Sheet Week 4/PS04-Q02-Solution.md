---
title: "PS04-Q02-Solution: Rank of Composite Linear Maps"
aliases: ["Solution to PS04 Q02"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-04", "difficulty-warmup", "rank", "composite-maps", "surjective", "injective"]
related_problem: [[PS04-Q02]]
---

# PS04-Q02-Solution: Rank of Composite Linear Maps

## Original Problem

Let $U, V, W$ be finite-dimensional and $\phi: U \rightarrow V$ and $\psi: V \rightarrow W$ be linear maps.

(a) Show that $\text{rank}(\psi \circ \phi) \leq \min\{\text{rank } \psi, \text{rank } \phi\}$.

(b) If $\phi$ is surjective, show that $\text{rank}(\psi \circ \phi) = \text{rank } \psi$.

(c) If $\psi$ is injective, show that $\text{rank}(\psi \circ \phi) = \text{rank } \phi$.

## Solution Process

### Part (a): General Rank Inequality

**Observation:** $\phi(U)$ is a subspace of $V$, and $\psi(\phi(U))$ is a subspace of $W$.

**First inequality:** We have $\psi(\phi(U)) \subseteq \psi(V)$ since $\phi(U) \subseteq V$.

Therefore:
$$\text{rank}(\psi \circ \phi) = \dim \psi(\phi(U)) \leq \dim \psi(V) = \text{rank } \psi$$

**Second inequality:** Consider the restriction $\psi|_{\phi(U)}: \phi(U) \rightarrow \psi(\phi(U))$.

By the Rank-Nullity Theorem:
$$\dim \psi(\phi(U)) \leq \dim \phi(U) = \text{rank } \phi$$

**Conclusion:**
$$\text{rank}(\psi \circ \phi) \leq \min\{\text{rank } \psi, \text{rank } \phi\}$$

### Part (b): Surjective Case

**Given:** $\phi$ is surjective, so $\text{Im } \phi = V$.

**Key observation:** If $\phi$ is surjective, then $\phi(U) = V$.

**Proof:**
$$\text{Im}(\psi \circ \phi) = \psi(\phi(U)) = \psi(V) = \text{Im } \psi$$

Therefore:
$$\text{rank}(\psi \circ \phi) = \dim \text{Im}(\psi \circ \phi) = \dim \text{Im } \psi = \text{rank } \psi$$

### Part (c): Injective Case

**Given:** $\psi$ is injective, so $\ker \psi = \{0\}$.

**Key observation:** The restriction $\psi|_{\phi(U)}: \phi(U) \rightarrow \psi(\phi(U))$ is also injective.

**Proof:** Since $\psi$ is injective, $\ker(\psi|_{\phi(U)}) = \phi(U) \cap \ker \psi = \phi(U) \cap \{0\} = \{0\}$.

By the Rank-Nullity Theorem applied to $\psi|_{\phi(U)}$:
$$\text{rank}(\psi|_{\phi(U)}) + \text{nullity}(\psi|_{\phi(U)}) = \dim \phi(U)$$

Since $\text{nullity}(\psi|_{\phi(U)}) = 0$:
$$\text{rank}(\psi|_{\phi(U)}) = \dim \phi(U)$$

But $\text{rank}(\psi|_{\phi(U)}) = \dim \psi(\phi(U)) = \text{rank}(\psi \circ \phi)$.

Therefore:
$$\text{rank}(\psi \circ \phi) = \dim \phi(U) = \text{rank } \phi$$

## Key Insights

1. **Composition Bounds Rank:** The rank of a composition is bounded by the ranks of its components
2. **Surjectivity Preserves Image:** When $\phi$ is surjective, $\psi \circ \phi$ has the same image as $\psi$
3. **Injectivity Preserves Rank:** When $\psi$ is injective, the composition preserves the rank of $\phi$
4. **Extreme Cases:** The bounds in part (a) are achieved in parts (b) and (c)

## General Pattern

These results show how special properties of linear maps (surjectivity, injectivity) affect the rank of compositions. They are fundamental tools in linear algebra for understanding how operations preserve or change dimensions.

## Applications

- Matrix multiplication: $\text{rank}(AB) \leq \min\{\text{rank } A, \text{rank } B\}$
- Isomorphisms: If $\phi$ and $\psi$ are both bijective, then $\psi \circ \phi$ is also bijective
- Dimension formulas in quotient spaces and direct sums

## Common Mistakes

1. Forgetting that $\phi(U)$ might be a proper subspace of $V$
2. Not using the specific properties (surjectivity/injectivity) in parts (b) and (c)
3. Misapplying the Rank-Nullity Theorem
