---
title: "2020-Q03-Solution: Matrix Inverse Computation"
aliases: ["Solution to 2020 Q3"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2020", "difficulty-standard", "matrix-inverse", "block-matrices"]
related_question: [[2020-Q03]]
---

# 2020-Q03-Solution: Matrix Inverse Computation

## Original Question
Compute the inverses of the following two matrices, showing your computation.

(a) $\begin{pmatrix} 0 & 0 & 1 & 0 & 0 \\ 0 & 2 & 0 & 0 & 0 \\ 3 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 4 \\ 0 & 0 & 0 & 5 & 0 \end{pmatrix}$

(b) $\begin{pmatrix} 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 0 & 3 \\ 4 & 0 & 0 & 0 & 0 \\ 0 & 5 & 0 & 0 & 0 \end{pmatrix}$

## Solution Process

### Part (a): Block Diagonal Matrix

The matrix can be written as a block diagonal matrix:
$$X = \begin{pmatrix} A & 0 \\ 0 & B \end{pmatrix}$$

where $A = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 2 & 0 \\ 3 & 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 4 \\ 5 & 0 \end{pmatrix}$

For a block diagonal matrix, the inverse is:
$$X^{-1} = \begin{pmatrix} A^{-1} & 0 \\ 0 & B^{-1} \end{pmatrix}$$

**Computing $A^{-1}$:**
$$[A | I] = \begin{pmatrix} 0 & 0 & 1 & | & 1 & 0 & 0 \\ 0 & 2 & 0 & | & 0 & 1 & 0 \\ 3 & 0 & 0 & | & 0 & 0 & 1 \end{pmatrix}$$

$$\xrightarrow{R_1 \leftrightarrow R_3} \begin{pmatrix} 3 & 0 & 0 & | & 0 & 0 & 1 \\ 0 & 2 & 0 & | & 0 & 1 & 0 \\ 0 & 0 & 1 & | & 1 & 0 & 0 \end{pmatrix}$$

$$\xrightarrow{\frac{1}{3}R_1, \frac{1}{2}R_2} \begin{pmatrix} 1 & 0 & 0 & | & 0 & 0 & \frac{1}{3} \\ 0 & 1 & 0 & | & 0 & \frac{1}{2} & 0 \\ 0 & 0 & 1 & | & 1 & 0 & 0 \end{pmatrix}$$

Therefore, $A^{-1} = \begin{pmatrix} 0 & 0 & \frac{1}{3} \\ 0 & \frac{1}{2} & 0 \\ 1 & 0 & 0 \end{pmatrix}$

**Computing $B^{-1}$:**
$$[B | I] = \begin{pmatrix} 0 & 4 & | & 1 & 0 \\ 5 & 0 & | & 0 & 1 \end{pmatrix}$$

$$\xrightarrow{R_1 \leftrightarrow R_2} \begin{pmatrix} 5 & 0 & | & 0 & 1 \\ 0 & 4 & | & 1 & 0 \end{pmatrix}$$

$$\xrightarrow{\frac{1}{5}R_1, \frac{1}{4}R_2} \begin{pmatrix} 1 & 0 & | & 0 & \frac{1}{5} \\ 0 & 1 & | & \frac{1}{4} & 0 \end{pmatrix}$$

Therefore, $B^{-1} = \begin{pmatrix} 0 & \frac{1}{5} \\ \frac{1}{4} & 0 \end{pmatrix}$

**Final Answer:**
$$X^{-1} = \begin{pmatrix} 0 & 0 & \frac{1}{3} & 0 & 0 \\ 0 & \frac{1}{2} & 0 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & \frac{1}{5} \\ 0 & 0 & 0 & \frac{1}{4} & 0 \end{pmatrix}$$

### Part (b): Block Anti-diagonal Matrix

The matrix can be written as:
$$Y = \begin{pmatrix} 0 & C \\ D & 0 \end{pmatrix}$$

where $C = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ and $D = \begin{pmatrix} 4 & 0 \\ 0 & 5 \end{pmatrix}$

For a block anti-diagonal matrix, the inverse is:
$$Y^{-1} = \begin{pmatrix} 0 & D^{-1} \\ C^{-1} & 0 \end{pmatrix}$$

**Computing $C^{-1}$:**
Since $C$ is diagonal, its inverse is simply the diagonal matrix with reciprocal entries:
$$C^{-1} = \begin{pmatrix} \frac{1}{1} & 0 & 0 \\ 0 & \frac{1}{2} & 0 \\ 0 & 0 & \frac{1}{3} \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \frac{1}{2} & 0 \\ 0 & 0 & \frac{1}{3} \end{pmatrix}$$

**Computing $D^{-1}$:**
Since $D$ is diagonal:
$$D^{-1} = \begin{pmatrix} \frac{1}{4} & 0 \\ 0 & \frac{1}{5} \end{pmatrix}$$

**Final Answer:**
$$Y^{-1} = \begin{pmatrix} 0 & 0 & 0 & \frac{1}{4} & 0 \\ 0 & 0 & 0 & 0 & \frac{1}{5} \\ 1 & 0 & 0 & 0 & 0 \\ 0 & \frac{1}{2} & 0 & 0 & 0 \\ 0 & 0 & \frac{1}{3} & 0 & 0 \end{pmatrix}$$

## Key Steps and Justifications
1. Recognized the block structure of the matrices
2. Used the property that the inverse of a block diagonal matrix is the block diagonal matrix of the inverses
3. Used the property that the inverse of a block anti-diagonal matrix swaps the blocks
4. Applied Gaussian elimination for general block inverses
5. Used the simple inverse formula for diagonal matrices

## Alternative Approaches
- Could use full Gaussian elimination on the $5 \times 5$ matrices, but this would be much more tedious
- The block structure approach is much more efficient

## Common Mistakes
- Not recognizing the block structure
- Incorrectly applying the block inverse formulas
- Computational errors in row operations
- Forgetting to swap blocks for the anti-diagonal case

## Mark Scheme Breakdown
- Part (a): 3 marks for recognizing structure, computing block inverses, and correct final answer
- Part (b): 3 marks for similar reasoning and computation
