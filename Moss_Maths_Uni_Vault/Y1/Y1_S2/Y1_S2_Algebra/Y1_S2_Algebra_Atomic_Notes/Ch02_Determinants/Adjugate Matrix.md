---
title: "Adjugate Matrix"
aliases: ["adjugate", "classical adjoint", "adjoint matrix"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "determinant", "matrix", "matrix-inverse", "cofactor", "minor", "cramer-s-rule", "linear-algebra", "matrix-theory"]
related_concepts: ["Determinant", "Cofactor", "Minor", "Matrix Inverse", "Cramer's Rule", "Field"]
---

# Adjugate Matrix

## Definition
For a square matrix $A \in M_{n,n}(\mathbb{F})$, the adjugate matrix (also called the classical adjoint) is denoted by $\operatorname{adj}(A)$ and defined as the transpose of the cofactor matrix:

$$\operatorname{adj}(A)_{ij} = C_{ji}(A) = (-1)^{j+i} \mu_{ji}(A)$$

where $C_{ji}(A)$ is the $(j,i)$-cofactor and $\mu_{ji}(A)$ is the $(j,i)$-minor of $A$.

In matrix form, if $C(A)$ is the cofactor matrix of $A$, then:

$$\operatorname{adj}(A) = C(A)^T$$

## Properties
1. **Fundamental Relationship**: The adjugate satisfies:
   $$A \cdot \operatorname{adj}(A) = \operatorname{adj}(A) \cdot A = \det(A) \cdot I_n$$
   where $I_n$ is the $n \times n$ identity matrix.

2. **Inverse Relationship**: When $A$ is invertible (i.e., $\det(A) \neq 0$):
   $$A^{-1} = \frac{1}{\det(A)} \operatorname{adj}(A)$$

3. **Adjugate of Adjugate**: For $n > 2$:
   $$\operatorname{adj}(\operatorname{adj}(A)) = \det(A)^{n-2} \cdot A$$

4. **Adjugate of Product**: 
   $$\operatorname{adj}(AB) = \operatorname{adj}(B) \cdot \operatorname{adj}(A)$$

5. **Determinant of Adjugate**: 
   $$\det(\operatorname{adj}(A)) = \det(A)^{n-1}$$

## Examples
### Example 1: 2×2 Matrix
For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

The cofactor matrix is:
$$C(A) = \begin{pmatrix} d & -c \\ -b & a \end{pmatrix}$$

Therefore, the adjugate is:
$$\operatorname{adj}(A) = C(A)^T = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

Verification of the fundamental relationship:
$$A \cdot \operatorname{adj}(A) = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \begin{pmatrix} ad-bc & 0 \\ 0 & ad-bc \end{pmatrix} = \det(A) \cdot I_2$$

### Example 2: 3×3 Matrix
For the matrix $A = \begin{pmatrix} 3 & 0 & 1 \\ 1 & 2 & 4 \\ -1 & 0 & 1 \end{pmatrix}$:

First, compute the determinant: $\det(A) = +2 \cdot \begin{vmatrix} 3 & 1 \\ -1 & 1 \end{vmatrix} = 2 \cdot 4 = 8$

Then, the cofactor matrix is:
$$C(A) = \begin{pmatrix} 
\begin{vmatrix} 2 & 4 \\ 0 & 1 \end{vmatrix} & -\begin{vmatrix} 1 & 4 \\ -1 & 1 \end{vmatrix} & \begin{vmatrix} 1 & 2 \\ -1 & 0 \end{vmatrix} \\
-\begin{vmatrix} 0 & 1 \\ 0 & 1 \end{vmatrix} & \begin{vmatrix} 3 & 1 \\ -1 & 1 \end{vmatrix} & -\begin{vmatrix} 3 & 0 \\ -1 & 0 \end{vmatrix} \\
\begin{vmatrix} 0 & 4 \\ 2 & 4 \end{vmatrix} & -\begin{vmatrix} 3 & 1 \\ 1 & 4 \end{vmatrix} & \begin{vmatrix} 3 & 0 \\ 1 & 2 \end{vmatrix}
\end{pmatrix}$$

$$C(A) = \begin{pmatrix} 2 & -5 & 2 \\ 0 & 4 & 0 \\ -8 & -11 & 6 \end{pmatrix}$$

Therefore, the adjugate is:
$$\operatorname{adj}(A) = C(A)^T = \begin{pmatrix} 2 & 0 & -8 \\ -5 & 4 & -11 \\ 2 & 0 & 6 \end{pmatrix}$$

### Example 3: Using Adjugate to Find Inverse
For the matrix $A$ from Example 2, since $\det(A) = 8$, the inverse is:
$$A^{-1} = \frac{1}{\det(A)} \operatorname{adj}(A) = \frac{1}{8} \begin{pmatrix} 2 & 0 & -8 \\ -5 & 4 & -11 \\ 2 & 0 & 6 \end{pmatrix} = \begin{pmatrix} \frac{1}{4} & 0 & -1 \\ -\frac{5}{8} & \frac{1}{2} & -\frac{11}{8} \\ \frac{1}{4} & 0 & \frac{3}{4} \end{pmatrix}$$

## Applications
1. **Matrix Inversion**: Provides a direct formula for the inverse of a matrix.

2. **Cramer's Rule**: Used in Cramer's rule for solving systems of linear equations.

3. **Characteristic Polynomial**: The coefficients of the characteristic polynomial can be expressed in terms of traces of powers of the adjugate.

4. **Theoretical Results**: Used to prove various results in matrix theory and linear algebra.

5. **Computational Methods**: Useful for symbolic computation of matrix inverses.

## Related Concepts
- [[Matrix Inverse]]: Can be expressed using the adjugate and determinant
- [[Cofactor]]: Used to construct the adjugate
- [[Minor]]: Used to compute cofactors
- [[Determinant]]: Closely related to the adjugate through the fundamental relationship
- [[Cramer's Rule]]: Uses the adjugate in its formulation
