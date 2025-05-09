---
title: "Matrix Powers via Diagonalisation"
aliases: ["Matrix Powers", "A^n via Diagonalisation", "Powers of Matrices"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept", "diagonalisation", "matrix-multiplication", "eigenvalue", "fibonacci-sequence", "cayley-hamilton-theorem", "jordan-normal-form", "matrix-exponential", "recurrence-relation", "markov-chain", "linear-algebra", "matrix-theory"]
related_concepts: ["Diagonalisation", "Matrix Multiplication", "Eigenvalue", "Fibonacci Sequence", "Cayley-Hamilton Theorem", "Jordan Normal Form", "Matrix Exponential", "Recurrence Relations", "Markov Chain", "Field"]
---

# Matrix Powers via Diagonalisation

## Main Result
If a matrix $A$ is diagonalisable with $P^{-1}AP = D$ where $D$ is diagonal, then:

$$A^k = PD^kP^{-1}$$

where $D^k$ is obtained by raising each diagonal entry to the power $k$.

## Why This Works
Starting from $A = PDP^{-1}$:
$$A^k = \underbrace{(PDP^{-1})(PDP^{-1})\cdots(PDP^{-1})}_{k \text{ times}}$$

The middle terms cancel:
$$A^k = PD(P^{-1}P)D(P^{-1}P)\cdots(P^{-1}P)DP^{-1} = PD^kP^{-1}$$

## Computing $D^k$
If $D = \text{diag}(\lambda_1, \lambda_2, \ldots, \lambda_n)$, then:
$$D^k = \text{diag}(\lambda_1^k, \lambda_2^k, \ldots, \lambda_n^k)$$

This is why diagonalisation makes computing powers efficient.

## Examples
### Example 1: Simple 2×2 Matrix
For $A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$:

1. Diagonalisation: $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, $D = \begin{pmatrix} 4 & 0 \\ 0 & -2 \end{pmatrix}$

2. Computing $A^k$:
   $$A^k = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 4^k & 0 \\ 0 & (-2)^k \end{pmatrix} \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}$$

3. Simplifying:
   $$A^k = \frac{1}{2}\begin{pmatrix} 4^k + (-2)^k & 4^k - (-2)^k \\ 4^k - (-2)^k & 4^k + (-2)^k \end{pmatrix}$$

### Example 2: Fibonacci Sequence
The Fibonacci recurrence $F_{n+2} = F_{n+1} + F_n$ with $F_0 = 0, F_1 = 1$ can be written as:
$$\begin{pmatrix} F_{n+1} \\ F_{n+2} \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} F_n \\ F_{n+1} \end{pmatrix}$$

1. Let $A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$

2. Eigenvalues: $\lambda_{\pm} = \frac{1 \pm \sqrt{5}}{2}$ (golden ratio and its conjugate)

3. Diagonalisation gives: $F_n = \frac{1}{\sqrt{5}}(\lambda_+^n - \lambda_-^n)$

This provides a closed-form formula for Fibonacci numbers!

## Long-term Behavior
For large $n$, the dominant eigenvalue determines the behavior:
- If $|\lambda_1| > |\lambda_i|$ for all $i \neq 1$, then $A^n \approx c \lambda_1^n v_1 w_1^T$ for some constants
- The direction converges to the dominant eigenvector
- The growth rate is determined by the dominant eigenvalue

### Example: Fibonacci Growth
For the Fibonacci matrix with $\lambda_+ \approx 1.618$ and $\lambda_- \approx -0.618$:
$$\frac{F_{n+1}}{F_n} \to \lambda_+ \text{ as } n \to \infty$$

## Applications
### 1. Discrete Dynamical Systems
If $x_{n+1} = Ax_n$, then $x_n = A^n x_0$. Diagonalisation allows:
- Predicting long-term behavior
- Finding equilibrium points
- Analyzing stability

### 2. Markov Chains
For transition matrix $P$, the state after $n$ steps is $P^n x_0$. Diagonalisation helps:
- Find steady-state distributions
- Compute mixing times
- Analyze convergence

### 3. Solving Recurrence Relations
Many recurrence relations can be written in matrix form. Diagonalisation provides explicit formulas.

### 4. Exponentiation of Matrices
For matrix exponentials $e^{tA} = \sum_{k=0}^{\infty} \frac{t^k A^k}{k!}$:
$$e^{tA} = Pe^{tD}P^{-1}$$
where $e^{tD} = \text{diag}(e^{t\lambda_1}, \ldots, e^{t\lambda_n})$

## Computational Advantages
1. **Efficiency**: Computing $D^k$ is $O(n)$ instead of $O(n^3k)$ for direct multiplication

2. **Numerical Stability**: Diagonal matrices are well-conditioned

3. **Analytical Solutions**: Provides closed-form expressions

## Limitations
1. **Diagonalisability Required**: Method only works for diagonalisable matrices

2. **Complex Arithmetic**: May require complex numbers even for real matrices

3. **Finding $P$ and $D$**: Initial diagonalisation can be expensive

## Related Results
1. **Cayley-Hamilton Theorem**: Every matrix satisfies its characteristic polynomial, providing another approach to powers

2. **Jordan Normal Form**: Generalizes the method to non-diagonalisable matrices

3. **Spectral Radius**: $\rho(A) = \max\{|\lambda| : \lambda \text{ eigenvalue of } A\}$ determines growth rate

## Related Concepts
- [[Diagonalisation]]: The foundational technique
- [[Eigenvalue]]: Determines the base for powers
- [[Matrix Representation]]: The computational framework
- [[Recurrence Relations]]: A major application area
- [[Fibonacci Sequence]]: Classic example

## Notes
- This technique transforms a difficult problem (repeated matrix multiplication) into a simple one (diagonal powers)
- The method reveals the intrinsic structure of linear transformations
- For non-diagonalisable matrices, Jordan normal form provides an alternative
- In applications, the largest eigenvalue often determines asymptotic behavior
- This is a prime example of how abstract algebra solves concrete computational problems
