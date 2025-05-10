---
title: "PS09-Q06-Solution: Self-Adjoint Operators and Hermitian Matrices"
aliases: ["Solution to PS9 Q6"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-09", "difficulty-advanced", "linear_operators", "inner_product_spaces", "adjoints"]
related_problem: [[PS09-Q06]]
---

# PS09-Q06-Solution: Self-Adjoint Operators and Hermitian Matrices

## Original Problem
Let $A \in M_{n,n}(\mathbb{C})$. Show that $\phi_A: \mathbb{C}^n \rightarrow \mathbb{C}^n$ is self-adjoint if and only if $A$ is Hermitian.

## Solution Process

**Step 1: Understand the Definitions**
- An operator $\phi$ is self-adjoint if $\phi^* = \phi$
- A matrix $A$ is Hermitian if $A^{\dagger} = A$ (where $A^{\dagger} = \overline{A}^T$ is the conjugate transpose)
- $\phi_A$ is the linear operator defined by $\phi_A(v) = Av$ for all $v \in \mathbb{C}^n$

**Step 2: Find the Adjoint Representation**
Let $\alpha$ be the standard orthonormal basis of $\mathbb{C}^n$. By Proposition 5.1.3, the adjoint $(\phi_A)^*$ is represented by the conjugate transpose $A^{\dagger} = \overline{A}^T$ with respect to $\alpha$.

Therefore:
$$(\phi_A)^* = \phi_{A^{\dagger}}$$

**Step 3: Apply Self-Adjoint Condition**
An operator $\phi_A$ is self-adjoint if and only if:
$$(\phi_A)^* = \phi_A$$

Substituting our result from Step 2:
$$\phi_{A^{\dagger}} = \phi_A$$

**Step 4: Conclude**
Since linear operators are uniquely determined by their matrix representations with respect to a fixed basis:
$$\phi_{A^{\dagger}} = \phi_A \Leftrightarrow A^{\dagger} = A$$

Therefore, $\phi_A$ is self-adjoint if and only if $A$ is Hermitian.

## Key Insights
1. **Matrix-Operator Connection**: Self-adjointness of an operator directly translates to the Hermitian property of its matrix representation
2. **Adjoint Representation**: The adjoint of a matrix-defined operator $\phi_A$ is represented by the conjugate transpose $A^{\dagger}$
3. **Basis Independence**: Although we used the standard basis, the result holds for any orthonormal basis
4. **Real vs Complex**: For real matrices (when $A \in M_{n,n}(\mathbb{R})$), this becomes: $\phi_A$ is self-adjoint if and only if $A$ is symmetric

## Alternative Approaches
**Direct Verification Approach:**
We could directly verify that $\langle \phi_A(v), w \rangle = \langle v, \phi_A(w) \rangle$ if and only if $A = A^{\dagger}$:
- $\langle \phi_A(v), w \rangle = \langle Av, w \rangle = w^{\dagger}Av$
- $\langle v, \phi_A(w) \rangle = \langle v, Aw \rangle = (Aw)^{\dagger}v = w^{\dagger}A^{\dagger}v$
- These are equal for all $v,w$ if and only if $A = A^{\dagger}$

## Common Mistakes
1. Confusing conjugate transpose with regular transpose for complex matrices
2. Assuming the result holds for arbitrary bases without using orthonormality
3. Not recognizing that similar matrices share eigenvalue properties but not necessarily Hermitian properties
4. Forgetting that the inner product on $\mathbb{C}^n$ uses complex conjugation
