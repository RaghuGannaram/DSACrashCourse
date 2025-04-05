/**
 * ===================================================================================
 * ⚡ GREEDY ALGORITHMS - MASTER CLASSIFICATION OVERVIEW
 * ===================================================================================
 */

/**
 * 🧠 What is a Greedy Algorithm?
 *
 * A greedy algorithm makes the **locally optimal choice at each step** with the hope
 * that these choices lead to a **globally optimal solution**.
 *
 * Greedy strategies do **not** revisit decisions — once a choice is made, it's final.
 *
 * 🟡 WARNING: Greedy does not always guarantee a correct solution.
 * ✅ Use greedy when you can **prove** that a greedy choice leads to optimal result.
 */

/**
 * ===================================================================================
 * 🌳 GREEDY ALGORITHM CLASSIFICATION TREE
 * ===================================================================================
 *
 * Greedy Algorithms
 * ├── 1️⃣ Greedy Selection Problems
 * │   ├── Activity Selection / Interval Scheduling
 * │   ├── Fractional Knapsack (Not 0/1!)
 * │   └── Job Sequencing with Deadlines
 * │
 * ├── 2️⃣ Greedy Construction Problems
 * │   ├── Huffman Encoding Tree
 * │   ├── Prim's Algorithm (MST)
 * │   └── Dijkstra’s Algorithm (SPT with non-negative weights)
 * │
 * ├── 3️⃣ Covering / Partitioning Problems
 * │   ├── Coin Change (Minimum coins - greedy fails in some cases!)
 * │   ├── Gas Station / Jump Game / Partition Labels
 * │   └── Set Cover Approximation
 * │
 * └── 4️⃣ Greedy + Sorting
 *     ├── Merge Intervals
 *     ├── Minimum Number of Arrows to Burst Balloons
 *     ├── Meeting Rooms
 *     └── Reorganize String / Task Scheduling
 */

/**
 * ===================================================================================
 * 🧪 WHEN DOES GREEDY WORK? (Greedy Choice Property)
 * ===================================================================================
 *
 * ✅ 1. Greedy Choice Property:
 *     - A global optimal solution can be reached by choosing the local optimum at each step.
 *
 * ✅ 2. Optimal Substructure:
 *     - A problem has optimal substructure if an optimal solution can be constructed
 *       from optimal solutions of its subproblems.
 *
 * 🧠 Dynamic Programming vs Greedy:
 *     - Both use optimal substructure
 *     - But only Greedy **commits early** to decisions
 *     - Greedy is faster (usually O(n log n)), but **only works when provable**
 */

/**
 * ===================================================================================
 * 🚦 TYPICAL GREEDY STRATEGIES
 * ===================================================================================
 *
 * 📌 Sort by... (classic greedy pattern):
 *     - Sort activities by end time (Activity Selection)
 *     - Sort items by value/weight ratio (Fractional Knapsack)
 *     - Sort intervals by start/end (Merge Intervals)
 *     - Sort jobs by deadline or profit (Job Scheduling)
 *
 * 🧲 Use a Priority Queue (Heap-based Greedy):
 *     - Huffman Coding Tree
 *     - Dijkstra's Algorithm
 *     - Task Scheduling
 */

/**
 * ===================================================================================
 * 🧠 DECISION CHECKLIST: When to Try Greedy?
 * ===================================================================================
 *
 * ✅ Problem talks about maximizing/minimizing something (profit, length, resources)
 * ✅ Problem allows early commitment (once chosen, it’s locked)
 * ✅ Can you sort something and make a choice?
 * ✅ You can prove (or know) that local choices give global optimality
 * ✅ You're told to use the "minimum number" or "maximum value" of something
 *
 * ⚠️ If the problem has complex dependencies → probably needs DP
 */
