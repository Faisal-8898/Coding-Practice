#include <iostream>
#include <map>
using namespace std;
int main()
{ 
    string str;
    map<char, long int> mp;
    long int maxx = 1;
    cin >> str;
    for (long int i = 0; i < str.length(); i++)
    {
        mp[str[i]] = 1;
        while (i + 1 < str.length() && str[i] == str[i + 1])
        {
            mp[str[i]]++;
            i++;
        }
        maxx = max(maxx, mp[str[i]]);
    }
    cout << maxx;
}
