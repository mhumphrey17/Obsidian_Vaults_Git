---
title: "2019-Q07-Solution: Trace Properties and Eigenvalue Analysis"
aliases: ["Solution to 2019 Q7"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2019", "difficulty-challenging", "trace", "eigenvalues", "similar-matrices", "diagonalisability"]
related_question: [[2019-Q07]]
---

# 2019-Q07-Solution: Trace Properties and Eigenvalue Analysis

## Original Question

**Part (a)**: Trace properties and similar matrices
**Part (b)**: Eigenvalue analysis of specific 5×5 matrix

## Solution Process

### Part (a): Trace Properties

#### Part (a)(i): Trace of matrix products

**To show**: $\operatorname{tr}(AB) = \operatorname{tr}(BA)$ for $A, B \in M_{n,n}(\mathbb{F})$

**Proof**:
Let $A = (a_{ij})$ and $B = (b_{ij})$

$(AB)_{ik} = \sum_{j=1}^n a_{ij}b_{jk}$

$\operatorname{tr}(AB) = \sum_{i=1}^n (AB)_{ii} = \sum_{i=1}^n \sum_{j=1}^n a_{ij}b_{ji}$

$(BA)_{ki} = \sum_{j=1}^n b_{kj}a_{ji}$

$\operatorname{tr}(BA) = \sum_{k=1}^n (BA)_{kk} = \sum_{k=1}^n \sum_{j=1}^n b_{kj}a_{jk}$

Reindexing the double sum in $\operatorname{tr}(BA)$:
$\sum_{k=1}^n \sum_{j=1}^n b_{kj}a_{jk} = \sum_{j=1}^n \sum_{k=1}^n b_{kj}a_{jk} = \sum_{j=1}^n \sum_{i=1}^n b_{ij}a_{ji}$

Therefore: $\operatorname{tr}(AB) = \operatorname{tr}(BA)$

#### Part (a)(ii): Definition of similar matrices

Two matrices $X, Y \in M_{n,n}(\mathbb{F})$ are **similar** if there exists an invertible matrix $P \in M_{n,n}(\mathbb{F})$ such that:
$$X = P^{-1}YP$$

#### Part (a)(iii): Trace of similar matrices

**To show**: If $X$ and $Y$ are similar, then $\operatorname{tr} X = \operatorname{tr} Y$

**Proof**:
Since $X$ and $Y$ are similar, there exists invertible $P$ such that $X = P^{-1}YP$

$\operatorname{tr}(X) = \operatorname{tr}(P^{-1}YP)$

Using the result from part (i):
$\operatorname{tr}(P^{-1}(YP)) = \operatorname{tr}((YP)P^{-1})$

$\operatorname{tr}(X) = \operatorname{tr}(YPP^{-1})$

Since $PP^{-1} = I_n$:
$\operatorname{tr}(X) = \operatorname{tr}(YI_n) = \operatorname{tr}(Y)$

#### Part (a)(iv): Trace equals sum of eigenvalues

**To show**: For $C \in M_{n,n}(\mathbb{C})$, $\operatorname{tr}(C)$ equals the sum of eigenvalues counted with algebraic multiplicities

**Proof**:
The characteristic polynomial of $C$ is:
$p(\lambda) = \det(C - \lambda I) = (-1)^n \lambda^n + (-1)^{n-1}(\operatorname{tr} C)\lambda^{n-1} + \cdots + \det C$

If $\lambda_1, \lambda_2, \ldots, \lambda_n$ are the eigenvalues (with repetition), then:
$p(\lambda) = (-1)^n(\lambda - \lambda_1)(\lambda - \lambda_2)\cdots(\lambda - \lambda_n)$

Expanding and comparing coefficients of $\lambda^{n-1}$:
$(-1)^{n-1}(\operatorname{tr} C) = (-1)^n(-\lambda_1 - \lambda_2 - \cdots - \lambda_n)$

$(-1)^{n-1}(\operatorname{tr} C) = (-1)^{n+1}(\lambda_1 + \lambda_2 + \cdots + \lambda_n)$

Multiplying both sides by $(-1)^{n+1}$:
$\operatorname{tr} C = \lambda_1 + \lambda_2 + \cdots + \lambda_n$

### Part (b): Eigenvalue Analysis

#### Part (b)(i): Finding eigenvalue 7 and its geometric multiplicity

**Matrix**: $C = \begin{pmatrix}
10 & -6 & -3 & -9 & 6 \\
-2 & 11 & 2 & 6 & -4 \\
1 & -2 & 6 & -3 & 2 \\
4 & -8 & -4 & -5 & 8 \\
1 & -2 & -1 & -3 & 9
\end{pmatrix}$

**Step 1**: Compute $C - 7I$

$C - 7I = \begin{pmatrix}
3 & -6 & -3 & -9 & 6 \\
-2 & 4 & 2 & 6 & -4 \\
1 & -2 & -1 & -3 & 2 \\
4 & -8 & -4 & -12 & 8 \\
1 & -2 & -1 & -3 & 2
\end{pmatrix}$

**Step 2**: Analyze the structure

Notice that all columns are multiples of the first column:
- Column 2 = -2 × Column 1
- Column 3 = -1 × Column 1
- Column 4 = -3 × Column 1
- Column 5 = 2 × Column 1

This means the rank of $(C - 7I)$ is 1.

**Step 3**: Show 7 is an eigenvalue

Since rank$(C - 7I) = 1 < 5$, the matrix is singular, so $\det(C - 7I) = 0$.
Therefore, 7 is an eigenvalue of $C$.

**Step 4**: Compute geometric multiplicity

$\text{g.m.}(7) = \dim(\ker(C - 7I)) = 5 - \text{rank}(C - 7I) = 5 - 1 = 4$

#### Part (b)(ii): Finding other eigenvalues

**Step 1**: Use trace relationship

$\operatorname{tr}(C) = 10 + 11 + 6 + (-5) + 9 = 31$

From part (a)(iv), the sum of eigenvalues equals the trace.

**Step 2**: Determine algebraic multiplicity of 7

Since g.m.(7) = 4, and g.m. ≤ a.m., we have a.m.(7) ≥ 4.

If a.m.(7) = 5, then all eigenvalues are 7, giving sum = 35 ≠ 31.
Therefore, a.m.(7) = 4.

**Step 3**: Find the remaining eigenvalue

Let the eigenvalues be $7, 7, 7, 7, \mu$.
Sum of eigenvalues = $4(7) + \mu = 28 + \mu = 31$
Therefore, $\mu = 3$.

The other eigenvalue is 3 with a.m.(3) = 1.

**Step 4**: Find g.m.(3)

For any eigenvalue, g.m. ≤ a.m.
Since a.m.(3) = 1, we must have g.m.(3) = 1.

#### Part (b)(iii): Diagonalisability

**Check diagonalisability criterion**:

For $C$ to be diagonalisable, g.m.(λ) = a.m.(λ) for all eigenvalues.

- For λ = 7: g.m.(7) = 4 = a.m.(7) ✓
- For λ = 3: g.m.(3) = 1 = a.m.(3) ✓

Since g.m. = a.m. for all eigenvalues, $C$ is diagonalisable.

## Key Steps and Justifications
1. Used fundamental trace properties and matrix multiplication
2. Applied rank-nullity relationship
3. Exploited trace-eigenvalue relationship
4. Used multiplicity constraints systematically

## Common Mistakes
- Errors in summation manipulation for trace proofs
- Not recognizing special matrix structure
- Incorrect multiplicity calculations
- Missing the constraint that g.m. ≤ a.m.

## Mark Scheme Breakdown
- Part (a)(i): 2 marks for complete proof
- Part (a)(ii): 1 mark for definition
- Part (a)(iii): 2 marks for proof
- Part (a)(iv): 3 marks for full argument
- Part (b)(i): 3 marks for eigenvalue verification and g.m.
- Part (b)(ii): 3 marks for finding all eigenvalues
- Part (b)(iii): 2 marks for diagonalisability conclusion