---
title: "Additive Group"
aliases: ["Abelian Group", "Commutative Group"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "group-theory", "algebraic-structure", "vector-space", "field"]
related_concepts: ["Vector Space", "Field", "Group (Abstract Algebra)", "Module"]
---

# Additive Group

## Definition
An additive group is a set $V$ together with an addition operation $+$ and a zero element $0 \in V$ satisfying the following axioms:

1. **Associativity**: $\forall x, y, z \in V, (x + y) + z = x + (y + z)$
2. **Identity Element**: $\forall x \in V, 0 + x = x = x + 0$
3. **Inverse Element**: $\forall x \in V$, there exists an element $-x \in V$ such that $x + (-x) = 0 = (-x) + x$
4. **Commutativity**: $\forall x, y \in V, x + y = y + x$

These correspond to axioms F1, F2, F3, and F4 in the definition of a field, but applied only to the addition operation.

## Properties
- Every element has a unique additive inverse.
- The identity element (zero) is unique.
- The associative property allows us to write expressions like $a + b + c$ without parentheses.
- The commutative property allows us to rearrange terms in a sum.
- Cancellation property: If $a + c = b + c$, then $a = b$.
- If $a + b = 0$, then $b = -a$.

## Examples
1. The set of integers $\mathbb{Z}$ with standard addition forms an additive group.

2. The set of rational numbers $\mathbb{Q}$ with standard addition forms an additive group.

3. The set of real numbers $\mathbb{R}$ with standard addition forms an additive group.

4. The set of complex numbers $\mathbb{C}$ with standard addition forms an additive group.

5. The set of $n$-tuples over a field $\mathbb{F}^n$ with component-wise addition forms an additive group.

6. The set of $m \times n$ matrices $M_{m,n}(\mathbb{F})$ with matrix addition forms an additive group.

7. Any vector space is automatically an additive group (it's part of the definition).

8. The set $\mathbb{Z}_n$ of integers modulo $n$ with addition modulo $n$ forms an additive group.

## Important Theorems/Results
- Every additive group is a module over the integers $\mathbb{Z}$.
- If an additive group has additional structure that satisfies the vector space axioms for scalar multiplication, then it becomes a vector space.
- In any additive group, the equation $a + x = b$ has a unique solution $x = b + (-a)$.

## Connections to Other Concepts
- An additive group is a fundamental component of a [[Vector Space]]. Every vector space has an underlying additive group structure.
- A [[Field]] has an additive group structure with respect to its addition operation.
- The concept of an additive group generalizes to the algebraic structure called a group, which is studied in abstract algebra.
- The additive inverse operation in an additive group gives rise to subtraction: $a - b = a + (-b)$.

## Related Problems
This concept is used implicitly in many problems involving vector spaces, but some examples include:
- [[PS01-Q02]] - When working with subspaces, we use the additive group properties.
- [[PS01-Q05]] - The analysis of sums of subspaces relies on additive group properties.

## Notes
- The term "additive group" emphasizes that the group operation is thought of as addition. This same structure could be called an "abelian group" or "commutative group" in more general contexts.
- The additive group structure provides the foundation for vector addition in a vector space, ensuring that vectors can be combined consistently.
- In the study of abstract algebra, groups generalize many symmetries and operations found in mathematics and are fundamental building blocks for more complex algebraic structures.
