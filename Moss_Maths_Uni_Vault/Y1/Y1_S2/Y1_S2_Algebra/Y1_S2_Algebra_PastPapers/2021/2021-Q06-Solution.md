---
title: "2021-Q06-Solution: Matrix Space, Linear Operator, Rank-Nullity"
aliases: ["Solution to 2021 Q6"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2021", "difficulty-standard", "section-B"]
related_question: [[2021-Q06]]
---

# 2021-Q06-Solution: Matrix Space, Linear Operator, Rank-Nullity

## Original Question
Let $V=M_{2,2}(\mathbb{R})$ be the vector space of $2 \times 2$ matrices over $\mathbb{R}$ and let $A=\begin{pmatrix}1 & 1 \\ 1 & 1\end{pmatrix}$. Denote by $E_{i j}$ the elementary matrix in $V$ such that $E_{i j}$ has 1 at the $(i, j)$-entry and 0 elsewhere, and let $\alpha: E_{11}, E_{12}, E_{21}, E_{22}$ be the list of the elementary matrices in $V$. Define the linear operator $\Theta: V \rightarrow V$ by $X \mapsto A X$.

(a) (i) Define what it means for a list of vectors in a vector space to be a basis.
    (ii) Show that the list $\alpha$ is a basis of $V$.
    (iii) Find the matrix that represents the linear operator $\Theta$ with respect to the basis $\alpha$.
    
(b) (i) Define the rank and the nullity of a linear map.
    (ii) State the Rank-Nullity-Theorem.
    (iii) Find a basis of $\operatorname{Ker} \Theta$ and compute the rank of $\Theta$.

## Solution Process

### Part (a): Basis and Matrix Representation

#### (a)(i): Definition of Basis
A list of vectors in a vector space $V$ is a basis if it is both linearly independent and spanning; equivalently, if any vector in $V$ can be uniquely written as a linear combination of the vectors in the list.

#### (a)(ii): Showing $\alpha$ is a Basis
Any matrix $X \in M_{2,2}(\mathbb{R})$ can be written as:
$$X = \begin{pmatrix}x_{11} & x_{12} \\ x_{21} & x_{22}\end{pmatrix} = x_{11}E_{11} + x_{12}E_{12} + x_{21}E_{21} + x_{22}E_{22}$$

The coefficients $x_{ij}$ are uniquely determined by the matrix $X$. Therefore, the list $\alpha$ spans $V$ and the representation is unique, which means $\alpha$ is a basis of $V$.

#### (a)(iii): Matrix Representation of $\Theta$
We need to find how $\Theta$ acts on each basis element and express the results as linear combinations of the basis elements.

Calculate $\Theta(E_{ij}) = AE_{ij}$:

$$\Theta(E_{11}) = \begin{pmatrix}1 & 1 \\ 1 & 1\end{pmatrix}\begin{pmatrix}1 & 0 \\ 0 & 0\end{pmatrix} = \begin{pmatrix}1 & 0 \\ 1 & 0\end{pmatrix} = E_{11} + E_{21}$$

$$\Theta(E_{12}) = \begin{pmatrix}1 & 1 \\ 1 & 1\end{pmatrix}\begin{pmatrix}0 & 1 \\ 0 & 0\end{pmatrix} = \begin{pmatrix}0 & 1 \\ 0 & 1\end{pmatrix} = E_{12} + E_{22}$$

$$\Theta(E_{21}) = \begin{pmatrix}1 & 1 \\ 1 & 1\end{pmatrix}\begin{pmatrix}0 & 0 \\ 1 & 0\end{pmatrix} = \begin{pmatrix}1 & 0 \\ 1 & 0\end{pmatrix} = E_{11} + E_{21}$$

$$\Theta(E_{22}) = \begin{pmatrix}1 & 1 \\ 1 & 1\end{pmatrix}\begin{pmatrix}0 & 0 \\ 0 & 1\end{pmatrix} = \begin{pmatrix}0 & 1 \\ 0 & 1\end{pmatrix} = E_{12} + E_{22}$$

The matrix representation $B$ has columns that are the coordinate vectors of $\Theta(E_{ij})$ with respect to $\alpha$:
$$B = \begin{pmatrix}
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1 \\
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1
\end{pmatrix}$$

### Part (b): Rank and Nullity

#### (b)(i): Definitions
- The **rank** of a linear map $f: V \rightarrow W$ is $\dim(\operatorname{Im} f)$
- The **nullity** of $f$ is $\dim(\operatorname{Ker} f)$

#### (b)(ii): Rank-Nullity Theorem
$\dim V = \operatorname{rank} f + \operatorname{nullity} f$

#### (b)(iii): Kernel Basis and Rank

To find $\operatorname{Ker} \Theta$, we solve $Bx = 0$:

Row reduce matrix $B$:
$$B = \begin{pmatrix}
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1 \\
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1
\end{pmatrix} \xrightarrow{R3-R1, R4-R2} \begin{pmatrix}
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{pmatrix}$$

From the reduced form:
- $x_1 + x_3 = 0 \Rightarrow x_1 = -x_3$
- $x_2 + x_4 = 0 \Rightarrow x_2 = -x_4$
- $x_3$ and $x_4$ are free variables

The null space is spanned by:
$$\begin{pmatrix}-1 \\ 0 \\ 1 \\ 0\end{pmatrix} \text{ and } \begin{pmatrix}0 \\ -1 \\ 0 \\ 1\end{pmatrix}$$

Converting back to matrices in $V$:
- $(-1)E_{11} + (0)E_{12} + (1)E_{21} + (0)E_{22} = E_{21} - E_{11}$
- $(0)E_{11} + (-1)E_{12} + (0)E_{21} + (1)E_{22} = E_{22} - E_{12}$

Therefore, a basis for $\operatorname{Ker} \Theta$ is:
$$\left\{E_{11} - E_{21}, E_{12} - E_{22}\right\}$$

**Rank computation**:
- $\dim V = 4$ (dimension of $M_{2,2}(\mathbb{R})$)
- $\operatorname{nullity} \Theta = 2$ (dimension of kernel)
- By Rank-Nullity: $\operatorname{rank} \Theta = 4 - 2 = 2$

## Key Steps and Justifications
1. Clear statement of basis definition
2. Using uniqueness of representation to prove basis property
3. Systematic computation of operator action on basis elements
4. Proper construction of matrix representation
5. Definition stating for rank and nullity
6. Solving homogeneous system to find kernel
7. Converting coordinate vectors back to matrix form
8. Applying Rank-Nullity theorem

## Alternative Approaches
- Could find image basis directly instead of using Rank-Nullity
- Could use different basis for $M_{2,2}(\mathbb{R})$

## Common Mistakes
- Errors in matrix multiplication
- Forgetting to convert back to matrix form
- Not properly identifying free variables
- Arithmetic errors in row reduction
- Misapplying Rank-Nullity theorem

## Mark Scheme Breakdown
- (a)(i): 1 mark for correct definition
- (a)(ii): 1 mark for showing basis property
- (a)(iii): 2 marks for correct matrix representation
- (b)(i): 1 mark for both definitions
- (b)(ii): 1 mark for theorem statement
- (b)(iii): 2 marks for kernel basis, 1 mark for rank computation

