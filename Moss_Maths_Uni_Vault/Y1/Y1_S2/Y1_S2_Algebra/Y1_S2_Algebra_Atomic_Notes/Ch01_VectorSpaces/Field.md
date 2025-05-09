---
title: "Field"
aliases: ["Fields", "Field Axioms"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "algebraic-structure", "vector-space", "scalar", "additive-group", "ring", "abstract-algebra"]
related_concepts: ["Vector Space", "Scalar", "Additive Group", "Ring", "Real Numbers", "Complex Numbers", "Rational Numbers"]
---

# Field

## Definition
A field is a set $\mathbb{F}$ equipped with two binary operations: addition (+) and multiplication ($\cdot$), which means that for any $x, y \in \mathbb{F}$ we have $x+y \in \mathbb{F}$ and $x \cdot y \in \mathbb{F}$. These operations satisfy the following field axioms:

1. **F1**: + is associative: $\forall x, y, z \in \mathbb{F}, (x+y)+z = x+(y+z)$
2. **F2**: There is an additive identity $0 \in \mathbb{F}$ such that $0+x = x = x+0$
3. **F3**: Every $x \in \mathbb{F}$ has an additive inverse $-x$ such that $x+(-x) = 0 = -x+x$
4. **F4**: + is commutative: $\forall x, y \in \mathbb{F}, x+y = y+x$
5. **F5**: $\cdot$ is associative: $\forall x, y, z \in \mathbb{F}, (x \cdot y) \cdot z = x \cdot (y \cdot z)$
6. **F6**: There is a multiplicative identity $1 \in \mathbb{F}$ such that $1 \cdot x = x = x \cdot 1$
7. **F7**: $\forall x \in \mathbb{F} \backslash \{0\}$, there is a multiplicative inverse $x^{-1}$ such that $x \cdot x^{-1} = 1 = x^{-1} \cdot x$
8. **F8**: $\cdot$ is commutative: $\forall x, y \in \mathbb{F}, x \cdot y = y \cdot x$
9. **F9**: $\cdot$ is distributive over +: $\forall a, x, y \in \mathbb{F}, a \cdot (x+y) = a \cdot x + a \cdot y$

## Properties
- The identities 0, 1 and the inverses $-x$ and $x^{-1}$ (when $x \neq 0$) are unique.
- Thanks to F1, we can add together finite lists of elements of $\mathbb{F}$ without needing to use brackets.
- Thanks to F4, we do not need to worry about the order in which we write the summands.
- Subtraction can be defined as $x - y = x + (-y)$.
- Division (for $y \neq 0$) can be defined as $\frac{x}{y} = x \cdot y^{-1}$.

## Examples
1. The set of rational numbers $\mathbb{Q}$ is a field under the standard addition and multiplication operations.

2. The set of real numbers $\mathbb{R}$ is a field under the standard addition and multiplication operations.

3. The set of complex numbers $\mathbb{C}$ is a field under the standard addition and multiplication operations.

4. The set $\mathbb{Z}_3 = \{0, 1, 2\}$ is a field with addition and multiplication modulo 3:
   - Addition: $2 + 2 = 4 \equiv 1 \pmod{3}$, $1 + 2 = 3 \equiv 0 \pmod{3}$
   - Multiplication: $2 \cdot 2 = 4 \equiv 1 \pmod{3}$

5. The set $\mathbb{Q}[\sqrt{2}] = \{a + b\sqrt{2} \mid a, b \in \mathbb{Q}\}$ is a field under standard addition and multiplication of algebraic expressions.

## Important Theorems/Results
- In a field, the zero element is the only element that doesn't have a multiplicative inverse.
- If $\lambda \cdot x = 0$ for $\lambda, x \in \mathbb{F}$, then either $\lambda = 0$ or $x = 0$ (the zero-product property).
- Every field forms an additive group with respect to the addition operation.
- The non-zero elements of a field form a multiplicative group with respect to the multiplication operation.

## Connections to Other Concepts
- A field is the required algebraic structure for the scalars in a [[Vector Space]].
- Every field is an [[Additive Group]] when considering just the addition operation.
- Fields extend the concept of [[Rings]] by requiring multiplicative inverses for all non-zero elements.
- The elements of a field are the [[Scalar|scalars]] used in vector space operations.

## Related Problems
- [[PS01-Q04]] - Solving linear systems with parameters involves field operations.
- Field axioms are used extensively when proving general properties of vector spaces.

## Notes
- Many results in linear algebra require the scalars to form a field. The properties of fields, particularly the existence of multiplicative inverses, are essential for solving linear systems and establishing fundamental theorems.
- Not all number systems form fields. For example, the integers $\mathbb{Z}$ do not form a field because most elements lack multiplicative inverses within $\mathbb{Z}$.
- In more advanced contexts, fields can be finite (like $\mathbb{Z}_p$ for prime $p$) or infinite (like $\mathbb{R}$ or $\mathbb{C}$).
