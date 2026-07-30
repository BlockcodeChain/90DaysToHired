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
     
int arr[]={1,2,3,4,5,6};
int size= sizeof(arr)/sizeof(arr[0]);
    Node* Head=NULL;
    for(int i=0;i<size;i++){
    if(Head==NULL){
        Head=new Node(arr[i]);
    }
    else {
        Node* temp;
        temp =new Node(arr[i]);
        temp->next=Head;
        Head=temp;
    }
}
     Node* temp=Head;
     while(temp){
       cout<<temp->value<<" ";
       temp=temp->next;
     }

  

    return 0;
}