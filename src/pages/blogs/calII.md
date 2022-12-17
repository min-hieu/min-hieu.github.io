# Cal II summary

- Table of Content

# Chapter 14

## 14.1 Double and Iterated Integrals over Rectangles

---

**************************Theorem 1 - Fubini’s Theorem (First Form)**************************

if $f(x,y)$ is continuous on $R: a\leq x\leq b$, $c\leq y\leq d$, then

$$
\iint_R f(x,y) dA = \int_c^d \int_a^b f(x,y) dxdy = \int_a^b \int_c^d f(x,y) dydx
$$

## 14.2 Double Integrals over General Regions

---

**************************Theorem 2 - Fubini’s Theorem (Stronger Form)**************************

Let $f(x,y)$ is continuous on $R$,

1. If $R: a\leq x \leq b$, $g_1(x)\leq y \leq g_2(x)$, $g_1$  and $g_2$ continuous on $[a,b]$ , then 

$$
\iint_R f(x,y) dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x,y) dydx
$$

1. If $R: h_1(y)\leq x \leq h_2(y)$, $c\leq y \leq d$, $h_1$  and $h_2$ continuous on $[c,d]$ , then 

$$
\iint_R f(x,y) dA = \int_a^b \int_{h_1(x)}^{h_2(x)} f(x,y) dxdy
$$

## 14.3 Area by Double Integration

---

**Definiton**

The **area** of a closed, bounded plane region $R$ is 

$$
A = \iint_R dA
$$

---

**Definiton**

The average of a function $f$ over region $R$ is:

$$
M = \frac{1}{\text{Area of R}} \iint_R f dA
$$

## 14.4 Double Integrals in Polar Form

---

****************Area in Polar Coordinates**************** 

$$
A = \iint_R r \;dr \;d\theta
$$

## 14.5 Triple Integrals in Rectangular Coordinates

---

********Definition** 

The **volume** of a closed, bounded region $D$ in space is:

$$
V = \iiint _D dV
$$

## 14.6 Applications

---

********3D - Mass********

$$
M = \iiint_D \delta \;dV
$$

**3D - First moment about a plane**

$$
M_{yz} = \iiint_D x\; \delta \;dV
$$

**3D - Center of Mass**

$$
\bar{x} = \frac{M_{yz}}{M} = \frac{\iiint_D x\;\delta \;dV}{\iiint_D \delta \;dV}
$$

**3D - Moments of Inertial x-axis** 

$$
I_x=\iiint \left(y^2+z^2 \right) \delta\,dV
$$

**3D - Moments of Inertial about line $L$**

$$
I_L=\iiint r^2(x,y,z)\,\delta\,dV
$$

---

********2D - Mass********

$$
M = \iint_R \delta \;dA
$$

**2D - First moment**

$$
M_{y} = \iint_R x\; \delta \;dA
$$

**2D - Center of Mass**

$$
\bar{x} = \frac{M_{y}}{M} = \frac{\iint_R x\;\delta \;dA}{\iint_R \delta \;dA}
$$

**2D - Moments of Inertial x-axis** 

$$
I_x=\iint y^2 \,\delta\,dA
$$

**2D - Moments of Inertial about line $L$**

$$
I_L=\iint r^2(x,y)\,\delta\,dA
$$

**2D - Moments of Inertial about origin**

$$
I_0 = I_x + I_y
$$

---

********************Definition********************

A **joint probability density** function $f$  is a function that satisfy three conditions:

1. $f(x,y)\geq 0$
2. $\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} f(x,y) \,dx\,dy = 1$
3. $P((X,Y)\in R) = \iint_R f(x,y)\,dx\,dy$

## 14.7 Triple Integrals in Cylindrical and Spherical Coordinates

---

**Definition**

**Cylindrical coordinates** represent $P$ in space by triple $(r,\theta, z)$ , $r \geq 0$

1. $r$  and $\theta$  is the projection of $P$ on the $xy$-plane
2. $z$  is the vertical coordinate.

---

**Definition**

**Spherical coordinates** represent $P$ in space by triple $(\rho,\phi, \theta)$ , $r \geq 0$

