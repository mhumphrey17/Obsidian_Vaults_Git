---
title: "2019-Q05-Solution: Diagonalisability Examples"
aliases: ["Solution to 2019 Q5"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2019", "difficulty-standard", "diagonalisability", "examples", "eigenvalues", "complex-vs-real"]
related_question: [[2019-Q05]]
---

# 2019-Q05-Solution: Diagonalisability Examples

## Original Question
(a) Give an example of a matrix $A \in M_{2,2}(\mathbb{R})$ that is diagonalisable over $\mathbb{C}$, but not over $\mathbb{R}$.

(b) Give an example of a matrix $B \in M_{2,2}(\mathbb{C})$ that is not diagonalisable over $\mathbb{C}$.

Briefly justify why your examples have the claimed properties.

## Solution Process

### Part (a): Matrix diagonalisable over ℂ but not over ℝ

**Example:** $A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$

**Justification:**

**Step 1:** Find the characteristic polynomial
$$\det(A - \lambda I) = \det\begin{pmatrix} -\lambda & 1 \\ -1 & -\lambda \end{pmatrix} = (-\lambda)(-\lambda) - (1)(-1) = \lambda^2 + 1$$

**Step 2:** Find eigenvalues
The eigenvalues are roots of $\lambda^2 + 1 = 0$
$$\lambda_{1,2} = \pm i$$

**Step 3:** Analysis over ℂ
- Over ℂ, the eigenvalues are $i$ and $-i$
- These are distinct eigenvalues
- For any matrix with distinct eigenvalues, it is diagonalisable
- Therefore, $A$ is diagonalisable over ℂ

**Step 4:** Analysis over ℝ
- Over ℝ, the eigenvalues are not real numbers
- Since there are no real eigenvalues, there can be no real eigenvectors
- Without a basis of real eigenvectors, the matrix cannot be diagonalised over ℝ
- Therefore, $A$ is not diagonalisable over ℝ

### Part (b): Matrix not diagonalisable over ℂ

**Example:** $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$

**Justification:**

**Step 1:** Find the characteristic polynomial
$$\det(B - \lambda I) = \det\begin{pmatrix} 1-\lambda & 1 \\ 0 & 1-\lambda \end{pmatrix} = (1-\lambda)(1-\lambda) = (1-\lambda)^2$$

**Step 2:** Find eigenvalues
The eigenvalue is $\lambda = 1$ with algebraic multiplicity 2

**Step 3:** Find geometric multiplicity
$$B - 1I = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$$

To find eigenvectors for $\lambda = 1$:
$$(B - 1I)v = 0 \implies \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

This gives us $y = 0$, so eigenvectors are of the form $\begin{pmatrix} x \\ 0 \end{pmatrix}$

The eigenspace is $E_1 = \text{span}\left\{\begin{pmatrix} 1 \\ 0 \end{pmatrix}\right\}$

Therefore, geometric multiplicity = 1

**Step 4:** Analysis
- Algebraic multiplicity = 2
- Geometric multiplicity = 1
- Since geometric multiplicity < algebraic multiplicity, $B$ is not diagonalisable over ℂ

## Key Steps and Justifications
1. **Part (a)**: Chose a matrix with complex eigenvalues to ensure diagonalisability over ℂ but not ℝ
2. **Part (b)**: Chose a matrix where geometric multiplicity < algebraic multiplicity

## Common Examples
- **Part (a)**: Rotation matrices are typical examples
- **Part (b)**: Jordan blocks are standard non-diagonalisable examples

## Mark Scheme Breakdown
- Part (a): 
  - 1 mark for correct matrix example
  - 2 marks for complete justification
- Part (b):
  - 1 mark for correct matrix example
  - 2 marks for complete justification (including multiplicity calculation)