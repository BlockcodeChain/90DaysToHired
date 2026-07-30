#include<iostream>
using namespace std;

class Node{
public:
    int value;
    Node* next;

    Node(int n){
        value = n;
        next = NULL;
    }
};

int main(){
     

    Node* Head;
    if(Head==NULL){
        Head=new Node(28);
    }
    else {
        Node* temp;
        temp =new Node(50);
        temp->next=Head;
        Head=temp;
    }
      cout<<temp->value<<" ";

  

    return 0;
}