1. $\rho$  is the distance of $P$ from the origin.
2. $\phi$  is the angle $\vec{OP}$ makes with positive $z$-axis ($0\leq \phi \leq \pi$)
3. $\theta$  is angle from cylindrical coordinate

---

![Untitled](Cal%20II%20summary%20bdcdc976b4a84bbb9be9d8bc0a7d5fa8/Untitled.png)

## 14.8 Substitutions in Multiple Integrals

**Definition**

The ********************************Jacobian (determinant)******************************** of the coordinate transformation $x=g(u,v)$ , $y = h(u,v)$ is

$$
J(u,v) = 
\begin{vmatrix}
\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v}\\
\frac{\partial y}{\partial u} & 
\frac{\partial y}{\partial v} 
\end{vmatrix}
= \frac{\partial x}{\partial u}\frac{\partial y}{\partial v} - \frac{\partial x}{\partial v}\frac{\partial y}{\partial u}

$$

in other notations: $J(u,v)=\frac{\partial (x,y)}{\partial (u,v)}$

---

**************************Theorem 3 - Substitution for Double Integrals**************************

Let $f(x,y)$ continuous on $R$. Let $G$ be the preimage of $R$ under one-to-one smooth function $x=g(u,v)$, $y=h(u,v)$ within interior of $G$. Then

$$
\iint_R f(x,y)dx\,dy = \iint _G f(u,v) \left|\frac{\partial (x,y)}{\partial (u,v)}\right| du\,dv
$$

---

# Chapter 15

## 15.1 Line Integrals of Scalar Functions

---

**Evaluating Line Integral**

1. Find a smooth parametrization of $C$:

$$
\textbf{r}(t)=g(t)\textbf{i} + h(t)\textbf{j}+ k(t)\textbf{k} \quad a\leq t\leq b
$$

1. Evaluate the integral as

$$
\int_C f \;ds = \int_a^b f(g(t),h(t),k(t)) \, |\textbf{v}(t)|\,dt
$$

---

**3D - Mass**

$$
M = \int \delta \,ds
$$

**3D - First Moment about a Plane**

$$
M_{yz} = \int_C x\,\delta \, ds
$$

**3D - Center of Mass**

$$
\bar{x} = \frac{M_{yz}}{M} = \frac{\int_C x\,\delta \, ds}{\int_C\,\delta \, ds}
$$

**3D - Moment of Inertia about a Line**

$$
I_x=\int_C r^2\, \delta \,ds
$$

---

## 15.2 Vector Fields and Line Integrals: Work, Circulation, and Flux

---

**Definition** 

Let $\textbf{F}$ be a vector field with continuous component along a smooth curve $C$ parametrized by $\textbf{r}(t)$, $a\leq t \leq b$. Then the line integral of $\textbf{F}$ along $C$ is:

$$
\int_C \textbf{F}\cdot \textbf{T} \,ds = \int_C \left( \textbf{F} \cdot \frac{d\textbf{r}}{ds}\right) ds = \int_C \textbf{F} \cdot d\textbf{r}
$$

---

**Evaluating Vector Field along a Curve**

1. Write $\textbf{F}$  as $\textbf{F}(\textbf{r}(t))$
2. Find $d\textbf{r} /dt$
3. Evaluate the integral

$$
\int_C \textbf{F}\cdot d\textbf{r}=\int_a^b \textbf{F}(\textbf{r}(t)) \cdot \frac{d\textbf{r}}{dt}dt
$$

---

**Definition** 

Let $C$ be a smooth curve and $\textbf{F}$  be the force field. The **work** done by moving from $a$ to $b$  along $C$ is

$$
W= \int_C \textbf{F}\cdot \textbf{T}\,ds = \int_a^b \textbf{F}(\textbf{r}(t)) \cdot \frac{d\textbf{r}}{dt}dt
$$

---

**Definition**

The **********flow********** along a curve from $\textbf{r}(a)$ to $\textbf{r}(b)$ is 

$$
\text{Flow} = \int_C \textbf{F}\cdot \textbf{T}\,ds
$$

if $\textbf{r}(a) =\textbf{r}(b)$, then the ********flow******** is called the ****************circulation****************.

---

**Definition**

