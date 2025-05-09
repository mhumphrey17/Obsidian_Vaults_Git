---
title: "PS01-Q09-Solution: Projection Map Formula"
aliases: ["Solution to PS1 Q9", "General Line Projection Solution"]
tags: ["solution", "algebra-s2", "ps-01", "difficulty-advanced"]
related_problem: [[PS01-Q09]]
date_created: 2025-05-09
---
# PS01-Q09-Solution: Projection Map Formula
## Original Problem
Find the linear map $\phi$ defining the projection onto the line $L: y=m x$ in the plane $\mathbb{R}^{2}$.

## Solution Process
To find the orthogonal projection onto the line $L: y=mx$, we need to follow these steps:

### Step 1: Find the direction perpendicular to line $L$
The slope of line $L$ is $m$, so the slope of a perpendicular line will be $-\frac{1}{m}$ (product of perpendicular slopes is -1).

### Step 2: Find the equation of the perpendicular line through a point
For an arbitrary point $P=(a,b)$ in the plane, the equation of the line perpendicular to $L$ passing through $P$ is:
$$L': y - b = -\frac{1}{m}(x - a)$$

Simplifying:
$$y = -\frac{1}{m}x + \left(b + \frac{a}{m}\right)$$

### Step 3: Find the intersection of the perpendicular line with $L$
At the intersection point, the coordinates must satisfy both equations:
$$y = mx \quad \text{(from line L)}$$
$$y = -\frac{1}{m}x + \left(b + \frac{a}{m}\right) \quad \text{(from the perpendicular line)}$$

Setting these equal:
$$mx = -\frac{1}{m}x + \left(b + \frac{a}{m}\right)$$

Solving for $x$:
$$mx + \frac{1}{m}x = b + \frac{a}{m}$$
$$x\left(m + \frac{1}{m}\right) = b + \frac{a}{m}$$
$$x = \frac{b + \frac{a}{m}}{m + \frac{1}{m}} = \frac{mb + a}{m^2 + 1}$$

Now, substituting this $x$ value into the equation $y = mx$:
$$y = m\left(\frac{a + mb}{1 + m^2}\right) = \frac{ma + m^2b}{1 + m^2}$$

### Step 4: Express the projection formula
The projection of point $(a,b)$ onto line $L$ is the point $Q$ with coordinates:
$$Q = \left(\frac{a + mb}{1 + m^2}, \frac{ma + m^2b}{1 + m^2}\right)$$

Therefore, the projection map $\phi$ is given by:
$$\phi((x, y)) = \left(\frac{x + my}{1 + m^2}, \frac{mx + m^2y}{1 + m^2}\right)$$

We can verify that this is indeed a linear map by checking that it preserves vector addition and scalar multiplication.

## Key Insights
1. This is a generalization of the projection onto the line $y=x$ from Question 3. When $m=1$, this formula simplifies to $\phi((x,y)) = \left(\frac{x+y}{2}, \frac{x+y}{2}\right)$.
2. The projection formula can be expressed as a matrix:
   $$\phi((x,y)) = \frac{1}{1+m^2}\begin{pmatrix} 1 & m \\ m & m^2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix}$$
3. The denominator $1+m^2$ appears because it normalizes the projection based on the slope of the line.

## Alternative Approaches
We could also approach this using vector algebra:
1. Find a unit vector $\vec{u}$ in the direction of the line $L$
2. For any vector $\vec{v}$, its projection onto $L$ is $(\vec{v} \cdot \vec{u})\vec{u}$
3. Convert this back to coordinate form

## Common Mistakes
1. Confusing the slope of the original line with the slope of the perpendicular line
2. Errors in algebraic manipulation when solving for the intersection point
3. Not verifying that the resulting formula actually defines a linear map
4. Forgetting to use the orthogonal projection (some might incorrectly use a non-orthogonal projection)
