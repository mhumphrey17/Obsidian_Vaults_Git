---
title: "PS03-Q07-Solution: Linear Independence from Set Intersections"
aliases: ["Solution to PS03 Q07"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-03", "difficulty-advanced", "finite-fields", "field-of-two-elements", "linear-independence", "combinatorics"]
related_problem: [[PS03-Q07]]
---

# PS03-Q07-Solution: Linear Independence from Set Intersections

## Original Problem

Let $S_1, \ldots, S_n \subseteq \{1, \ldots, m\}$ be $n$ distinct subsets such that:
- Each contains an odd number of elements
- The intersection $S_i \cap S_j$ of any distinct pair contains an even number of elements

Show that $n \leq m$.

## Solution Process

### Step 1: Encode Sets as Vectors

Let $\mathbb{F}_2$ be the field with two elements (arithmetic modulo 2).

For each $i = 1, \ldots, n$, define $\mathbf{x}_i \in \mathbb{F}_2^m$ by:
$$(\mathbf{x}_i)_j = \begin{cases} 
1 & \text{if } j \in S_i \\
0 & \text{otherwise}
\end{cases}$$

This creates a characteristic vector for each set.

### Step 2: Translate the Hypotheses

**Odd cardinality condition:**
$$|S_i| \text{ is odd} \iff \sum_{j=1}^m (\mathbf{x}_i)_j \text{ is odd (in } \mathbb{Z}\text{)}$$

In $\mathbb{F}_2$, this means:
$$\sum_{j=1}^m (\mathbf{x}_i)_j = 1 \in \mathbb{F}_2$$

**Even intersection condition:**
$$|S_i \cap S_j| \text{ is even} \iff \sum_{k: k \in S_i \cap S_j} 1 \text{ is even}$$

In terms of vectors, $k \in S_i \cap S_j$ if and only if $(\mathbf{x}_i)_k = (\mathbf{x}_j)_k = 1$.

Therefore:
$$|S_i \cap S_j| = \sum_{k=1}^m (\mathbf{x}_i)_k \cdot (\mathbf{x}_j)_k = \mathbf{x}_i^T \mathbf{x}_j$$

Since intersections have even cardinality:
$$\mathbf{x}_i^T \mathbf{x}_j = 0 \in \mathbb{F}_2 \text{ for } i \neq j$$

### Step 3: Recognize the Orthonormal Property

Combining our results:
$$\mathbf{x}_i^T \mathbf{x}_j = \begin{cases}
1 & \text{if } i = j \\
0 & \text{otherwise}
\end{cases}$$

This means the list $\{\mathbf{x}_1, \ldots, \mathbf{x}_n\}$ is orthonormal in $\mathbb{F}_2^m$!

### Step 4: Apply Linear Independence

By **PS02-Q06**, any orthonormal list is linearly independent.

Therefore, $\{\mathbf{x}_1, \ldots, \mathbf{x}_n\}$ is linearly independent in $\mathbb{F}_2^m$.

### Step 5: Use Dimension Bound

Since $\mathbb{F}_2^m$ has dimension $m$, and we have $n$ linearly independent vectors:
$$n \leq \dim(\mathbb{F}_2^m) = m$$

This completes the proof. ∎

## Key Insights

1. **Encoding Strategy**: Converting set problems to vector problems
2. **Field Choice**: Working in $\mathbb{F}_2$ naturally handles parity conditions
3. **Connection to Previous Results**: Recognition that this creates an orthonormal list
4. **Dimension Theory**: Using the fundamental bound on independent sets

## Alternative Perspective

This result is a special case of more general theorems in combinatorics:
- The **Fisher-Gale-Ryser** theorem in design theory
- Results about **parity vectors** in coding theory
- Applications to **error-correcting codes**

## Elegance of the Proof

The proof demonstrates the power of **algebraization** - translating combinatorial problems into linear algebra where we have powerful tools available. The key insight is recognizing that the parity conditions naturally create an orthonormal system.

## Generalization

The result generalizes: if each set has cardinality $\equiv 1 \pmod{4}$ and intersections have cardinality $\equiv 0 \pmod{4}$, or more generally for any appropriate modulus, similar bounds hold.

## Connection to Error-Correcting Codes

This problem relates to the construction of error-correcting codes where:
- Sets represent codewords
- Odd cardinality ensures non-zero weight
- Even intersections control minimum distance

## Common Mistakes

1. Not recognizing the need to work in $\mathbb{F}_2$
2. Mishandling the translation from set operations to vector operations
3. Forgetting to invoke the result from PS02-Q06
4. Not clearly stating why linear independence implies $n \leq m$