If $C$ is a smooth closed curve and $\textbf{F} = M(x,y)\textbf{i} + N(x,y)\textbf{j}$  in the plane, and if $\textbf{n}$ is the outward pointing unit vector on $C$, then the ********flux******** of $\textbf{F}$  across $C$ is:

$$
\text{Flux} = \int_C \textbf{F}\cdot \textbf{n}\,ds
$$

---

************Flux Across a Smooth Closed Plane Curve************

Let $\textbf{F} = M\textbf{i} + N\textbf{j}$  be the vector field, the flux can be write as 

$$
\text{Flux} = \oint_C Mdy - Ndx
$$

note: The integral can be evaluated from any smooth parametrization $x = g(t)$, $y=h(t)$, $a \leq t \leq b$, that traces $C$ counterclockwise exactly once.

---

## 15.3 Path Independence, Conservative Fields, and Potential Functions

---

********************Definition********************

Let $\textbf{F}$ be vector field on open $D$ in space. For any two point $A$ and $B$, if $\int_C \textbf{F}\cdot d\textbf{r}$ is the same along all paths $C$ from $A$ to $B$ the $\int_C \textbf{F}\cdot d\textbf{r}$  is ************************path independent in $D$** and vector field $\textbf{F}$ **is conservative on** $D$.

---

******Definition******

If $\textbf{F}$ is a vector field on $D$ and $\textbf{F} = \nabla f$ for some scalar function $f$ on $D$, then $f$ is called a **********************************************potential function for $\textbf{F}$.**

---

********Theorem 1 - Fundamental Theorem of Line Integrals********

Let $C$ be a smooth curve joining $A$  to $B$ and parametrized by $\textbf{r}(t)$. Let $f$ be a differential function with continuous gradient vector $\textbf{F}= \nabla f$ on a domain $D$  containing $C$. Then

$$
\int_C\textbf{F}\cdot d\textbf{r}=f(A)-f(B)
$$

---

********Theorem 2 - Conservative Fields are Gradient Fields********

Let $\textbf{F} = M\textbf{i} + N\textbf{j} + P\textbf{k}$ be a vector field with $M,N, P$ continuous throughout an open connected region $D$ in space. Then $\textbf{F}$  is conservative if and only if $\textbf{F}$  is a gradient field $\nabla f$ for a differentiable function $f$.

---

********Theorem 3 - Loop Property of Conservative Fields********

The follow statements are **equivalent**.

1. $\oint_C \textbf{F}\cdot d\textbf{r}=0$  around every loop in $D$.
2. The field $\textbf{F}$ is conservative on $D$.

---

****************Component Test for Conservative Fields** 

Let $\textbf{F} = M\textbf{i} + N\textbf{j} + P\textbf{k}$ be a field on open simply connected domain whose component functions have continuous first partial derivative. Then, $\textbf{F}$ is conservative if and only if 

$$
\frac{\partial P}{\partial y} = \frac{\partial N}{\partial z} \quad 
\frac{\partial M}{\partial z} = \frac{\partial P}{\partial x} \quad 
\frac{\partial N}{\partial x} = \frac{\partial M}{\partial y} \quad 
$$

---

****************Definition****************

Any expression $M(x,y,z)\, dx + 
N(x,y,z)\, dy + 
P(x,y,z)\, dz$  is a **differential form**. A differential form is exact on a domain $D$ in space if 

$$
M\,dx + 
N\,dy + 
P\,dz = 
\frac{\partial f}{\partial x} dx + 
\frac{\partial f}{\partial y} dy + 
\frac{\partial f}{\partial z} dz = 
df
$$

for some scalar function $f$ throughout $D$.

---

****************Component Test for Exactness of Differential Form****************

The differential form $M(x,y,z)\, dx + 
N(x,y,z)\, dy + 
P(x,y,z)\, dz$  is exact if the field $\textbf{F} = M\textbf{i} + N\textbf{j} + P\textbf{k}$ is **conservative**.

---

## 15.4 Green’s Theorem in the Plane

---

****************Definition****************

The circulation density of a vector field $\textbf{F} = M\textbf{i} + N\textbf{j}$ at the point $(x,y)$ is the scalar expression 

$$
\partial_xN - \partial_yM
$$

