---
title: "Product Formula for Determinants"
aliases: ["determinant product rule", "determinant multiplicativity property"]
tags: ["Y1_Alg", "Y1_Alg_s2_ch02_03", "concept", "determinant", "theorem"]
related_concepts: ["Determinant", "Characterization of Determinants", "Matrix Multiplication", "Matrix Inverse"]
date_created: 2025-05-09
---

# Product Formula for Determinants

## Definition
The Product Formula for Determinants states that the determinant of a product of square matrices equals the product of their determinants. Formally, for any two square matrices $A, B \in M_{n,n}(\mathbb{F})$:

$$\det(AB) = \det(A) \cdot \det(B)$$

This fundamental property is also referred to as the multiplicativity of the determinant function.

## Proof (Outline)
The proof uses the characterization theorem for determinants:

1. Fix matrix $A$ and define function $D(B) = \det(AB)$.

2. Observe that $\operatorname{col}_k(AB) = A \cdot \operatorname{col}_k(B)$, showing that the $k$th column of $AB$ is a linear function of the $k$th column of $B$.

3. This implies that $D(B) = \det(AB)$ is multilinear and alternating in the columns of $B$.

4. By the characterization theorem, $D(B) = D(I) \cdot \det(B)$.

5. Since $D(I) = \det(AI) = \det(A)$, we get $\det(AB) = \det(A) \cdot \det(B)$.

## Key Consequences
1. **Invertible Matrix Characterization**: A matrix $A$ is invertible if and only if $\det(A) \neq 0$.

2. **Determinant of Inverse**: If $A$ is invertible, then $\det(A^{-1}) = \frac{1}{\det(A)}$.

3. **Determinant of Matrix Powers**: $\det(A^k) = \det(A)^k$ for any integer $k$ where $A^k$ is defined.

4. **Similar Matrices**: If matrices $A$ and $B$ are similar (i.e., $B = P^{-1}AP$ for some invertible $P$), then $\det(A) = \det(B)$.

5. **Determinant of Block Diagonal Matrices**: The formula provides another approach to prove that $\det\begin{pmatrix} A & 0 \\ 0 & B \end{pmatrix} = \det(A) \cdot \det(B)$.

## Examples
### Example 1: Direct Calculation
Consider:
$$A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}, B = \begin{pmatrix} 1 & 2 \\ 4 & 3 \end{pmatrix}$$

$$AB = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 4 & 3 \end{pmatrix} = \begin{pmatrix} 6 & 7 \\ 12 & 9 \end{pmatrix}$$

Direct calculation:
$$\det(A) = 6, \det(B) = -5, \det(AB) = -30 = 6 \cdot (-5) = \det(A) \cdot \det(B)$$

### Example 2: Application to Similar Matrices
If $B = P^{-1}AP$ for some invertible matrix $P$, then:
$$\det(B) = \det(P^{-1}AP) = \det(P^{-1}) \cdot \det(A) \cdot \det(P) = \det(A)$$
since $\det(P^{-1}) \cdot \det(P) = 1$.

### Example 3: Determinant of Matrix Inverse
For an invertible matrix $A$:
$$\det(A) \cdot \det(A^{-1}) = \det(AA^{-1}) = \det(I) = 1$$
Therefore, $\det(A^{-1}) = \frac{1}{\det(A)}$.

## Applications
1. **Matrix Invertibility**: Provides a quick test for invertibility by checking if the determinant is non-zero.

2. **Group Properties**: Helps establish that general linear groups (sets of invertible matrices) form mathematical groups.

3. **Change of Variables in Integration**: In multivariable calculus, determinants represent the scaling factor when changing variables in integrals.

4. **Linear Transformations**: For a linear transformation represented by matrix $A$, $|\det(A)|$ gives the scaling factor of volumes.

5. **Eigenvalue Calculations**: Helps in finding characteristic polynomials and eigenvalues.

## Related Concepts
- [[Determinant]]: The function that satisfies the product formula
- [[Characterization of Determinants]]: The theoretical foundation of the product formula
- [[Matrix Multiplication]]: The operation to which the product formula applies
- [[Matrix Inverse]]: Relates to the determinant through the product formula
- [[Similar Matrices]]: Have equal determinants as a consequence of the product formula
