/**
 * ===================================================================================
 * 🧭 DYNAMIC PROGRAMMING (DP) - MASTER CLASSIFICATION TREE
 * ===================================================================================
 */

/**
 * 🧠 What is Dynamic Programming?
 *
 * Dynamic Programming (DP) is a method for solving problems by breaking them down
 * into simpler overlapping subproblems, solving each once, and storing their results
 * to avoid redundant work. It’s a powerful optimization over plain recursion.
 */

/**
 * ===================================================================================
 * 🌳 DP CONCEPTUAL TREE STRUCTURE
 * ===================================================================================
 *
 * Dynamic Programming
 * ├── 1️⃣ Problem Types (based on structure)
 * │   ├── 0/1 Knapsack Variants
 * │   ├── Unbounded Knapsack Variants
 * │   ├── Subset Sum / Partition Problems
 * │   ├── Longest Common Subsequence (LCS / Edit Distance)
 * │   ├── Matrix / Grid-Based Problems (2D DP)
 * │   ├── Digit DP (Number ranges with tight constraints)
 * │   └── Interval DP (Merging intervals, bursting balloons)
 * │
 * ├── 2️⃣ Implementation Style
 * │   ├── Brute Force Recursion (Exponential Time) 🔁
 * │   │
 * │   ├── Top-Down DP (Memoization) 🧠
 * │   │   └── Recursion + Caching
 * │   │   └── Solves from original problem downward
 * │   │
 * │   └── Bottom-Up DP (Tabulation) 📊
 * │       └── Iteration + DP Table
 * │       └── Builds from base cases upward
 * │
 * ├── 3️⃣ Optimization Techniques
 * │   ├── Space Optimization 🔄
 * │   │   └── Reduce 2D or 1D arrays to variables if only recent state is needed
 * │   ├── Sliding Window DP 🪟
 * │   ├── Bitmask DP 🎭
 * │   ├── Monotonic Stack + DP 🧱
 * │   ├── DP + Binary Search 🔍
 * │   ├── Greedy + DP Hybrid 🔗
 * │   └── State Compression 🧩
 * │
 * └── 4️⃣ Strategy Level
 *     ├── Subproblem Identification 🤔
 *     │   └── What parameters define your state?
 *     │
 *     ├── State Transition 🧾
 *     │   └── How does one state lead to another?
 *     │
 *     ├── Base Cases ⚙️
 *     │   └── What is the smallest input where answer is known?
 *     │
 *     └── Final Goal 🎯
 *         └── Where is the final result? Last cell? Max over table?
 */

/**
 * ===================================================================================
 * 📌 RELATIONSHIP OF CORE APPROACHES
 * ===================================================================================
 *
 * 🔁 Recursion
 *    - Base of all DP. Inefficient unless optimized.
 *
 * 🧠 Top-Down DP (Memoization)
 *    - Recursion + Cache
 *    - Pros: Easy to write, intuitive
 *    - Cons: Uses call stack (O(n) space)
 *
 * 📊 Bottom-Up DP (Tabulation)
 *    - Iterative DP table
 *    - Pros: Efficient, often space-optimal
 *    - Cons: Needs careful setup of base cases and order
 *
 * 🔄 Space Optimization
 *    - Applicable to Bottom-Up if only previous values are needed
 */

/**
 * ===================================================================================
 * 💡 When to Use What?
 * ===================================================================================
 *
 * ✅ Use Top-Down (Memoization) when:
 *    - You think recursively
 *    - Problem has many overlapping subproblems
 *    - Simpler code is preferred
 *
 * ✅ Use Bottom-Up (Tabulation) when:
 *    - You want max performance and minimal stack usage
 *    - You want to print tables or reconstruct paths
 *
 * ✅ Use Space Optimization when:
 *    - Only previous 1 or 2 states matter (Fibonacci, 1D knapsack)
 */
