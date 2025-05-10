---
title: "PS06-Q07-Solution: Characteristic Polynomial, Trace, and Determinant for 2x2"
aliases: ["Solution to PS6 Q7"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-06", "difficulty-homework", "characteristic-polynomial", "trace", "eigenvalues"]
related_problem: [[PS06-Q07]]
---

# PS06-Q07-Solution: Characteristic Polynomial, Trace, and Determinant for 2x2

## Original Problem
Consider a general $2 \times 2$ matrix $A=\left(\begin{array}{ll}a_{11} & a_{12} \\ a_{21} & a_{22}\end{array}\right)$.

(i) Let $\operatorname{tr} A=a_{11}+a_{22}$ (called the trace of $A$ ). Show, by explicit calculation, that the coefficients of the characteristic polynomial $\Delta_{A}(t)=t^{2}-b t+c$ are given by

$$b=\operatorname{tr} A=a_{11}+a_{22} \quad \text { and } \quad c=\operatorname{det} A=a_{11} a_{22}-a_{21} a_{12}$$

(ii) Suppose that $A$ has (not necessarily distinct) eigenvalues $\lambda_{1}, \lambda_{2}$. Show that

$$\operatorname{tr} A=\lambda_{1}+\lambda_{2} \quad \text { and } \quad \operatorname{det} A=\lambda_{1} \lambda_{2}$$

## Solution Process

### Part (i): Computing the Characteristic Polynomial

The characteristic polynomial is defined as $\Delta_A(t) = \det(A - tI)$.

For our 2×2 matrix:
$$A - tI = \left(\begin{array}{ll}a_{11} & a_{12} \\ a_{21} & a_{22}\end{array}\right) - t\left(\begin{array}{ll}1 & 0 \\ 0 & 1\end{array}\right) = \left(\begin{array}{ll}a_{11}-t & a_{12} \\ a_{21} & a_{22}-t\end{array}\right)$$

Calculating the determinant:
$$\Delta_A(t) = \det\left(\begin{array}{ll}a_{11}-t & a_{12} \\ a_{21} & a_{22}-t\end{array}\right)$$

$$= (a_{11}-t)(a_{22}-t) - a_{12}a_{21}$$

$$= a_{11}a_{22} - a_{11}t - a_{22}t + t^2 - a_{12}a_{21}$$

$$= t^2 - (a_{11}+a_{22})t + (a_{11}a_{22} - a_{12}a_{21})$$

Comparing with the standard form $\Delta_A(t) = t^2 - bt + c$:
- $b = a_{11} + a_{22} = \operatorname{tr} A$
- $c = a_{11}a_{22} - a_{12}a_{21} = \det A$

Therefore, the characteristic polynomial is:
$$\Delta_A(t) = t^2 - \operatorname{tr}(A)t + \det(A)$$

### Part (ii): Relation to Eigenvalues

If $A$ has eigenvalues $\lambda_1$ and $\lambda_2$, then these are the roots of the characteristic polynomial:
$$\Delta_A(t) = 0 \Leftrightarrow t = \lambda_1 \text{ or } t = \lambda_2$$

Since $\lambda_1$ and $\lambda_2$ are roots of $\Delta_A(t)$, we can factor the polynomial as:
$$\Delta_A(t) = (t - \lambda_1)(t - \lambda_2)$$

Expanding this factored form:
$$\Delta_A(t) = t^2 - (\lambda_1 + \lambda_2)t + \lambda_1\lambda_2$$

Comparing with our result from part (i):
$$\Delta_A(t) = t^2 - \operatorname{tr}(A)t + \det(A)$$

Equating coefficients:
- Coefficient of $t$: $-(\lambda_1 + \lambda_2) = -\operatorname{tr}(A)$
- Constant term: $\lambda_1\lambda_2 = \det(A)$

Therefore:
$$\operatorname{tr}(A) = \lambda_1 + \lambda_2$$
$$\det(A) = \lambda_1\lambda_2$$

## Key Insights
- The characteristic polynomial of a 2×2 matrix has a simple relationship with its trace and determinant
- The eigenvalues are directly related to these matrix invariants through Vieta's formulas
- This result generalizes to higher dimensions, but the formulas become more complex

## Alternative Approaches
- Could verify with specific examples (like diagonal matrices or simple cases)
- Could use the fact that similar matrices have the same characteristic polynomial
- Could extend this to 3×3 matrices to see the pattern

## Common Mistakes
- Forgetting the sign when computing the determinant
- Making errors in polynomial expansion
- Confusing the coefficients in the standard form of the polynomial
- Not recognizing this as an application of Vieta's formulas

## Theoretical Significance
This result is fundamental in linear algebra:
- It shows how eigenvalues encode information about matrix traces and determinants
- It's used in the Cayley-Hamilton theorem (every matrix satisfies its own characteristic equation)
- It provides a quick way to find eigenvalues for 2×2 matrices using the quadratic formula

## Extension to Higher Dimensions
For an $n \times n$ matrix, the characteristic polynomial is:
$$\Delta_A(t) = t^n - \operatorname{tr}(A)t^{n-1} + \cdots + (-1)^n\det(A)$$

The trace equals the sum of eigenvalues and the determinant equals the product of eigenvalues, regardless of dimension.
