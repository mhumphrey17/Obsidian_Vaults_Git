---
title: "PS08-Q06-Solution: Inner Product Space Identities"
aliases: ["Solution to PS8 Q6"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-08", "difficulty-homework", "inner-product", "identities"]
related_problem: [[PS08-Q06]]
---

# PS08-Q06-Solution: Inner Product Space Identities

## Original Problem
Let $V$ be an inner product space and $v, w \in V$.

(i) Prove the Pythagoras theorem: if $v \perp w$ then $\|v + w\|^2 = \|v\|^2 + \|w\|^2$.

(ii) Prove the parallelogram identity: $\|v + w\|^2 + \|v - w\|^2 = 2(\|v\|^2 + \|w\|^2)$.

## Solution Process

### Part (i): Pythagoras Theorem
Given: $v \perp w$ (i.e., $\langle v, w \rangle = 0$)

To prove: $\|v + w\|^2 = \|v\|^2 + \|w\|^2$

Proof:
Starting with the left side:
$$\|v + w\|^2 = \langle v + w, v + w \rangle$$

Using the linearity properties of inner products:
$$= \langle v, v + w \rangle + \langle w, v + w \rangle$$
$$= \langle v, v \rangle + \langle v, w \rangle + \langle w, v \rangle + \langle w, w \rangle$$

Now, using conjugate symmetry ($\langle w, v \rangle = \overline{\langle v, w \rangle}$):
$$= \langle v, v \rangle + \langle v, w \rangle + \overline{\langle v, w \rangle} + \langle w, w \rangle$$

Since $\langle v, w \rangle + \overline{\langle v, w \rangle} = 2\text{Re}(\langle v, w \rangle)$:
$$= \|v\|^2 + 2\text{Re}(\langle v, w \rangle) + \|w\|^2$$

Given that $v \perp w$, we have $\langle v, w \rangle = 0$, therefore:
$$\|v + w\|^2 = \|v\|^2 + 0 + \|w\|^2 = \|v\|^2 + \|w\|^2$$

### Part (ii): Parallelogram Identity
To prove: $\|v + w\|^2 + \|v - w\|^2 = 2(\|v\|^2 + \|w\|^2)$

Proof:
Step 1: Expand $\|v + w\|^2$
From part (i) derivation (without assuming orthogonality):
$$\|v + w\|^2 = \|v\|^2 + 2\text{Re}(\langle v, w \rangle) + \|w\|^2$$

Step 2: Expand $\|v - w\|^2$
Similarly:
$$\|v - w\|^2 = \langle v - w, v - w \rangle$$
$$= \langle v, v \rangle - \langle v, w \rangle - \langle w, v \rangle + \langle w, w \rangle$$
$$= \|v\|^2 - \langle v, w \rangle - \overline{\langle v, w \rangle} + \|w\|^2$$
$$= \|v\|^2 - 2\text{Re}(\langle v, w \rangle) + \|w\|^2$$

Step 3: Add the two expressions
$$\|v + w\|^2 + \|v - w\|^2 = (\|v\|^2 + 2\text{Re}(\langle v, w \rangle) + \|w\|^2) + (\|v\|^2 - 2\text{Re}(\langle v, w \rangle) + \|w\|^2)$$
$$= 2\|v\|^2 + 2\|w\|^2$$
$$= 2(\|v\|^2 + \|w\|^2)$$

## Key Insights
- The Pythagoras theorem extends naturally to inner product spaces
- The parallelogram identity holds in all inner product spaces, regardless of orthogonality
- Both identities rely on the bilinearity and conjugate symmetry of inner products
- The parallelogram identity can be used to recover the inner product from the norm (polarization identity)

## Alternative Approaches
1. For part (ii), we could also prove using the polarization identity in reverse
2. Geometric interpretation: The parallelogram identity says that the sum of squares of the diagonals equals twice the sum of squares of the sides

## Common Mistakes
- Forgetting that inner products are conjugate symmetric for complex spaces
- Not correctly applying linearity in the first or second argument
- Confusing $\text{Re}(\langle v, w \rangle)$ with $\langle v, w \rangle$ itself
- Assuming orthogonality when it's not given (in part ii)

## Notes
- These identities are fundamental in Hilbert space theory
- The parallelogram identity characterizes inner product spaces among normed spaces
- In quantum mechanics, part (i) relates to superposition of orthogonal states
- These results work for both real and complex inner product spaces
