---
title: "PS02-Q05-Solution: Linear Maps and Spanning/Linear Independence"
aliases: ["Solution to PS02 Q05"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-02", "difficulty-homework", "linear-maps", "surjective", "injective", "linear-independence", "spanning"]
related_problem: [[PS02-Q05]]
---

# PS02-Q05-Solution: Linear Maps and Spanning/Linear Independence

## Original Problem

Let $\phi: V \rightarrow W$ be a linear map and suppose $v_1, \ldots, v_n \in V$.

(i) If $v_1, \ldots, v_n$ span $V$ and $\phi$ is surjective, show that $\phi(v_1), \ldots, \phi(v_n)$ span $W$.

(ii) If $v_1, \ldots, v_n$ are linearly independent and $\phi$ is injective, show that $\phi(v_1), \ldots, \phi(v_n)$ are linearly independent.

## Solution Process

### Part (i): Surjective Maps Preserve Spanning

**Given:** 
- $v_1, \ldots, v_n$ span $V$
- $\phi: V \rightarrow W$ is surjective

**To Prove:** $\phi(v_1), \ldots, \phi(v_n)$ span $W$

**Proof:**
Since $\phi$ is surjective, for every $w \in W$, there exists some $v \in V$ such that $w = \phi(v)$.

Since $v_1, \ldots, v_n$ span $V$, we can write $v$ as a linear combination:
$$v = \sum_{i=1}^{n} \lambda_i v_i$$
for some scalars $\lambda_1, \ldots, \lambda_n$.

Applying $\phi$ to both sides and using linearity:
$$w = \phi(v) = \phi\left(\sum_{i=1}^{n} \lambda_i v_i\right) = \sum_{i=1}^{n} \lambda_i \phi(v_i)$$

This shows that every $w \in W$ can be written as a linear combination of $\phi(v_1), \ldots, \phi(v_n)$.

Therefore, $\phi(v_1), \ldots, \phi(v_n)$ span $W$. ∎

### Part (ii): Injective Maps Preserve Linear Independence

**Given:**
- $v_1, \ldots, v_n$ are linearly independent
- $\phi: V \rightarrow W$ is injective

**To Prove:** $\phi(v_1), \ldots, \phi(v_n)$ are linearly independent

**Proof:**
Suppose we have a linear dependence:
$$\sum_{i=1}^{n} \lambda_i \phi(v_i) = 0$$

Using linearity of $\phi$:
$$\phi\left(\sum_{i=1}^{n} \lambda_i v_i\right) = 0$$

This means $\sum_{i=1}^{n} \lambda_i v_i \in \ker(\phi)$.

Since $\phi$ is injective, we know that $\ker(\phi) = \{0\}$.

Therefore:
$$\sum_{i=1}^{n} \lambda_i v_i = 0$$

Since $v_1, \ldots, v_n$ are linearly independent, this implies $\lambda_i = 0$ for all $i = 1, \ldots, n$.

Thus, the only linear dependence among $\phi(v_1), \ldots, \phi(v_n)$ is the trivial one, proving they are linearly independent. ∎

## Key Insights

1. **Surjectivity and Spanning**: Surjective maps "onto" the entire codomain ensure that spanning properties are preserved
2. **Injectivity and Independence**: Injective maps preserve distinctness, which is essential for linear independence
3. **Kernel Characterization**: For linear maps, injectivity is equivalent to having trivial kernel
4. **Structure Preservation**: Linear maps preserve linear algebraic structures when they have appropriate properties

## Alternative Perspectives

**Rank-Nullity Connection:**
- If $\phi$ is injective, then $\text{nullity}(\phi) = 0$, so $\text{rank}(\phi) = \dim(V)$
- If $\phi$ is surjective, then $\text{rank}(\phi) = \dim(W)$
- These facts provide another way to understand why the properties are preserved

**Counterexamples for Missing Conditions:**
- Without surjectivity, spanning need not be preserved: Consider projection maps
- Without injectivity, independence need not be preserved: Consider the zero map

## Applications

1. **Isomorphisms**: When $\phi$ is both injective and surjective, it preserves all linear algebraic properties
2. **Basis Transformation**: Isomorphisms map bases to bases
3. **Dimension Theory**: These results help establish dimension as an invariant

## Common Mistakes

1. Assuming the converses are true (they're not without additional conditions)
2. Forgetting to use the specific properties (injectivity/surjectivity) in the proof
3. Confusing the direction of the implications
4. Not clearly distinguishing between properties of vectors in $V$ versus their images in $W$
