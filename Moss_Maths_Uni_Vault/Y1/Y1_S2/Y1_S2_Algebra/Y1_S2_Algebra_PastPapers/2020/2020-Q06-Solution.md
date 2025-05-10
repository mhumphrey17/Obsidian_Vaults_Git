---
title: "2020-Q06-Solution: Linear Operator on 2x2 Matrices - Basis and Rank-Nullity"
aliases: ["Solution to 2020 Q6"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2020", "difficulty-challenging", "basis", "matrix-representation", "rank-nullity", "kernel"]
related_question: [[2020-Q06]]
---

# 2020-Q06-Solution: Linear Operator on 2x2 Matrices - Basis and Rank-Nullity

## Original Question
Let $V=M_{2,2}(\mathbb{R})$ be the vector space of $2 \times 2$ matrices over $\mathbb{R}$ and let $A=\begin{pmatrix}1 & 1 \\ 1 & 1\end{pmatrix}$. Denote by $E_{i j}$ the elementary matrix in $V$ such that $E_{i j}$ has 1 at the $(i, j)$-entry and 0 elsewhere, and let $\alpha: E_{11}, E_{12}, E_{21}, E_{22}$ be the list of the elementary matrices in $V$. Define the linear operator $\Theta: V \rightarrow V$ by $X \mapsto A X$.

(a) (i) Define what it means for a list of vectors in a vector space to be a basis.
    (ii) Show that the list $\alpha$ is a basis of $V$.
    (iii) Find the matrix that represents the linear operator $\Theta$ with respect to the basis $\alpha$.

(b) (i) Define the rank and the nullity of a linear map.
    (ii) State the Rank-Nullity-Theorem.
    (iii) Find a basis of $\operatorname{Ker} \Theta$ and compute the rank of $\Theta$.

## Solution Process

### Part (a)

#### (i) Definition of basis
A list of vectors in a vector space $V$ is a **basis** if it is both linearly independent and spans $V$. Equivalently, a list of vectors is a basis if every vector in $V$ can be written uniquely as a linear combination of the vectors in the list.

#### (ii) Showing $\alpha$ is a basis

First, we verify that $\alpha$ spans $V$:
For any matrix $X = \begin{pmatrix} x_{11} & x_{12} \\ x_{21} & x_{22} \end{pmatrix} \in V$, we can write:
$$X = x_{11}E_{11} + x_{12}E_{12} + x_{21}E_{21} + x_{22}E_{22}$$

This shows $\alpha$ spans $V$.

Next, we verify linear independence:
Suppose $c_{11}E_{11} + c_{12}E_{12} + c_{21}E_{21} + c_{22}E_{22} = 0$ for some scalars $c_{ij}$.
This means:
$$\begin{pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

Therefore, $c_{11} = c_{12} = c_{21} = c_{22} = 0$.

Since $\alpha$ is linearly independent and spans $V$, it is a basis of $V$.

#### (iii) Matrix representation of $\Theta$

To find the matrix representation, we compute $\Theta(E_{ij})$ for each basis vector:

$$\Theta(E_{11}) = AE_{11} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} = E_{11} + E_{21}$$

$$\Theta(E_{12}) = AE_{12} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 0 & 1 \end{pmatrix} = E_{12} + E_{22}$$

$$\Theta(E_{21}) = AE_{21} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} = E_{11} + E_{21}$$

$$\Theta(E_{22}) = AE_{22} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 0 & 1 \end{pmatrix} = E_{12} + E_{22}$$

The matrix representation is:
$$[\Theta]_\alpha = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \\ 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \end{pmatrix}$$

### Part (b)

#### (i) Definitions

**Rank**: The rank of a linear map $f: V \rightarrow W$ is the dimension of the image of $f$:
$$\operatorname{rank} f = \dim(\operatorname{Im} f)$$

**Nullity**: The nullity of a linear map $f: V \rightarrow W$ is the dimension of the kernel of $f$:
$$\operatorname{null} f = \dim(\operatorname{Ker} f)$$

#### (ii) Rank-Nullity Theorem

For a linear map $f: V \rightarrow W$ between finite-dimensional vector spaces:
$$\dim V = \operatorname{rank} f + \operatorname{null} f$$

#### (iii) Kernel basis and rank computation

First, we find the kernel of $\Theta$:
$$\operatorname{Ker} \Theta = \{X \in V \mid \Theta(X) = AX = 0\}$$

For $X = \begin{pmatrix} x_{11} & x_{12} \\ x_{21} & x_{22} \end{pmatrix}$:
$$AX = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} x_{11} & x_{12} \\ x_{21} & x_{22} \end{pmatrix} = \begin{pmatrix} x_{11}+x_{21} & x_{12}+x_{22} \\ x_{11}+x_{21} & x_{12}+x_{22} \end{pmatrix}$$

Setting this equal to zero:
$$\begin{cases}
x_{11} + x_{21} = 0 \\
x_{12} + x_{22} = 0
\end{cases}$$

This gives us:
$$\begin{cases}
x_{21} = -x_{11} \\
x_{22} = -x_{12}
\end{cases}$$

So matrices in $\operatorname{Ker} \Theta$ have the form:
$$X = \begin{pmatrix} x_{11} & x_{12} \\ -x_{11} & -x_{12} \end{pmatrix} = x_{11}\begin{pmatrix} 1 & 0 \\ -1 & 0 \end{pmatrix} + x_{12}\begin{pmatrix} 0 & 1 \\ 0 & -1 \end{pmatrix}$$

Let $K_1 = \begin{pmatrix} 1 & 0 \\ -1 & 0 \end{pmatrix}$ and $K_2 = \begin{pmatrix} 0 & 1 \\ 0 & -1 \end{pmatrix}$.

To verify linear independence of $\{K_1, K_2\}$:
Suppose $c_1K_1 + c_2K_2 = 0$. This gives:
$$\begin{pmatrix} c_1 & c_2 \\ -c_1 & -c_2 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

Hence $c_1 = c_2 = 0$, proving linear independence.

**Basis for $\operatorname{Ker} \Theta$**: $\{K_1, K_2\}$

**Nullity**: $\operatorname{null} \Theta = \dim(\operatorname{Ker} \Theta) = 2$

**Rank**: Using the Rank-Nullity Theorem:
$$\dim V = \operatorname{rank} \Theta + \operatorname{null} \Theta$$
$$4 = \operatorname{rank} \Theta + 2$$
$$\operatorname{rank} \Theta = 2$$

## Key Steps and Justifications
1. Applied the definition of basis (**DEF-1.4.2**)
2. Verified spanning and linear independence properties
3. Computed matrix representation using coordinate vectors (**DEF-1.6.1**)
4. Found kernel by solving the equation $AX = 0$
5. Applied the Rank-Nullity Theorem (**THM-1.9.2**)

## Alternative Approaches
- Could compute the rank directly by finding a basis for the image
- Could verify the rank by computing the rank of the matrix representation

## Common Mistakes
- Errors in matrix multiplication when computing $AE_{ij}$
- Incorrect setup of the kernel equation
- Not verifying linear independence of kernel basis
- Computational errors in the Rank-Nullity calculation

## Mark Scheme Breakdown
- Part (a)(i): 1 mark for correct definition
- Part (a)(ii): 2 marks for showing spanning and linear independence
- Part (a)(iii): 3 marks for correct matrix representation
- Part (b)(i): 1 mark for definitions
- Part (b)(ii): 1 mark for stating the theorem
- Part (b)(iii): 3 marks for kernel basis and rank calculation
