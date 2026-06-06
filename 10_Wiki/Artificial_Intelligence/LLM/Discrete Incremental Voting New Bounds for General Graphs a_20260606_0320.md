---
source: arXiv
collected: 20260606_0320
category: Artificial_Intelligence/LLM
stars: arXiv 2026-06-04
language: Paper
authors: Petra Berenbrink, Colin Cooper, Thorsten Götte
---

# Discrete Incremental Voting: New Bounds for General Graphs and Expanders

> **Source:** [arXiv](http://arxiv.org/abs/2606.06381v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260606_0320

## Summary

We analyze the discrete incremental voting process (DIV) introduced by Cooper, Radzik, and Shiraga [OPODIS '23]. In this process, we consider a set $V$ of $n$ nodes connected in an undirected graph $G = (V, E)$ where each node has an integer opinion. In one step a randomly selected node interacts with its randomly selected neighbor and changes its opinion by $1$ in the direction of the neighbour's opinion. The process converges to a unique opinion that, in expectation, is the degree-weighted average of the initial opinions.

We show that if the graph has conductance $\Phi(G)$, the ratio of the average to smallest degree is $\gamma(G)$, and the maximal difference between initial opinions is $K$, then the expected convergence time is ${O}\left({n\left(K\log (Kn)+\gamma(G) n \right)}/{\Phi(G)^2}\right)$. This bound is essentially optimal for a large class of graphs of bounded expansion. We also show that for regular graphs, if the second largest eigenvalue is $o(1/\log^2 n)$ and $K$ is $o\left({n}/{\log^2 n}\right)$, then w.h.p. DIV converges to the initial average opinion (rounded up or down).

## Key Takeaways

- **Problem**: Derive tight bounds on the expected convergence time of the discrete incremental voting (DIV) process on general undirected graphs, building on prior work that only covered specific graph classes.
- **Method**: The DIV process models opinion dynamics where each node holds an integer opinion and, in each step, a randomly selected node shifts its opinion by ±1 toward a randomly chosen neighbor's opinion. The analysis uses graph conductance $\Phi(G)$, degree ratio $\gamma(G)$, and eigenvalue methods for regular expanders.
- **Results**: Expected convergence time is $O(n(K\log(Kn) + \gamma(G)n) / \Phi(G)^2)$, essentially optimal for bounded-expansion graphs. For regular graphs with sufficiently small second eigenvalue and opinion range, DIV converges w.h.p. to the initial average opinion.
- **Hermes relevance**: LOW — This is a theoretical graph theory and opinion dynamics paper with no direct applicability to Hermes agent operations (conversational AI, tool use, or autonomous agent workflows).

## Original

[Discrete Incremental Voting: New Bounds for General Graphs and Expanders](http://arxiv.org/abs/2606.06381v1)
