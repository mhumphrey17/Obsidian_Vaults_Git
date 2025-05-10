---
title: "2020-Q05-Solution: Eigenvalues of Rotation Matrix and Matrix Powers"
aliases: ["Solution to 2020 Q5"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2020", "difficulty-standard", "eigenvalues", "rotation-matrix", "matrix-powers"]
related_question: [[2020-Q05]]
---

# 2020-Q05-Solution: Eigenvalues of Rotation Matrix and Matrix Powers

## Original Question
Let $A=\begin{pmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{pmatrix} \in M_{2,2}(\mathbb{C})$.

(a) Compute the eigenvalues of $A$ and find two eigenvectors of $A$ that are linearly independent.
(b) For $\theta=\frac{2 \pi}{2021}$, compute $A^{2021}$.

## Solution Process

### Part (a): Eigenvalues and Eigenvectors

**Step 1: Find the characteristic polynomial**
$$\Delta_A(t) = \det(A - tI) = \det\begin{pmatrix} \cos \theta - t & \sin \theta \\ -\sin \theta & \cos \theta - t \end{pmatrix}$$

$$= (\cos \theta - t)^2 - (\sin \theta)(-\sin \theta)$$
$$= \cos^2 \theta - 2t \cos \theta + t^2 + \sin^2 \theta$$
$$= t^2 - 2t \cos \theta + (\cos^2 \theta + \sin^2 \theta)$$
$$= t^2 - 2t \cos \theta + 1$$

**Step 2: Find eigenvalues**
Using the quadratic formula:
$$t = \frac{2 \cos \theta \pm \sqrt{4 \cos^2 \theta - 4}}{2} = \cos \theta \pm \sqrt{\cos^2 \theta - 1}$$

Since $\cos^2 \theta - 1 = -\sin^2 \theta$:
$$t = \cos \theta \pm \sqrt{-\sin^2 \theta} = \cos \theta \pm i|\sin \theta|$$

For general $\theta$, assuming $\sin \theta \neq 0$:
- $\lambda_1 = \cos \theta + i\sin \theta = e^{i\theta}$ (using Euler's formula)
- $\lambda_2 = \cos \theta - i\sin \theta = e^{-i\theta}$

**Step 3: Find eigenvectors**

For $\lambda_1 = e^{i\theta}$:
$$(A - \lambda_1 I)v = 0$$
$$\begin{pmatrix} \cos \theta - (\cos \theta + i\sin \theta) & \sin \theta \\ -\sin \theta & \cos \theta - (\cos \theta + i\sin \theta) \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$$\begin{pmatrix} -i\sin \theta & \sin \theta \\ -\sin \theta & -i\sin \theta \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

If $\sin \theta \neq 0$, the first row gives:
$$-i\sin \theta \cdot x + \sin \theta \cdot y = 0$$
$$y = ix$$

An eigenvector is $v_1 = \begin{pmatrix} 1 \\ i \end{pmatrix}$.

For $\lambda_2 = e^{-i\theta}$:
Following similar steps, we get:
$$ix + y = 0$$
$$y = -ix$$

An eigenvector is $v_2 = \begin{pmatrix} 1 \\ -i \end{pmatrix}$.

**Verification**: These eigenvectors are linearly independent because they correspond to distinct eigenvalues (**THM-3.4.2**).

### Part (b): Computing $A^{2021}$ for $\theta = \frac{2\pi}{2021}$

**Method 1: Using the rotation property**

$A$ represents a rotation by angle $\theta$. Therefore, $A^n$ represents a rotation by angle $n\theta$.

For $n = 2021$ and $\theta = \frac{2\pi}{2021}$:
$$n\theta = 2021 \cdot \frac{2\pi}{2021} = 2\pi$$

A rotation by $2\pi$ is the identity transformation:
$$A^{2021} = \begin{pmatrix} \cos(2\pi) & \sin(2\pi) \\ -\sin(2\pi) & \cos(2\pi) \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$

**Method 2: Using diagonalization**

Since $A$ has distinct eigenvalues $e^{i\theta}$ and $e^{-i\theta}$, it is diagonalizable:
$$A = PDP^{-1}$$
where $D = \begin{pmatrix} e^{i\theta} & 0 \\ 0 & e^{-i\theta} \end{pmatrix}$

Then:
$$A^{2021} = PD^{2021}P^{-1} = P\begin{pmatrix} (e^{i\theta})^{2021} & 0 \\ 0 & (e^{-i\theta})^{2021} \end{pmatrix}P^{-1}$$

With $\theta = \frac{2\pi}{2021}$:
$$D^{2021} = \begin{pmatrix} e^{i \cdot 2\pi} & 0 \\ 0 & e^{-i \cdot 2\pi} \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$

Therefore:
$$A^{2021} = PIP^{-1} = I$$

## Key Steps and Justifications
1. Computed characteristic polynomial using determinant (**DEF-3.1.3**)
2. Found eigenvalues using quadratic formula (**PROP-3.1.4**)
3. Applied Euler's formula to express eigenvalues in exponential form
4. Found eigenvectors by solving $(A - \lambda I)v = 0$ (**DEF-3.1.1**)
5. Used the fact that eigenvectors for distinct eigenvalues are linearly independent (**THM-3.4.2**)
6. Applied properties of rotation matrices and matrix powers
7. Verified using diagonalization approach (**DEF-3.3.1**)

## Alternative Approaches
- Could directly compute $A^n$ using induction and trigonometric identities
- Could use the fact that rotation matrices have a predictable pattern for powers

## Common Mistakes
- Errors in computing the characteristic polynomial
- Mistakes with complex arithmetic when finding eigenvectors
- Not recognizing that $A$ represents a rotation by $\theta$
- Computational errors with the angle multiplication

## Mark Scheme Breakdown
- Part (a): 4 marks
  - Characteristic polynomial: 1 mark
  - Eigenvalues: 1 mark
  - Finding eigenvectors: 2 marks
- Part (b): 2 marks
  - Recognizing the rotation property or diagonalization: 1 mark
  - Correct calculation: 1 mark
