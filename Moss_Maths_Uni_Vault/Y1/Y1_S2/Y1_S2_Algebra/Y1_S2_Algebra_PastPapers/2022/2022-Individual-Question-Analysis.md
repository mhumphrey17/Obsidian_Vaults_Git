---
title: "2022 Individual Question Analysis"
aliases: ["2022 Question Breakdown", "2022 Question Analysis"]
tags: ["Y1_S2", "Y1_S2_Algebra", "past_paper", "2022-exam", "question-analysis"]
topics_covered: ["All Y1_S2_Algebra Topics"]
---

# 2022 Individual Question Analysis

## Question 1: True/False Statements [6 marks]

### Part (a) - Basis of Sum of Subspaces
- **Topic**: Vector Spaces (Ch1) - Basis, Direct Sum
- **Key Concepts**: Basis definition, Linear subspaces, Direct sum vs general sum
- **Difficulty**: Easy
- **Answer**: FALSE
- **Key Insight**: Concatenated list is only a basis for direct sums ($U \oplus W$), not general sums

### Part (b) - Similar Matrices and Rank
- **Topic**: Vector Spaces (Ch1) - Similar Matrices, Rank
- **Key Concepts**: Similar matrices, Rank invariance
- **Difficulty**: Easy
- **Answer**: TRUE
- **Key Insight**: Rank is preserved under similarity transformations

### Part (c) - Matrix Representation Shape
- **Topic**: Vector Spaces (Ch1) - Matrix Representation
- **Key Concepts**: Matrix dimensions, Linear maps
- **Difficulty**: Easy
- **Answer**: FALSE
- **Key Insight**: Square only when $\dim V = \dim W$

### Part (d) - Nilpotent Matrix Determinant
- **Topic**: Determinants (Ch2) - Nilpotent matrices
- **Key Concepts**: Determinant properties, Product formula
- **Difficulty**: Easy/Standard
- **Answer**: TRUE
- **Key Insight**: $A^2 = 0 \Rightarrow \det(A)^2 = 0 \Rightarrow \det(A) = 0$

### Part (e) - Linear Combinations of Eigenvectors
- **Topic**: Eigenvalues (Ch3) - Eigenvectors, Eigenspaces
- **Key Concepts**: Eigenspace properties, Linear combinations
- **Difficulty**: Easy
- **Answer**: TRUE
- **Key Insight**: Eigenspaces are subspaces

### Part (f) - Diagonalizability and Distinct Eigenvalues
- **Topic**: Eigenvalues (Ch3) - Diagonalization
- **Key Concepts**: Diagonalizability criteria, Algebraic vs geometric multiplicity
- **Difficulty**: Easy/Standard
- **Answer**: FALSE
- **Key Insight**: Distinct eigenvalues is sufficient but not necessary for diagonalizability

## Question 2: Linear Maps [6 marks]

### Part (a) - Linear Map Definition
- **Topic**: Vector Spaces (Ch1) - Linear Maps
- **Key Concepts**: Additivity, Homogeneity
- **Difficulty**: Easy
- **Skill**: Definition recall
- **Key Insight**: Combined form or separate properties acceptable

### Part (b)(i) - Testing Linearity: $f(x) = x + 100$
- **Topic**: Vector Spaces (Ch1) - Linear Maps
- **Key Concepts**: Zero vector property, Additivity test
- **Difficulty**: Easy
- **Answer**: Not linear
- **Method**: $f(0) = 100 \neq 0$

### Part (b)(ii) - Testing Linearity: $f(x,y) = xy$
- **Topic**: Vector Spaces (Ch1) - Linear Maps
- **Key Concepts**: Additivity test, Homogeneity test
- **Difficulty**: Easy
- **Answer**: Not linear
- **Method**: Additivity fails with counterexample

## Question 3: Determinant Computations [6 marks]

### Part (a) - 4×4 Determinant
- **Topic**: Determinants (Ch2) - Computation
- **Key Concepts**: Row operations, Identical rows
- **Difficulty**: Standard
- **Method**: Use row operations to find identical rows
- **Answer**: 0

### Part (b) - Special Structure Determinant
- **Topic**: Determinants (Ch2) - Computation
- **Key Concepts**: Row swaps, Triangular matrices
- **Difficulty**: Standard
- **Method**: Recognize permutation pattern, swap to triangular
- **Answer**: 625

## Question 4: Diagonalization and Matrix Powers [6 marks]

### Part (a) - Finding Diagonalization Matrix P
- **Topic**: Eigenvalues (Ch3) - Diagonalization
- **Key Concepts**: Eigenvalues, Eigenvectors, Change of basis
- **Difficulty**: Standard
- **Method**: Find eigenvalues, compute eigenvectors, construct P

