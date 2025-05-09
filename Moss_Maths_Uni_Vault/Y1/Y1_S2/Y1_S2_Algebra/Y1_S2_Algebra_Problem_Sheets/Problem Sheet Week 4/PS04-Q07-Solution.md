---
title: "PS04-Q07-Solution: Linear Maps on Matrix Space and Invertibility"
aliases: ["Solution to PS04 Q07"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-04", "difficulty-advanced", "matrix-space", "linear-maps", "invertibility"]
related_problem: [[PS04-Q07]]
---

# PS04-Q07-Solution: Linear Maps on Matrix Space and Invertibility

## Original Problem

Let $V$ be the vector space of all $n \times n$ matrices.
(a) For any $A \in V$, show that $L_A: V \rightarrow V: B \mapsto AB$ is linear.
(b) If $AX = I$, show that $L_A$ is surjective and therefore injective.
(c) Compute $L_A(XA - I)$ and deduce that $XA = I$.

## Solution Process

### Preliminary: Dimension of V

An $n \times n$ matrix is determined by its $n^2$ entries in the field $\mathbb{F}$.
Therefore, $\dim V = n^2$.

### Part (a): Linearity of $L_A$

**To show**: $L_A$ is linear.

**Proof**: For any $\lambda_1, \lambda_2 \in \mathbb{F}$ and $B_1, B_2 \in V$:
$$\begin{align}
L_A(\lambda_1 B_1 + \lambda_2 B_2) &= A(\lambda_1 B_1 + \lambda_2 B_2) \\
&= A\lambda_1 B_1 + A\lambda_2 B_2 \\
&= \lambda_1 AB_1 + \lambda_2 AB_2 \\
&= \lambda_1 L_A(B_1) + \lambda_2 L_A(B_2)
\end{align}$$

Therefore, $L_A$ is linear. ∎

### Part (b): Surjectivity and Injectivity

**Given**: $AX = I$ for some $X \in V$.

**Step 1: Prove surjectivity**
For any $Z \in V$:
$$L_A(XZ) = A(XZ) = (AX)Z = IZ = Z$$

This shows that every $Z \in V$ is in the image of $L_A$.
Therefore, $L_A$ is surjective.

**Step 2: Apply Rank-Nullity Theorem**
Since $V$ is finite-dimensional with $\dim V = n^2$:
- $\operatorname{rank}(L_A) + \operatorname{nullity}(L_A) = n^2$
- Since $L_A$ is surjective: $\operatorname{rank}(L_A) = n^2$
- Therefore: $\operatorname{nullity}(L_A) = 0$

**Step 3: Conclude injectivity**
$\operatorname{nullity}(L_A) = 0$ means $\ker(L_A) = \{0\}$.
Therefore, $L_A$ is injective.

**Conclusion**: $L_A$ is an isomorphism. ∎

### Part (c): Left Inverse is Right Inverse

**Computation**:
$$L_A(XA - I) = A(XA - I) = AXA - A = IA - A = A - A = 0$$

**Since $L_A$ is injective** (from part b), and $L_A(XA - I) = 0$:
$$XA - I = 0$$
$$XA = I$$

This proves that $X$ is also a right inverse of $A$. ∎

## Key Insights

1. **Matrix Space as Vector Space**: Treating matrices as vectors enables powerful linear algebra techniques
2. **Left vs Right Inverses**: In finite dimensions, left inverses are automatically right inverses
3. **Rank-Nullity Power**: The theorem immediately gives injectivity from surjectivity
4. **Isomorphism Theory**: $L_A$ being an isomorphism means $A$ is invertible

## Alternative Proof

We could also prove this using:
- Determinants: $\det(A) \neq 0$ if and only if $A$ is invertible
- Matrix representations: Working with the $n^2 \times n^2$ matrix representing $L_A$

## Generalization

This result generalizes to:
- Endomorphisms of finite-dimensional vector spaces
- Operators in finite-dimensional inner product spaces
- Square matrices over any field

## Common Mistakes

1. Confusing the dimension calculation ($n^2$ not $n$)
2. Not properly using the Rank-Nullity Theorem
3. Assuming left and right inverses are equal without proof
4. Computational errors in part (c)

## Applications

1. **Matrix Equations**: Solving $AX = B$ has unique solutions when $A$ is invertible
2. **Linear Systems Theory**: Understanding operator invertibility
3. **Numerical Linear Algebra**: Computational aspects of matrix inversion
