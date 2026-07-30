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

    Node* node1 = new Node(1);
    Node* node2 = new Node(4);

    // Linking node1 -> node2
    node1->next = node2;

    cout << "Node1 Value: " << node1->value << endl;
    cout << "Node2 Value: " << node2->value << endl;

    cout << "Address stored in node1->next: " << node1->next << endl;
    cout << "Actual address of node2:      " << node2 << endl;

    cout << "Value through next pointer: " << node1->next->value << endl;

    return 0;
}