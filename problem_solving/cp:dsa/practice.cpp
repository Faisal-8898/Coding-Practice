#include <bits/stdc++.h>

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

/* #define FOR(i, a, b) for (int i = a; i < b; ++i) */
#define REP(i, n) FOR(i, 0, n)
#define REV(i, a, b) for (int i = a; i >= b; --i)
#define REPR(i, n) REV(i, n - 1, 0)

void fastIO() {
  ios_base::sync_with_stdio(0);
  cin.tie(0);
}

bool compare(const int &a, const int &b) { return a < b; }

int main() {
  fastIO();
  int t;
  cin >> t;
  while (t--) {
    int n, k;
    cin >> n >> k;
    int e = 2 * n;
    int p = 2 * k;
    vector<int> arr(e);
    vector<int> ans1, ans2;
    map<int, int> mp1, mp2;

    for (int i = 0; i < e; i++) {
      cin >> arr[i];
    }

    for (int i = 0; i < n; i++) {
      mp1[arr[i]]++;
      if (mp1[arr[i]] == 2) {
        ans1.push_back(arr[i]);
        ans1.push_back(arr[i]);
      }
    }

    for (int i = n; i < e; i++) {
      mp2[arr[i]]++;
      if (mp2[arr[i]] == 2) {
        ans2.push_back(arr[i]);
        ans2.push_back(arr[i]);
      }
    }

    int s = ans1.size();
    int s2 = ans2.size();

    if (s >= p || s2 >= p) {
      while (s > p) {
        ans1.pop_back();
        s--;
      }
      while (s2 > p) {
        ans2.pop_back();
        s2--;
      }
    } else {
      for (auto element : mp1) {
        if (s == p) {
          break;
        }
        if (element.second == 1 && mp2[element.first] == 1) {
          ans1.push_back(element.first);
          ans2.push_back(element.first);
          s++;
        }
      }
    }

    for (auto ele : ans1) {
      cout << ele << " ";
    }
    cout << "\n";
    for (auto ele : ans2) {
      cout << ele << " ";
    }
    cout << "\n";
  }
}