This expression is also called the **********************************************k-component of the curl**********************************************, denoted by $(\text{curl } \textbf{F}) \cdot \textbf{k}$.

---

****************Definition****************

The divergence (flux density) of a vector field $\textbf{F} = M\textbf{i} + N\textbf{j}$ at the point $(x,y)$ is 

$$
\text{div }\textbf{F} = \partial_xM + \partial_yN

$$

---

Let $C$ be a piecewise smooth, simple closed curve enclosing a region $R$  in the plane. Let $\textbf{F} = M\textbf{i} + N\textbf{j}$  be a vector field with $M$ and $N$  have continuous first derivatives in an open region containing $R$. Then, we have the Green’s Theorem:

************************************************************************************Theorem 4 - Green’s Theorem (Circulation-Curl / Tangential Form)************************************************************************************

The counterclockwise circulation of $\textbf{F}$ around $C$ equals the double integral of $(\text{curl } \textbf{F}) \cdot \textbf{k}$ over $R$.

$$
\oint_C \textbf{F}\cdot \textbf{T} \,ds=\iint_R \left( 
\partial_x N - \partial_y M 
\right) dx\,dy
$$

************************************************************************************Theorem 5 - Green’s Theorem (Flux-Divergence / Normal Form)************************************************************************************

The outward flux of $\textbf{F}$  across $C$ equals the double integral of $\text{div }\textbf{F}$  over the region $R$ enclosed by $C$.

$$
\oint_C \textbf{F}\cdot \textbf{n} \,ds=\iint_R \left( 
\partial_x M + 
\partial_y N
\right) dx\,dy
$$

---

## 15.5 Surfaces and Area

---

**Definition**

A parametrized surface $\textbf{r}(u,v)=
f(u,v)\textbf{i} + 
g(u,v)\textbf{j} + 
h(u,v)\textbf{k}$ is smooth if $\textbf{r}_u$ and $\textbf{r}_v$ are continuous and $\textbf{r}_u \times 
\textbf{r}_v$ is never zero on the interior of the parameter domain.

---

**Definition**

The area of the smooth surface $\textbf{r}(u,v)=
f(u,v)\textbf{i} + 
g(u,v)\textbf{j} + 
h(u,v)\textbf{k}$ where $a\leq u\leq b$ and $c\leq v\leq d$ is

$$
A=\iint_R |\textbf{r}_u\times \textbf{r}_u| dA=\int_c^d\int_a^b|\textbf{r}_u\times \textbf{r}_v| du\,dv
$$

---

****************************Surface Area Differential for a Parametrized Surface** 

$$
d\sigma = |\textbf{r}_u\times \textbf{r}_v| du\,dv
$$

The surface area can be rewritten as 

$$
A=\iint_R d\sigma
$$

---

**Formula for the Surface Area of an Implicit Surface**

The area of surface $F(x,y,z)=c$ over a closed and bounded plane region $R$ is

$$
A = \iint_R \frac{|\nabla F|}{|\nabla F\cdot \textbf{p}|} dA
$$

Where $\textbf{p} \in 
\{
\textbf{i},
\textbf{j},
\textbf{j}
\}$ is normal to $R$  and $\nabla F\cdot \textbf{p}\neq 0$.

---

**Formula for the Surface Area of a Graph** $z = f(x,y)$

$$
A = 
\iint_R \sqrt{f_x^2+f_y^2+1}\,dx\,dy
$$

---

## 15.6 Surface Integrals

---

**Formulas for a Surface Integral of a Scalar Function**

1. For a smooth surface $S$ defined parametrically as $\textbf{r}(u,v)$, $(u,v)\in R$, and a continuous function $G(x,y,z)$ defined on $S$, the surface integral of $G$ over $S$ is given by the double integral over $R$
    
    $$
    \iint_S G(x,y,z)d\sigma = \iint_R G(u,v) |\textbf{r}_u\times \textbf{r}_v| \,du\,dv
    $$
    
    Note that $G(u,v) = G(x(u,v), y(u,v), z(u,v))$
    
