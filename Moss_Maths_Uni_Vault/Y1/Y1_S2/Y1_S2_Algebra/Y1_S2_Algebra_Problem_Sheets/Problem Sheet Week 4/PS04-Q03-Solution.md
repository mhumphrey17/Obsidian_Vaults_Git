---
title: "PS04-Q03-Solution: Isomorphism Defined by Basis Mapping"
aliases: ["Solution to PS04 Q03"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-04", "difficulty-warmup", "isomorphism", "basis", "well-defined"]
related_problem: [[PS04-Q03]]
---

# PS04-Q03-Solution: Isomorphism Defined by Basis Mapping

## Original Problem

Let $\alpha: v_1, \ldots, v_n$ and $\beta: w_1, \ldots, w_n$ be bases of $V$ and $W$, respectively. Show that the map $\phi: V \rightarrow W$, 

$$\sum_{i=1}^{n} \lambda_i v_i \mapsto \sum_{i=1}^{n} \lambda_i w_i$$

is well-defined and is an isomorphism.

## Solution Process

### Step 1: Prove $\phi$ is Well-Defined

**To show:** For any $v \in V$, the map $\phi$ assigns a unique element in $W$.

**Proof:** Since $\alpha$ is a basis of $V$, every vector $v \in V$ can be written uniquely as:
$$v = \sum_{i=1}^{n} \lambda_i v_i$$

The coefficients $\lambda_1, \ldots, \lambda_n$ are uniquely determined by $v$.

Therefore, $\phi(v) = \sum_{i=1}^{n} \lambda_i w_i$ is uniquely determined, making $\phi$ well-defined. ✓

### Step 2: Prove $\phi$ is Linear

**To show:** $\phi(\alpha u + \beta v) = \alpha \phi(u) + \beta \phi(v)$ for all $u, v \in V$ and $\alpha, \beta \in \mathbb{F}$.

**Proof:** Let $u = \sum_{i=1}^{n} \lambda_i v_i$ and $v = \sum_{i=1}^{n} \mu_i v_i$.

Then:
$$\alpha u + \beta v = \sum_{i=1}^{n} (\alpha \lambda_i + \beta \mu_i) v_i$$

Applying $\phi$:
$$\phi(\alpha u + \beta v) = \sum_{i=1}^{n} (\alpha \lambda_i + \beta \mu_i) w_i$$

$$= \sum_{i=1}^{n} \alpha \lambda_i w_i + \sum_{i=1}^{n} \beta \mu_i w_i$$

$$= \alpha \sum_{i=1}^{n} \lambda_i w_i + \beta \sum_{i=1}^{n} \mu_i w_i$$

$$= \alpha \phi(u) + \beta \phi(v)$$

Therefore, $\phi$ is linear. ✓

### Step 3: Prove $\phi$ is Injective

**To show:** $\ker \phi = \{0\}$.

**Proof:** Suppose $\phi(v) = 0$ for some $v = \sum_{i=1}^{n} \lambda_i v_i$.

Then:
$$0 = \phi(v) = \sum_{i=1}^{n} \lambda_i w_i$$

Since $\beta$ is a basis of $W$, the coefficients in this linear combination must all be zero:
$$\lambda_i = 0 \text{ for all } i = 1, \ldots, n$$

Therefore:
$$v = \sum_{i=1}^{n} 0 \cdot v_i = 0$$

This proves $\ker \phi = \{0\}$, so $\phi$ is injective. ✓

### Step 4: Prove $\phi$ is Surjective

**To show:** $\text{Im } \phi = W$.

**Method 1 (Direct):** For any $w \in W$, since $\beta$ is a basis, we can write:
$$w = \sum_{i=1}^{n} \mu_i w_i$$

Consider $v = \sum_{i=1}^{n} \mu_i v_i \in V$. Then:
$$\phi(v) = \sum_{i=1}^{n} \mu_i w_i = w$$

Therefore, every element of $W$ is in the image of $\phi$, proving surjectivity. ✓

**Method 2 (Using Rank-Nullity):** Since $\phi$ is injective, $\text{nullity}(\phi) = 0$.

By the Rank-Nullity Theorem:
$$\text{rank}(\phi) + \text{nullity}(\phi) = \dim V$$
$$\text{rank}(\phi) + 0 = n$$
$$\text{rank}(\phi) = n = \dim W$$

Since $\text{Im } \phi \subseteq W$ and $\dim(\text{Im } \phi) = \dim W$, we have $\text{Im } \phi = W$. ✓

## Conclusion

We have shown that $\phi$ is:
1. Well-defined
2. Linear
3. Injective
4. Surjective

Therefore, $\phi$ is an isomorphism from $V$ to $W$.

## Key Insights

1. **Basis Correspondence:** The isomorphism is completely determined by how it maps basis vectors
2. **Uniqueness of Representation:** The well-defined property comes from unique basis expansion
3. **Structure Preservation:** The map preserves linear combinations by mapping coefficients identically
4. **Dimension Preservation:** Isomorphisms preserve dimension

## Applications

1. Any two vector spaces of the same finite dimension over the same field are isomorphic
2. Coordinate representations establish isomorphisms between abstract spaces and $\mathbb{F}^n$
3. Change of basis formulas

## Common Mistakes

1. Not verifying uniqueness in the well-defined proof
2. Confusing the map definition with its linearity proof
3. Assuming injectivity without proving $\ker \phi = \{0\}$
4. Not using basis properties effectively
