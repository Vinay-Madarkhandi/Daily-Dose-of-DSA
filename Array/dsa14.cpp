#include <iostream>
using namespace std ;

int main(){
  int n,m,a;
  cin >> n,m,a;
  
  int ans = ((m+a-1)/a) *  ((n+a-1)/a);
    cout << ans;
 return 0;
}