### Part (b) - Matrix Power Limit
- **Topic**: Eigenvalues (Ch3) - Matrix Powers
- **Key Concepts**: Diagonalization, Geometric series
- **Difficulty**: Standard
- **Method**: Use diagonalization to compute limit
- **Answer**: 0 (all eigenvalues have absolute value < 1 when divided by 5)

## Question 5: Inner Products [6+6 = 12 marks]

### Part (a) - Inner Product Definition
- **Topic**: Inner Product Spaces (Ch4) - Definition
- **Key Concepts**: Conjugate symmetry, Linearity, Positive definite
- **Difficulty**: Easy
- **Marks**: 6 (generous for definition)
- **Key Insight**: Must state all three properties precisely

### Part (b) - Complex Dot Product Calculations
- **Topic**: Inner Product Spaces (Ch4) - Complex Inner Product
- **Key Concepts**: Complex conjugation, Arithmetic
- **Difficulty**: Easy
- **Marks**: 6
- **Method**: Apply dot product formula with careful conjugation

## Question 6: Rank, Nullity, and Matrix Representation [15 marks]

### Part (a)(i) - Definitions and Rank-Nullity Theorem
- **Topic**: Vector Spaces (Ch1) - Rank, Nullity
- **Key Concepts**: Rank, Nullity, Rank-Nullity Theorem
- **Difficulty**: Easy
- **Marks**: 4
- **Key Insight**: Include dimension notation in definitions

### Part (a)(ii) - Injectivity/Surjectivity Conditions
- **Topic**: Vector Spaces (Ch1) - Linear Map Properties
- **Key Concepts**: Injectivity, Surjectivity, Rank
- **Difficulty**: Standard
- **Marks**: 4
- **Method**: Use RNT to derive conditions

### Part (b)(i) - Matrix Representation with Change of Basis
- **Topic**: Vector Spaces (Ch1) - Change of Basis
- **Key Concepts**: Change of basis, Matrix representation
- **Difficulty**: Challenging
- **Method**: Find P, compute P⁻¹, calculate P⁻¹AP
- **Key Insight**: Multi-step calculation requiring careful execution

### Part (b)(ii) - Invertibility Test
- **Topic**: Vector Spaces/Determinants (Ch1/Ch2) - Invertibility
- **Key Concepts**: Determinant, Rank
- **Difficulty**: Standard
- **Method**: Check determinant or rank

## Question 7: Orthonormal Bases and Adjoint Operators [15 marks]

### Part (a)(i) - Orthonormal Basis Definition
- **Topic**: Inner Product Spaces (Ch4) - Orthonormal Basis
- **Key Concepts**: Inner product, Orthogonality, Normalization
- **Difficulty**: Easy
- **Key Insight**: Kronecker delta notation

### Part (a)(ii) - QR Decomposition Definition
- **Topic**: Inner Product Spaces (Ch4) - QR Decomposition
- **Key Concepts**: Orthogonal matrix, Upper triangular
- **Difficulty**: Easy
- **Key Insight**: Must specify positive diagonal entries

### Part (a)(iii) - Gram-Schmidt and QR Construction
- **Topic**: Inner Product Spaces (Ch4) - Gram-Schmidt
- **Key Concepts**: Orthogonalization, Normalization
- **Difficulty**: Standard
- **Method**: Apply Gram-Schmidt, construct Q and R

### Part (b)(i) - Adjoint Definition
- **Topic**: Linear Operators (Ch5) - Adjoint
- **Key Concepts**: Inner product preservation
- **Difficulty**: Easy
- **Key Insight**: Definition using inner product equality

### Part (b)(ii) - Adjoint Properties Proof
- **Topic**: Linear Operators (Ch5) - Properties
- **Key Concepts**: Adjoint composition, Double adjoint
- **Difficulty**: Standard/Challenging
- **Method**: Systematic application of definition

# Summary Analysis

## Difficulty Distribution
- **Easy**: Q1, Q2, Q5a, Q7a(i-ii), Q7b(i)
- **Standard**: Q3, Q4, Q6a(ii), Q6b(ii), Q7a(iii), Q7b(ii)
- **Challenging**: Q6b(i)

## Topic Coverage
1. **Vector Spaces (Ch1)**: ~40-45% (Q1, Q2, Q6)
2. **Determinants (Ch2)**: ~10-15% (Q1d, Q3, Q6b(ii))
3. **Eigenvalues (Ch3)**: ~15-20% (Q1e-f, Q4)
4. **Inner Products (Ch4)**: ~20-25% (Q5, Q7a)
5. **Linear Operators (Ch5)**: ~5-10% (Q7b)

## Skill Requirements
- **Definition Recall**: Q1, Q2a, Q5a, Q6a(i), Q7a(i-ii), Q7b(i)
- **Standard Calculation**: Q3, Q4, Q5b, Q7a(iii)
- **Proof Construction**: Q6a(ii), Q7b(ii)
- **Multi-step Calculation**: Q6b(i)
