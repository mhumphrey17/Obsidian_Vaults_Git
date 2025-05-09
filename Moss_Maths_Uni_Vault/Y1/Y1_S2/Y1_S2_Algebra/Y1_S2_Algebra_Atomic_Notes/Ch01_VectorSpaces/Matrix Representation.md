---
title: "Matrix Representation"
aliases: ["Representing Linear Maps by Matrices", "Matrix of a Linear Map"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "linear-map", "basis", "coordinate-vector", "change-of-basis", "matrix", "kernel", "image", "rank", "nullity", "linear-operator", "similarity-transformation", "linear-algebra", "vector-space"]
related_concepts: ["Linear Map", "Basis", "Coordinate Vector", "Change of Basis Matrix", "Matrix", "Kernel", "Image", "Rank", "Nullity", "Linear Operator", "Similar Matrices", "Vector Space", "Field"]
---

# Matrix Representation

## Definition
Given a linear map $\psi: V \rightarrow W$ between vector spaces $V$ and $W$ over a field $\mathbb{F}$, with bases $\alpha = \{v_1, \ldots, v_n\}$ for $V$ and $\beta = \{w_1, \ldots, w_m\}$ for $W$, the **matrix representation** of $\psi$ with respect to these bases is the matrix $A = (a_{ij}) \in M_{m,n}(\mathbb{F})$ defined by:

$$\psi(v_j) = \sum_{i=1}^{m} a_{ij}w_i \quad \text{for } j = 1, 2, \ldots, n$$

In other words, the $j$-th column of $A$ contains the coefficients of $\psi(v_j)$ when expressed as a linear combination of the basis vectors of $W$.

## Properties
- The matrix representation is unique given the choice of bases.
- If $\gamma_V: \mathbb{F}^n \rightarrow V$ and $\gamma_W: \mathbb{F}^m \rightarrow W$ are the isomorphisms defined by the chosen bases, then:
  $$\psi = \gamma_W \circ \phi_A \circ \gamma_V^{-1}$$
  where $\phi_A: \mathbb{F}^n \rightarrow \mathbb{F}^m$ is the linear map defined by multiplication with the matrix $A$.
- If the bases change, the matrix representation changes according to the change of basis formula.
- For a linear operator (a linear map from a vector space to itself), if the same basis is used for the domain and codomain, the matrix is square.
- The matrix representation allows us to compute the image of any vector using matrix multiplication.
- The kernel, image, rank, and nullity of a linear map can be studied through its matrix representation.

## Examples
1. Consider the projection $\pi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ onto the line $y = x$. With respect to the standard basis $\{(1,0), (0,1)\}$, we have:
   $$\pi(1,0) = \left(\frac{1}{2}, \frac{1}{2}\right) = \frac{1}{2}(1,0) + \frac{1}{2}(0,1)$$
   $$\pi(0,1) = \left(\frac{1}{2}, \frac{1}{2}\right) = \frac{1}{2}(1,0) + \frac{1}{2}(0,1)$$
   So the matrix representation is:
   $$A = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$$

2. Consider the derivative operator $D: \mathbb{R}[X]_{\leq 3} \rightarrow \mathbb{R}[X]_{\leq 3}$ with respect to the basis $\{1, X, X^2, X^3\}$. We have:
   $$D(1) = 0 = 0 \cdot 1 + 0 \cdot X + 0 \cdot X^2 + 0 \cdot X^3$$
   $$D(X) = 1 = 1 \cdot 1 + 0 \cdot X + 0 \cdot X^2 + 0 \cdot X^3$$
   $$D(X^2) = 2X = 0 \cdot 1 + 2 \cdot X + 0 \cdot X^2 + 0 \cdot X^3$$
   $$D(X^3) = 3X^2 = 0 \cdot 1 + 0 \cdot X + 3 \cdot X^2 + 0 \cdot X^3$$
   So the matrix representation is:
   $$A = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

3. Consider the linear map $\phi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ defined by $\phi(x, y) = (2x+y, x-y)$. With respect to the standard basis, we have:
   $$\phi(1,0) = (2,1) = 2(1,0) + 1(0,1)$$
   $$\phi(0,1) = (1,-1) = 1(1,0) + (-1)(0,1)$$
   So the matrix representation is:
   $$A = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$$

## Important Theorems/Results
- **Remark 1.6.2**: The matrix representation $A$ of a linear map $\psi: V \rightarrow W$ with respect to bases $\alpha$ for $V$ and $\beta$ for $W$ satisfies the commutative diagram:
  $$\begin{array}{ccc} 
  \mathbb{F}^n & \xrightarrow{\phi_A} & \mathbb{F}^m \\
  \downarrow \phi_\alpha & & \downarrow \phi_\beta \\
  V & \xrightarrow{\psi} & W 
  \end{array}$$
  where $\phi_A$ is the linear map defined by multiplication with $A$, and $\phi_\alpha, \phi_\beta$ are the isomorphisms defined by the bases.

- **Proposition 1.7.7**: If $\psi: V \rightarrow W$ is represented by matrices $A$ and $A'$ with respect to different bases related by change of basis matrices $P$ and $Q$, then:
  $$A' = Q^{-1}AQ$$

- For linear operators, if $\psi: V \rightarrow V$ is represented by matrices $B$ and $B'$ with respect to bases related by a change of basis matrix $P$, then:
  $$B' = P^{-1}BP$$
  This is the similarity relation between matrices.

## Connections to Other Concepts
- Matrix representations rely on the choice of [[Basis]] for both the domain and codomain vector spaces.
- The [[Coordinate Vector]]s of the images of basis vectors form the columns of the matrix representation.
- [[Change of Basis]] formulas describe how matrix representations transform when changing bases.
- The concepts of [[Kernel]] and [[Image]] of a [[Linear Map]] can be studied through the nullspace and column space of its matrix representation.
- The [[Rank]] and [[Nullity]] of a linear map equal the rank and nullity of its matrix representation.

## Related Problems
- [[PS01-Q03]] - Finding the matrix representation of a projection onto a line.
- Problems involving computation of images of vectors using matrix representations.
- Problems involving change of basis and similarity transformations.

## Notes
- Matrix representations allow us to convert abstract problems about linear maps into concrete computational problems with matrices.
- The choice of basis can significantly affect the simplicity of the matrix representation. A judicious choice of basis can often lead to a simpler matrix.
- For a fixed linear map, there are infinitely many possible matrix representations corresponding to different choices of bases.
- In applications, finding a basis that gives a "nice" matrix representation (e.g., diagonal or triangular) is often a key step in solving problems.
- The matrix representation connects the abstract concept of a linear map with the concrete computational tool of a matrix, forming a bridge between theoretical and practical linear algebra.
