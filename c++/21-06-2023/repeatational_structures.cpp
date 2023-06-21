#include<iostream>
using namespace std;

int main(){
   int i = 1;
   int num;

   cout<<"Hello My Name is John, Please Tell me what number's table you want to print? "<<endl<<endl;    
   
   cin>>num;
   
   while (i<11) // condition
   {
    // body
    cout<<num<<" x "<<i<<" = "<< num*i  <<endl;    
   
    // increment/decrement
    i = i +1;
   }
   
   cout<<endl<<endl<<endl;
   return 0;


   // ## Assignment
   // understand, while, do-while, for loop, stat there differances
   
}