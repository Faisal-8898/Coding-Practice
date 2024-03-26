#include <algorithm>
#include <bitset>
#include <cassert>
#include <climits>
#include <cmath>
#include <cstdio>
#include <cstring>
#include <functional>
#include <iomanip>
#include <iostream>
#include <map>
#include <numeric>
#include <queue>
#include <set>
#include <stack>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;

#define INF 1e9
#define MOD 1000000007
#define ll long long
#define vi vector<int>
#define vl vector<ll>
#define pii pair<int, int>
#define pll pair<ll, ll>
#define pb push_back
#define mp make_pair
#define all(x) x.begin(), x.end()
#define F first
#define S second

#define FOR(i, a, b) for (int i = a; i < b; ++i)
#define REP(i, n) FOR(i, 0, n)
#define REV(i, a, b) for (int i = a; i >= b; --i)
#define REPR(i, n) REV(i, n - 1, 0)

const int N = 1e6 + 10;
int n;
ll m;
ll trees[N];

void fastIO() {
  ios_base::sync_with_stdio(0);
  cin.tie(0);
}

bool compare(const int &a, const int &b) { return a < b; }

bool isWoodSufficient(int h) {
  ll sum = 0;
  for (int i = 0; i < n; i++) {
    if (trees[i] >= h) {
      sum = sum + (trees[i] - h);
    }
  }
  return sum >= m;
}

int main() {
  fastIO();
  cin >> n >> m;

  for (int i = 0; i < n; i++) {
    cin >> trees[i];
  }
  ll low = 0, high = 1e9, mid;
  while (high - low > 1) {
    mid = low + (high - low) / 2;
    if (isWoodSufficient(mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  if (isWoodSufficient(high)) {
    cout << high;
  } else {
    cout << low;
  }
  /* cout << high << endl; */
}
