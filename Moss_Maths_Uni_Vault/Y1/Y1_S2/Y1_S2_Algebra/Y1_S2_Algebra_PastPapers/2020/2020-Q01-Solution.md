---
title: "2020-Q01-Solution: True/False Statements on Linear Algebra Fundamentals"
aliases: ["Solution to 2020 Q1"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2020", "difficulty-easy", "true-false"]
related_question: [[2020-Q01]]
---

# 2020-Q01-Solution: True/False Statements on Linear Algebra Fundamentals

## Original Question
For Question 1, you do not need to justify your answers. For Questions 2-6, please justify your answers and cite clearly any results you use.

**1.** Are the following true or false?

(a) Elementary row operations preserve the rank of a matrix.
(b) Two matrices that represent the same linear operator are equivalent.
(c) Two finite dimensional vector spaces are isomorphic if and only if all the bases of the two spaces have the same cardinality.
(d) The rank of a $2020 \times 2021$ matrix over $\mathbb{C}$ can be 2021.
(e) Let $A, B$ be any $2 \times 2$ matrices over the field of two elements $\mathbb{F}_{2}=\{0,1\}$. Then $\operatorname{det}(A+B)=\operatorname{det} A+\operatorname{det} B$.
(f) Similar matrices have the same eigenvectors.

## Solution Process

### Part (a): TRUE
Elementary row operations correspond to multiplication by invertible elementary matrices. Since multiplication by invertible matrices preserves rank (**PROP-1.8.3**), elementary row operations preserve the rank of a matrix.

### Part (b): TRUE
If two matrices represent the same linear operator $\phi: V \to V$ with respect to different bases $\alpha$ and $\beta$, then they are related by a change of basis transformation:
$$B = [I]_\alpha^\beta [\phi]_\alpha [I]_\beta^\alpha = P^{-1}AP$$
where $P$ is the change of basis matrix (**PROP-1.7.7**). Since similar matrices are a special case of equivalent matrices, they are indeed equivalent.

### Part (c): TRUE
Two finite-dimensional vector spaces are isomorphic if and only if they have the same dimension (**COR-1.4.5**). The dimension of a finite-dimensional vector space is defined as the cardinality of any basis (**DEF-1.5.2**). Therefore, this statement is true.

### Part (d): FALSE
The rank of an $m \times n$ matrix cannot exceed $\min(m,n)$ (**PROP-1.8.7**). For a $2020 \times 2021$ matrix, the maximum possible rank is $\min(2020, 2021) = 2020$. Therefore, the rank cannot be 2021.

### Part (e): FALSE
The determinant function is not linear with respect to matrix addition. This is a general property that holds for all fields, including $\mathbb{F}_2$.

Counterexample: Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$.
- $\det A = 0$, $\det B = 0$
- $A + B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$
- $\det(A + B) = \det I = 1$
- $\det A + \det B = 0 + 0 = 0$
- Since $1 \neq 0$ in $\mathbb{F}_2$, we have $\det(A+B) \neq \det A + \det B$.

### Part (f): FALSE
Similar matrices have the same eigenvalues but generally not the same eigenvectors. If $A$ and $B$ are similar with $A = PBP^{-1}$, and $v$ is an eigenvector of $B$ with eigenvalue $\lambda$, then $Pv$ is an eigenvector of $A$ with the same eigenvalue. The eigenvectors are related by the similarity transformation.

Example: $A = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}$ are both similar to a diagonal matrix with eigenvalues 2 and 1, but they have different eigenvectors.

## Final Answers
- (a) TRUE
- (b) TRUE
- (c) TRUE
- (d) FALSE
- (e) FALSE
- (f) FALSE

## Common Mistakes
- Confusing similar and equivalent matrices
- Assuming determinant is linear in addition
- Forgetting the rank bound for rectangular matrices
- Confusing eigenvalues (which are preserved under similarity) with eigenvectors (which are not)
