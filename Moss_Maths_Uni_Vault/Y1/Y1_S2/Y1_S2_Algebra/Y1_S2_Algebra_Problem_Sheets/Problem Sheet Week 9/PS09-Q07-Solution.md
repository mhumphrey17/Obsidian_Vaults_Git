---
title: "PS09-Q07-Solution: Adjoints of Linear Map Operations"
aliases: ["Solution to PS9 Q7"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-09", "difficulty-advanced", "linear_operators", "inner_product_spaces", "adjoints"]
related_problem: [[PS09-Q07]]
---

# PS09-Q07-Solution: Adjoints of Linear Map Operations

## Original Problem
Let $V$ be an inner product space and suppose $\phi, \psi \in L(V)$ have adjoints. Show that $\psi \circ \phi ; \phi+\lambda \psi$, $\lambda \in \mathbb{F} ; \phi^{*}$ and $\mathrm{id}_{V}$ all have adjoints given by:
(i) $(\phi \circ \psi)^{*}=\psi^{*} \circ \phi^{*}$ (note the change of order here!).
(ii) $\left(\phi^{*}\right)^{*}=\phi$.

## Solution Process

**Key Principle**: For any linear operators $\chi, \eta \in L(V)$, $\chi$ is an adjoint of $\eta$ exactly when:
$$\langle \chi(w), v \rangle = \langle w, \eta(v) \rangle \text{ for all } v, w \in V$$

### Part (i): $(\phi \circ \psi)^{*}=\psi^{*} \circ \phi^{*}$

**Proof:**
For all $v, w \in V$:
$$\begin{align}
\langle w, (\psi \circ \phi)(v) \rangle &= \langle w, \psi(\phi(v)) \rangle \\
&= \langle \psi^*(w), \phi(v) \rangle \\
&= \langle \phi^*(\psi^*(w)), v \rangle \\
&= \langle (\phi^* \circ \psi^*)(w), v \rangle
\end{align}$$

By conjugate symmetry: $\langle (\phi^* \circ \psi^*)(w), v \rangle = \overline{\langle v, (\phi^* \circ \psi^*)(w) \rangle}$

Thus: $\langle w, (\psi \circ \phi)(v) \rangle = \overline{\langle v, (\phi^* \circ \psi^*)(w) \rangle}$

Applying conjugate symmetry again:
$$\langle w, (\psi \circ \phi)(v) \rangle = \langle (\phi^* \circ \psi^*)(w), v \rangle$$

Therefore, $(\phi \circ \psi)^{*}=\phi^{*} \circ \psi^{*}$.

**Note**: I made an error in the order above. Let me correct it:

$$\begin{align}
\langle w, (\psi \circ \phi)(v) \rangle &= \langle w, \psi(\phi(v)) \rangle \\
&= \langle \psi^*(w), \phi(v) \rangle \\
&= \langle \phi^*(\psi^*(w)), v \rangle \\
&= \langle (\phi^* \circ \psi^*)(w), v \rangle
\end{align}$$

By conjugate symmetry: $\langle (\phi^* \circ \psi^*)(w), v \rangle = \overline{\langle v, (\phi^* \circ \psi^*)(w) \rangle}$

But we need: $\langle w, (\psi \circ \phi)(v) \rangle = \overline{\langle v, (\psi \circ \phi)^*(w) \rangle}$

Comparing: $(\psi \circ \phi)^* = \phi^* \circ \psi^*$

### Part (ii): $\left(\phi^{*}\right)^{*}=\phi$

**Proof:**
Using properties of the inner product:
$$\begin{align}
\langle w, \phi^*(v) \rangle &= \langle \phi(w), v \rangle \\
&= \overline{\langle v, \phi(w) \rangle}
\end{align}$$

Taking the complex conjugate of both sides:
$$\overline{\langle w, \phi^*(v) \rangle} = \langle v, \phi(w) \rangle$$

By conjugate symmetry: $\overline{\langle w, \phi^*(v) \rangle} = \langle \phi^*(v), w \rangle$

Therefore:
$$\langle \phi^*(v), w \rangle = \langle v, \phi(w) \rangle$$

This shows that $\phi$ is the adjoint of $\phi^*$, i.e., $(\phi^{*})^{*}=\phi$.

## Key Insights
1. **Order Reversal**: The adjoint of a composition reverses the order of operations - this is analogous to the transpose property $(AB)^T = B^T A^T$
2. **Involution**: The adjoint operation is an involution, meaning applying it twice returns to the original operator
3. **Conjugate Symmetry**: The key tool in all proofs is the conjugate symmetry property of inner products
4. **Linearity Preservation**: These properties show that the adjoint operation is anti-linear with respect to compositions

## Alternative Approaches
We could also prove part (i) using the fact that in finite dimensions, the adjoint operation corresponds to taking the conjugate transpose of matrix representations:
- If $\phi$ is represented by matrix $A$ and $\psi$ by matrix $B$
- Then $\psi \circ \phi$ is represented by $BA$
- The adjoint is represented by $(BA)^{\dagger} = A^{\dagger}B^{\dagger}$
- Which corresponds to $\phi^* \circ \psi^*$

## Common Mistakes
1. Forgetting to reverse the order in composition of adjoints
2. Misapplying conjugate symmetry of inner products
3. Confusing the adjoint operation with other operations like transpose
4. Not carefully tracking the variables in the inner product definitions