2. For a surface $S$ given implicitly by $F(x,y,z)=c$, where $F$ is a continuous differential function, with $S$  above $R$, the surface integral $G$ over $S$ is given:
    
    $$
    \iint_S G(x,y,z)\,d\sigma = \iint_R G(x,y,z) \frac{|\nabla F|}{|\nabla F\cdot \textbf{p}|} dA
    $$
    
    where $\textbf{p}$ is a unit vector normal to $R$ and $\nabla F\cdot\textbf{p} \neq 0$.
    
3. For a surface $S$ given explicitly as graph of $z=f(x,y)$, where $f$ is a continuous differentiable function over a region $R$  in the $xy$-plane, the surface integral of $G$ over $S$ is given:

$$
\iint_S G(x,y,z)\, d\sigma = \iint_R G(x,y,f(x,y)) \sqrt{f_x^2 + f_y^2 + 1} \,dx\,dy
$$

---

**Definition** 

Let $\textbf{F}$ be a vector field in space with continous components defined over smooth surface $S$ with unit normal vectors $\textbf{n}$ orienting $S$. The **surface integral of $\textbf{F}$ over $S$** is 

$$
\iint_S \textbf{F}\cdot \textbf{n} \, d\sigma 
$$

This is also the flux of $\textbf{F}$  across $S$.

---

Mass…

---

## 15.7 Stokes’ Theorem

---

**Curl**

$$
\text{curl }\textbf{F}=\nabla \times \textbf{F}
$$

---

******************************************Theorem 6 - Stokes’ Theorem******************************************

Let $S$ with boundary curve $C$. Let $\textbf{F}=
M\textbf{i} + 
N\textbf{j} + 
P\textbf{k}$ be a vector field whose components have continuous first partial derivatives on an open region containing $S$. The circulation of $\textbf{F}$ around $C$ in direction counterclockwise direction w.r.t. the surface’s unit normal vector $\textbf{n}$ is:

$$
\oint_C\textbf{F}\cdot d\textbf{r} = \iint_S \left( \nabla \times \textbf{F}\right)\cdot \textbf{n}\, d\sigma
$$

---

**An Important Identity** 

For function $f(x,y,z)$ with continuous second partial derivatives,

$$
\text{curl grad } f = 0 
\quad \textbf{or} \quad
\nabla \times \nabla f=0
$$

---

**Theorem 7 - $\text{curl }\textbf{F} = 0$ Related to the Closed-Loop Property**

If $\nabla \times \textbf{F}=0$ at every point of a simply connected open region $D$ in space, then on any piecewise-smooth closed path $C$ in $D$, 

$$
\oint_C \textbf{F} \cdot d\textbf{r} =0
$$

---

![Untitled](Cal%20II%20summary%20bdcdc976b4a84bbb9be9d8bc0a7d5fa8/Untitled%201.png)

---

## 15.8 The Divergence Theorem and a Unified Theory

---

************Divergence in 3D************

The divergence of $\textbf{F} = 
M\textbf{i} + 
N\textbf{j} + 
P\textbf{k}$ is the scalar function

$$
\text{div }\textbf{F}=\nabla\cdot \textbf{F} = 
\frac{\partial M}{\partial x} +
\frac{\partial N}{\partial y} + 
\frac{\partial P}{\partial z}  
$$

---

**Theorem 8 - Divergence Theorem**

Let $\textbf{F}$  be a vector field with continuous partial derivate components. The flux of $\textbf{F}$  across a surface $S$ in the direction of the surface’s outward unit normal field $\textbf{n}$ equals the triple integral of the divergence over the region $D$ enclosed by the surface:

$$
\iint_S\textbf{F}\cdot \textbf{n}\,d\sigma = \iiint_D\nabla \cdot \textbf{F}\, dV
$$

---

**Corollary**

The outward flux across $S$ is zero for any $\textbf{F}$  having zero divergence at every point of the region enclosed by the surface.

---

**Theorem 9 - Divergence and the Curl**

if $\textbf{F} = 
M\textbf{i} + 
N\textbf{j} + 
P\textbf{k}$ is a vector field with continuous second partial derivatives, then 

$$
\text{div }(\text{curl } \textbf{F}) = \nabla \cdot (\nabla \cdot \textbf{F}) = 0
$$

---

![Untitled](Cal%20II%20summary%20bdcdc976b4a84bbb9be9d8bc0a7d5fa8/Untitled%202.png)